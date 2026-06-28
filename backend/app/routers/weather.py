from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session
from fastapi.responses import FileResponse

from app.services.export_service import export_csv


from app.services.weather_service import (
    fetch_weather,
    fetch_forecast,
)

from app.database.db import get_db

from app.schemas.weather import (
    WeatherCreate,
    WeatherUpdate,
)

from app.crud import (
    create_weather,
    get_all_weather,
    get_weather,
    update_weather,
    delete_weather,
)

router = APIRouter(
    prefix="/weather",
    tags=["Weather"],
)


@router.post("/")
def create_weather_record(
    request: WeatherCreate,
    db: Session = Depends(get_db),
):
    try:
        weather = fetch_weather(request.city)
    except Exception as e:
        raise HTTPException(
            status_code=503,
            detail=str(e),
        )

    if weather is None:
        raise HTTPException(
            status_code=404,
            detail="City not found",
        )

    return create_weather(db, weather)

@router.get("/")
def read_all_weather(
    db: Session = Depends(get_db),
):
    return get_all_weather(db)


@router.get("/forecast/{city}")
def get_forecast(city: str):
    try:
        forecast = fetch_forecast(city)
    except Exception as e:
        raise HTTPException(
            status_code=503,
            detail=str(e),
        )

    if forecast is None:
        raise HTTPException(
            status_code=404,
            detail="City not found",
        )

    return forecast


@router.get("/{weather_id}")
def read_weather_by_id(
    weather_id: int,
    db: Session = Depends(get_db),
):
    weather = get_weather(db, weather_id)

    if weather is None:
        raise HTTPException(
            status_code=404,
            detail="Weather record not found",
        )

    return weather


@router.put("/{weather_id}")
def update_weather_record(
    weather_id: int,
    request: WeatherUpdate,
    db: Session = Depends(get_db),
):
    updated = update_weather(
        db,
        weather_id,
        request.model_dump(exclude_unset=True),
    )

    if updated is None:
        raise HTTPException(
            status_code=404,
            detail="Weather record not found",
        )

    return updated


@router.delete("/{weather_id}")
def delete_weather_record(
    weather_id: int,
    db: Session = Depends(get_db),
):
    deleted = delete_weather(db, weather_id)

    if not deleted:
        raise HTTPException(
            status_code=404,
            detail="Weather record not found",
        )

    return {
        "message": "Weather record deleted successfully"
    }



@router.get("/export/csv")
def download_csv(
    db: Session = Depends(get_db),
):

    filename = export_csv(db)

    return FileResponse(
        path=filename,
        filename=filename,
        media_type="text/csv",
    )
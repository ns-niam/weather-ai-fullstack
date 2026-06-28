from fastapi import FastAPI

from app.database.db import Base
from app.database.db import engine

from app.routers.weather import router as weather_router

app = FastAPI(
    title="Weather Intelligence API",
    version="1.0.0",
)

Base.metadata.create_all(bind=engine)

app.include_router(weather_router)


@app.get("/")
def root():
    return {
        "message": "Weather Intelligence API Running"
    }
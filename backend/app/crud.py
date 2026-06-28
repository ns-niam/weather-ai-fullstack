from sqlalchemy.orm import Session

from app.models.weather import Weather


def create_weather(db: Session, data: dict):
    weather = Weather(**data)

    db.add(weather)
    db.commit()
    db.refresh(weather)

    return weather


def get_all_weather(db: Session):
    return (
        db.query(Weather)
        .order_by(Weather.searched_at.desc())
        .all()
    )


def get_weather(db: Session, weather_id: int):
    return (
        db.query(Weather)
        .filter(Weather.id == weather_id)
        .first()
    )


def update_weather(db: Session, weather_id: int, data: dict):
    weather = get_weather(db, weather_id)

    if weather is None:
        return None

    for key, value in data.items():
        if value is not None:
            setattr(weather, key, value)

    db.commit()
    db.refresh(weather)

    return weather


def delete_weather(db: Session, weather_id: int):
    weather = get_weather(db, weather_id)

    if weather is None:
        return False

    db.delete(weather)
    db.commit()

    return True
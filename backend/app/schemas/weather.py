from datetime import datetime
from pydantic import BaseModel


class WeatherCreate(BaseModel):
    city: str


class WeatherUpdate(BaseModel):
    temperature: float | None = None
    humidity: float | None = None
    wind_speed: float | None = None


class WeatherResponse(BaseModel):
    id: int
    city: str
    country: str
    latitude: float
    longitude: float
    temperature: float
    humidity: float
    wind_speed: float
    weather_code: int
    searched_at: datetime

    class Config:
        from_attributes = True
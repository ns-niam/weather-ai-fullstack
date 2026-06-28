from sqlalchemy import Column
from sqlalchemy import Integer
from sqlalchemy import Float
from sqlalchemy import String
from sqlalchemy import DateTime

from datetime import datetime

from app.database.db import Base


class Weather(Base):

    __tablename__ = "weather"

    id = Column(Integer, primary_key=True, index=True)

    city = Column(String)

    country = Column(String)

    latitude = Column(Float)

    longitude = Column(Float)

    temperature = Column(Float)

    humidity = Column(Float)

    wind_speed = Column(Float)

    weather_code = Column(Integer)

    searched_at = Column(DateTime, default=datetime.utcnow)
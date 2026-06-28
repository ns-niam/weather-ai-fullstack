from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.database.db import Base
from app.database.db import engine

from app.routers.weather import router as weather_router

app = FastAPI(
    title="Weather Intelligence API",
    version="1.0.0",
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "https://scaling-adventure-x5p9w55qg477cvq99-3000.app.github.dev",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


Base.metadata.create_all(bind=engine)

app.include_router(weather_router)


@app.get("/")
def root():
    return {
        "message": "Weather Intelligence API Running"
    }
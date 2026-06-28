import requests
from app.config import OPENWEATHER_API_KEY

CURRENT_WEATHER_URL = "https://api.openweathermap.org/data/2.5/weather"
FORECAST_URL = "https://api.openweathermap.org/data/2.5/forecast"

def fetch_weather(city: str):
    city = city.strip()

    try:
        response = requests.get(
            CURRENT_WEATHER_URL,
            params={
                "q": city,
                "appid": OPENWEATHER_API_KEY,
                "units": "metric",
            },
            timeout=10,
        )

        if response.status_code == 404:
            return None

        response.raise_for_status()

        data = response.json()

        return {
            "city": data["name"],
            "country": data["sys"]["country"],
            "latitude": data["coord"]["lat"],
            "longitude": data["coord"]["lon"],
            "temperature": data["main"]["temp"],
            "humidity": data["main"]["humidity"],
            "wind_speed": data["wind"]["speed"],
            "weather_code": data["weather"][0]["id"],
        }

    except requests.exceptions.Timeout:
        raise Exception("Weather service timeout. Please try again.")

    except requests.exceptions.RequestException as e:
        raise Exception(f"Weather API Error: {e}")
    

def fetch_forecast(city: str):
    response = requests.get(
        FORECAST_URL,
        params={
            "q": city,
            "appid": OPENWEATHER_API_KEY,
            "units": "metric",
        },
        timeout=10,
    )

    if response.status_code == 404:
        return None

    response.raise_for_status()

    data = response.json()

    forecast = []

    # প্রতি ২৪ ঘণ্টা পরপর একটি entry (3-hour interval × 8 = 24h)
    for item in data["list"][::8]:
        forecast.append({
            "date": item["dt_txt"],
            "temperature": item["main"]["temp"],
            "humidity": item["main"]["humidity"],
            "weather": item["weather"][0]["main"],
            "icon": item["weather"][0]["icon"],
        })

    return forecast    
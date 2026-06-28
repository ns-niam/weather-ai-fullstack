import pandas as pd

from app.crud import get_all_weather


def export_csv(db):

    weather = get_all_weather(db)

    rows = []

    for item in weather:
        rows.append({
            "City": item.city,
            "Country": item.country,
            "Temperature": item.temperature,
            "Humidity": item.humidity,
            "Wind Speed": item.wind_speed,
            "Latitude": item.latitude,
            "Longitude": item.longitude,
            "Date": item.searched_at,
        })

    df = pd.DataFrame(rows)

    filename = "weather_export.csv"

    df.to_csv(filename, index=False)

    return filename
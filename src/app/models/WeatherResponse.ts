import { Observable } from "rxjs"
import { PrayerTime } from "./PrayerTime"

export interface WeatherResponse {
  latitude?: number,
  longitude?: number,
  location?: string,
  state?: string,
  background?: string,
  prayer_time$?: Observable<PrayerTime>,
  generationtime_ms?: number,
  utc_offset_seconds?: number,
  timezone?: string,
  timezone_abbreviation?: string,
  elevation?: number,
  current_units?: {
    time?: string,
    interval?: string,
    temperature_2m?: string,
    relative_humidity_2m?: string,
    is_day?: string,
    precipitation?: string,
    weather_code?: string,
    wind_speed_10m?: string,
    wind_direction_10m?: string
  },
  current?: {
    time?: string,
    interval?: number,
    temperature_2m?: number,
    relative_humidity_2m?: number,
    is_day?: number,
    precipitation?: number,
    weather_code?: number,
    wind_speed_10m?: number,
    wind_direction_10m?: number
  },
  hourly_units?: {
    time?: string,
    precipitation_probability?: string,
    weather_code?: string,
    is_day?: string
  },
  hourly?: {
    time?: string[],
    precipitation_probability?: number[],
    weather_code?: number[],
    is_day?: number[]
  }
}
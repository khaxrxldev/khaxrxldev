import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WeatherResponse } from '../models/WeatherResponse';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private httpClient: HttpClient) {}

  getWeather(latitude: number, longitude: number): Observable<WeatherResponse> {
    return this.httpClient.get(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,relative_humidity_2m,is_day,precipitation,weather_code,wind_speed_10m,wind_direction_10m&hourly=precipitation_probability,weather_code,is_day&forecast_days=1`);
  }
}

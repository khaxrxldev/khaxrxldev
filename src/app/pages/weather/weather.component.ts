import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { WeatherResponse } from 'src/app/models/WeatherResponse';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers$: Observable<WeatherResponse>[] = [];

  constructor(private weatherService: WeatherService) {}

  coordinates = [
    {
      lat: 3.14809,
      long: 101.70147,
      location: 'Pudu',
      state: 'Kuala Lumpur',
      background: ''
    }, {
      lat: 3.08561,
      long: 101.69121,
      location: 'Kuchai',
      state: 'Kuala Lumpur',
      background: ''
    }, {
      lat: 3.05136,
      long: 101.62444,
      location: 'Puchong jaya',
      state: 'Selangor',
      background: ''
    }, {
      lat: 2.98284,
      long: 101.62377,
      location: 'Bukit puchong',
      state: 'Selangor',
      background: ''
    }, {
      lat: 2.92131,
      long: 101.65652,
      location: 'Cyberjaya',
      state: 'Selangor',
      background: ''
    }
  ]

  ngOnInit(): void {
    this.coordinates.forEach(coordinate => {
      this.weathers$?.push(this.weatherService.getWeather(coordinate.lat, coordinate.long).pipe(
        map((data) => {
          data.location = coordinate.location;
          data.state = coordinate.state;
          data.background = coordinate.background;
          return data;
        })
      ));
    });
  }
  
  exceedCurrentTime(time: string) {
    let currentDate = new Date();
    let date = new Date(time);

    return date.getHours() >= currentDate.getHours();
  }

  isDay(time: string) {
    let date = new Date(time);
    
    return date.getHours() >= 7 && date.getHours() <= 18;
  }

  windDirection(angle: number) {
    const directions = ['N', 'NE', 'E', 'SE', 'S', 'SW', 'W', 'NW'];
    return directions[Math.round(angle / 45) % 8];
  }
}
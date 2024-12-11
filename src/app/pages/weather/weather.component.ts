import { Component, OnInit } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PrayerTime } from 'src/app/models/PrayerTime';
import { WeatherResponse } from 'src/app/models/WeatherResponse';
import { PrayerTimeService } from 'src/app/services/prayer-time.service';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  weathers$: Observable<WeatherResponse>[] = [];

  constructor(private weatherService: WeatherService, private prayerTimeService: PrayerTimeService) {}

  coordinates = [
    {
      lat: 3.14809,
      long: 101.70147,
      location: 'Pudu',
      state: 'Kuala Lumpur',
      background: '',
      zone: 'WLY01'
    }, {
      lat: 3.08561,
      long: 101.69121,
      location: 'Kuchai',
      state: 'Kuala Lumpur',
      background: '',
      zone: 'WLY01'
    }, {
      lat: 3.05136,
      long: 101.62444,
      location: 'Puchong jaya',
      state: 'Selangor',
      background: '',
      zone: 'SGR01'
    }, {
      lat: 2.98284,
      long: 101.62377,
      location: 'Bukit puchong',
      state: 'Selangor',
      background: '',
      zone: 'SGR01'
    }, {
      lat: 2.92131,
      long: 101.65652,
      location: 'Cyberjaya',
      state: 'Selangor',
      background: '',
      zone: 'SGR01'
    }
  ]

  ngOnInit(): void {
    this.coordinates.forEach(coordinate => {
      this.weathers$?.push(this.weatherService.getWeather(coordinate.lat, coordinate.long).pipe(
        map((data) => {
          data.location = coordinate.location;
          data.state = coordinate.state;
          data.background = coordinate.background;
          data.zone_code = coordinate.zone;
          data.prayer_time$ = this.getPrayerTime(coordinate.zone);
          
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

  getPrayerTime(zoneCode: string): Observable<PrayerTime> {
    return this.prayerTimeService.getPrayerTime(zoneCode).pipe(
      map(response => {
        const todayDate = new Date();
        const todayDay = todayDate.getDate();

        const todayPrayerTime = response.prayers.find(prayer => prayer.day === todayDay);

        return todayPrayerTime || this.getDefaultPrayerTime();
      })
    );
  }

  private getDefaultPrayerTime(): PrayerTime {
    return {}
  }
}
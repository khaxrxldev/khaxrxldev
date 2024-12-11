import { Component } from '@angular/core';
import { map, Observable } from 'rxjs';
import { PrayerTime } from 'src/app/models/PrayerTime';
import { PrayerTimeService } from 'src/app/services/prayer-time.service';

@Component({
  selector: 'app-prayer-time',
  templateUrl: './prayer-time.component.html',
  styleUrls: ['./prayer-time.component.css']
})
export class PrayerTimeComponent {
  zoneCode: string = 'WLY01';
  zoneCodeList: string[] = ['SGR01', 'SGR02', 'SGR03', 'WLY01'];
  prayerTime$!: Observable<PrayerTime>;

  constructor(private prayerTimeService: PrayerTimeService) {}

  ngOnInit(): void {
    this.getPrayerTime(this.zoneCode);
  }

  private getPrayerTime(zoneCode: string) {
    this.prayerTime$ = this.prayerTimeService.getPrayerTime(zoneCode).pipe(
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

  public setZoneCode(zoneCode: string) {
    this.zoneCode = zoneCode;
    this.getPrayerTime(this.zoneCode);
  }
}

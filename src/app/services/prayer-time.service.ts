import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PrayerTimeResponse } from '../models/PrayerTimeResponse';

@Injectable({
  providedIn: 'root'
})
export class PrayerTimeService {

  constructor(private httpClient: HttpClient) { }

  getPrayerTime(zone: string): Observable<PrayerTimeResponse> {
    return this.httpClient.get<PrayerTimeResponse>(`https://api.waktusolat.app/v2/solat/${zone}`);
  }
}

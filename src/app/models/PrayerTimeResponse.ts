import { PrayerTime } from "./PrayerTime";

export interface PrayerTimeResponse {
  zone: string,
  year: number,
  month: string,
  last_updated: string,
  prayers: PrayerTime[]
}
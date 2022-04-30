export class Date {
  constructor(
    public date_id: number,
    public date_utc: string,
    public time_utc: string,
    public weekday: string,
  ) {}
}
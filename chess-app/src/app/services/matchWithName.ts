export class MatchWithName {
  constructor(
    public date_utc: string,
    public time_utc: string,
    public turns: string,
    public termination: string,
    public winner: string,
    public black_id: string,
    public white_id: string,
    public opening_name: number,
    public event_name: number,
    public time_control: string,
    public match_id: number
  ) {}
}
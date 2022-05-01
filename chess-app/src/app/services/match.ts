export class Match {
  constructor(
    public date_id: string,
    public turns: string,
    public termination: string,
    public winner: string,
    public black_id: string,
    public white_id: string,
    public opening_id: number,
    public event_id: number,
    public time_control: string,
    public match_id: number
  ) {}
}
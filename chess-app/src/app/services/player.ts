export class Player {
  constructor(
    public player_id: string,
    public title: string,
    public elo: string,
    public games_played: number,
    public games_won: number,
  ) {}
}
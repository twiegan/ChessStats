import { MatchWithName } from "./matchWithName";

export class FollowedPlayers {
    constructor (
        public player_id: string,
        public matches: MatchWithName[]
    ) {}
}
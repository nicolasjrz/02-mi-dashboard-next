// Generated by https://quicktype.io

export interface PokemonResponse {
    count:    number;
    next:     null;
    previous: null;
    results:  Result[];
}

export interface Result {
    name: string;
    url:  string;
}
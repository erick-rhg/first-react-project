export interface PokemonBasic {
    name: string;
    url: string
}

export interface Pokemon {
    id: number;
    name: string;
    image: string;
    type: string;
}

export interface PokemonApiResponse {
    results: PokemonBasic[];
}
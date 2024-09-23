export interface Film {
  title: string;
  episode_id: number;
  opening_crawl: string;
  director: string;
  producer: string;
  release_date: string;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: string;
  edited: string;
  url: string;
}

export interface FilmsDataResponse {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Film[];
  };
}
export interface Character {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starships: string[];
  created: string;
  edited: string;
  url: string;
}

export interface CharactersDataResponse {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Character[];
  };
}
export interface CharacterDataResponse {
  data: Character;
}
export interface Starship {
  id: number;
  name: string;
  model: string;
  manufacturer: string;
  cost_in_credits: string;
  length: string;
  max_atmosphering_speed: string;
  crew: string;
  passengers: string;
  cargo_capacity: string;
  consumables: string;
  hyperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: number[];
  films: string[];
  created: string;
  edited: string;
  url: string;
}

export interface StarshipListResponse {
  data: {
    count: number;
    next: string | null;
    previous: string | null;
    results: Starship[];
  };
}
export interface StarShipNode {
  id: string;
  data: {
    label: string;
  };
  position: { x: number; y: number };
}
export interface StarShipEdge {
  id: string;
  source: string;
  target: string;
}
export interface FlowTreeProps {
  character: Character;
  films: Film[];
  starWarsShips: Starship[];
}
export interface PageProps {
  params: {
    slug: string;
  };
}
export type If<F extends boolean, S, T> = F extends true ? S : T;

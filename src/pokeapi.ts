import {Cache} from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2/";
    private cache = new Cache(300000);

    constructor() {}

    async #request(url: string): Promise<any> {
        if (this.cache.get(url)) {
            return this.cache.get(url);
        } else {
            const response = await fetch(url);
            const data = await response.json();
            this.cache.add(url, data);
            return data;
        }
    }

    async fetchLocations(url: string | null): Promise<ShallowLocations> {
        const fullURL = url ?? `${PokeAPI.baseURL}location-area/`;
        return this.#request(fullURL);
    }

    async exploreLocation(locationName: string): Promise<any> {
        const fullURL = `${PokeAPI.baseURL}location-area/${locationName}`;
        return this.#request(fullURL);
    }

    async fetchPokemon(pokemon: string): Promise<Pokemon> {
        const fullURL = `${PokeAPI.baseURL}pokemon-species/${pokemon}`;
        return this.#request(fullURL);
    }
}

export type ShallowLocations = {
    count: number;
    next: string | null;
    previous: string | null;
    results: Location[];
}

export type Location = {
    name: string;
    url: string;
}

export type Pokemon = {
    name: string;
    url: string;
    capture_rate: number;
}
import {Cache} from "./pokecache.js";

export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2/";
    private cache = new Cache(300000);

    constructor() {}

    async fetchLocations(url: string | null): Promise<ShallowLocations> {
        const fullURL = url ?? `${PokeAPI.baseURL}location-area/`;
        if (this.cache.get(fullURL)) {
            return this.cache.get(fullURL)?.val;
        } else {
            const response = await fetch(fullURL);
            const data = await response.json();
            this.cache.add(fullURL, data);
            return data;
        }
    }

    async exploreLocation(locationName: string): Promise<any> {
        const fullURL = `${PokeAPI.baseURL}location-area/${locationName}`;
        if (this.cache.get(fullURL)) {
            return this.cache.get(fullURL)?.val;
        } else {
            const response = await fetch(fullURL);
            const data = await response.json();
            this.cache.add(fullURL, data);
            return data;
        }
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
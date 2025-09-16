export class PokeAPI {
    private static readonly baseURL = "https://pokeapi.co/api/v2/";

    constructor() {}

    async fetchLocations(index: number): Promise<ShallowLocations> {
        const locations: ShallowLocations = {locations: []};
        const fullURL = `${PokeAPI.baseURL}location-area/`;
        for (let i = index; i < index + 20; i++) {
            locations.locations.push(await this.fetchLocation(`${fullURL}${i}`));
        }
        return locations;
    }

    async fetchLocation(locationName: string): Promise<Location> {
        const response = await fetch(locationName);
        return {details: await response.json()};
    }
}

export type ShallowLocations = {
    locations: Location[];
}

export type Location = {
    details: Record<string, unknown>;
}
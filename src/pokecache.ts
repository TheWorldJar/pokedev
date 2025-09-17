export type CacheEntry<T> = {
    createdAt: number;
    val: T;
}

export class Cache {
    #cache = new Map<string, CacheEntry<any>>();
    #reapIntervalId: NodeJS.Timeout | undefined = undefined;
    #interval: number;

    constructor(interval: number) {
        this.#interval = interval;
        this.#startReapLoop()
    }

    add<T>(key: string, val: T) {
        const entry = {createdAt: Date.now(), val: val};
        this.#cache.set(key, entry);
    }

    get(key: string): CacheEntry<any> | undefined {
        return this.#cache.get(key);
    }

    #reap(cache: Cache) {
        cache.#cache.forEach((value: CacheEntry<any>, key: string) => {
            if (Date.now() - cache.#interval > value.createdAt) {
                cache.#cache.delete(key);
            }
        })
    }

    #startReapLoop() {
        this.#reapIntervalId = setInterval(this.#reap, this.#interval, this);
    }

    stopReapLoop() {
        clearInterval(this.#reapIntervalId);
    }
}
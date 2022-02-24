export function* searchGenerator(key: string, chain: Array<any>) {
    for (let block in chain) {
        if (chain[block].data.key === key) {
            yield chain[block];
        }
    }
    yield false;
}

export function* iteratorGenerator(chain: Array<any>) {
    for (let block in chain) {
        yield chain[block];
    }
    yield false;
}

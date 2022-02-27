import { HashTable } from '../hashTable';

describe('HashTable', () => {
    let hashTable = HashTable.createHT();

    it('create a new Hash table', () => {
        expect(hashTable).toBeTruthy();
    });

    it('add a new node to the Hash table', () => {
        expect(hashTable.add({ key: 'kernel', value: 'linux' })).toBeTruthy();
        expect(hashTable.add({ key: 'distro', value: 'Ubuntu' })).toBeTruthy();
        expect(hashTable.add({ key: 'distro', value: 'Arch' })).toBeTruthy();
    });

    it('remove a node from the Hash table', () => {
        expect(hashTable.remove('distro')).toBeTruthy();
    });

    it('update a node in the Hash table', () => {
        expect(hashTable.update('kernel', 'Linux')).toBeTruthy();
    });

    it('get a node from the Hash table', () => {
        expect(hashTable.get('kernel')).toEqual({ key: 'kernel', value: 'Linux' });
    });

    it('Iterator', () => {
        hashTable = HashTable.createHT();

        let iterator = hashTable.iterator();
        expect(iterator.next()).toEqual({ value: false, done: false });

        hashTable.add({ key: 'hello', value: 'Hello Universe' });
        hashTable.add({ key: 'apple', value: 'Apple Inc.' });

        iterator = hashTable.iterator();
        let iteratorNext = iterator.next();
        while (iteratorNext.value) {
            expect(iteratorNext.value).toBeTruthy();
            iteratorNext = iterator.next();
        }
    });
});

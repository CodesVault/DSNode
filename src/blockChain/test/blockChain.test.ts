import { BlockChain } from '../blockChain';

describe('BlockChain', () => {
    let blockChain = BlockChain.createBlockChain();

    it('create a new BlockChain', () => {
        expect(blockChain).toBeTruthy();
        expect(blockChain.length).toBe(0);
    });

    it('create a new Block', () => {
        expect(blockChain.createBlock({ key: 'hello', value: 'Hello Universe' })).toBeTruthy();
        expect(blockChain.createBlock({ key: 'array', value: [1, 2, 3] })).toBeTruthy();

        expect(blockChain.length).toBe(2);
    });

    it('search a Block', () => {
        expect(blockChain.search('sourav')).toBeFalsy();
        expect(blockChain.search('array')).toBe(blockChain.latestBlock());
        expect(blockChain.search(null, 2)).toBe(blockChain.latestBlock());
    });

    it('Iterator', () => {
        blockChain = BlockChain.createBlockChain();

        let iterator = blockChain.iterator();
        expect(iterator.next()).toEqual({ value: false, done: false });

        blockChain.createBlock({ key: 'hello', value: 'Hello Universe' });
        blockChain.createBlock({ key: 'apple', value: 'Apple Inc.' });

        iterator = blockChain.iterator();
        let iteratorNext = iterator.next();
        while (iteratorNext.value) {
            expect(iteratorNext.value).toBeTruthy();
            iteratorNext = iterator.next();
        }
    });

    it('Check block validation', () => {
        expect(blockChain.checkValidation()).toBeTruthy();
    });
});

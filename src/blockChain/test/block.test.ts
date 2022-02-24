import { BlockChain } from '../blockChain';
// import { BlockChain } from "https://deno.land/x/datastructure/mod.ts";

describe('SinglyLinkedList', () => {
    const blockChain = BlockChain.createBlockChain();

    it('create a new Singly LL', () => {
        expect(blockChain).toBeTruthy();
        expect(blockChain.createBlock({ key: 'sourav', value: 'Sourav' })).toBeTruthy();
    });

    // blockChain.createBlock({ key: 'sourav', value: "Sourav" })
    // blockChain.createBlock({ key: 'abm', value: "AbmSourav" })
    // blockChain.createBlock({ key: 'apple', value: "Apple Inc." })

    // const iterator = blockChain.iterator()
    // let iteratorNext = iterator.next()
    // console.log(iterator.next(), iterator.next());
    // while (iteratorNext.done === false) {
    // 	console.log(iteratorNext.value);
    // 	iteratorNext = iterator.next()
    // }

    // console.log(blockChain.latestBlock());

    // blockChain.latestBlock().data.key = '1'
    // console.log(blockChain.checkValidation());

    blockChain.log(null, 3);
    // console.log(blockChain.search('sourav'))
    // console.log(blockChain.length)
});

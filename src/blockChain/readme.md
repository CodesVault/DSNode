## BlockChain Api

<br>

```ts
// Each block type
type BlockType = {
	index: number
	data: DataType<any>
	time: Date
	hash: string
	prevHash: null|string
}

// data type
DataType<T> = {
	key: string
	value: T
}

// static method that creates a instance of `BlockChain` class.
BlockChain.createBlockChain()

// Time Complexity: O(1)
length: number;

// *generator function, it returens an iterator.
// loop through all blocks in the chain
iterator(): Generator

// Time Complexity: O(n)
// check for "the blockChain is corrupted/manipulated or valid". 
checkValidation(): boolean

// Time Complexity: O(1)
createBlock(data: DataType<any>): boolean

// Time Complexity: O(1)
latestBlock(): boolean|BlockType

// Time Complexity:
//  log all: O(n)
//  log by key: O(n)
//  log by index: O(1)
log(key: null|string = null, index: null|number = null): void;

// Time Complexity: 
//  search by key: O(n)
//  search by index: O(1)
search(key: null|string, index: null|number = null): boolean|BlockType

```

<br>
<br>

## Examples
```ts
import { BlockChain } from "@codes.vault/dsnode";

const blockChain = BlockChain.createBlockChain()

// iterator method returns a *generator function
const iterator = blockChain.iterator()
let iteratorNext = iterator.next()
// console.log(iteratorNext.next(), iteratorNext.next());
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}

// length or count of total blocks.
blockChain.length

// create a new block in the blockChain.
blockChain.createBlock({key: 'sourav', value: {name: "Sourav"}})
blockChain.createBlock({key: 'abm', value: "AbmSourav"})
blockChain.createBlock({key: 'JS', value: ['JS', 'TS']})

// check is the hash chain is valid 
blockChain.checkValidation()

// get latest created block
blockChain.latestBlock()

// console all values
blockChain.log()
// console the block that has key: 'abm'
blockChain.log('abm')
// console then block which is index: 3
blockChain.log(null, 3)

// searching block by key
blockChain.search('JS')
// searching block by index
blockChain.search(null, 2)

```

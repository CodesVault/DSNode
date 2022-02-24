# DSNode

Create different DataStructures using simple APIs.
API available in TypeScript & JavaScript[ES6].

<br>
<br>

## Examples
```ts
// ** create stack
const stack = Stack.createStack()

// add data in the stack
stack.push({key: 'a', value: 'apple'})
stack.push({key: 'b', value: {name: 'AbmSourav'}})

// search in the stack by key
stack.search('a');

// ** create a queue
const queue = Queue.createQueue()
queue.enqueue({key: 'a', value: [1, 2, 5]})
queue.enqueue({key: 'sourav', value: {name: "Sourav"}})

// remove item
queue.dequeue()

// iterator method returns a *generator function
const iterator = queue.iterator()
let iteratorNext = iterator.next()
while (iteratorNext.done === false) {
	console.log(iteratorNext.value);
	iteratorNext = iterator.next()
}
```

<br>

## List of Data Structures:

* BlockChain -- **[Documentation](https://github.com/CodesVault/DSNode/tree/main/src/blockChain#blockchain-api)**
* Doubly LinkedList -- **[Documentation](https://github.com/CodesVault/DSNode/tree/main/src/linkedList/doubly#doubly-linked-list-api)**
* Singly LinkedList -- **[Documentation](https://github.com/CodesVault/DSNode/tree/main/src/linkedList/singly#singly-linked-list-api)**
* Stack  --  **[Documentation](https://github.com/CodesVault/DSNode/tree/main/src/stack#stack-api)**
* Queue  --  **[Documentation](https://github.com/CodesVault/DSNode/tree/main/src/queue#queue-api)**

<br>

## Contribution Guidelines
**Developer [Wiki](https://github.com/CodesVault/DSNode/wiki/Contribution-guidelines)**

<br>

.

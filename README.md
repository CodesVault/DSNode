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

* Stack  --  **[Documentation](https://github.com/CodesVault/DSNode/tree/main/src/stack)**
* Queue  --  **[Documentation](https://github.com/CodesVault/DSNode/tree/main/src/queue)**

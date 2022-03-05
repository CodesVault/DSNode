import { SinglyLinkedListApi, NodeType } from '../../types/singlyTypes.js';
import { DataType } from '../../types/dataTypes.js';
import { SinglyNode } from './singlyNode';
import { addGenerator, updateGenerator, searchGenerator, iteratorGenerator } from './generators';

export class SinglyLinkedList implements SinglyLinkedListApi {
    #head: null | NodeType;
    #tail: null | NodeType;
    public size: number;

    constructor() {
        this.#head = null;
        this.#tail = null;
        this.size = 0;
    }

    static createSL() {
        return new this();
    }

    // insert in the head
    prepend(data: DataType<any>) {
        if (!data.key || !data.value) {
            console.error(
                'Invalid data type, must be an object with `key` and `value` properties. Check `DataType` in documentation.',
            );
            return false;
        }

        if (this.#head === null) {
            const newNode = new SinglyNode(data);
            this.#head = newNode;
            this.#tail = newNode;
            this.size++;
            return true;
        }

        const currentNode = this.#head;
        this.#head = new SinglyNode(data);
        this.#head.next = currentNode;
        if (currentNode.next === null) {
            this.#tail = currentNode;
        }
        this.size++;

        return true;
    }

    // inset in the tail
    append(data: DataType<any>) {
        if (!data.key || !data.value) {
            console.error(
                'Invalid data type, must be an object with `key` and `value` properties. Check `DataType` in documentation.',
            );
            return false;
        }

        const newNode = new SinglyNode(data);
        if (this.#head === null) {
            this.#head = newNode;
            this.#tail = newNode;
            this.size++;
            return true;
        }

        this.#tail!.next = newNode;
        this.#tail = newNode;
        this.size++;

        return true;
    }

    // // add anywhere of the linked list except head & tail
    add(data: DataType<any>, position: number) {
        if (!data.key || !data.value) {
            console.error(
                'Invalid data type, must be an object with `key` and `value` properties. Check `DataType` in documentation.',
            );
            return false;
        }

        if (position === 0 || position === 1) {
            console.error('Use `prepend()` method to insert data at Head.');
            return false;
        } else if (position === this.size) {
            console.error('Use `append()` method to insert data at Tail.');
            return false;
        } else if (position > this.size) {
            console.error(`Out of range. Size of the linkedList is ${this.size}`);
            return false;
        }

        let currentNode = this.#head;
        // generator function that returns an iterator
        const iterator = addGenerator(currentNode, data, position);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            this.size++;
            return true;
        }

        return false;
    }

    getFromHead() {
        if (this.#head === null) {
            return false;
        }

        return this.#head.data;
    }

    getFromTail() {
        if (this.#tail === null) {
            return false;
        }

        return this.#tail.data;
    }

    log() {
        console.log(JSON.stringify(this.#head, null, 2));
    }

    remove(key: string | number) {
        if (this.#head === null) {
            return false;
        } else if (this.#head!.next === null) {
            this.#tail = null;
        }
        if (this.#head.data.key === key) {
            const prevHeadData = this.#head.data;
            this.#head = this.#head.next;
            if (this.#head!.next === null) this.#tail = this.#head;

            this.size--;
            if (this.#head === null) this.size = 0;
            return true;
        }

        // two pointer approach
        let previousNode: NodeType = null;
        let currentNode: NodeType = this.#head;
        while (currentNode !== null) {
            if (key === currentNode.data.key) {
                const temp = currentNode.data;
                previousNode!.next = currentNode.next;
                if (currentNode!.next === null) this.#tail = previousNode;

                this.size--;
                return true;
            }

            previousNode = currentNode;
            currentNode = currentNode.next;
        }

        return false;
    }

    update(key: string | number, newValue: any) {
        if (this.#head === null) return false;

        if (this.#head.data.key === key) {
            this.#head.data.value = newValue;
            return this.#head.data;
        }
        if (this.#tail!.data.key === key) {
            this.#tail!.data.value = newValue;
            return this.#tail!.data;
        }

        let currentNode = this.#head.next;
        // generator function that returns an iterator
        const iterator = updateGenerator(key, currentNode, newValue);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }

        return false;
    }

    search(key: string | number) {
        if (this.#head === null) return false;

        if (this.#head.data.key === key) {
            return this.#head.data;
        }
        if (this.#tail!.data.key === key) {
            return this.#tail!.data;
        }

        let currentNode = this.#head.next;
        // generator function that returns an iterator
        const iterator = searchGenerator(key, currentNode);
        const iteratorNext = iterator.next();
        if (iteratorNext.value) {
            return iteratorNext.value;
        }

        return false;
    }

    iterator() {
        const currentNode = this.#head;
        // generator function that returns an iterator
        const iterator = iteratorGenerator(currentNode);
        return iterator;
    }
}

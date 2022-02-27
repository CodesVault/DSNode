import { NodeType } from '../types/hashTableTypes.js';

export function* addGenerator(currentNode: NodeType, newNode: NodeType) {
    while (currentNode !== null) {
        if (currentNode.next === null) {
            currentNode.next = newNode;
            yield true;
        }

        currentNode = currentNode.next;
    }
    yield false;
}

export function* removeGenerator(key: string, currentNode: NodeType) {
    let prevNode: NodeType = null;
    while (currentNode !== null) {
        if (currentNode.data.key === key) {
            prevNode!.next = currentNode.next;
            yield true;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
    }
    yield false;
}

export function* iteratorGenerator(table: Array<any>) {
    if (table.length === 0) yield false;

    for (let key in table) {
        yield table[key];
    }
}

export function* updateGenerator(key: string, newValue: any, currentNode: NodeType) {
    while (currentNode !== null) {
        if (currentNode.data.key === key) {
            currentNode.data.value = newValue;
            yield true;
        }

        currentNode = currentNode.next;
    }
    yield false;
}

export function* getGenerator(key: string, currentNode: NodeType) {
    while (currentNode !== null) {
        if (currentNode.data.key === key) {
            yield currentNode.data;
        }

        currentNode = currentNode.next;
    }
    yield false;
}

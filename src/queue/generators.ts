import { QueueType } from '../types/queueTypes.js';

export function* searchGenerator(key: string | number, currentNode: QueueType) {
    while (currentNode !== null) {
        if (key === currentNode.data.key) {
            yield currentNode.data;
        }
        currentNode = currentNode.next;
    }
    yield false;
}

export function* updateGenerator(key: string | number, currentNode: QueueType, newValue: any) {
    while (currentNode !== null) {
        if (key === currentNode.data.key) {
            currentNode.data.value = newValue;
            yield currentNode.data;
        }

        currentNode = currentNode.next;
    }
    yield false;
}

export function* iteratorGenerator(currentNode: QueueType) {
    while (currentNode !== null) {
        yield currentNode.data;
        currentNode = currentNode.next;
    }
    yield false;
}

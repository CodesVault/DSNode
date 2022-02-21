import { StackType } from '../types/stackTypes.js';

export function* searchGenerator(key: string | number, currentNode: StackType) {
    while (currentNode !== null) {
        if (key === currentNode.data.key) {
            yield currentNode.data;
        }
        currentNode = currentNode.next;
    }
    yield false;
}

export function* updateGenerator(key: string | number, currentNode: StackType, newValue: any) {
    while (currentNode !== null) {
        if (key === currentNode.data.key) {
            currentNode.data.value = newValue;
            yield currentNode.data;
        }
        currentNode = currentNode.next;
    }
    yield false;
}

export function* iteratorGenerator(currentNode: StackType) {
    while (currentNode !== null) {
        yield currentNode.data;
        currentNode = currentNode.next;
    }
    yield false;
}

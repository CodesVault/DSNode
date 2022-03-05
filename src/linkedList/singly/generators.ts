import { NodeType } from '../../types/singlyTypes.js';
import { DataType } from '../../types/dataTypes.js';
import { SinglyNode } from './singlyNode.js';

export function* addGenerator(currentNode: NodeType, data: DataType<any>, position: number) {
    let count = 0;
    let prevNode: NodeType = null;

    while (currentNode !== null) {
        if (count === position) {
            prevNode!.next = new SinglyNode(data);
            prevNode!.next.next = currentNode;
            yield true;
        }

        prevNode = currentNode;
        currentNode = currentNode.next;
        count++;
    }
    yield false;
}

export function* updateGenerator(key: string | number, currentNode: NodeType, newValue: any) {
    while (currentNode !== null) {
        if (currentNode.data.key === key) {
            currentNode.data.value = newValue;
            yield currentNode.data;
        }

        currentNode = currentNode.next;
    }
    yield false;
}

export function* searchGenerator(key: string | number, currentNode: NodeType) {
    while (currentNode !== null) {
        if (currentNode.data.key === key) {
            yield currentNode.data;
        }

        currentNode = currentNode.next;
    }
    yield false;
}

export function* iteratorGenerator(currentNode: NodeType) {
    while (currentNode !== null) {
        yield currentNode.data;

        currentNode = currentNode.next;
    }
    yield false;
}

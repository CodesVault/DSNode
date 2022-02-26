import { QueueType } from '../types/queueTypes.js';
import { DataType } from '../types/dataTypes.js';

export class QueueNode {
    public data: DataType<any>;
    public next: QueueType | null = null;

    constructor(data: DataType<any>) {
        this.data = data;
        this.next = null;
    }
}

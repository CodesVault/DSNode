import { NodeType } from '../types/hashTableTypes.js';
import { DataType } from '../types/dataTypes.js';

export class HashNode {
    public data: DataType<any>;
    public next: NodeType | null;

    constructor(data: DataType<any>) {
        this.data = data;
        this.next = null;
    }
}

import { DataType, NodeType } from '../../types/doublyTypes.js';

export class DoublyNode {
    public data: DataType<any>;
    public next: NodeType | null;
    public prev: NodeType | null;

    constructor(data: DataType<any>) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}

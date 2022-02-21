import { NodeType, DataType } from '../../types/singlyTypes.js';

export class SinglyNode {
    public data: DataType<any>;
    public next: NodeType | null;

    constructor(data: DataType<any>) {
        this.data = data;
        this.next = null;
    }
}

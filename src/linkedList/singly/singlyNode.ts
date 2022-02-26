import { NodeType } from '../../types/singlyTypes.js';
import { DataType } from '../../types/dataTypes.js';

export class SinglyNode {
    public data: DataType<any>;
    public next: NodeType | null;

    constructor(data: DataType<any>) {
        this.data = data;
        this.next = null;
    }
}

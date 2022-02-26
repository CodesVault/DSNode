import { StackType } from '../types/stackTypes.js';
import { DataType } from '../types/dataTypes.js';

export class StackNode {
    public data: DataType<any>;
    public next: StackType | null = null;

    constructor(data: DataType<any>) {
        this.data = data;
        this.next = null;
    }
}

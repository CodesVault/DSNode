import { DataType, BlockType } from '../types/blockTypes.js';
import crypto from 'crypto';

function blockHash(index: number, data: DataType<any>, time: Date) {
    let hash = crypto.createHash('sha256');
    hash = hash.update(JSON.stringify(data) + index + time);

    return hash.toString();
}

export class Block {
    index: number;
    data: DataType<any>;
    hash: string;
    prevHash: string | null;
    time: Date;

    constructor(data: DataType<any>, index: number) {
        this.index = index;
        this.data = data;
        this.time = new Date();
        this.hash = blockHash(index, data, this.time);
        this.prevHash = null;
    }

    regenerateHash() {
        const data: DataType<any> | any = this.data;
        const hash = blockHash(this.index, data, this.time);

        return hash.toString();
    }
}

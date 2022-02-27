import { DataType } from './dataTypes';

export type NodeType = {
    data: DataType<any>;
    next: null | NodeType;
} | null;

export interface HashTableApi {
    length: number;
    add(data: DataType<any>): boolean;
    remove(key: string): boolean | any[];
    update(key: string, newValue: DataType<any>): boolean | DataType<any>;
    get(key: string): boolean | DataType<any>;
    log(key?: string): void;
    iterator(): Generator;
}

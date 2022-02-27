import { DataType } from "./dataTypes";

// singly linked list node class
export type NodeType = {
    data: DataType<any>;
    next: null | NodeType;
} | null;

// singly linked list interface
export interface SinglyLinkedListApi {
    size: number;
    prepend(data: DataType<any>): boolean;
    append(data: DataType<any>): boolean;
    add(data: DataType<any>, position: number): boolean;
    getFromHead(): object | false;
    getFromTail(): object | false;
    log(): void;
    remove(key: string | number): boolean;
    update(key: string | number, newValue: any): object | boolean;
    search(key: string | number): object | boolean;
    iterator(): Generator;
}

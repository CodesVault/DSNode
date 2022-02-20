import { DataType, QueueType } from "../types/queueTypes.js";

export class QueueNode {
	public data: DataType<any>
	public next: QueueType|null = null

	constructor(data: DataType<any>) {
		this.data = data;
		this.next = null;
	}
}

import { Queue } from "../queue"


describe('Queue', () => {
    let queue = Queue.createQueue()

    it('create a new queue', () => {
        expect(queue).toBeTruthy();
        expect(queue.getFront()).toBeFalsy();
        expect(queue.getBack()).toBeFalsy();
    })

    it('add a new elements', () => {
        expect(queue.enqueue({key: 'a', value: 'apple'})).toBeTruthy()
        expect(queue.enqueue({key: 'b', value: [1, 2, 4]})).toBeTruthy()
    })

    it('get the first added element', () => {
        expect(queue.getFront()).toEqual({key: 'a', value: 'apple'})
    })

    it('get the last added element', () => {
        expect(queue.getBack()).toEqual({key: 'b', value: [1, 2, 4]})
    })

    it('search an element', () => {
        queue.enqueue({key: 'c', value: 'cat'})
        expect(queue.search('a')).toEqual({key: 'a', value: 'apple'})
    })

    it('update an element', () => {
        expect(queue.update('a', 'Alphabet')).toEqual({key: 'a', value: 'Alphabet'})
    })

    it('iterator', () => {
        queue = Queue.createQueue()
        let iterator = queue.iterator()
        expect(iterator.next()).toEqual({value: false, done: false})

        queue.enqueue({key: 'a', value: 'apple'})
        queue.enqueue({key: 'b', value: [1, 2, 4]})
        iterator = queue.iterator()
        let iteratorNext = iterator.next()

        while (iteratorNext.done !== false) {
            expect(typeof iteratorNext.value).toBe('object')
            iteratorNext = iterator.next()
        }
    })

});

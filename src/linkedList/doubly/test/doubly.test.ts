import { DoublyLinkedList } from '../doublyLinkedList';

describe('DoublyLinkedList', () => {
    let doublyLinkedList = DoublyLinkedList.createDL();

    it('create a new Doubly LL', () => {
        expect(doublyLinkedList).toBeTruthy();
        expect(doublyLinkedList.getFromHead()).toBeFalsy();
        expect(doublyLinkedList.getFromTail()).toBeFalsy();
    });

    it('prepend new elements', () => {
        expect(doublyLinkedList.prepend({ key: 'a', value: 'apple' })).toBeTruthy();
        expect(doublyLinkedList.getFromHead()).toEqual({ key: 'a', value: 'apple' });

        expect(doublyLinkedList.prepend({ key: 'b', value: [1, 2, 4] })).toBeTruthy();
        expect(doublyLinkedList.getFromHead()).toEqual({ key: 'b', value: [1, 2, 4] });
    });

    it('append new elements', () => {
        const cat = { key: 'c', value: 'cat' };
        expect(doublyLinkedList.append(cat)).toBeTruthy();
    });

    it('add new elements', () => {
        const data = { key: 'x', value: 'X' };
        expect(doublyLinkedList.add(data, 1)).toBeFalsy();

        expect(doublyLinkedList.add(data, 2)).toBeTruthy();
    });

    it('size of the LinkedList', () => {
        const dLL = DoublyLinkedList.createDL();
        expect(dLL.size).toEqual(0);

        dLL.prepend({ key: 'a', value: 'apple' });
        expect(dLL.size).toBe(1);
    });

    it('remove elements', () => {
        expect(doublyLinkedList.remove('aa')).toBeFalsy();
        expect(doublyLinkedList.remove('b')).toBeTruthy();
    });

    it('search elements', () => {
        expect(doublyLinkedList.search('aa')).toEqual(false);
        expect(doublyLinkedList.search('a')).toEqual({ key: 'a', value: 'apple' });
    });

    it('update elements', () => {
        expect(doublyLinkedList.update('aa', 'Alphabet')).toEqual(false);
        expect(doublyLinkedList.update('a', 'Alphabet')).toEqual({ key: 'a', value: 'Alphabet' });
    });

    it('iterator', () => {
        const dLL = DoublyLinkedList.createDL();
        let iterator = dLL.iterator();
        expect(iterator.next()).toEqual({ value: false, done: false });

        dLL.prepend({ key: 'a', value: 'apple' });
        dLL.prepend({ key: 'b', value: 'ball' });
        iterator = dLL.iterator();
        let iteratorNext = iterator.next();

        while (iteratorNext.done !== false) {
            expect(typeof iteratorNext.value).toBe('object');
            iteratorNext = iterator.next();
        }
    });
});

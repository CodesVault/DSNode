import { SinglyLinkedList } from '../singlyLinkedList';

describe('SinglyLinkedList', () => {
    const singlyLinkedList = SinglyLinkedList.createSL();

    it('create a new Singly LL', () => {
        expect(singlyLinkedList).toBeTruthy();
        expect(singlyLinkedList.getFromHead()).toBeFalsy();
        expect(singlyLinkedList.getFromTail()).toBeFalsy();
    });

    it('prepend new elements', () => {
        expect(singlyLinkedList.prepend({ key: 'a', value: 'apple' })).toBeTruthy();
        expect(singlyLinkedList.getFromHead()).toEqual({ key: 'a', value: 'apple' });

        expect(singlyLinkedList.prepend({ key: 'b', value: [1, 2, 4] })).toBeTruthy();
        expect(singlyLinkedList.getFromHead()).toEqual({ key: 'b', value: [1, 2, 4] });
    });

    it('append new elements', () => {
        const cat = { key: 'c', value: 'cat' };
        expect(singlyLinkedList.append(cat)).toBeTruthy();
    });

    it('add new elements', () => {
        const data = { key: 'x', value: 'X' };
        expect(singlyLinkedList.add(data, 1)).toBeFalsy();

        expect(singlyLinkedList.add(data, 2)).toBeTruthy();
    });

    it('size of the LinkedList', () => {
        const sLL = SinglyLinkedList.createSL();
        expect(sLL.size).toEqual(0);

        sLL.prepend({ key: 'a', value: 'apple' });
        expect(sLL.size).toBe(1);
    });

    it('remove elements', () => {
        expect(singlyLinkedList.remove('aa')).toBeFalsy();
        expect(singlyLinkedList.remove('b')).toBeTruthy();
    });

    it('search elements', () => {
        expect(singlyLinkedList.search('aa')).toEqual(false);
        expect(singlyLinkedList.search('a')).toEqual({ key: 'a', value: 'apple' });
    });

    it('update elements', () => {
        expect(singlyLinkedList.update('aa', 'Alphabet')).toEqual(false);
        expect(singlyLinkedList.update('a', 'Alphabet')).toEqual({ key: 'a', value: 'Alphabet' });
    });

    it('iterator', () => {
        const sLL = SinglyLinkedList.createSL();
        let iterator = sLL.iterator();
        expect(iterator.next()).toEqual({ value: false, done: false });

        sLL.prepend({ key: 'a', value: 'apple' });
        sLL.prepend({ key: 'b', value: 'ball' });
        iterator = sLL.iterator();
        let iteratorNext = iterator.next();

        while (iteratorNext.done !== false) {
            expect(typeof iteratorNext.value).toBe('object');
            iteratorNext = iterator.next();
        }
    });
});

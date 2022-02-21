// import { Stack } from "../../build/main.js";
import { Stack } from '../stack';

describe('Stack', () => {
    let stack = Stack.createStack();

    it('create a new stack', () => {
        expect(stack).toBeTruthy();
    });

    it('push a new element', () => {
        expect(stack.push({ key: 'a', value: 'apple' })).toBeTruthy();
        expect(stack.push({ key: 'b', value: [1, 2, 4] })).toBeTruthy();
    });

    it('pop an element', () => {
        expect(stack.pop()).toEqual({ key: 'b', value: [1, 2, 4] });
    });

    it('search an element', () => {
        stack.push({ key: 'c', value: 'cat' });
        expect(stack.search('a')).toEqual({ key: 'a', value: 'apple' });
    });

    it('update an element', () => {
        expect(stack.update('a', 'Alphabet')).toEqual({ key: 'a', value: 'Alphabet' });
    });

    it('iterator', () => {
        stack = Stack.createStack();
        let iterator = stack.iterator();
        expect(iterator.next()).toEqual({ value: false, done: false });

        stack.push({ key: 'a', value: 'apple' });
        stack.push({ key: 'b', value: [1, 2, 4] });
        iterator = stack.iterator();
        let iteratorNext = iterator.next();

        while (iteratorNext.done !== false) {
            expect(typeof iteratorNext.value).toBe('object');
            iteratorNext = iterator.next();
        }
    });

    it('get last item added in the stack', () => {
        stack.push({ key: 'a', value: 'apple' });
        stack.push({ key: 'b', value: [1, 2, 4] });
        expect(stack.getTop()).toEqual({ key: 'b', value: [1, 2, 4] });
    });

    it('get first item added in the stack', () => {
        stack.push({ key: 'a', value: 'apple' });
        stack.push({ key: 'b', value: [1, 2, 4] });
        expect(stack.getBottom()).toEqual({ key: 'a', value: 'apple' });
    });
});

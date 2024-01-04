import { cls } from './cls';

describe('classNames', () => {
    test('with only first param', () => {
        expect(cls('mainClass')).toBe('mainClass');
    });
    test('with additional class', () => {
        const expected = 'mainClass class1 class2';
        expect(cls('mainClass', {}, ['class1', 'class2'])).toBe(expected);
    });
    test('with mods true', () => {
        const expected = 'mainClass class1 class2 hovered scrollable';
        expect(
            cls('mainClass', { hovered: true, scrollable: true }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
    test('with mods false', () => {
        const expected = 'mainClass class1 class2 hovered';
        expect(
            cls('mainClass', { hovered: true, scrollable: false }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
    test('with mods undefined', () => {
        const expected = 'mainClass class1 class2 hovered';
        expect(
            cls('mainClass', { hovered: true, scrollable: undefined }, [
                'class1',
                'class2',
            ]),
        ).toBe(expected);
    });
});

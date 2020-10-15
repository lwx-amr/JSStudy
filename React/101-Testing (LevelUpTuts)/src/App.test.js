import {add, mul, total} from './App';

// Unit tests
test('Add', ()=>{
    expect(add(1,5)).toBe(6);
    expect(add(1,8)).toBe(9);
    expect(add(5,5)).toBe(10);
});
test('Multiplication', ()=>{
    expect(mul(1,5)).toBe(5);
});

// Integration Test
test('total', () => {
    expect(total(10, 5)).toBe('$15')
})
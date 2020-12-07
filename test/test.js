'use strict';

const test = require('tape');
const tryCatch = require('try-catch');
const dec2radix = require('..');

test('dec2radix: valid radix',(t) => {
    const actual = dec2radix(19, 2);
    const expect = '10011';

    t.deepEqual(actual, expect);
    t.end();
})

test('dec2radix: empty arguments', (t) => {
    const [error] = tryCatch(dec2radix);

    t.equal(error.message, 'number invalid!');
    t.end();
});

test('dec2radix: bad arguments', (t) => {
    const [error] = tryCatch(dec2radix, 'aCD');

    t.equal(error.message, 'number invalid!');
    t.end();
});

test('dec2radix: 0', (t) => {
    const actual = dec2radix(0);
    const expect = '0';

    t.deepEqual(actual, expect);
    t.end();
})

test('dec2radix: hex', (t) => {
    const result = dec2radix(255, 16);
    const expected = 'ff';

    t.equal(result, expected);
    t.end();
})
'use strict';

module.exports = dec2radix;

const hexValues = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    'a', 
    'b',
    'c', 
    'd', 
    'e',
    'f',
];


function dec2radix(number, radix) {
    if (isNaN(number)) {
        throw Error('number invalid!');
    }

    if (!number) {
        return '0';
    }

    const result = [];
    let current = number;
    
    while (current > 0) {
        const number = current % radix;
        const calculated = hexValues[number];

        result.unshift(calculated);
        current = Math.floor(current / radix);
    }
    
    return result.join('');
}

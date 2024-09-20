import {adjektiv} from './adjektiv.js';
import {substantiv} from './substantiv.js';

function createRandomPassphrase() {
    const adjektivIndex = Math.floor(Math.random() * adjektiv.length);
    const substantivIndex = Math.floor(Math.random() * substantiv.length);
    const adjektivWord = adjektiv[adjektivIndex];
    const substantivWord = substantiv[substantivIndex];

    return `${adjektivWord} ${substantivWord}`;
}

console.log(createRandomPassphrase());
/* eslint-disable no-console */
import Person from './person';
import './main.css';
import { hello, world } from './hello';

const firstName = 'Byron';
const foo = 2;

console.log({ firstName, foo });

const me = new Person('Byron', 89);
console.log(me, hello, world, foo, 'test');

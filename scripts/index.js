import { asyncConfirm } from './confirm.js';

const data = [
  { label: 'есть', value: 'eat' },
  { label: 'пить', value: 'drink' },
  { label: 'спать', value: 'sleep' }
];

asyncConfirm('Чего ты хочешь?', data)
  .then(console.log);

console.log('code after promise');

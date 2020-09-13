import { asyncConfirm } from './confirm.js';

const data = [
  { label: 'есть', value: 'eat' },
  { label: 'пить', value: 'drink' },
  { label: 'спать', value: 'sleep' }
];

asyncConfirm('Чего ты хочешь?', data)
  .then((result) => {
    document.write(`<h1>${result}</h1>`);
    console.log(result);
  });

console.log('code after promise');

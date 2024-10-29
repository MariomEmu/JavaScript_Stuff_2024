console.log('Learning modules');
/*import { sum, sub } from './calc.js';
import { default as sayMyName } from './wh


console.log(sum(2, 3));
console.log(sub(10, 5));


console.log(sayMyName());

///aliases , here as keyword and add is aliases
import { sum as add, sub } from './calc.js';

console.log(add(2, 3));
console.log(sub(10, 5));
*/

//Namespaces is handy feature , when you do  export and import,
//when u export  lot of stuff from a module and want to import them ,
// it is very tedious for kind of type thing down instead of that
// you will be importing star as a namespace and invoke everyting that u are exporting from another module

/*import * as calc from './calc.js';

import sayMyName from './whoami.js';

console.log(calc.sum(2, 3));
console.log(calc.sub(10, 5));

console.log(sayMyName());


///combine export module means u will combine thing and exporting them

import * as combine from './combine.js';
console.log(combine.calc.sum(1, 3));

console.log(combine.channelName());
*/

//import { sayHi, sayHola } from './greeting.js';

//dynamic import

//you can write any logic dynamically in dynamic import
if (true) {
  const { sayHi, sayHola } = await import('./greeting.js');

  sayHi();

  sayHola();
}

const Promises = Promise.all([
  await import('./greeting.js'),
  await import('./calc.js'),
]);

//console.log(Promises);

Promises.then(result => {
  //console.log(result);
  console.log(result[1].sum(2, 3));
});

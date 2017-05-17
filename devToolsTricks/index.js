const dogs = [{ name: 'Snickers', age: 2 }, { name: 'hugo', age: 8 }];

function makeGreen() {
  const p = document.querySelector('p');
  p.style.color = '#BADA55';
  p.style.fontSize = '50px';
}

// Regular
console.log('hello');

// Interpolated
console.log('Hello I am a %s string!', 'kewl');

// Styled
// console.log('%c I am some great text', 'font-size:50px');

// warning!
console.warn('oh noooo!');

// Error :|
console.error('something is broken!');

// Info
console.info('Crocodiles eat 3-4 people per year!');

// Testing
const p = document.querySelector('p');
console.assert(p.classList.contains('ouch'), 'p does not contain ouch!');

// clearing
console.clear();

// Viewing DOM Elements
console.log(p);
console.dir(p);
console.clear();
// Grouping together
dogs.forEach(dog => {
  console.groupCollapsed(`${dog.name}`);
  console.log(`This is ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} years old`);
  console.log(`${dog.name} is ${dog.age * 7} years old in dog years`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('Wes');
console.count('Steve');
console.count('Steve');
console.count('Wes');
console.count('Steve');
console.count('Wes');

// timing
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data');
    console.log(data);
  });

// plot array of objects
console.table(dogs);

const person = { firstName: 'Seungjoo', lastName: 'Kim', hobby: 'Coding' };
console.log(person);

const fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is:", fullName + '.');

person.job = 'Coding newbie';
console.log("The person's job is:", person.job + '.');

person.previousJob = 'Student';
console.log("The person's previous job was:", person.previousJob + '.');

console.log('The complete person object:', person);

const myCar = { make: 'Lexus', model: 'RX350', year: '2012' };
console.log('Car information:', myCar);

myCar.owner = fullName;
console.log('My name is ' + myCar.owner + ' and I drive a ' +
myCar.year + ' ' + myCar.make + ' ' + myCar.model + '.');

myCar.color = 'White';
console.log('My full car info:', myCar);

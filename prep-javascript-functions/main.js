function addTwoNumbers(num1, num2) {
  return num1 + num2;
}

console.log(addTwoNumbers(4, 4));

function convertHoursToMinutes(number) {
  return number * 60;
}

console.log(convertHoursToMinutes(2));

function personalizeGreeting(name) {
  return 'Hello ' + name + '!';
}

const personalizeGreetingResult = personalizeGreeting('Seungjoo');

console.log('personalizeGreeting:', personalizeGreetingResult);

function returnDatatype(data) {
  return typeof data;
}

const returnDatatypeResult = returnDatatype(1072);

console.log('Return data type:', returnDatatypeResult);

function addAndMultiplyBy5(num1, num2) {
  return (num1 + num2) * 5;
}

console.log(addAndMultiplyBy5(10, 5));

function multiplyAndDivideBy5(num1, num2) {
  return (num1 * num2) / 5;
}

console.log(multiplyAndDivideBy5(35, 10));

function subtractTwoNumbers(num1, num2) {
  return num1 - num2;
}

console.log(subtractTwoNumbers(22, 7));

function getCircleCircumference(radius) {
  return 2 * radius * Math.PI;
}

const getCircleCircumferenceResult = getCircleCircumference(5);

console.log('getCircleCircumference:', getCircleCircumferenceResult);

function returnFullName(firstName, lastName) {
  return firstName + ' ' + lastName;
}

const returnFullNameResult = returnFullName('Seungjoo', 'Kim');

console.log('Return full name:', returnFullNameResult);

function cubeNumber(number) {
  return Math.pow(number, 3);
}

const cubeNumberResult = cubeNumber(5);

console.log('Cube number:', cubeNumberResult);

function returnMathSentence(num1, num2) {
  return 'If you add ' + num1 + ' and ' + num2 +
  ' together you get ' + (num1 + num2) + '.';
}

const returnMathSentenceResult = returnMathSentence(5, 12);

console.log('Return math sentence:', returnMathSentenceResult);

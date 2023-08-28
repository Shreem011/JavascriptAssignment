function factorial(num) {
  if (num < 0) {
    return undefined;
  } else if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
}

const number = -3;
result = factorial(number);

console.log(`The factorial of ${number} is ${result}`);

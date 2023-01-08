const sayHello = (value) => {
  if (value) {
    console.log(value);
    return;
  }

  console.log('Hello developer!');
};

const testSample = (testInput) => testInput;

export { sayHello, testSample };

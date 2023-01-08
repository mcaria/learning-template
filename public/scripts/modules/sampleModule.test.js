import { sayHello, testSample } from './sampleModule';
import jest from 'jest-mock';

describe('Check if testSample work', () => {
  test('Return specified input', () => {
    const result = testSample('Hello!');
    expect(result).toBe('Hello!');
  });
});

describe('Check if sayHello log to console', () => {
  test('Log custom value to console', () => {
    console.log = jest.fn();
    sayHello('Hello');
    expect(console.log.mock.calls[0][0]).toBe('Hello');
  });
  test('Log default value to console', () => {
    console.log = jest.fn();
    sayHello();
    expect(console.log.mock.calls[0][0]).toBe('Hello developer!');
  });
});

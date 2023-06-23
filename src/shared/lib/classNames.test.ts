import { classNames } from './classNames';

describe('classNames test suite', () => {
  test('should return only one className', () => {
    expect(classNames('someClass', {}, [])).toBe('someClass');
  });
});

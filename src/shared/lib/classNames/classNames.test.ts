import classNames from './classNames';

describe('classNames', () => {
  test('with first param', () => {
    expect(classNames('someClass')).toBe('someClass');
  });
  test('with additional class', () => {
    expect(classNames('someClass', { testClass: true })).toBe(
      'someClass testClass'
    );
  });
  test('with all params', () => {
    const expected = 'someClass class1 class2 testClass';
    expect(
      classNames('someClass', { testClass: true }, ['class1', 'class2'])
    ).toBe(expected);
  });

  test('with mods false', () => {
    const expected = 'someClass class1 class2';
    expect(
      classNames('someClass', { testClass: false }, ['class1', 'class2'])
    ).toBe(expected);
  });
});

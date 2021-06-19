import makeStack from '../src/stack.js';

test('pop in empty stack', () => {
  const stack = makeStack();
  // Вызов метода pop обёрнут в функцию
  // иначе матчер не сможет перехватить исключение
//  expect(() => stack.pop()).toThrow();
  expect(() => stack.pop()).toThrow();
});

test("stack's main flow", () => {
  const stack = makeStack();
  // Добавляем два элемента в стек и затем извлекаем их
  stack.push('one');
  stack.push('two');
  expect(stack.pop()).toEqual('two');
  expect(stack.pop()).toEqual('one');
});
test('isEmpty', () => {
  const stack = makeStack();
  expect(stack.isEmpty()).toBe(true);
  stack.push('two');
  expect(stack.isEmpty()).toBe(false);
  stack.pop();
  expect(stack.isEmpty()).toBe(true);
});


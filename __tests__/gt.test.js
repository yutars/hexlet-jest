import {gt} from '../src/utils.js';

test('gt', () => {
  expect(gt(2, 1)).toBeTruthy();
  expect(gt(1, 2)).toBeFalsy();
});
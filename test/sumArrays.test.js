import { describe, it, expect } from 'vitest';
import {arrSum} from './src/sumArrays'; 


describe('arrSum', () => {
  it('sums all elements of [1, 2, 3] and [4, 5, 6] correctly', () => {
    expect(arrSum([1, 2, 3], [4, 5, 6])).toBe(21);
  });

  it('sums all elements of [-1, -2, -3] and [-4, -5, -6] correctly', () => {
    expect(arrSum([-1, -2, -3], [-4, -5, -6])).toBe(-21);
  });

  it('sums all elements of [0, 0, 0] and [4, 5, 6] correctly', () => {
    expect(arrSum([0, 0, 0], [4, 5, 6])).toBe(15);
  });

  it('sums all elements of [100, 200, 300] and [400, 500, 600] correctly', () => {
    expect(arrSum([100, 200, 300], [400, 500, 600])).toBe(2100);
  });
});





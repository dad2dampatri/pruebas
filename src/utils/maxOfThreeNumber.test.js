import { describe, expect, it } from "vitest";
import {maxOfThreeNumbers} from './maxOfThreeNumbers'

describe('Función isWorkday', () => {
  
  it('maxOfThreeNumbers debe ser una función', () => {
    expect(typeof maxOfThreeNumbers).toBe('function');
  });

  it('maxOfThreeNumbers con a=5, b = 2, c=6', () => {
    expect(maxOfThreeNumbers(5, 2, 6)).toBe(6);
  });

  it('maxOfThreeNumbers con a=5, b = 2, c=4', () => {
    expect(maxOfThreeNumbers(5, 2, 4)).toBe(5);
  });

  it('maxOfThreeNumbers con a=5, b = 7, c=6', () => {
    expect(maxOfThreeNumbers(5, 7, 6)).toBe(7);
  });

  it('maxOfThreeNumbers con a=5, b = 7, c=9', () => {
    expect(maxOfThreeNumbers(5, 7, 9)).toBe(9);
  });

  

});
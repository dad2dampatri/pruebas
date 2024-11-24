import { describe, expect, it } from "vitest";
import {sum} from './sum'

describe('Función Suma', () => {
  
  it('Sum debe ser una función', () => {
    expect(typeof sum).toBe('function');
  });

  it('Sum debe sumar correctamente dos números positivos', () => {
    expect(sum(3,4)).toBe(8);
  });
});
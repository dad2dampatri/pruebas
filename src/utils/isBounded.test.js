import { describe, expect, it } from "vitest";
import {isBounded} from './isBounded'

describe('Función isBounded', () => {
  
  it('isBounded debe ser una función', () => {
    expect(typeof isBounded).toBe('function');
  });

  it('isBounded devuelve false por valor inválido (menos que 1 o mayor que 1000', () => {
    expect(isBounded(0)).toBe(false);
  });

  it('isBounded devuelve true por valor válido entre 1 y 1000', () => {
    expect(isBounded(750)).toBe(true);
  });

 
});
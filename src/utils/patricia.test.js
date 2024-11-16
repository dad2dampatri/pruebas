import { describe, expect, it } from "vitest";
import {patricia} from './patricia'

describe('Función Patricia', () => {
  
  it('patricia debe ser una función', () => {
    expect(typeof patricia).toBe('function');
  });

  it('Si recibe número positivo devuelve true', () => {
    expect(patricia(10)).toBe(true);
  });

  it('Si recibe número negativo devuelve false', () => {
    expect(patricia(-102)).toBe(false);
  });


  it('Si recibe 0 devuelve null', () => {
    expect(patricia(0)).toBe(null);
  });

});
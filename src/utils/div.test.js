import { describe, expect, it } from "vitest";
import {div} from './div'

describe('Función División', () => {
  
  it('Div debe ser una función', () => {
    expect(typeof div).toBe('function');
  });

  it('Div debe dividir dos número enteros positivos y dar un número positivo', () => {
    expect(div(10,4)).toBe(2.5);
  });

  it('Div debe dividir dos número enteros negativos y dar un número positivo', () => {
    expect(div(-10,-5)).toBe(2);
  });


  it('Div debe dividir un número entero positivo y otro negativo y dar un número negativo', () => {
    expect(div(-12,4)).toBe(-3);
  });

});
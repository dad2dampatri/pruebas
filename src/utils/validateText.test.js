import { describe, expect, it } from "vitest";
import {validateText} from './validateText'

describe('Función Validar Texto', () => {
  
  it('validateText debe ser una función', () => {
    expect(typeof validateText).toBe('function');
  });

  it('validateText debe dar error cuando es un número', () => {
    expect(validateText("12")).toBe(false);
  });

  it('validateText debe dar error cuando es menor que 6 caracteres', () => {
    expect(validateText("abc")).toBe(false);
  });

  it('validateText debe dar error cuando es mayor de 10 caracteres', () => {
    expect(validateText("abcdefghijk")).toBe(false);
  });

  it('validateText debe ser true cuando está entre 6 y 10 caracteres alfabéticos', () => {
    expect(validateText("abcdefghij")).toBe(true);
  });
});
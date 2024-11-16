import { describe, expect, it } from "vitest";
import {fibo} from './fibo'

describe('Función fibo', () => {
  
  it('fibo debe ser una función', () => {
    expect(typeof fibo).toBe('function');
  });

  it('fibo devuelve "El  número introducido no debe ser menor que 0" cuando introduces un número menor que 0', () => {
    expect(fibo(-1)).toBe('El número introducido no debe ser menor que 0');
  });

  it('fibo es 8 si el número introducido es 6', () => {
    
    expect(fibo(6)).toBe(8);
  });

  it('fibo es 2 si el número introducido es 3', () => {
    
    expect(fibo(3)).toBe(2);
  });

  it('fibo es 0 si el número introducido es 0', () => {
    
    expect(fibo(0)).toBe(0);
  });

 });
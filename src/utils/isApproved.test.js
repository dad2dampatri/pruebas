import { describe, expect, it } from "vitest";
import {isApproved} from './isApproved'

describe('Función isApproved', () => {
  
  it('validateText debe ser una función', () => {
    expect(typeof isApproved).toBe('function');
  });

  it('isApproved es nota inválida cuando la nota es menor que 0 o mayor que 10', () => {
    expect(isApproved(12)).toBe(null);
  });

  it('isApproved es Aprobado cuando la entrada está entre 5 y 10', () => {
    
    expect(isApproved(5.5)).toBe(true);
  });

  it('isApproved es Aprobado cuando la entrada está entre 0 y 4.999', () => {
        
    expect(isApproved(4.9999)).toBe(false);
  });

 });
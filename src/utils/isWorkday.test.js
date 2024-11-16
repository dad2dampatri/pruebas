import { describe, expect, it } from "vitest";
import {isWorkday} from './isWorkday'

describe('Función isWorkday', () => {
  
  it('isWorkday debe ser una función', () => {
    expect(typeof isWorkday).toBe('function');
  });

  it('isWorkday lunes es laboral', () => {
    expect(isWorkday("lunes")).toBe(true);
  });

  it('isWorkday martes es laboral', () => {
    expect(isWorkday("martes")).toBe(true);
  });

  it('isWorkday miércoles es laboral', () => {
    expect(isWorkday("miércoles")).toBe(true);
  });

  it('isWorkday jueves es laboral', () => {
    expect(isWorkday("jueves")).toBe(true);
  });

  it('isWorkday viernes es laboral', () => {
    expect(isWorkday("viernes")).toBe(true);
  });

  it('isWorkday sábado no es laboral', () => {
    expect(isWorkday("sábado")).toBe(false);
  });

  it('isWorkday domingo es laboral', () => {
    expect(isWorkday("domingo")).toBe(false);
  });

  it('isWorkday otros no es laboral', () => {
    expect(isWorkday("fsdf")).toBe(false);
  });
});
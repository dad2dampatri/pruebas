import { describe, expect, it } from "vitest";
import {paraprobar} from './paraprobar'

describe('Función paraprobar', () => {
  
  it('paraprobar debe devolver 2 si el valor de entrada es 3', () => {
    const valorentrada = 3
    const valoresperado = 2
    const valorsalida = paraprobar(valorentrada)
    expect(valorsalida).toBe(valoresperado);
  });
 
});
import test from 'node:test';
import assert from 'node:assert/strict';
import {
  calcularPromedio,
  obtenerEstado,
  validarCalificaciones
} from '../src/js/calificaciones.js';

test('calcula el promedio de tres calificaciones enteras', () => {
  assert.equal(calcularPromedio([8, 7, 9]), 8);
});

test('calcula correctamente un promedio con decimales', () => {
  assert.equal(calcularPromedio([7.5, 8.25, 9]), 8.25);
});

test('acepta el límite inferior cero', () => {
  assert.deepEqual(validarCalificaciones([0, 5, 10]), [0, 5, 10]);
});

test('acepta el límite superior diez', () => {
  assert.equal(calcularPromedio([10, 10, 10]), 10);
});

test('rechaza valores no numéricos', () => {
  assert.throws(() => calcularPromedio([8, 'texto', 9]), TypeError);
});

test('el estado es Aprobado cuando el promedio es 7 o más', () => {
  assert.equal(obtenerEstado(7), 'Aprobado');
});

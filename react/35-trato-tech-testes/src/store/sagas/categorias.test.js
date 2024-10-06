import { call } from 'redux-saga/effects';
import { observarCategorias } from './categorias';
import categoriasService from 'services/categorias';

describe('Testando categorias saga', () => {
  describe('workers', () => {
    test('Deve executar categoriasService.buscar', () => {
      const funcaoGeradora = observarCategorias();
      const funcaoEsperada = call(categoriasService.buscar);

      funcaoGeradora.next(); // delay

      const funcaoExecutada = funcaoGeradora.next();

      expect(funcaoExecutada.value).toEqual(funcaoEsperada);
    })
  })
})
import { call, cancel, take } from 'redux-saga/effects';
import { categoriasSaga, observarCategorias } from './categorias';
import categoriasService from 'services/categorias';
import { adicionarTodasAsCategorias } from 'store/reducers/categorias';

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
  describe('watchers', () => {
    test('Deve executar corretamente', () => {
      const funcaoGeradora = categoriasSaga();
      const tarefa = funcaoGeradora.next();
      const funcaoEsperada = take(adicionarTodasAsCategorias);
      const funcaoCancelarEsperada = cancel(tarefa.value);

      expect(funcaoGeradora.next().value).toEqual(funcaoEsperada);
      expect(funcaoGeradora.next().value).toEqual(funcaoCancelarEsperada);
    })
  })
})
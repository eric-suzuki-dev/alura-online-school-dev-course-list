import Home from '.';
import { render, screen } from '../../test-utils';
import userEvent from '@testing-library/user-event';

jest.mock('services/categorias');

describe('Testando página Home', () => {
  describe('Anuncie', () => {
    test('Deve redirecionar para a página anuncie', () => {
      const botaoAnuncie = screen.getByTestId('home-botao-anunciar');

      userEvent.click(botaoAnuncie);

      expect(?).toHaveBeenCalledWith('/anuncie');
    })
  })

  describe('Categorias', () => {
    test('Deve renderizar com categorias', async () => {
      render(<Home />);
      const categorias = await screen.findAllByTestId('home-categorias');
  
      expect(categorias).toHaveLength(2);
    }) 
  })

})
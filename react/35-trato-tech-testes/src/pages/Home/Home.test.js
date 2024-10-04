import Home from '.';
import { render, screen } from '../../test-utils';

describe('Testando página Home', () => {
  test('deve renderizar com categorias', () => {
    render(<Home />);
    const categorias = screen.getAllByTestId('home-categorias');

    expect(categorias).toHaveLength(5);
    expect(true).toBeTruthy();
  })
})
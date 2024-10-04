import Home from '.';
import { render, screen } from '../../test-utils';

describe('Testando página Home', () => {
  test('deve renderizar com categorias', async () => {
    render(<Home />);
    const categorias = await screen.findAllByTestId('home-categorias');

    expect(categorias).toHaveLength(5);
  })
})
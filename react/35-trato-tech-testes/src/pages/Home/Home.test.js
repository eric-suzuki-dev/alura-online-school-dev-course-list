import Home from '.';
import { render } from '../../test-utils';

describe('Testando página Home', () => {
  test('testando', () => {
    render( <Home />);
    expect(true).toBeTruthy();
  })
})
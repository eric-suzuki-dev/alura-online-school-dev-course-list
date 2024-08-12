test('Deve retornar o valor do saldo atualizado com o rendimento', () => {
    const calculaRendimento = jest.fn((saldo) => saldo + saldo * 0.005);
  
    const saldo = 100;
  
    const novoSaldo = calculaRendimento(saldo);
  
    expect(novoSaldo).toBe(100.5);
    expect(calculaRendimento).toBeCalled();
    expect(calculaRendimento).toHaveBeenCalledWith(saldo);
  });
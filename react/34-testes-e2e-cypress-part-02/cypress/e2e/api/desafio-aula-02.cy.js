describe('Teste método PUT da API Usuários', () => {
    it('Atualiza informações do usuário com sucesso', () => {
      const usuario = {
        nome: 'Marcos Vinicius Neves',
        senha: '123456',
      };
  
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/users/c691fd15-dcd5-4f24-89da-cdfa3cef9d67',
        body: usuario,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.nome).to.eq(usuario.nome);
        expect(response.body.senha).to.eq(usuario.senha);
      });
    });
  
    it('Retorna erro 404 para usuário inexistente', () => {
      const usuario = {
        nome: 'Nome Inválido',
        senha: '123456',
      };
  
      cy.request({
        method: 'PUT',
        url: 'http://localhost:8000/users/calopsita',
        body: usuario,
        failOnStatusCode: false,
      }).then((response) => {
        expect(response.status).to.eq(404);
        expect(response.body).to.eq('Not Found');
      });
    });
  });
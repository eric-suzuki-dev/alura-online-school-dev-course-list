describe('Realizando transações', () => {
    const novaTransacao = {
      tipoTransacao: 'Depósito',
      valor: '100',
    };
  
    it('Deve permitir que usuário acesse a aplicação, realize transações e faça um logout', () => {
      cy.fixture('dadosUsuario').as('usuario');
      cy.get('@usuario').then((usuario) => {
        // Realiza login na aplicação
        cy.login(usuario.email, usuario.senha);
  
        // Visita a página home e verifica a url correspondente
        cy.visit('/home');
        cy.url().should('include', '/home');
  
        // Verifica se o nome do usuário logado é visível
        cy.contains(usuario.nome).should('be.visible');
  
        // Verifica se a mensagem de Boas vindas está na tela
        cy.getByData('titulo-boas-vindas').should(
          'contain',
          'Bem vindo de volta!'
        );
  
        // Seleciona o campo de select com as opções de transação
        cy.getByData('select-opcoes').select(novaTransacao.tipoTransacao);
        // Verifica se a opção escolhida é a que está selecionada no campo de select
        cy.getByData('select-opcoes').should(
          'have.value',
          novaTransacao.tipoTransacao
        );
  
        // Preenche o campo de texto com o valor da nova transação
        cy.getByData('form-input').type(novaTransacao.valor);
  
        // Verifica se o valor no campo de input é o mesmo valor da nova transação
        cy.getByData('form-input').should('have.value', novaTransacao.valor);
  
        // Clica no botão de realizar transação
        cy.getByData('realiza-transacao').click();
  
        // Verifica se o valor da nova transação está aparecendo na tela
        cy.getByData('lista-transacoes')
          .find('li')
          .last()
          .contains(novaTransacao.valor);
  
        // ******TESTANDO A API******
        // Recupera informações do localStorage
        cy.window().then((win) => {
          const userId = win.localStorage.getItem('userId');
          // Faz uma requisição para a API no endpoint de transações
          cy.request({
            method: 'GET',
            url: `http://localhost:8000/users/${userId}/transations`,
            failOnStatusCode: false,
          }).then((resposta) => {
            expect(resposta.status).to.eq(200);
            expect(resposta.body).is.not.empty;
            expect(resposta.body).to.have.lengthOf.at.least(1);
            expect(resposta.body[resposta.body.length - 1]).to.deep.include(
              novaTransacao
            );
          });
        });
  
        //  Clica no botão de sair da aplicação
        cy.getByData('botao-sair').click();
  
        // Verifica a url, se ela corresponde a rota de home
        cy.url().should('include', '/');
  
        // Faz uma asserção acerta do título da página de início
        cy.getByData('titulo-principal').contains(
          'Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!'
        );
      });
    });
  });
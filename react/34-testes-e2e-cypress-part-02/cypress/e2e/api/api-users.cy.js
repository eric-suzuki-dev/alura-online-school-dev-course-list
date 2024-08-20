describe('Realizando requisições para a API',()=>{
    context('GET /users',()=>{
      it('Deve retornar uma lista de usuários', ()=>{
        cy.request('GET', 'http://localhost:8000/users').then((response)=>{
          expect(response.status).to.eq(200)
          expect(response.body).length.to.be.greaterThan(1)
        })
      })
    })
  })
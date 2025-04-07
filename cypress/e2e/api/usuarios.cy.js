/// <reference types="cypress" />

describe('API Tests com Serverest', () => {

    const baseUrl = 'https://serverest.dev';

    it('Deve permitir criar um novo usuário', () => {
        cy.request({
            method: 'POST',
            url: `${baseUrl}/usuarios`,
            headers: {
                'Content-Type': 'application/json'
            },
            body:{
                "nome": "Dercio Pale",
                "email": "derciopale@qa.com.br",
                "password": "teste123456",
                "administrador": "true"
            },
            failOnStatusCode: false 

        }).then((response)  => {
            expect(response.status).to.eq(201);
            expect(response.body).to.have.property('message','Cadastro realizado com sucesso');
            expect(response.body).to.have.property('_id');
        })
    })


})
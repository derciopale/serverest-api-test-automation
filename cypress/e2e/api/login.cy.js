/// <reference types="cypress" />

const baseUrl = 'https://serverest.dev'; 

describe('Login API Tests com Serverest', () => {

    it('Deve permitir login com credenciais válidas', () => {
        cy.request({
            method: 'POST',
            url:  `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                 "email": "Desmond70@gmail.com",
                 "password": "teste123"
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('message','Login realizado com sucesso');
            expect(response.body).to.have.property('authorization');
        });
    });

    it('Não permitir aceder com email inexistente', () => {
        cy.request({
            method: 'POST',
            url:  `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": "emailinexestenteo@teste.com",
                "password": "teste"
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.equal('Email e/ou senha inválidos');

        });
    });

    it('Não permitir aceder com senha incorrecta', () => {
        cy.request({
            method: 'POST',
            url:  `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": "fulano@qa.com",
                "password": "senhaincorrecta"
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body.message).to.equal('Email e/ou senha inválidos');

        });
    });

    it('Não permitir aceder com campos em branco', () => {
        cy.request({
            method: 'POST',
            url:  `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": '',
                "password": ''
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(400);
            //expect(response.body.message).to.include('obrigatório');

        });
    });

    it('Não permitir formato de email invalido', () => {
        cy.request({
            method: 'POST',
            url:  `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": 'email-invalido',
                "password": 'senha123456'
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(400);
            console.log(response.status)
            //expect(response.body.message).to.include('Email Invalido');

        });
    });

    it.skip('Não permitir aceder com user desactivado', () => {
        cy.request({
            method: 'POST',
            url:  `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": "fulano_desactivado@qa.com",
                "password": "testedesactivado"
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.eq(403);
            //expect(response.body.message).to.include('User desactivado');

        });
    });


    it('Deve bloquear apos varias tentativas', () => {
    for(let i=0; i<5; i++){
        cy.request({
            method: 'POST',
            url:  `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": "userteste@qa.com",
                "password": "senhaErrada"
            },
            failOnStatusCode: false 
        });
    }
    cy.request({
        method: 'POST',
        url:  `${baseUrl}/login`,
        headers: {
            'Content-Type': 'application/json'
        },
        body: {
            "email": "userteste@qa.com",
            "password": "senhaErrada"
        },
        failOnStatusCode: false 
    }) .then((response) => {
            //expect(response.status).to.eq(429);
            //console.log(response.status)
            //expect(response.body.message).to.include('Varias tentativas');

        });
    });



    it('Não deve permitir SQL injection no email', () => {
        cy.request({
            method: 'POST',
            url:  `${baseUrl}/login`,
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                "email": "' OR '1'=1",
                "password": 'qualquercoisa'
            },
            failOnStatusCode: false // Prevent Cypress from failing the test on non-2xx status codes
        }).then((response) => {
            expect(response.status).to.not.eq(200);
            console.log(response.status)
            //expect(response.body.message).to.include('Email Invalido');

        });
    });



})
// Cypress.Commands.add é a sintaxe para incluir um novo comando

Cypress.Commands.add("login", (nome, senha) => {
  cy.get('input[formcontrolname="userName"]').type(nome);
  cy.get('input[formcontrolname="password"').type(senha);
  cy.get('button[type="submit"]').click();
});

describe("Login e registro de usuarios alura pic", () => {
  beforeEach(() => {
    cy.visit("https://ondecomemorar.com.br/");
  });

  it("verifica mensagens de email invalido", () => {
    cy.contains("button", "Login").click();
    cy.get('button[type="submit"]').click();
    cy.get('input[type="email"]').type("testeQA@gmail.com");
    cy.get('input[type="password"]').type("123");
    cy.get('button[type="submit"]').click();
  });

  it("verifica mensagens de email valido", () => {
    cy.contains("button", "Login").click();
    cy.get('button[type="submit"]').click();
    cy.get('input[type="email"]').type("jean199744@gmail.com");
    cy.get('input[type="password"]').type("Jeangomes123");
    cy.get('button[type="submit"]').click();
  });

  it.only("Cadastro", () => {
    cy.contains("button", "Login").click();
    cy.get('button[type="button"]').click();
    cy.contains("button", "Enviar").click();
    cy.contains("button", "Ok").click();
    cy.get('span[class="rainbow-input_faux"]').click();
    cy.contains("button", "Enviar").click();
    cy.contains("button", "Ok").click();
  });
});

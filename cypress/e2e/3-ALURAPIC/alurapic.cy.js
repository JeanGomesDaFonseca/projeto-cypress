// describe("Login e registro de usuarios alura pic", () => {
//   beforeEach(() => {
//     cy.visit("https://alura-fotos.herokuapp.com");
//   });

// it("verifica mensagens validacao", () => {
//   cy.contains("a", "Register now").click();
//   cy.contains("button", "Register").click();
//   cy.contains("ap-vmessage", "Email is required!").should("be.visible");
//   cy.contains("button", "Register").click();
//   cy.contains("ap-vmessage", "User name is required!").should("be.visible");
//   cy.contains("ap-vmessage", "Password is required!").should("be.visible");
//   cy.contains("ap-vmessage", "Full name is required!").should("be.visible");
// });

// it("verifica mensagens de email invalido", () => {
//   cy.contains("a", "Register now").click();
//   cy.contains("button", "Register").click();
//   cy.get('input[formcontrolname="email"]').type("Jean");
//   cy.contains("ap-vmessage", "Invalid e-mail").should("be.visible");
// });

// it("verifica mensagens de senha invalida", () => {
//   cy.contains("a", "Register now").click();
//   cy.contains("button", "Register").click();
//   cy.get('input[formcontrolname="password"]').type("123");
//   cy.contains("button", "Register").click();
//   cy.contains("ap-vmessage", "Mininum length is 8").should("be.visible");
// });

// it.only('fazer login de usuario valido', () =>{
//   cy.login('flavio', '123')
//   cy.contains('a', '(Logout)').should('be.visible');
// })

//   it.only('fazer login de usuario invalido', () => {
//     cy.login('Jean', '1234')
//     cy.on('window:alert', (str) => {
//       expert(str).to.equal("Invalid user name or password")
//     });
//   });
// });

describe("Usabilidade tela inicial", () => {
  beforeEach(() => {
    cy.visit("https://alura-fotos.herokuapp.com");
  });
  /* novos casos de teste */

  it("verifica mensagens tela inicial", () => {
    cy.contains("ap-vmessage", "User name is required!").should("be.visible");
    cy.contains("ap-vmessage", "Password is required!").should("be.visible");
    cy.get('button[type="submit"]').should("be.disabled");
  });

  it("verifica botão habilitado na tela inicial", () => {
    cy.get('input[formcontrolname="userName"]').type("Jean");
    cy.get('input[formcontrolname="password"]').type("123");
    cy.get('button[type="submit"]').should("be.enabled");
  });

  it("verifica nome da aplicação na tela inicial", () => {
    cy.contains("a", "ALURAPIC").should("be.visible");
  });

  it("verifica menu clicavel tela inicial", () => {
    cy.get("navbar-brand > .fa").click();
    cy.get("menu-bar > .fa").should("be.visible");
  });
});

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

describe("Login e registro de usuarios alura pic", () => {
  beforeEach(() => {
    cy.visit('https://alura-fotos.herokuapp.com')
    // cy.visit("https://ondecomemorar.com.br/");
  });

  // it("verifica mensagens de email invalido", () => {
  //   cy.contains("button", "Login").click();
  //   cy.get('button[type="submit"]').click();
  //   cy.get('input[type="email"]').type("testeQA@gmail.com");
  //   cy.get('input[type="password"]').type("123");
  //   cy.get('button[type="submit"]').click();
  // });

  // it("verifica mensagens de email valido", () => {
  //   cy.contains("button", "Login").click();
  //   cy.get('button[type="submit"]').click();
  //   cy.get('input[type="email"]').type("jean199744@gmail.com");
  //   cy.get('input[type="password"]').type("Jeangomes123");
  //   cy.get('button[type="submit"]').click();
  // });

  // it.only("Cadastro", () => {
  //   cy.contains("button", "Login").click();
  //   cy.get('button[type="button"]').click();
  //   cy.contains('button', 'Enviar').click();
  //   cy.contains('button', 'Ok').click();
  //   cy.get('span[class="rainbow-input_faux"]').click();
  //   cy.contains('button', 'Enviar').click();
  //   cy.contains('button', 'Ok').click();
  // });
  


  //testando no site do OndeComemorar UP UP UP UP!



//AULAS DO CURSO DE CYPRESS DOWN DOWN DOWN!

  it('verifica mensagens validacao', () => {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Email is required!').should('be.visible');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'User name is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Password is required!').should('be.visible');
      cy.contains('ap-vmessage', 'Full name is required!').should('be.visible');
  })

  it('verifica mensagens de email invalido', () => {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="email"]').type('jacqueline');
      cy.contains('ap-vmessage', 'Invalid e-mail').should('be.visible');

  })

  it('verifica mensagens de senha com menos de 8 caracteres', () => {
      cy.contains('a', 'Register now').click();
      cy.contains('button', 'Register').click();
      cy.get('input[formcontrolname="password"]').type('123');
      cy.contains('button', 'Register').click();
      cy.contains('ap-vmessage', 'Mininum length is 8').should('be.visible');

  })

  it('fazer login de usuario valido', () => {
      cy.login('flavio', '123');
      cy.contains('a', '(Logout)').should('be.visible');
  })

  it('fazer login de usuario invalido', () => {
      cy.login('Jean', '1234');
      cy.on('window:alert', (str) => {
          expect(str).to.equal('Invalid user name or password');
      })
  })
});

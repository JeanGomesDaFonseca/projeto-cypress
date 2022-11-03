describe("Buscar fotos e dados", () => {
  // beforeEach(() => {
  //     cy.visit('https://alura-fotos.herokuapp.com')
  //   });

  it("buscar fotos do flavio", () => {
    cy.request({
      method: "GET",
      url: "https://apialurapic.herokuapp.com/flavio/photos",
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body[0]).to.have.property("description");
      expect(res.body[0].description).to.be.equal("Farol iluminado");
    });
  });

  // Gerando erro para entender como concertar

  // it.only("buscar fotos do flavio", () => {
  //   const tempoEsperado = Math.random() * 2000;

  //   cy.request({
  //     method: "GET",
  //     url: "https://apialurapic.herokuapp.com/flavio/photos",
  //   }).then((res) => {
  //     expect(res.status).to.be.equal(200);
  //     expect(res.body).is.not.empty;
  //     expect(res.body[0]).to.have.property("description");
  //     expect(res.body[0].description).to.be.equal("Farol iluminado");

  //     expect(res.duration).to.be.lte(tempoEsperado);
// LTE significa: menor que...
// O conceito "fleky"h acontece porque o mesmo código apresenta resultados de falha ou sucesso, sem que haja alguma alteração.

  //   });
  // });

  it("fazer login do flavio", () => {
    cy.request({
      method: "POST",
      url: "https://apialurapic.herokuapp.com/user/login",
      body: Cypress.env(),
    }).then((res) => {
      expect(res.status).to.be.equal(200);
      expect(res.body).is.not.empty;
      expect(res.body).to.have.property("id");
      expect(res.body.id).to.be.equal(1);
      expect(res.body).to.have.property("email");
      expect(res.body.email).to.be.equal("flavio@alurapic.com.br");
    });
  });
});

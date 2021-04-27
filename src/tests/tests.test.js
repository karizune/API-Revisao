const app = require("../index");
const request = require("supertest");

describe("Teste do post", ()=>{
    it("POST", async ()=>{
        const response = await request(app)
        .post("/rota/")
        .send({
            "Nome":"Luan",
            "CPF":"13943511600",
            "Idade":21,
            "SalarioBruto":780,
            "QtdeDependentes":0,
            "Emprego":true,
            "TempoDeEmprego":6,
            "RestricaoSerasa":false
        }).expect(201);
        expect(response.body).toMatchObject({
            "clienteRetorno": {
              "Mensagem": "Limite de 20% do salário bruto disponível",
              "Limite": 156
            }
          });
    });
});

afterAll((done) => {
    app.close();
    done();
  });
  
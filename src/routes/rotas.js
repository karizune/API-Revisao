const { Router, request } = require("express");
const { validate } = require("../Validators/validators.js");
const { ValidationRules } = require("../Validators/ValidationRules.js");
const Service = require("../services/service.js");

const routes = Router();

routes.post("/", ValidationRules(), validate, (request, response) => {
  const {Nome, CPF, Idade, SalarioBruto, QtdeDependentes, Emprego, TempoDeEmprego, RestricaoSerasa} = request.body;
  const cliente = {Nome, CPF, Idade, SalarioBruto, QtdeDependentes, Emprego, TempoDeEmprego, RestricaoSerasa};
  const clienteRetorno = Service.validaRegras(cliente);
  return response.status(201).json({ clienteRetorno });
});


module.exports = routes;
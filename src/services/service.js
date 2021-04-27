module.exports.validaRegras = (cliente) => {
    var retorno
    if(cliente.Idade < 18){
        retorno = {
            Mensagem:"Limite de crédito não disponível"
        }
    }
    else if(cliente.RestricaoSerasa == "S" && cliente.Emprego == "N"){
        retorno = {
            Mensagem:"Limite de crédito não disponível"
        }
    }
    else if(cliente.RestricaoSerasa == "S" && cliente.Emprego == "S" && cliente.TempoDeEmprego < 6){
        retorno = {
            Mensagem:"Limite de crédito não disponível"
        }
    }
    else if(cliente.RestricaoSerasa == "S" && cliente.Emprego == "S" && ccliente.TempoDeEmprego >= 6 && cliente.TempoDeEmprego < 12){
        retorno = {
            Mensagem:"Limite de 10% do salário bruto disponível", 
            Limite: this.calculaLimite(cliente.SalarioBruto, 10)
        }
    }
    else if(cliente.RestricaoSerasa == "S" && cliente.Emprego == "S" && cliente.TempoDeEmprego >= 12){
        retorno = {
            Mensagem:"Limite de 20% do salário bruto disponível", 
            Limite: this.calculaLimite(cliente.SalarioBruto, 20)
        }
    } 
    else if(cliente.RestricaoSerasa == "N" && cliente.Emprego == "N"){
        retorno = {
            Mensagem:"Limite de crédito não disponível"
        }
    }
    else if(cliente.RestricaoSerasa == "N" && cliente.Emprego == "S" && cliente.TempoDeEmprego < 6){
        retorno = {
            Mensagem:"Limite de 10% do salário bruto disponível",
            Limite: this.calculaLimite(cliente.SalarioBruto, 10)
        }
    }
    else if(cliente.RestricaoSerasa == "N" && cliente.Emprego == "S" && cliente.TempoDeEmprego >= 6 && cliente.TempoDeEmprego < 12){
        retorno = {
            Mensagem:"Limite de 20% do salário bruto disponível", 
            Limite: this.calculaLimite(cliente.SalarioBruto, 20)
        }
    }
    else if(cliente.RestricaoSerasa == "N" && cliente.Emprego == "S" && cliente.TempoDeEmprego > 12){
        retorno = {
            Mensagem:"Limite de 30% do salário bruto disponível",
            Limite: this.calculaLimite(cliente.SalarioBruto, 30)
        }
    }
    return retorno;
};

module.exports.calculaLimite = (salario, porcentagem) =>{
    return (salario * (porcentagem/100))
}
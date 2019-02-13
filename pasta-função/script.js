// function NOME (ARGUMENTOS, ARGUMENTOS, ARGUMENTOS) {
// EXECUÇÃO 
// }
// NOME(PARAMETRO, PARAMETRO, PARAMETRO) = TEXTO DENTRO DO ARGUMENTO
function somaElevadaAoQuadrado(a = 0, b = 0) { //Assinatura da função 
    let soma = a + b; 
    return soma ** 2;
} //bloco de execução não precisa de ponto e virgula; 
// RETURN TRAVA O COD E RETORNA O QUE ESTÁ SENDO PEDIDO, SEM VOLTAR PRA LINHA DE BAIXO;
Console.log(somaElevadaAoQuadrado(10,10));

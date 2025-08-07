/******************************************************************
 * Objetivo: Arquivo responsável por calcular o montante, exibir a mensagem e fazer tratativas.
 * Autor: Carlos Eduardo
 * Data: 06/08/2025
 * Versão 1.0
 *****************************************************************/

function calcularJuros(principal, taxaAnual, quantidadeNoAno, tempo){
    let capitalInicial = Number(principal)
    let jurosDecimal = Number(taxaAnual)
    let vezesPorAno = Number(quantidadeNoAno)
    let anos = Number(tempo)

    let decimal = Number(jurosDecimal/100)

    let montante = capitalInicial*(1 + decimal/vezesPorAno)**(vezesPorAno*anos)

    return Number(montante).toFixed(2)
}

function resultado(nomeCliente, nomeProduto, capitalInicial, jurosDecimal, vezesPorAno, anos){
    let vezes = vezesPorAno*anos
    let montanteFinal = calcularJuros(capitalInicial, jurosDecimal, vezesPorAno, anos)

    console.log('******************* Carlos.corp *******************')
    console.log(`Muito obrigado por realizar a sua compra conosco Sr(a) ${nomeCliente}.`)
    console.log(`A compra do produto ${nomeProduto}, tem um valor de: ${capitalInicial}.`)
    console.log(`A sua compra será parcelada em ${vezes} vezes e o Sr(a) pagará: ${montanteFinal}`)
    console.log('                                                  ')
    console.log('Muito obrigado por escolher a Carlos.corp.')
    console.log('*******************************************************')
}

function tratativaVazia(nomeCliente, nomeProduto, capitalInicial, jurosDecimal, vezesPorAno, anos){
    if(nomeCliente == '' || nomeProduto == '' || capitalInicial == '' || jurosDecimal == '' || vezesPorAno == '' || anos == ''){
        console.log('ERRO: Existem campos que não foram preenchidos')
        process.exit(1)
    }

    return false
}

function tratativaIsNan(capitalInicial, jurosDecimal, vezesPorAno, anos){
    if(isNaN(capitalInicial) || isNaN(jurosDecimal) || isNaN(vezesPorAno) || isNaN(anos)){
        console.log('ERRO: Existem campos que foram preenchidos com letras em campos que são números!')
        process.exit(1)

    }

    return false
}

function tratativaNumeroNome(nomeCliente, nomeProduto) {
    if (!isNaN(nomeCliente) || /\d/.test(nomeCliente) ||
        !isNaN(nomeProduto) || /\d/.test(nomeProduto)) {
        
        console.log('ERRO: Existem campos que foram preenchidos com números em campos que são letras!')
        process.exit(1)
    }

    return true
}



   


//console.log(calcularJuros(1000, 8, 4, 5))
module.exports = {
    calcularJuros,
    resultado,
    tratativaVazia,
    tratativaIsNan,
    tratativaNumeroNome,
}
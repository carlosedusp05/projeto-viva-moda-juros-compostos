/********************************************************************
 * Objetivo: Criar uma aplicação para calcuçlar juro composto para um empresa
 * Autor: Carlos Eduardo
 * Data: 05/08/2025
 * Versão 1.0
 ********************************************************************/

const jurosComposto = require('./modulo/viva_moda.js')

var readline = require('readline')

var entradaDeDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDeDados.question('Digite o seu nome: ', function(nome){
    let nomeCliente = String(nome).toUpperCase()

    entradaDeDados.question('Digite o nome do produto: ', function(produto){
        let nomeProduto = String(produto)

        entradaDeDados.question('Digite o capital inicial: ', function(principal){
            let capitalInicial = principal
        
            entradaDeDados.question('Digite a taxa de juros anual: ', function(taxaAnual){
                let jurosDecimal = taxaAnual
            
                entradaDeDados.question('Digite a quantidade de vezes do juros por ano: ', function(quantidadeNoAno){
                    let vezesPorAno = quantidadeNoAno
                
                    entradaDeDados.question('Digite o tempo em anos: ', function(tempo){
                        let anos = tempo

                        let tratativaVazio = jurosComposto.tratativaVazia(nome, produto, principal, taxaAnual, quantidadeNoAno, tempo)
                        let calculo = jurosComposto.calcularJuros(principal, taxaAnual, quantidadeNoAno, tempo)
                        let tratativaIs = jurosComposto.tratativaIsNan(principal, taxaAnual, quantidadeNoAno, tempo)
                        let tratativaNumero = jurosComposto.tratativaNumeroNome(nome, produto)

                        let mensagem = jurosComposto.resultado(nomeCliente, produto, principal, taxaAnual, quantidadeNoAno, tempo)
                    })
                })
            })
        })
    })
})

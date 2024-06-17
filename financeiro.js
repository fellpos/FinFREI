import prompt from 'prompt-sync'

import {Verde,Vermelho} from './exibicao.js'
let ler = prompt()


export function depositar(saldoatual){
    let depositado
    let confirma = false
    let novoValor = 0

    while (confirma == false){
        depositado = ler()
        let depositado2 = String(depositado)

        if (depositado2 == 'c'){
            confirma = true
            depositado = 0
            novoValor = saldoatual + Number(depositado)

        } else if(Number(depositado) > 0){
            confirma = true
            novoValor = saldoatual + Number(depositado)

        }

    return novoValor
    }
}

export function sacar(saldoatual){
    let sacado
    let confirma = false
    let novoValor = 0

    while (confirma == false){
        sacado = ler()
        let sacado2 = String(sacado)

        if (sacado2 == 'c'){
            confirma = true
            sacado = 0
            novoValor = saldoatual - Number(sacado)

        } else if(Number(sacado) > 0){
            confirma = true
            novoValor = saldoatual - Number(sacado)

        }

    return novoValor
    }
    
}

export function exibirsaldo(saldoatual){
    if(saldoatual >= 0){
        console.log(Verde,saldoatual)
        
    } else {
        console.log(Vermelho,saldoatual)

    }
}

export function JurusCompostos(capital, jurus, tempo){
    let m = capital * ((1 + jurus/100)**tempo)
    return m.toFixed(2)
}
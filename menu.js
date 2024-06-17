import prompt from 'prompt-sync'
let ler = prompt()

import {Magenta} from './exibicao.js'

export function menu(){
    console.log(Magenta,`
        1. Depositar
        2. Sacar
        3. Exibir saldo
        4. Simulação de investimento
        0. Sair
    `)
    let menu = Number(ler())

    return menu
}
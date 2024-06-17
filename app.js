import prompt from 'prompt-sync'
let ler = prompt()

import { menu } from './menu.js'
import { titulo, Preto,Verde,Magenta} from './exibicao.js'
import { depositar, sacar, exibirsaldo, JurusCompostos} from './financeiro.js'
let opcao = 0
let saldo = 0

console.log(Magenta,titulo)
do{
    opcao =menu()
    if(opcao == 1){
        saldo = depositar(saldo)
        console.log(Verde,'Deposito Concluído')
    } else if(opcao == 2){
        saldo = sacar(saldo)
        console.log(Verde,'Saque Concluído')
    } else if(opcao == 3){
        exibirsaldo(saldo)
    } else if(opcao == 4){
        console.log(Preto,'informe o capital inicial')
        let captinicial = Number(ler())
        console.log(Preto,'informe os juros')
        let Juros = Number(ler())
        console.log(Preto,'informe o tempo em meses')
        let Tempo = Number(ler())
        let resultado = JurusCompostos(captinicial, Juros, Tempo)
        console.log(Verde,`
O Montante é de: R$ ${resultado}`)
    }
    

}while( opcao != 0 )
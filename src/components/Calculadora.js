import React from 'react'
import './index.css'
import Display from './Display'
import Botao from './Botao'


// const estado_padrao = {
//     valorDisplay: '0',
//     limparDisplay: false,
//     operacao: null,
//     valores: [0, 0],
//     indice: 0
// }

export default function Calculadora() {

    function _limpar() {

    }

    function _operacao(operacao) {
        
//             if (this.state.valores[0] === 0) return

//             if (this.state.indice === 0) {

//                 this.setState({ operacao, indice: 1, limparDisplay: true })

//             } else {
                
//                 const igual = operacao === '='
//                 const operacaoAntiga = this.state.operacao

//                 const valores = [...this.state.valores]
//                 try {
//                     valores[0] = eval(`${valores[0]} ${operacaoAntiga} ${valores[1]}`) 
//                 } catch (error) { valores[0] = this.state.valores[0] }

//                 valores[1] = 0

//                 this.setState({
//                     valorDisplay: valores[0],
//                     operacao: igual ? null : operacao,
//                     indice: igual ? 0 : 1,
//                     limparDisplay: !igual,
//                     valores
//                 })
//             }
    }

    function _adicionar(label) {
        //validar: apenas um ponto no displey
//             if (label === '.' && this.state.valorDisplay.includes('.')) return

//             //validar: retirar zero a esquerda e Validar: checar variavel limparDisplay
//             const limparDisplay = this.state.valorDisplay === '0' || this.state.limparDisplay
//             const valorAtual = limparDisplay ? '' : this.state.valorDisplay


//             const valorDisplay = valorAtual + label

//             const valores = [...this.state.valores]
//             if (label !== '.') valores[this.state.indice] = parseFloat(valorDisplay) 

//             this.setState({ valorDisplay, limparDisplay: false, valores })
    }

    return (
        <div className='calculadora'>
            <Display valor={'valorDisplay'}></Display>

            <Botao label='AC' click={_limpar} span='span-3'></Botao>
            <Botao label='/' click={_operacao} operacao></Botao>
            <Botao label='7' click={_adicionar} ></Botao>
            <Botao label='8' click={_adicionar} ></Botao>
            <Botao label='9' click={_adicionar} ></Botao>
            <Botao label='*' click={_operacao} operacao></Botao>
            <Botao label='4' click={_adicionar} ></Botao>
            <Botao label='5' click={_adicionar} ></Botao>
            <Botao label='6' click={_adicionar} ></Botao>
            <Botao label='-' click={_operacao} operacao></Botao>
            <Botao label='1' click={_adicionar} ></Botao>
            <Botao label='2' click={_adicionar} ></Botao>
            <Botao label='3' click={_adicionar} ></Botao>
            <Botao label='+' click={_operacao} operacao></Botao>
            <Botao label='0' click={_adicionar} span='span-2'></Botao>
            <Botao label='.' click={_adicionar} ></Botao>
            <Botao label='=' click={_operacao} operacao></Botao>
        </div>
    )
}
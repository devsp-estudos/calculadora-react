import React, { useState } from 'react'
import './index.css'
import Display from './Display'
import Botao from './Botao'


export default function Calculadora() {

    const [valorDisplay, setValorDisplay] = useState('0')
    const [limparDisplay, setLimparDisplay] = useState(false)
    const [operacao, setOperacao] = useState(null)
    const [valores, setValores] = useState([0, 0])
    const [indice, setIndice] = useState(0)

    function _adicionar(label) {

        // validar: apenas um ponto no displey
        if (label === '.' && valorDisplay.includes('.')) return

        //validar: retirar zero a esquerda e Validar: checar variavel limparDisplay
        const check_limparDisplay = valorDisplay === '0' || limparDisplay
        const valorAtual = check_limparDisplay ? '' : valorDisplay

        const novo_valorDisplay = valorAtual + label
        const novos_valores = [...valores]

        if (label !== '.') novos_valores[indice] = parseFloat(novo_valorDisplay)

        setValorDisplay(novo_valorDisplay)
        setLimparDisplay(false)
        setValores(novos_valores)
    }

    function _operacao(operacao_clicada) {

        if (valores[0] === 0) return

        if (indice === 0) {

            setIndice(1)
            setOperacao(operacao_clicada)
            setLimparDisplay(true)

        } else {

            const igual = operacao_clicada === '='
            const novos_valores = [...valores]

            try {
                novos_valores[0] = eval(`${novos_valores[0]} ${operacao} ${novos_valores[1]}`)
            } catch (error) { novos_valores[0] = valores[0] }

            novos_valores[1] = 0

            setValorDisplay(novos_valores[0])
            setLimparDisplay(!igual)
            setOperacao(igual ? null : operacao_clicada)
            setValores(novos_valores)
            setIndice(igual ? 0 : 1)

        }
    }

    function _limpar() {
        setValorDisplay('0')
        setLimparDisplay(false)
        setOperacao(null)
        setValores([0, 0])
        setIndice(0)
    }

    return (
        <div className='calculadora'>
            <Display valor={valorDisplay}></Display>

            <Botao label='AC' funcao={_limpar} span='span-3'></Botao>
            <Botao label='/' funcao={_operacao} operacao></Botao>
            <Botao label='7' funcao={_adicionar} ></Botao>
            <Botao label='8' funcao={_adicionar} ></Botao>
            <Botao label='9' funcao={_adicionar} ></Botao>
            <Botao label='*' funcao={_operacao} operacao></Botao>
            <Botao label='4' funcao={_adicionar} ></Botao>
            <Botao label='5' funcao={_adicionar} ></Botao>
            <Botao label='6' funcao={_adicionar} ></Botao>
            <Botao label='-' funcao={_operacao} operacao></Botao>
            <Botao label='1' funcao={_adicionar} ></Botao>
            <Botao label='2' funcao={_adicionar} ></Botao>
            <Botao label='3' funcao={_adicionar} ></Botao>
            <Botao label='+' funcao={_operacao} operacao></Botao>
            <Botao label='0' funcao={_adicionar} span='span-2'></Botao>
            <Botao label='.' funcao={_adicionar} ></Botao>
            <Botao label='=' funcao={_operacao} operacao></Botao>
        </div>
    )
}
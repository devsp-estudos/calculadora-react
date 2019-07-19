import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './index.css'


const estado_padrao = {
    valorDisplay: '0',
    limparDisplay: false,
    operacao: null,
    valores: [0, 0],
    indice: 0
}

class Calculadora extends Component {

    state = {...estado_padrao}

    components = {
        Displey: texto => <div className='display'> {texto} </div>,
        Button: (conteudo, funcao , classes = '') => <button className={`button ${classes}`} onClick={() => funcao(conteudo)}>{conteudo}</button>,
    }

    funcoes = {

        limpar: () => this.setState({...estado_padrao}),

        operacao: operacao => {

            if (this.state.valores[0] === 0) return

            if (this.state.indice === 0) {

                this.setState({ operacao, indice: 1, limparDisplay: true })

            } else {
                
                const igual = operacao === '='
                const operacaoAntiga = this.state.operacao

                const valores = [...this.state.valores]
                try {
                    valores[0] = eval(`${valores[0]} ${operacaoAntiga} ${valores[1]}`) 
                } catch (error) { valores[0] = this.state.valores[0] }

                valores[1] = 0

                this.setState({
                    valorDisplay: valores[0],
                    operacao: igual ? null : operacao,
                    indice: igual ? 0 : 1,
                    limparDisplay: !igual,
                    valores
                })
            }
        },

        add: conteudo => {
            
            //validar: apenas um ponto no displey
            if (conteudo === '.' && this.state.valorDisplay.includes('.')) return

            //validar: retirar zero a esquerda e Validar: checar variavel limparDisplay
            const limparDisplay = this.state.valorDisplay === '0' || this.state.limparDisplay
            const valorAtual = limparDisplay ? '' : this.state.valorDisplay


            const valorDisplay = valorAtual + conteudo

            const valores = [...this.state.valores]
            if (conteudo !== '.') valores[this.state.indice] = parseFloat(valorDisplay) 

            this.setState({ valorDisplay, limparDisplay: false, valores })
        },
    }


    render() {
        return (
            <React.Fragment>
                <h1>Calculadora</h1>
                <div className='calculadora'>
                    {this.components.Displey(this.state.valorDisplay)}

                    {this.components.Button('AC', this.funcoes.limpar, 'span-3')}
                    {this.components.Button('/', this.funcoes.operacao, 'op')}
                    {this.components.Button('7', this.funcoes.add)}
                    {this.components.Button('8', this.funcoes.add)}
                    {this.components.Button('9', this.funcoes.add)}
                    {this.components.Button('*', this.funcoes.operacao, 'op')}
                    {this.components.Button('4', this.funcoes.add)}
                    {this.components.Button('5', this.funcoes.add)}
                    {this.components.Button('6', this.funcoes.add)}
                    {this.components.Button('-', this.funcoes.operacao, 'op')}
                    {this.components.Button('1', this.funcoes.add)}
                    {this.components.Button('2', this.funcoes.add)}
                    {this.components.Button('3', this.funcoes.add)}
                    {this.components.Button('+', this.funcoes.operacao, 'op')}
                    {this.components.Button('0', this.funcoes.add, 'span-2')}
                    {this.components.Button('.', this.funcoes.add)}
                    {this.components.Button('=', this.funcoes.operacao, 'op')}
                </div>
            </React.Fragment>
        )
    }
}

ReactDOM.render(<Calculadora />, document.getElementById('root'))
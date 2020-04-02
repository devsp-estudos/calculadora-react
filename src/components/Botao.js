import React from 'react'


export default ({ label, funcao, span, operacao }) => {

    let classes = 'button '
    classes += span ? span : ''
    classes += operacao ? ' op' : ''

    return (
        <button className={classes} onClick={() => funcao(label)}>
            {label}
        </button>
    )
}

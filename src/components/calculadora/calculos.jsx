import { useState } from 'react'
import './calculos.css'

function Calculos() {

    let total = ''
    //ATRIBUIÇÕES

    const valores = (num) => {
        total = total + num
        // console.log(total)
        setResultadoinp(total)
        valor(total)
    }

    //OPERAÇÕES
    const soma = () => {

        total = `${total}+`
        valor(total)
    }

    const mult = () => {
        total = `${total}*`
        valor(total)
    }

    const sub = () => {
        total = `${total}-`
        valor(total)
    }

    const divisao = () => {
        total = `${total}/`
        valor(total)
    }

    //TOTAL
    const result = () => {
        total = eval(total)
        valor(total)
    }

    const valor = (valorTotal) => {
        console.log(valorTotal)
        setResultadoinp(valorTotal)
    }

    const limpar = () => {
        // setResultadoinp()
        total = ''
    }
    const [resultadoInp, setResultadoinp] = useState("")
    return (
        <div>
            <table>
                <tr>
                    <td><button id="um" onClick={() => valores(1)}>1</button></td>
                    <td><button id="dois" onClick={() => valores(2)}>2</button></td>
                    <td><button id="tres" onClick={() => valores(3)}>3</button></td>
                    <td><button id="mais" onClick={soma}>+</button></td>
                </tr>
                <tr>
                    <td><button id="quatro" onClick={() => valores(4)}>4</button></td>
                    <td><button id="cinco" onClick={() => valores(5)}>5 </button></td>
                    <td><button id="seis" onClick={() => valores(6)}>6</button></td>
                    <td><button id="menos" onClick={sub}>-</button></td>
                </tr>
                <tr>
                    <td><button id="sete" onClick={() => valores(7)}>7</button></td>
                    <td><button id="oito" onClick={() => valores(8)}>8</button></td>
                    <td><button id="nove" onClick={() => valores(9)}>9</button></td>
                    <td><button id="vezes" onClick={mult}>*</button></td>
                </tr>
                <tr>
                    <td colspan="3" id="zero" onClick={() => valores(0)}><button>0</button></td>
                    <td colspan="3" id="divisao" onClick={divisao}><button>/</button></td>
                </tr>
                <tr>
                    <td colspan="2" id="limpar"><button class="ac" onClick={limpar()}>AC</button></td>
                    <td><button id="ponto" onClick={() => valores()}>.</button></td>
                    <td><button id="igual" onClick={result}>=</button></td>
                </tr>
            </table>
            <p id='p'></p>
            <label for="input">Resultado</label>
            <input type="text" value={resultadoInp}></input>
        </div>
    );
}

export default Calculos;

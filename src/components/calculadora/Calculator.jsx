import React, { useState } from 'react'
import './Calculator.css'
import Container from '@mui/material/Container'
import { Box } from '@mui/system'

export default function Calculator() {
    const [num, setNum] = useState(0);
    const [oldNum, setOldNum] = useState(0);
    const [operator, setOperator] = useState();

    function inputNum(e) {
        var input = e.target.value
        setNum(num + input)
        if (num === 0) {
            setNum(input)
        } else {
            setNum(num + input)
        }
        console.log(e.target.value)
    }

    function clear(e) {
        setNum(0)
    }

    function porcentagem() {
        setNum(num / 100)
    }

    function changeSign() {
        if (num > 0) {
            setNum(-num)
        } else {
            setNum(Math.abs(num))
        }
    }

    function operatorHandler(e) {
        var operatorInput = e.target.value
        setOperator(operatorInput)
        setOldNum(num)
        setNum(0)
    }

    function calculate() {
        if (operator === "/") {
            setNum(oldNum / num)
        } else if (operator === "x") {
            setNum(oldNum * num)
        } else if (operator === "-") {
            setNum(oldNum - num)
        } else if (operator === "+") {
            setNum(parseFloat(oldNum) + parseFloat(num))
        }
    }
    return (
        <div>
            <Box m={5} />
            <Container maxWidth="sx">
                <div className='wrapper'>
                    <h1 className='result'>{num}</h1>
                    <button onClick={inputNum} value={1}>1</button>
                    <button onClick={inputNum} value={2}>2</button>
                    <button onClick={inputNum} value={3}>3</button>
                    <button onClick={inputNum} value={4}>4</button>
                    <button onClick={inputNum} value={5}>5</button>
                    <button onClick={inputNum} value={6}>6</button>
                    <button onClick={inputNum} value={7}>7</button>
                    <button onClick={inputNum} value={8}>8</button>
                    <button onClick={inputNum} value={9}>9</button>
                    <button onClick={inputNum} value={0}>0</button>
                    <button onClick={inputNum} value={"."}>,</button>
                    <button onClick={clear}>AC</button>
                    <button onClick={changeSign}>+/-</button>
                    <button onClick={porcentagem}>%</button>
                    <button onClick={operatorHandler} value={"/"} className='orange'>/</button>
                    <button onClick={operatorHandler} value={"x"} className='orange'>x</button>
                    <button onClick={operatorHandler} value={"-"} className='orange'>-</button>
                    <button onClick={operatorHandler} value={"+"} className='orange'>+</button>
                    <button onClick={calculate}>=</button>
                </div>
            </Container>
        </div>

    )
}
import React, { useState } from 'react'
import './style.css'
export default function Ex2() {

    const [num, setNum] = useState(0)

    function mais() {
        setNum(num + 1)
    }

    function menos() {
        setNum(num -1)
    }


    return (
        <div>
            <button onMouseOver={mais}>+</button>
            <button onMouseOver={menos}>-</button> <br />
            <h2>{num}</h2>
        </div>)
}

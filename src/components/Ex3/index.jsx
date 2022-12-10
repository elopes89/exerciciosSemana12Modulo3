import { useState } from "react";
import React from 'react';
export default function Ex3() {

    const [cidade, setCidade] = useState("")
    const [rua, setRua] = useState("")
    const [estado, setEstado] = useState("")
    const [latitude, setLatitude] = useState("")
    const [longitude, setLongitude] = useState("")
    let cep = [];
    let inputCep = ""

    function pegaInput(e) {
        inputCep = e.target.value
    }

    // cep = await (await fetch("https://brasilapi.com.br/api/cep/v2/88062015")).json()

    async function pegaCep() {
        cep = await (await fetch("https://brasilapi.com.br/api/cep/v2/" + inputCep)).json()
        console.log(cep)
        if (cep.city) {
            setCidade(cep.city)
            setRua(cep.street)
            setEstado(cep.state)
            setLatitude(cep.location.coordinates.latitude)
            setLongitude(cep.location.coordinates.longitude)
        } else if (inputCep === "") {
            alert("Erro")
        } else {
            alert("Erro")
        }
    }

    return (
        <div>
            <h1>Ex 3 Api Cep</h1>
            <input type="text" onChange={pegaInput} />
            <button onClick={pegaCep} >Pesquisar</button>
            <p>Logradouro: {rua}</p>
            <p>Cidade: {cidade}</p>
            <p>Estado: {estado}</p>
            <p>Latitude: {latitude}</p>
            <p>Longitude: {longitude}</p>

        </div>
    )

}
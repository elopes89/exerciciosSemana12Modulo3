import { useState } from "react";
import React from 'react';

export default function Ex4() {

    const [pocket, setPocket] = useState()
    const [geral, setGeral] = useState()

    let pokemon = []
    async function pegaPoke() {
        pokemon = await (await fetch(`https://pokeapi.co/api/v2/pokemon/${pocket}`)).json()
        if (pokemon.name) {
            setGeral(pokemon)
        }
    }
    return (
        <div>
            <h1>Exercício 4</h1>
            <input type="radio" value="pikachu" name="pokemon" onChange={e => setPocket(e.target.value)} />
            <label>Pikachu</label> <br />

            <input type="radio" value="bulbasaur" name="pokemon" onChange={e => setPocket(e.target.value)} />
            <label>Bulbasaur</label><br />
            <input type="radio" name="pokemon" value="mewtwo" onChange={e => setPocket(e.target.value)} />
            <label>Mewtwo</label><br />

            <input type="radio" name="pokemon" value="groudon" onChange={e => setPocket(e.target.value)} />
            <label>Groudon</label> <br /> <br />

            <button id="btn" onClick={pegaPoke}>Pesquisar Pokemon</button>
            {geral && geral.stats.map((e) => <p>{`${e.stat.name} = ${e.base_stat}`}</p>)}

        </div>
    )
}


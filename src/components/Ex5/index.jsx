import { useState } from "react";

export default function Exercicio5() {
    const [nomeEst, setNomeEst] = useState()
    const [pagina, setPagina] = useState(1)
    let rick = []
    let arrayAlives = []

    function avancar() {
        if (pagina < 42) {
            setPagina(pagina + 1)
        }
    }
    function voltar() {
        if (pagina > 1) {
            setPagina(pagina - 1)
        }
    }

    async function getAlives() {
        rick = await (await fetch(`https://rickandmortyapi.com/api/character/?page=${pagina}`)).json()
        for (let i = 0; i < rick.results.length; i++) {
            if (rick.results[i].status === 'Alive') {
                arrayAlives.push(rick.results[i])
            }
        }
        setNomeEst(arrayAlives)
    }

    getAlives()

    return (
        <div>
            <h1>Exercício 5</h1>
            <h2>Página: {pagina}</h2>
            <button onClick={avancar}>AVANÇAR</button>
            <button onClick={voltar}>VOLTAR</button>
            <h3>Personagens vivos da série</h3>
            <ul>


                {nomeEst && nomeEst.map((number, e) => <li key={e}>{`Nome: ${number.name}, Espécie: ${number.species}`}</li>)
                }


            </ul>
        </div>
    )
}

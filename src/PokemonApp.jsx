import React, { useEffect } from 'react'
// Esto evita re-renderizaciones innecesarias y mejora el rendimiento de la aplicación

// En React, la función useSelector es un hook de la biblioteca Redux
//  que permite acceder al estado global de la aplicación 
//  dentro de un componente funcional.

import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from './app/slices/poke/thunk';

export const PokemonApp = () => {
    // simpre cuando se ponde un array vacio es para inidicar que no de error
    const { isLoading, pokemon = [], pages } = useSelector(state => (state.pokemon) )
    // useSelector accede al estado global y extrae la parte del estado que corresponde a pokemon (state.pokemon).

    const Dispatch = useDispatch();

    useEffect(() => {
        Dispatch(getPokemon())
    }, [])
    

    return (
        <>
            <h1>PokemonApp</h1>
            <hr/>

            <span>Loading: { isLoading ? 'False' : 'True'}</span>

            <ul>
                {
                    pokemon.map( ({name}) => (
                    <li key={ name }>{ name }</li>
                    ))
                }
            </ul>

            <button disabled={ isLoading } onClick={ () => Dispatch(getPokemon(pages))}>
                Siguiente
            </button>
        </>
    )
}

import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getPokemon } from './app/slices/poke/thunk';

export const PokemonApp = () => {

    const { isLoading, pokemon = [], pages } = useSelector(state => (state.pokemon) )

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

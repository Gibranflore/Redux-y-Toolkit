import { pokemonApi } from "../../../Api/pokemonApi";
import { setLoadingpokemon, setpokemon } from "./PokemonSlice"

export const getPokemon = ( page= 0 ) => {
    return async(dispatch, getState) => {
        dispatch(setLoadingpokemon());

        // const resp = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${ page = 0 }`)
        // const data = await resp.json();

        const {data} = await pokemonApi(`/pokemon?limit=10&offset=${ page * 10 }`);
        dispatch( setpokemon({pokemon: data.results, page: page + 1 }))
        
        
    }
}
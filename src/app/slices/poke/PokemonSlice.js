import { createSlice } from '@reduxjs/toolkit';

export const pokemonSlice = createSlice({
    name: 'pokemon', // Nombre del slice
    initialState: {
        pages: 0, // Valor inicial
        pokemon: [],
        isLoading: false,
    },
    reducers: {
        
        setLoadingpokemon: (state, /*action*/ ) => {
            state.isLoading = true
        },
        setpokemon: (state, action) => {
            state.isLoading = false;
            state.pages = action.payload.page;
            state.pokemon = action.payload.pokemon;

        },

    }
});

export const { setLoadingpokemon, setpokemon } = pokemonSlice.actions;
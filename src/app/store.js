import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slices/counter'
import { pokemonSlice } from './slices/poke'
import { TodoApi } from './Api/TodoApi';

// Crea un store de Redux utilizando Redux Toolkit
// Este código crea y exporta la store de Redux con configureStore(), 
// donde se define un reducer llamado counter, el cual proviene de counterSlice.reducer.

export default configureStore({
    reducer: {
        counter: counterSlice.reducer,
        pokemon: pokemonSlice.reducer,
        //o TodoApi.reducerPath es una clave dinámica que Redux Toolkit
        //  usa para almacenar los datos de la API en el estado global.
        [TodoApi.reducerPath]: TodoApi.reducer,
    },
    middleware: ( getDefaulMiddleware ) => getDefaulMiddleware()
        .concat(TodoApi.middleware)
});



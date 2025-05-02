//!  Una función de consulta que se usa para hacer peticiones HTTP con fetch()
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const TodoApi = createApi({
    //* donde se almacenarán los datos.
    reducerPath: 'Todos',
    //? Define la URL base de la API
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com'
    }),
    //^ Aquí definimos las solicitudes de datos.
    endpoints: (builder) => ({ 
        //& builder.query: Se usa para solicitudes GET
        getTodos: builder.query({
            //~ query(): Define la ruta del endpoint:
            query: () => '/todos'
        }),
        // todo Define un todo especifico por su id
        getTodoById: builder.query({
            query: (todoId) => `/todos/${todoId}`
        }),
    })
})

export const { useGetTodosQuery, useGetTodoByIdQuery } = TodoApi;
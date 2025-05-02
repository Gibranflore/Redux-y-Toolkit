import React, { useState } from 'react'
import { useGetTodosQuery, useGetTodoByIdQuery } from './app/Api/TodoApi'


export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)
  
  // const { data: todo = [], isLoading } = useGetTodosQuery(todoId);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

  // 2 FUniones donde sumara 1 y regresara 1
  const nextTodo = () => {
    setTodoId(todoId + 1 )
  }

  const previoTodo = () => {
    if(todoId === 1 ) return;
        setTodoId(todoId - 1);
  }

  return (
    <>
        <h1>Todos - RTK- Query</h1>
        <hr/>
        {/* El ternario cada que cargue se pondra en false */}
        <h4>isLoading...{isLoading ? 'True' : 'Falae'}</h4>

        {/* El http que usamos en el Api son json y qui los podemos ver */}
        <pre>{ JSON.stringify( todo ) }</pre>

        <button onClick={previoTodo}>
            previo
        </button>

        <button onClick={nextTodo}>
            next
        </button>

        {/* {
          Todos.map( todo => (
              <li key={todo.id}>
                  <strong> { todo.completed ? 'DONE' : 'Pendiente' } </strong>
                {todo.title}
              </li>
          ))
        } */}

    </>
  )
}

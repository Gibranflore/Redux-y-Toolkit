import React, { useState } from 'react'
import { useGetTodosQuery, useGetTodoByIdQuery } from './app/Api/TodoApi'


export const TodoApp = () => {

  const [todoId, setTodoId] = useState(1)
  
  // const { data: todo = [], isLoading } = useGetTodosQuery(todoId);
  const { data: todo, isLoading } = useGetTodoByIdQuery(todoId);

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

        <h4>isLoading...{isLoading ? 'True' : 'Falae'}</h4>

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


import { useDispatch, useSelector } from 'react-redux'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { decrement, increment, multiplicar } from './app/slices/counter/counterSlice'

function App() {

//esto es de nuestro "counterSlice tiene el state y el counter, y ocupamos el counter"
const { counter } = useSelector( (state) => state.counter)
const dispatch = useDispatch()

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p> count is {counter} </p>
          <button onClick={() => dispatch(increment())} >
            increment {counter}
          </button>
          {/* Aqui es 2 porque es multiplicar es una fucnion que recive el 2 y lo sumara en 2 en 2, igual podemos poner un nombre {name: 'Gibran'} */}
          <button onClick={() => dispatch(multiplicar(2))} >
            increment by 2 {counter}
          </button>

          <button onClick={() => dispatch(decrement())} >
            decrement {counter}
          </button>

      </div>
    </>
  )
}

export default App

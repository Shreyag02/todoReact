import React, {useReducer, useState} from "react"
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';
// import {TodoContext} from './Context/TodoContext'
// import todoReducer from './Context/reducer'
import TodoForm from "./Components/TodoForm";
import Todos from "./Components/Todos";
import todoimg from './assets/todo.svg'
const App = () => {
  
  // const [todos, dispatch] = useReducer(todoReducer, [])
  const [todos, setTodos] = useState([])
  return(
    // <TodoContext.Provider value={{todos, dispatch}}>
      <Container fluid>
        <h1 className="text-center m-5">Todo Application</h1>
        <div class="container main">
          <div class="row d-flex align-items-center">
            <div class="col-md-6 text-center">
              <img src={todoimg}/>
            </div>
            <div class="col-md-6">
              <TodoForm todos={todos} setTodos={setTodos}/>
              <Todos todos={todos} setTodos={setTodos} />
            </div>
          </div>
        </div>
      </Container>
    // </TodoContext.Provider>
  );
}

export default App;

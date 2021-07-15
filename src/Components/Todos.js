import React, {useContext} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaTimes} from 'react-icons/fa'
// import {TodoContext} from '../Context/TodoContext'
// import {REMOVE_TODO} from '../Context/action.types'
function Todos({todos,setTodos}) {
    // const {todos, dispatch} = useContext(TodoContext)

    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(item => (
                <ListGroupItem key={item.id}>
                    {item.todoString}
                    <span className="float-end"
                    onClick={() => {
                        // dispatch({
                        //     type: REMOVE_TODO,
                        //     payload: todo.id
                        // })
                        setTodos(todos.filter(todo => todo.id !== item.id))
                    }}>
                        <FaTimes/>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos

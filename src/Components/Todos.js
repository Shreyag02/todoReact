import React, {useContext} from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaTimes} from 'react-icons/fa'
import {TodoContext} from '../Context/TodoContext'
import {REMOVE_TODO} from '../Context/action.types'
function Todos() {
    const {todos, dispatch} = useContext(TodoContext)
    return (
        <ListGroup className="mt-5 mb-2 items">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                    {todo.todoString}
                    <span className="float-end"
                    onClick={() => {
                        dispatch({
                            type: REMOVE_TODO,
                            payload: todo.id
                        })
                    }}>
                        <FaTimes/>
                    </span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos

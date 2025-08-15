import React from 'react'
import { useDispatch } from 'react-redux'
import { removeTodo, toggleComplete } from '../features/todoslice'

const Todo = ({ todo }) => {
    const dispatch = useDispatch()
    
    return (
        <div className="flex items-center justify-between bg-gray-700 p-3 rounded mb-2">
            <div className="flex items-center">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() => dispatch(toggleComplete(todo.id))}
                    className="mr-3"
                />
                <span className={`${todo.completed ? 'line-through text-gray-400' : 'text-white'}`}>
                    {todo.text}
                </span>
            </div>
            <button
                onClick={() => dispatch(removeTodo(todo.id))}
                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
            >
                Delete
            </button>
        </div>
    )
}

export default Todo
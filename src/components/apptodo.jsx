import React from 'react'
import { useDispatch } from 'react-redux';
import { addTodo } from '../features/todoslice';

function AddTodo() {
    const [input, setInput] = React.useState('');
    const dispatch = useDispatch();
    
    const addTodoHandler = (e) => {
        e.preventDefault();
        if (input.trim()) {
            dispatch(addTodo(input));
            setInput('');
        }
    };
    
    return (
        <form onSubmit={addTodoHandler} className="todo-form">
            <input
                type="text"
                className="bg-gray-800 rounded border-2 border-gray-600 p-2 w-full text-white"
                placeholder="Add a new todo"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            <button type="submit" className="bg-blue-500 text-white p-2 rounded ml-2">
                Add Todo
            </button>
        </form>
    )
}

export default AddTodo
import { useSelector } from 'react-redux'
import AddTodo from './components/apptodo'
import Todo from './components/todo'
import './App.css'

function App() {
  const todos = useSelector(state => state.todos.todos)

  return (
    <div className="min-h-screen bg-gray-900 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-white text-center mb-8">
          Redux Toolkit Todo
        </h1>
        <AddTodo />
        <div className="mt-6">
          {todos.map((todo) => (
            <Todo key={todo.id} todo={todo} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
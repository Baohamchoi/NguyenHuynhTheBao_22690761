import React, {useState, useEffect, useRef, useMemo, useReducer} from "react";
import toDoReducer from "./BT1/ToDoList";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'


const App = () => {
  const [todos, dispatch] = useReducer(toDoReducer, [])
  const [inputValue, setInputValue] = useState('')
  const inputRef = useRef();

  useEffect(() => {
    const storedTodos = JSON.parse(localStorage.getItem('todos'));
    if (storedTodos) {
      dispatch({ type: 'SET', payload: storedTodos });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const filteredTodos = useMemo(() => {
    return {
      imcomplete: todos.filter(todo => !todo.completed),
      completed: todos.filter(todo => todo.completed),
    };
  }, [todos])

  const handleAddTodo = () => {
    if (!inputValue) {
      alert('Please enter a todo');
      return;
    };
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
    };
    dispatch({ type: 'ADD', payload: newTodo });
    setInputValue('');
    inputRef.current.focus();
  };

  const handleToggleTodo = (id) => {
    dispatch({ type: 'TOGGLE', payload: id });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: 'DELETE', payload: id });
  };

  return (
    <div className="">
      <div className="d-flex flex-column justify-content-center align-items-center border p-3" style={{ width: '25%', margin: 'auto' }}>
        <h1 className="text-success">Todo List</h1>
        <input
          ref={inputRef}
          type="text"
          value={inputValue}
          placeholder="Add a new todo..."
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button className="btn btn-success mt-3 justify-content-center" onClick={handleAddTodo}>Add Todo</button>
        <ul className="d-flex flex-column justify-content-center" style={{ width: '100%' }}>
          {todos.map(todo => (
            <li key={todo.id} className="mt-3 border p-3" style={{listStyle: "none"}}>
              <span
                style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
                onClick={() => handleToggleTodo(todo.id)}
              >
                {todo.text}
              </span>
              <button className="btn btn-danger ms-3 float-end" onClick={() => handleDeleteTodo(todo.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
    
  )
}

export default App

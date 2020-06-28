import React, { useState } from 'react';
import '../content.styles.css';
import {getRecords} from 'common/util';
const Todo = ({ todo, index, completeTodo, removeTodo }) => {
  return (
    <div
      style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }}
      className="todo"
    >
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>✔</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  )
}

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form className='todo-form' onSubmit={handleSubmit}>
      <input
        type='text'
        className='todo-form-input'
        value={value}
        placeholder='Add Todo...'
        onChange={e => setValue(e.target.value)}
      />
    </form>
  )
}

const App = async () => {
  const [todos, setTodos] = useState([
    {
      text: '1',
      isCompleted: false
    },
    {
      text: '2',
      isCompleted: false
    },
    {
      text: '3',
      isCompleted: false
    },
    {
      text: '4',
      isCompleted: false
    },
    {
      text: '5',
      isCompleted: false
    },
    {
      text: '6',
      isCompleted: false
    },
  ]);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }

  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }

  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo
            key={index}
            index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <div className="todo-form-div">
        <TodoForm addTodo={addTodo} />
      </div>
    </div>
  )
}

export default App;

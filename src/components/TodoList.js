import React, { useState } from 'react';
import TodoFrom from './TodoFrom';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([])
    //add todo
    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos];

        setTodos(newTodos);
    };

    //update todo
    const updatedTodos = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            return;
        }

        setTodos(prev => prev.map(item =>(item.id === todoId ? newValue : item))
        );
    };

    //remove todo
    const removeTodo = id => {
        const removeArr = [...todos].filter(todo => todo.id!== id)

        setTodos(removeArr);
    };

    
    //complete todo
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.is === id) {
                todo.isComplete = !todo.isComplete
            }
            return todo
        });
        setTodos(updatedTodos);
    };

  return (
    <div>
        <h1>TodoList Kelompok 2</h1>
        <TodoFrom onSubmit={addTodo} />
        <Todo todos={todos} completeTodo={completeTodo} removeTodo=
        {removeTodo} updatedTodos={updatedTodos} />
    </div>
  )
}

export default TodoList
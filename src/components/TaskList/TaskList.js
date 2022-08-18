import React, {useState} from 'react';
import AddNewTask from '../AddNewTask/AddNewTask';
import BackLog from '../BackLog/BackLog';

function TaskList() {
    const [todos, setTodos] = useState([]);
    // add to do function 
    const addTodo = todo => {
        // validate form form has content in it
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }
        const newTodos = [todo, ...todos];
        setTodos(newTodos)
        console.log(...todos);
    }
    
    // edit to do 
    const updateTodo = (todoId, newTodo) => {
        if(!newTodo.text || /^\s*$/.test(newTodo.text)) {
            return;
        }
        setTodos(prev => prev.map(item => (item.id === todoId ? newTodo : item )));
    }

    // delete todo
    const removeTodo = id => {
        // Check the todos array and if the id doesnt match 
        const removeListArray = [...todos].filter(todo => todo.id !== id)
        setTodos(removeListArray);
    }
    
   
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    } 
    return (
        <main>
            <h1> Whats the plan for this week?</h1>
            <AddNewTask onSubmit={addTodo} />
            <BackLog
                todos={todos}
                completeTodo={completeTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
            />
        </main>
    )
}

export default TaskList;
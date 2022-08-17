import React, {useState} from 'react';
 import AddNewTask from '../AddNewTask/AddNewTask';


function TaskList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        // validate form form has content in it
        if(!todo.text || /^\s*$/.test(todo.text)) {
            return
        }

        const newTodos = [todo, ...todos]
        setTodos(newTodos)
        console.log(...todos);
    }
    return (
        <main>
            <h1> Whats the plan for this week?</h1>
            <AddNewTask onSubmit={addTodo} />
        </main>
    )
}

export default TaskList;
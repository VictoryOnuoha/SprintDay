import React, {useState} from 'react';
import AddNewTask from '../AddNewTask/AddNewTask';
import editIcon from '../../assets/icons/edit.svg';
import deleteIcon from '../../assets/icons/delete.svg';

function BackLog({todos, completeTodo, removeTodo, updateTodo}) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitUpdate = (value) => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <AddNewTask edit={edit} onSubmit={submitUpdate} /> ;
    }

    return todos.map((todo, index) => (
        <section
          key={index}
        >
            <article
             key={todo.id}
              onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </article>
            <article>
                <img 
                  src={editIcon}
                  alt='edit icon to update content'
                  onClick={() => setEdit({id: todo.id, value: todo.text})}
                   />
                <img 
                 src={deleteIcon}
                 alt='delete icon to delete content'
                 onClick={() => removeTodo(todo.id)}
                  />
            </article>
        </section>
    ))
}

export default BackLog;
import axios from "axios";
import { useState, useRef, useEffect } from "react";
import {useHistory} from 'react-router-dom';
import {v4 as uuid } from 'uuid';


const SERVER_URL = process.env.REACT_APP_SERVER_URL;

function AddNewTask(props) {
 const [input, setInput] = useState(props.edit ? props.edit.value : ''  );

 const history = useHistory();
 const handleClick = () => {
    history.push('/projects/add');
 }

 const inputRef = useRef(null);

 useEffect(() => {
    inputRef.current.focus()
 } )


const handleChange = e => {
    setInput(e.target.value);
    console.log(setInput(e.target.value));
}

const handleSubmit = e => {
    e.preventDefault();
    const newTask = {
        content: input
    };
    console.log( typeof newTask.content);
    axios
      .post(`${SERVER_URL}/projects/add`, newTask)
      .then((response) => {
        console.log(newTask);
        console.log(response);
        props.onSubmit({
            id: uuid(),
            text: input
        })
        alert('New task added');
        e.target.reset();
      })
      .catch((err) => {
        console.log('Error', err)
      });
//post new to-do data to to backend

  
    setInput('');
};

        return (
                <form onSubmit={handleSubmit} >
                    {props.edit ? ( 
                    <>
                    <button>Update</button>
                    <input 
                        type='text'
                        placeholder='update task'
                        value={input}
                        onChange={handleChange}
                        ref={inputRef} 
                    />
                    </>
                     ) : 
                     (
                    <>
                    <button onClick={handleClick} >+ Add New Task</button>
                    <input 
                        type='text'
                        placeholder='Add a new task'
                        value={input}
                        onChange={handleChange}
                        ref={inputRef} 
                    />
                    </>
                    )
                     }
                   
                </form>
        )
}

export default AddNewTask;
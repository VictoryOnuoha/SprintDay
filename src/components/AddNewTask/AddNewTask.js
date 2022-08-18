import axios from "axios";
import { useState, useRef, useEffect } from "react";
import {v4 as uuid } from 'uuid';
const SERVER_URL = process.env.REACT_APP_SERVER_URL

function AddNewTask(props) {

 const [input, setInput] = useState('');

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

    props.onSubmit({
        id: uuid(),
        text: input
    })

    setInput('');
};

        return (
            <main onSubmit={handleSubmit}  >
                <form>
                    <button>+ Add New Task</button>
                    <input 
                        type='text'
                        placeholder='Add a new task'
                        value={input}
                        onChange={handleChange} />
                </form>
            </main>
        )
}

export default AddNewTask;
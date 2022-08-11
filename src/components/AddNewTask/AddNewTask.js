import axios from "axios";
import React, {Component} from "react";
import {Link} from "react-router-dom";
import backArrow from "../../assets/icons/back-arrow.svg";

const SERVER_URL = process.env.REACT_APP_SERVER_URL

class AddNewTask extends Component {
    state = {
        content: ""
    }

    isFormValid = () => {
        if (
            !this.state.content
        ) {
            return false;
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const taskDetails = {
            content: this.state.content,
        };
        axios.post(`${SERVER_URL}/projects/add`, taskDetails)
        .then(() => {
            e.target.reset();
            alert("New Task has been added");

            this.props.history.push("/projects");
        })
        .catch(err => {
            console.log("Error", err)
        })
    };

    handleCancel = (e) => {
        e.preventDefault();
        this.props.history.goBack();
    };

       render() {
        return (
            <main>
                <section>
                    <Link to={'/projects'} >
                        <img src={backArrow} alt=' go back to last page' />
                    </Link>
                    <h1>Add New Task</h1>
                </section>

                <form type='submit' onSubmit={this.handleSubmit} >
                    <label htmlFor="content" >
                     TASK DESCRIPTION
                     <input name='content'
                        value={this.state.content}/>  
                        {!this.state.content && (
                            <span>
                                <img src='' alt='error' />
                                <p> This field is required</p>
                            </span>
                        )} 
                    </label>
                    <section>
                        <button
                        type='reset'
                        onClick={this.handleCancel}> 
                        Cancel
                        </button>
                        <button
                        disabled={!this.isFormValid()}> 
                        +Add Task</button>
                    </section>
                </form>


            </main>
        )
       }
}

export default AddNewTask;
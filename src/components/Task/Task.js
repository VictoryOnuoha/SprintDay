import React, { Component } from 'react';
import './Task.scss';
class Task extends Component {
    render () {
        return (
            <main className='task'>
                <p className='task__content' >{this.props.task.content}</p>
            </main>
        )
    }
}

export default Task;

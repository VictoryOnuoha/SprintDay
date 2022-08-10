import React, { Component } from 'react';
import { Draggable } from 'react-beautiful-dnd';
import './Task.scss';
class Task extends Component {
    render () {
        return (
            <Draggable draggableId={this.props.task.id} index={this.props.index}>
             {(provided) => (  
                <main 
                    className='task'
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}>
                        <p className='task__content'>
                            {this.props.task.content}
                        </p>
                        {provided.placeholder}
                </main>
             )} 
             
            </Draggable>
            
        );
    }
}

export default Task;

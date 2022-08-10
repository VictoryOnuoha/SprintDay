import React, {Component} from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";
import './Column.scss';

class Column extends Component {
    // This component is responsible for rendering our columns of task
    render() {
        return (
            // {/* Container */}
            <main className='column' >
                <article className='column__title-box'> 
                    {/* Title */}
                    <h3 className="column__title" >{this.props.column.title}</h3>
                </article>
                {/* TaskList */}
                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <section
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='column__droppable'>

                            {this.props.tasks.map((task,index) => <Task key={task.id} index={index} task={task} /> )}
                            {provided.placeholder}
                        </section>
                    )}

                </Droppable>
            </main>
        );
    }
}

export default Column;

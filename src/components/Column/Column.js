import React, {Component} from "react";
import { Droppable } from "react-beautiful-dnd";
import Task from "../Task/Task";


class Column extends Component {
    // This component is responsible for rendering our columns of task
    render() {
        return (
            <main>
                <article>
                    <h3>{this.props.column.title}</h3>
                </article>

                <Droppable droppableId={this.props.column.id}>
                    {(provided) => (
                        <section
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            className='droppable'>

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

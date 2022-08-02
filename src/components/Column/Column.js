import React, {Component} from "react";
import {DragDropContext } from 'react-beautiful-dnd';
import Task from "../Task/Task";


class Column extends Component {
    // This component is responsible for rendering our columns of task
    render() {
        return (
            <main>
                <article>
                    <h3>{this.props.column.title}</h3>
                </article>
                <section>
                    {this.props.tasks.map(task => <Task key={task.id} task={task}/>)}
                </section>

            </main>
        )
    }
}

export default Column;

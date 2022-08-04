import React, { Component } from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import listData from "../../data";
import Column from "../../components/Column/Column";


class Project extends Component {
    state = listData;
    onDragEnd = result => {
        //Todo: reorder column; reflect drag and drop
    }
    render() {
        // This stores all our columns and maps them
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks}/>
                })};
         </DragDropContext>
        )
    }
}

export default Project;
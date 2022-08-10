import React, { Component } from "react";
import {DragDropContext, Draggable, Droppable} from "react-beautiful-dnd"
import listData from "../../data";
import Column from "../../components/Column/Column";
import './Tasks.scss';


class Tasks extends Component {
    state = listData;
    onDragEnd = result => {
        const {draggableId, source, destination} = result;
        if (!destination) return;

        // Check if location of draggable changed
        if ( 
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // reorder taskId array for the column; reflect drag and drop
        const start = this.state.columns[source.droppableId];
        const finish = this.state.columns[destination.droppableId];

        if (start === finish) {
                
        // create new object for the columns that have changed; non mutating
        const newTaskIds = Array.from(start.taskIds);

        // move the task index from its old index to the new index in its array
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);

        const newColumn = {
            ...start,
            taskIds: newTaskIds,
        };

        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newColumn.id]: newColumn,
            },
        };

        this.setState(newState);
        return;
        }

        //Moving from one column to another
        const startTaskIds = Array.from(start.taskIds);
        startTaskIds.splice(source.index, 1);
        const newStart = {
            ...start,
            taskIds: startTaskIds,
        };
        const finishTaskIds = Array.from (finish.taskIds);
        //insert draggable id at destination index
        finishTaskIds.splice(destination.index, 0, draggableId);
        const newFinish = {
            ...finish,
            taskIds: finishTaskIds,
        };

        //update state after moving from tasks  column to next
        const newState = {
            ...this.state,
            columns: {
                ...this.state.columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        this.setState(newState);

    };

    render() {
        // This stores all our columns and maps them
        return (
            
            <DragDropContext onDragEnd={this.onDragEnd}>
                <section className="dragcontext" >
                {this.state.columnOrder.map(columnId => {
                    const column = this.state.columns[columnId];
                    const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

                    return <Column key={column.id} column={column} tasks={tasks}/>
                })};
                </section>
         </DragDropContext>
        )
    }
}

export default Tasks;
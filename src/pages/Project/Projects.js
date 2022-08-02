import React, { Component } from "react";
import listData from "../../data";
import Column from "../../components/Column/Column";

class Project extends Component {
    state = listData;
    render() {
        // This stores all our columns and maps them
        return this.state.columnOrder.map((columnId) => {
            const column = this.state.columns[columnId];
            const tasks = column.taskIds.map(taskId => this.state.tasks[taskId]);

             return <Column key={column.id} column={column} tasks={tasks}/>
        });
    }
}

export default Project;
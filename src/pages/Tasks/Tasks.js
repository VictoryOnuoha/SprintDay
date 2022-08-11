import React, { Component } from "react";
import {DragDropContext} from "react-beautiful-dnd"
import { Link } from "react-router-dom";
import axios from 'axios';
import listData from "../../data";
import Column from "../../components/Column/Column";
import './Tasks.scss';


const SERVER_URL = process.env.REACT_APP_SERVER_URL;
console.log(SERVER_URL);
class Tasks extends Component {
    state = {
        listData: []
    }

    componentDidMount(){
        axios
        .get(`${SERVER_URL}/projects`)
        .then((response) => {
            console.log(response.data[0])
            this.setState({
                
                listData: response.data
            })

        
        }).catch (err => {
            console.log("Error", err)
        })
    }

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
        const start = this.state.listData[0].columns[source.droppableId];
        const finish = this.state.listData[0].columns[destination.droppableId];

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
            ...this.state.listData[0],
            columns: {
                ...this.state.listData[0].columns,
                [newColumn.id]: newColumn,
            },
        };

        this.setState({listData:[newState]});
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
            ...this.state.listData[0],
            columns: {
                ...this.state.listData[0].columns,
                [newStart.id]: newStart,
                [newFinish.id]: newFinish,
            },
        };
        this.setState({listData: [newState]});

    };

    render() {
        // This stores all our columns and maps them
        return (
            
            (this.state.listData.length === 0) ? (<h1>Loading..</h1>) :   
         (   <DragDropContext onDragEnd={this.onDragEnd}>
                <section>
                    <Link to='/projects/add' >
                    <button>+ Add New Task</button>
                    </Link>
                </section>
                <section className="dragcontext" >
             
                {Object.entries(this.state.listData[0].columns).map(([id, column2 ]) => {
                    const column = this.state.listData[0].columns[id];
                    console.log(column);
                     const tasks = column.taskIds.map(taskId => this.state.listData[0].tasks[taskId]);
                    return (
                        
                        <Column key={column.id} column={column} tasks={tasks}/>
                    )
                })}
                </section>
         </DragDropContext>)

         
        )
    }
}

function objectMap(object, mapFn) {
  return Object.keys(object).reduce(function(result, key) {
    result[key] = mapFn(object[key])
    return result
  }, {})
}

export default Tasks;
import { v4 as uuid } from 'uuid';

const listData = {
    // This contains the tasks 
    tasks: {
        'task-1': {id: "task-1", content:'Go for walk'},
        'task-2': {id: "task-2", content:'Pay taxes'},
        'task-3': {id: "task-3", content:'Investment meeting'},
        'task-4': {id: "task-4", content:'Brand Photoshoot'},

    },
    columns: {
        'column-1': {
            id: "column-1",
            title: 'BACKLOG',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: "column-2",
            title: 'TO DO',
            taskIds: []
        },
        'column-3': {
            id: "column-3",
            title: 'IN PROGRESS',
            taskIds: []
        },
        'column-4': {
            id: "column-4",
            title: 'DONE',
            taskIds: []
        }
    },
    columnOrder: ['column-1','column-2', 'column-3', 'column-4'],
};

export default listData;
import { v4 as uuid } from 'uuid';

const listData = {
    // This contains the tasks 
    tasks: {
        'task-1': {id: uuid(), content:'Go for walk'},
        'task-2': {id: uuid(), content:'Pay taxes'},
        'task-3': {id: uuid(), content:'Investment meeting'},
        'task-4': {id: uuid(), content:'Brand Photoshoot'},

    },
    columns: {
        'column-1': {
            id: uuid(),
            title: 'TO DO',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: uuid(),
            title: 'IN PROGRESS',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-3': {
            id: uuid(),
            title: 'DONE',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['column-1','column-2', 'column-3'],
};

export default listData;
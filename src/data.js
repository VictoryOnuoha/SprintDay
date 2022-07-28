const listData = {
    // This contains the tasks 
    tasks: {
        'task-1': {id: 'task-1', content:'Go for walk'},
        'task-2': {id: 'task-2', content:'Pay taxes'},
        'task-3': {id: 'task-3', content:'Investment meeting'},
        'task-4': {id: 'task-3', content:'Brand Photoshoot'},

    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'TO DO',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'IN PROGRESS',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-3': {
            id: 'column-3',
            title: 'DONE',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        }
    },
    columnOrder: ['column-1'],
};

export default listData;
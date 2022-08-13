# SprintDay *(In Progress)
A task management software for the busy bee 🐝 ⏱️ 💼


# SPRINTDAY
PROBLEM: The typical professional has lots of items on their to do list and it can seem never ending and overwhelming,
especially when they are in a high producing role. 

SPRINTDAY will help them focus and stay organized by tracking their goals using sprints, an agile project management methodology. 
 It will also help them organize their endless to do list by linking each task with an existing project and making it easily accessible. 



## API Reference

#### Get all items

```http
  GET /projects/
```


#### Get item

```http
  GET /projects/${id}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |

#### returns list of tasks (for now) but will return projects as well



## Authors

- [@victoryonuoha](https://github.com/VictoryOnuoha)





## Deployment

To deploy this project run

```bash
  npm start (on frontend)
  npm nodemon server.js (on backend)
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file (Front end the Server side)


`REACT_APP_SERVER_URL=http://localhost:8080`

`PORT=8080` 

`CLIENT_URL=http://localhost:3000`



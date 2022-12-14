import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard.js';
import Tasks from './pages/Tasks/Tasks.js';
import Header from './components/Header/Header.js';
import AddNewTask from './components/AddNewTask/AddNewTask.js';


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        
        <Route 
          path='/' 
          exact 
          render={(routeProps) => {
            return(
              <Dashboard {...routeProps} />
            );
          }} 
        />

        <Route 
          path='/projects' 
          render={(routeProps) => {
            return(
              <Tasks {...routeProps} />
            );
          }}
        />
        <Route
          path="projects/add"
          render={(routeProps) => {
            return <AddNewTask {...routeProps} />
          }}
        />

      

      </Switch>
       
    </Router>
  )
}

export default App;

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Projects from './pages/Project/Projects.js';
import Dashboard from './components/Dashboard/Dashboard.js';
import Task from './components/Task/Task.js';
import Header from './components/Header/Header.js';


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
              <Projects {...routeProps} />
            );
          }}
        />

        <Route 
          path='/task' 
          render={(routeProps) => {
            return(
              <Task {...routeProps}/>
            )
          } } 
        />

      </Switch>
       
    </Router>
  );
}

export default App;

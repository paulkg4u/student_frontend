import React from 'react';
import './App.css';
import { StudentProvider } from './data/student/StudentContext';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import StudentDetail from './components/StudentDetail';



function App() {
  return (
    <Router>
      <StudentProvider>
        
        <div className="App">
          <Route path="/" exact>
            <NavLink to='/addStudent/'>
              <button type="button">
                Add Student
              </button>
            </NavLink>
            <StudentList />
          </Route>
          <Route path="/addStudent/" exact>
            <AddStudent />
          </Route>
          <Route path="/studentDetail/:id" exact render={
            ({ match }) => (
              <StudentDetail userId={match.params.id} />
            )
          } />



        </div>
      </StudentProvider>
    </Router>


  );
}

export default App;

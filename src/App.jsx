import React from 'react';
import './App.css';
import { StudentProvider } from './data/student/StudentContext';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import StudentDetail from './components/StudentDetail';

import {useCookies} from 'react-cookie'



function App() {

  const [cookies, setCookie, removeCookie] = useCookies(['cookie-name']);

  setCookie('csrftoken','7IQU6M03nvFmdRVNqhyhNm3HfA7y9TdbKmlzaZ2LaxrUxspdRMRiWEKz8FH7ITRL')
  setCookie('sessionid', '44nvhbo77csq1n2tfqzta8bb18h0m1p7')

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
            <br></br>
            <a href="http://localhost:9000/idp/sso/init/?sp=http://localhost:8000/saml2/metadata/&RelayState=/">
              SIgn in to SP
            </a>
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

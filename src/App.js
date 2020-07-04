import React from 'react';
import './App.css';
import { StudentProvider } from './data/student/StudentContext';
import StudentList from './components/StudentList';



function App() {
  return (
    <StudentProvider>
      <div className="App">
        <StudentList></StudentList>
      </div>
    </StudentProvider>
    
  );
}

export default App;

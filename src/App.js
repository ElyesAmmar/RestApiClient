import React, { useEffect } from 'react';
import './App.css';
import { getUsers } from './JS/actions/users';


function App() {
  const contact=()=>{
    console.log(getUsers())
  }
useEffect(()=>{
  contact()
},[])
  return (
    <div className="App">
     <h1>elyes</h1>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
// import React, { useEffect } from 'react';

function App() {
  // useEffect (() => {
  //   fetch(
  //     "/logements.json"
  //   ).then(response => {
  //     console.log(response);
  //   })
  // }, []);
  return (
    <div className="App">
      <RouterProvider router={router}/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;



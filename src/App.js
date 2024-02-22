import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import Header from './header'; // Assurez-vous de spécifier le chemin correct vers votre composant Header

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
      <Header /> {/* Utilisation du composant Header */}
    </div>
  );
}

export default App;



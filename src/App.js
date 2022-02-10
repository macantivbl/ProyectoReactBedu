import React from 'react';
import Cabecera from './components/Cabecera'
import { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  const [isLoading, setIsLoading] = useState(false);
  if (isLoading) {
    <div>Loading your position...</div>
  }

  return (
    <BrowserRouter>
      <Cabecera />



    </BrowserRouter>
  );
}

export default App;

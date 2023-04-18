import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages';
import { MealProvider } from './context/mealContext';

function App() {
  return (
    <MealProvider>
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Home/>}/>
    </Routes>
    </BrowserRouter>
      </MealProvider>
  );
}

export default App;

import React from 'react'
import RecipeList from './components/RecipeList'
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from './layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Dashboard from './pages/Dashboard';
import RecipeDetails from './components/RecipeDetails';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      {/* <Route path="/details" element={<RecipeDetails />}/> */}
    </Routes>
   
  );
}

export default App
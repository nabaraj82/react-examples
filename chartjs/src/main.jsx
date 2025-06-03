import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router } from "react-router-dom";
import { RecipeProvider } from './Context/RecipeContext.jsx';

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <RecipeProvider>
      <App />
      </RecipeProvider>
    </Router>
    ,
  </React.StrictMode>
);

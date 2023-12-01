import React from 'react';
import { BrowserRouter as Router, Route, Switch, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import LoginForm from './pages/forms/LoginForm';

function App() {

  return (
      <div>
        <LoginForm />
      </div>
  )
}

export default App;

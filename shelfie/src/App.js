import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard'
import Form from './components/Form/Form'
import Header from './components/Header/Header'
import Product from './components/Product/Product'

function App() {
  return (
    <div className="App">
      <Dashboard/>
      <Form/>
      <Header/>
      <Product/>
    </div>
  );
}

export default App;

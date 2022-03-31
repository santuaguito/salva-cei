import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import {BrowserRouter} from 'react-router-dom'

class App extends React.Component{
  
  render(){
    const greating = "Bienvenidos a Salva Tienda de ropa";
    return(
      <BrowserRouter>
      <div className = "container">
        <NavBar/>
        <ItemListContainer greating={ greating }/>
            
      </div>
      </BrowserRouter>
    )
    
  }
 
}

export default App;

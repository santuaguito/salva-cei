import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemList from './components/ItemList';
import './App.css';

class App extends React.Component{
  
  render(){
    const greating = "Bienvenidos a Salva Tienda de ropa";
    return(
      <div className = "container">
        <NavBar/>
        <ItemListContainer greating={ greating }/>
        <ItemList/>        
      </div>
    )
    
  }
 
}

export default App;

import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Item from './components/Item';
import ItemDetail from './components/ItemDetail';

class App extends React.Component{
  
  render(){
    const greating = "Bienvenidos a Salva Tienda de ropa";
    return(
      <BrowserRouter>
       <NavBar/>
      <Routes>
      {/* <Route path="/" element={Inicio}/> */}
      <Route path='/' element={Item}/>
      {/* <Route path="/" element={Nosotros}/>
      <Route path="/" element={Contacto}/> */}
      </Routes>
      <div className = "container">
       
        <ItemListContainer greating={ greating }/>
            
      </div>
      </BrowserRouter>
    )
    
  }
 
}

export default App;

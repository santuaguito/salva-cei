import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer'
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import ItemDeteailContainer from './components/ItemDetailContainer';
import Cart from './components/cart';



const App= () => {
  const branch ="Tienda Online";
  
    return(
      <BrowserRouter>
       <NavBar/>
      <Routes>
      <Route path="/" element={<ItemListContainer greating={ branch }/>}/>
      <Route path='/' element={<ItemListContainer greating={ branch }/>}/>
      <Route path='/itemDetail/:id' element={<ItemDeteailContainer/>}/>
      <Route path ='/cart' element={Cart}/> 
      {/* <Route path="/" element={Inicio}/> */}
      {/* <Route path="/" element={Nosotros}/>
      <Route path="/" element={Contacto}/> */}
      </Routes>
      <div className = "container">
       
            
      </div>
      </BrowserRouter>
    )
    
  
 
}

export default App;

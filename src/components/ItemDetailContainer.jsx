import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";


export const ItemDeteailContainer =({greeting}) => {

 
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState (false);


  
  const {id} = useParams();


  useEffect(() =>{
  

    const URL = 'https://mocki.io/v1/7f133f03-9231-4874-8622-4be9855c5ae4';

    const getItem = async() =>{
      try{
        const response = await fetch(URL);
        const data = await response.json();
        const dataId = data.filter (element=>element.id === id)
        setProduct(dataId);
        
       
      }catch{
        setError(true);
      }finally{
        setLoading(false);
      }
      
    };
    
    getItem();
    
  },[id]);
  
  


  return(
    <>
      
      {product? <ItemDetail product={product}/> : <h1>Cargando...</h1>}
    
    
    </>
  );


};



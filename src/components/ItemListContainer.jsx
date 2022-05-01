import {useEffect, useState} from 'react';
import itemsData from './api';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import '../components/ItemListContainer.css';
import {getDocs, collection, query, where} from 'firebase/firestore';
import {db} from './firebase'


const ItemListContainer =() => {


  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState (false);

  const {categoryID} = useParams();

  useEffect(() =>{

    const productCollection = collection (db,"productos");
    const q = query(
      productCollection,
      where ("Category", "==", "Sweaters"),
      where ("Precio", ">", "1000"));

      getDocs(q)
      .then((result)=>{
        const docs = result.docs;
        const lista =docs.map(producto =>{
          const id = product.id
          const product ={
            id,
            ... product.data()
          }
          return product;
        })
        setProduct(lista);
      })
      .catch(error => {console.log(error)})
      .finally(()=>{
        setLoading(false)
      })


    },[categoryID]) 





  //   const URL = 'https://mocki.io/v1/7f133f03-9231-4874-8622-4be9855c5ae4';
  //   const getItem = async() =>{
  //     try{
  //       const response = await fetch(URL);
  //       const data = await response.json();
  //       setProduct(data);
  //     }catch{
  //       setError(true);
  //     }finally{
  //       setLoading(false);
  //     }
  //   };
  //   getItem();
  // },[])
  

   
    return(
        <div className='card'>
            {itemsData?
                <ItemList key={itemsData.id} producto = {itemsData}/> :
                <div>Loading... </div> }
                
        </div>
    )
 

   
}


export default ItemListContainer;
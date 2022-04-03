
import React from "react";
import ItemDetail from './ItemDetail'
import itemsData from './api';


const getItems = new Promise((res, rej) => {
  setTimeout(() => {
    res([
        getItems(itemsData)
    ]);
  }, 2000);
});

function ItemDeteailContainer (){
  const [itemDetail, setItemDetail] = React.useState();

  React.useEffect(() => {
    getItems.then((res) => {
      setItemDetail(res[0]);
    });
  }, []);
  console.log(itemDetail);
  return (
    <>
      {itemDetail === undefined ? (
        <p>loading</p>
      ) : (
        <ItemDetail
          id={itemDetail.id}
          Descripcion={itemDetail.Descripcion}
          Imagen={itemDetail.Imagen}
          Precio={itemDetail.Precio}
        />
      )}
    </>
  );
};

export default ItemDeteailContainer;

import React from "react";
import ItemCount from "./ItemCount";
import '../components/ItemListContainer.css';




const Item = ({producto}) => {


    


    return (      
        <div className="card">
            <div key={producto.id} >
                    <div className="card-header">
                        {producto.Descripcion}
                    </div>
                    <div className="card-body">
                        <img width="250" height="250" src={producto.Imagen} alt="foto" />
                        {producto.Precio}
                       
                    </div>
                    <div className="card-footer">
                       
                            <button className="btn btn-outline-primary btn-block">
                                Detalle de producto
                            </button>
                    </div>

                   <ItemCount/>
                </div>
        </div>
    )
}

export default Item


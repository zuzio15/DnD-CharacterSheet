import React from "react";
import "../../styles/equipmentStyles/item.css"


export default function Item({id,name,number,deleteItem,addQuantity,subtractQuantity}){
    return(
        <div>
            <div className="item">
                {name} Ilosc: {number}
            </div>
            <button onClick={()=>deleteItem(id)}>
                usun
            </button>
            <button onClick={()=>addQuantity(id)}>
                +
            </button>
            <button onClick={()=>subtractQuantity(id)}>
                -
            </button>
        </div>

    );
}

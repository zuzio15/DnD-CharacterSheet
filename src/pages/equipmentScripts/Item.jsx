import React from "react";
import "../../styles/equipmentStyles/item.css"


export default function Item({id,name,number,deleteItem,addQuantity,subtractQuantity}){
    return(
        <div>
            <div className="item">
                {name}
                <div className="quantity">
                    Ilosc: {number}
                </div>
            </div>
            <button className="item-roundButton" onClick={()=>subtractQuantity(id)}>
                -
            </button>
            <button className="item-button" onClick={()=>deleteItem(id)}>
                usun
            </button>

            <button className="item-roundButton" onClick={()=>addQuantity(id)}>
            +
            </button>
        </div>

    );
}

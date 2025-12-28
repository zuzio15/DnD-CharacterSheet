import React from "react";


export default function SpellSlot({id,available,level,quantity,createSlot,addSlot,subtractSlot,consumeSlot,restoreSlot,longRest}){
    return(
        <div>
            <div className="item">
                Level: {level}
                <div className="quantity">
                    Ilosc: {quantity}
                    Dostepne: {available}
                </div>
            </div>
            <button className="item-roundButton" onClick={()=>subtractSlot(level)}>
                -
            </button>
            <button className="item-roundButton" onClick={()=>consumeSlot(level)}>
                zużyj
            </button>
            <button className="item-roundButton" onClick={()=>addSlot(level)}>
                +
            </button>
            <button className="item-roundButton" onClick={()=>restoreSlot(level)}>
                odnów
            </button>
        </div>

    );
}
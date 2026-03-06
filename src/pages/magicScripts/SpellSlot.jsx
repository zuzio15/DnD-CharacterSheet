import React,{useState,useEffect} from "react";


export default function SpellSlot({id,available,level,quantity,addSlot,subtractSlot,consumeSlot,restoreSlot,deleteSlot,maxSlot}) {
    const [showDelete, setShowDelete] = useState(maxSlot===level);
    useEffect(()=>{
        setShowDelete(maxSlot===level);
    },[maxSlot])
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
            {showDelete &&(
                <button className="item-roundButton" onClick={() => deleteSlot()}>
                    usuń
                </button>)}


        </div>

    );
}
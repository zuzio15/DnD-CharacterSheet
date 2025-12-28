import React from "react";
import "../../styles/equipmentStyles/specialItem.css"



export default function SpecialItem({id,name,desc,deleteSpecialItem}){
    return(
        <div>
            <div className="SpecialItem">
                {name}
            </div>
            <div className="SpecialItem-description">
                {desc}
            </div>
            <button className="specialItem-button" onClick={()=>deleteSpecialItem(id)}>
                usun
            </button>
        </div>

    );
}
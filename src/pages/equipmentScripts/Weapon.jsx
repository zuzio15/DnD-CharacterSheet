import React, {useState} from "react";
import "../../styles/equipmentStyles/weapon.css"

export default function Weapon  ({id,name,desc,damage,deleteWeapon}) {
    const [showDesc,setShowDesc]=useState(false)
    return (
        <div>
            <div className="weapon">
                {name}
                <div className="weapon-damage">
                    Damage:{damage}
                    <button onClick={()=>setShowDesc(!showDesc)} className="desc-button"/>
                </div>
            </div>
            {showDesc && <div>
                <div className="weapon-description">
                    {desc}
                </div>
                <button className="weapon-button" onClick={()=>deleteWeapon(id)}>
                    usun
                </button>
            </div>
                }
        </div>

    );
}
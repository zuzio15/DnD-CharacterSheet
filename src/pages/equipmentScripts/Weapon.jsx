import React, {useState} from "react";
import "../../styles/equipmentStyles/weapon.css"

export default function Weapon  ({id,name,desc,damage,deleteWeapon,updateWeaponDesc}) {
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
                <textarea className="weapon-description" value={desc} onChange={(e)=>updateWeaponDesc(id,e.target.value)}/>

                <button className="weapon-button" onClick={()=>deleteWeapon(id)} >
                    usun
                </button>
            </div>
                }
        </div>

    );
}
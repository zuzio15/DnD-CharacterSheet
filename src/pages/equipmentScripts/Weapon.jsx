import React from "react";
import "../../styles/equipmentStyles/weapon.css"

export default function Weapon  ({id,name,desc,damage,deleteWeapon}) {
    return (
        <div>
            <div className="weapon">
                {name} Damage:{damage}
            </div>
            <div className="weapon-description">
                {desc}
            </div>
            <button onClick={()=>deleteWeapon(id)}>
                usun
            </button>
        </div>

    );
}
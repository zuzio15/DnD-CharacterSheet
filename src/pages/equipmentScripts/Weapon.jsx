import React from "react";
import "../../styles/equipmentStyles/weapon.css"

export default function Weapon  ({id,name,desc,damage,deleteWeapon}) {
    return (
        <div>
            <div className="weapon">
                {name}
                <div className="weapon-damage">
                    Damage:{damage}
                </div>
            </div>

            <div className="weapon-description">
                {desc}
            </div>
            <button className="weapon-button" onClick={()=>deleteWeapon(id)}>
                usun
            </button>
        </div>

    );
}
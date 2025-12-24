import React, {useState} from "react";


export function useWeapons(){
    const [weapons, setWeapons] = useState([]);

    const addWeapon = (name,desc,damage) => {
        if(name.length > 0){const newWeapon ={
            id:Date.now(),
            name:name,
            desc:desc,
            damage:damage
        };
            setWeapons([...weapons, newWeapon]);

        }
    }

    const deleteWeapon = (weaponId) =>{
        const index =weapons.findIndex(weapon=>weapon.id===weaponId);
        if(index !==-1){
            const tempWeapons =[...weapons.slice(0,index),...weapons.slice(index+1)]
            setWeapons(tempWeapons);
        }
    }

    return {weapons,addWeapon,deleteWeapon}
}
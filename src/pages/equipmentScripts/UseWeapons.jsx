import React, {useEffect, useState} from "react";


export function useWeapons(){
    const [weapons, setWeapons] = useState(() => {
        const saved = localStorage.getItem("weapons");
        return saved ? JSON.parse(saved) : [];
    });

    const addWeapon = (name,damage) => {
        if(name.length > 0){const newWeapon ={
            id:Date.now(),
            name:name,
            desc:"",
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

    const updateWeaponDesc =(weaponId,textarea) =>{
        const index =weapons.findIndex(weapon=>weapon.id===weaponId);
        const tempWeapon={...weapons[index], desc:textarea}
        const tempWeapons =[...weapons.slice(0,index),tempWeapon,...weapons.slice(index+1)]
        setWeapons(tempWeapons);

    }

    useEffect(() => {
        localStorage.setItem("weapons",JSON.stringify(weapons))
    }, [weapons]);

    return {weapons,addWeapon,deleteWeapon,updateWeaponDesc}
}
import React, {useEffect, useState} from "react";

export function useAbility(){
    const [abilities,setAbilities]= useState(() => {
        const saved = localStorage.getItem("abilities");
        return saved ? JSON.parse(saved) : [];
    });

    const addAbility = (name) => {
        if(name.length > 0){const newAbility ={
            id:Date.now(),
            name:name,
            desc:"",

        };
            setAbilities([...abilities, newAbility]);

        }
    }
    const deleteAbility = (abilityId) =>{
        const index =abilities.findIndex(ability=>ability.id===abilityId);
        if(index !==-1){
            const tempAbilities =[...abilities.slice(0,index),...abilities.slice(index+1)]
            setAbilities(tempAbilities);
        }
    }

    const saveAbilityDesc =(abilityId,textarea) =>{
        const index =abilities.findIndex(ability=>ability.id===abilityId);
        const tempAbility={...abilities[index], desc:textarea}
        const tempAbilities =[...abilities.slice(0,index),tempAbility,...abilities.slice(index+1)]
        setAbilities(tempAbilities);

    }


    useEffect(() => {
        localStorage.setItem("abilities",JSON.stringify(abilities))
    }, [abilities]);
    return{abilities,addAbility,deleteAbility,saveAbilityDesc}
}
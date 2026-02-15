import React, {useEffect, useState} from "react";


export function useProficiencyBonus(){
    const [proficiencyBonus,setProficiencyBonus] = useState(() => {
            const saved = localStorage.getItem("proficiencyBonus")
            return saved ? parseInt(JSON.parse(saved)) : 0;
        }
    );
    const changeProficiencyBonus=(value)=>{
        setProficiencyBonus(parseInt(value))
    }

    useEffect(() => {
        localStorage.setItem("proficiencyBonus",String(proficiencyBonus))
    }, [proficiencyBonus]);

    return{proficiencyBonus,changeProficiencyBonus};

}
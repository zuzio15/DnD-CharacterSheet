import React, {useEffect, useState} from "react";

export function useProficiency(){
    const [proficiencies,setProficiencies]= useState(() => {
        const saved = localStorage.getItem("proficiencies");
        return saved ? JSON.parse(saved) : [];
    });

    const addProficiency = (name,desc) => {
        if(name.length > 0){const newProficiency ={
            id:Date.now(),
            name:name,
            desc:desc,

        };
            setProficiencies([...proficiencies, newProficiency]);

        }
    }
    const deleteProficiency = (proficiencyId) =>{
        const index =proficiencies.findIndex(proficiency=>proficiency.id===proficiencyId);
        if(index !==-1){
            const tempProficiencies =[...proficiencies.slice(0,index),...proficiencies.slice(index+1)]
            setProficiencies(tempProficiencies);
        }
    }

    useEffect(() => {
        localStorage.setItem("proficiencies",JSON.stringify(proficiencies))
    }, [proficiencies]);
    return{proficiencies,addProficiency,deleteProficiency}
}
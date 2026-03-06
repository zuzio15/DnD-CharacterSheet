import React, {useEffect, useState} from "react";
import "../../styles/magicStyles/spell.css";
import {useSpellSlot} from "./useSpellSlot";
export function useSpell(){
    const [spells,setSpells]= useState(() => {
        const saved = localStorage.getItem("spells");
        return saved ? JSON.parse(saved) : [];
    });

    const [levelList,setLevelList]=useState(() => {
        const saved = localStorage.getItem("levelList");
        return saved ? JSON.parse(saved).map(level => Number(level)) : [];
    });

    useEffect(() => {
        const levels = [...new Set(
            spells.map(spell => spell.level)
        )].sort((a, b) => a - b);
        setLevelList(levels);
    }, [spells]);

    const addSpell = (name,level) => {
            const temp=parseInt(level)|0;
        if(name.length > 0){const newSpell ={
            id:Date.now(),
            name:name,
            level: temp,
            desc:"",

        };
            setSpells(prevSpells => {
                const updated = [...prevSpells, newSpell];
                return updated.sort((a, b) => a.level - b.level);
            });


        }
    }
    const deleteSpell = (spellId) =>{
        const index =spells.findIndex(spell=>spell.id===spellId);
        if(index !==-1){
            const tempSpells =[...spells.slice(0,index),...spells.slice(index+1)]
            setSpells(tempSpells);
        }
    }

    const saveSpellDesc =(SpellId,textarea) =>{
        const index =spells.findIndex(spell=>spell.id===SpellId);
        if (index === -1) return spells;
        const tempSpell={...spells[index], desc:textarea}
        const tempSpells =[...spells.slice(0,index),tempSpell,...spells.slice(index+1)]
        setSpells(tempSpells);

    }


    useEffect(() => {
        localStorage.setItem("spells",JSON.stringify(spells))
    }, [spells]);
    useEffect(() => {
        localStorage.setItem("levelList",JSON.stringify(levelList))
    }, [levelList]);
    return{spells,addSpell,deleteSpell,saveSpellDesc,levelList}
}
import React, {useEffect, useState} from "react";
/* JAK DODAJE SPELLA A NIE NIE MAM SPELL SLOTOW TO DODAC SPELLSLOTA + -> */
export function useSpellSlot(){
    const [spellSlots,setSpellSlots]=useState(() => {
        const saved = localStorage.getItem("spellSlots");
        return saved ? JSON.parse(saved) : [];
    });
    const createSlot =()=>{
        const level = spellSlots.length>0 ? spellSlots[spellSlots.length-1].level+1 : 1;

        const newSpellSlot ={
            id:Date.now(),
            quantity:1,
            available:1,
            level:level
        }
        setSpellSlots([...spellSlots, newSpellSlot]);

    }
    const addSlot = (level) => {
        const index =spellSlots.findIndex(i=>i.level===level);
        const tempSlot = spellSlots[index];
        tempSlot.quantity+=1;
        tempSlot.available+=1;
        const tempSpellSlots=[...spellSlots.slice(0,index),tempSlot,...spellSlots.slice(index+1)]
        setSpellSlots(tempSpellSlots);

    }

    const subtractSlot = (level) => {
        const index =spellSlots.findIndex(i=>i.level===level);
        if(index!==-1 ){
            const tempSlot = spellSlots[index];
            tempSlot.quantity-=1;
            tempSlot.available-=1; /* dodac co jak minus usunanc czy nie ??? !!!!!!!! */
            const tempSpellSlots=[...spellSlots.slice(0,index),tempSlot,...spellSlots.slice(index+1)]
            setSpellSlots(tempSpellSlots);
        }

    }

    const consumeSlot =(level)=>{
        const index =spellSlots.findIndex(i=>i.level===level);
        if(spellSlots[index].available !==0 ){
            const tempSlot = spellSlots[index];
            tempSlot.available-=1;
            const tempSpellSlots=[...spellSlots.slice(0,index),tempSlot,...spellSlots.slice(index+1)]
            setSpellSlots(tempSpellSlots);
        }
    }

    const restoreSlot =(level)=>{
        const index =spellSlots.findIndex(i=>i.level===level);
        if(spellSlots[index].available !==spellSlots[index].quantity ){
            const tempSlot = spellSlots[index];
            tempSlot.available+=1;
            const tempSpellSlots=[...spellSlots.slice(0,index),tempSlot,...spellSlots.slice(index+1)]
            setSpellSlots(tempSpellSlots);
        }
    }

    const longRest =()=>{
        setSpellSlots(spellSlots.map((slot)=>({
            ...slot,
            available : slot.quantity
        })
            ));
    }

    const castSpell =(level)=>{
        if(level!==0){
            consumeSlot(level);
        }

    }

    useEffect(() => {
        localStorage.setItem("spellSlots",JSON.stringify(spellSlots))
    }, [spellSlots]);

    return{spellSlots,createSlot,addSlot,subtractSlot,consumeSlot,restoreSlot, longRest,castSpell}
}
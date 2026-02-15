import React, {useState} from "react";
import {useSpell} from "./magicScripts/useSpell";
import "../styles/magicStyles/magicMain.css"
import {SpellList} from "./magicScripts/SpellList";
import {useSpellSlot} from "./magicScripts/useSpellSlot";
import SpellSlot from "./magicScripts/SpellSlot";


//DODAC SAVE SPELL DC + SPELL ATTACK BONUS + SPELLCASTING ABILITY
export default function MagicPage() {
    const {spells,addSpell,deleteSpell,saveSpellDesc,levelList}=useSpell();
    const {spellSlots,createSlot,addSlot,subtractSlot,consumeSlot,restoreSlot,longRest,castSpell}=useSpellSlot();
    const [newSpell,setNewSpell]=useState("");
    const [newSpellLvl,setNewSpellLvl]=useState("0")


    const resetForms =() =>{
        setNewSpellLvl("")
        setNewSpell("")

    }

    return(
        <div>
            <h2>Magia</h2>
            <div className="magic-menu menu">
                <input
                    type="text"
                    value={newSpell}
                    onChange={(e) => setNewSpell(e.target.value)}
                    placeholder="Nazwa zaklęcia"
                />
                <form>
                    <select value={newSpellLvl}
                      onChange={(e)=>setNewSpellLvl(e.target.value)}
                    >

                        <option value="0">Sztuczka</option>
                        <option value="1">1 Krąg</option>
                        <option value="2">2 Krąg</option>
                        <option value="3">3 Krąg</option>
                        <option value="4">4 Krąg</option>
                        <option value="5">5 Krąg</option>
                        <option value="6">6 Krąg</option>
                        <option value="7">7 Krąg</option>
                        <option value="8">8 Krąg</option>
                        <option value="9">9 Krąg</option>

                    </select>
                </form>

                <button onClick={()=>{
                    addSpell(newSpell,newSpellLvl);
                    resetForms();
                }}>
                    dodaj spell
                </button>
                <button onClick={()=>{
                    createSlot();

                }}>
                    dodaj spellSlot
                </button>
                <button onClick={()=>{
                    longRest();

                }}>
                   długi odpoczynek
                </button>


            </div>
            <div className="spellSlots-container magic-container">
                {spellSlots.map(slot =>(
                    <SpellSlot
                        key={slot.id}
                        id={slot.id}
                        level={slot.level}
                        quantity={slot.quantity}
                        available={slot.available}
                        createSlot={createSlot}
                        addSlot={addSlot}
                        subtractSlot={subtractSlot}
                        consumeSlot={consumeSlot}
                        restoreSlot={restoreSlot}
                        longRest={longRest}
                    />

                ))}

            </div>
            <div className="spells-container ">
                {levelList.map(level=>(
                    <SpellList
                        key={level}
                        level={level}
                        spells={spells}
                        deleteSpell={deleteSpell}
                        saveSpellDesc={saveSpellDesc}
                        castSpell={castSpell}/>
                ))
                }


            </div>
        </div>

    ) ;
}
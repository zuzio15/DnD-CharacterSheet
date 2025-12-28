import React, {useState} from "react";
import Spell from "./magicScripts/Spell";
import {useSpell} from "./magicScripts/useSpell";
import "../styles/magicStyles/magicMain.css"
import {SpellList} from "./magicScripts/SpellList";
import Proficiency from "./skillsScripts/Proficiency";
import {useSpellSlot} from "./magicScripts/useSpellSlot";
import SpellSlot from "./magicScripts/SpellSlot";

export default function MagicPage() {
    const {spells,addSpell,deleteSpell,saveSpellDesc}=useSpell();
    const {spellSlots,createSlot,addSlot,subtractSlot,consumeSlot,restoreSlot,longRest}=useSpellSlot();
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
            <div className="spells-container magic-container">
                <SpellList spells={spells}
                deleteSpell={deleteSpell}
                saveSpellDesc={saveSpellDesc}/>

            </div>
        </div>

    ) ;
}
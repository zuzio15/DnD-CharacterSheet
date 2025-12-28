import Spell from "./Spell";
import React from "react";
export function SpellList({spells,deleteSpell,saveSpellDesc}){
    const levels=[0,1,2,3];
    return(
        <div>
            {levels.map(level =>{
                const filteredSpells=spells.filter(spell=>spell.level===level);

                    return (
                            <div className={"level-" + level} >
                                {level}
                                {filteredSpells.map(spell =>(
                                <Spell  /* trzeba zrobic osobny key dla kazdego elementu Spell (każdy lvl)  */
                                    key={spell.id}
                                    id={spell.id}
                                    name={spell.name}
                                    level={spell.level}
                                    desc={spell.desc}
                                    deleteSpell={deleteSpell}
                                    saveSpellDesc={saveSpellDesc}
                                />
                                ))}
                            </div>
                        )



            })}


        </div>

    )



}
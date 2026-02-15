import Spell from "./Spell";
import React from "react";
export function SpellList({level,spells,deleteSpell,saveSpellDesc,castSpell}){
    const filteredSpells=spells.filter(spell=>spell.level===level);
    return (
        <div className={"level-" + level} >
            {level}
            {filteredSpells.map(spell =>(
                <Spell
                    key={spell.id}
                    id={spell.id}
                    name={spell.name}
                    level={spell.level}
                    desc={spell.desc}
                    deleteSpell={deleteSpell}
                    saveSpellDesc={saveSpellDesc}
                    castSpell={castSpell}
                />
            ))}
        </div>
    )
}
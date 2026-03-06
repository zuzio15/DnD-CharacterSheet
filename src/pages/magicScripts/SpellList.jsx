import Spell from "./Spell";
import React, {useEffect} from "react";
export function SpellList({level,spells,deleteSpell,saveSpellDesc,castSpell,spellSlots}) {
    const filteredSpells=spells.filter(spell=>spell.level===level);
    const calculateSpellSlotNumber=()=>{
        if (level === 0) {
            return 1;
        }

        if (level - 1 >= spellSlots.length) {
            return 0;
        }

        return spellSlots[level - 1].available;
    }
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
                    spellSlotNumber={calculateSpellSlotNumber()}
                />
            ))}
        </div>
    )
}
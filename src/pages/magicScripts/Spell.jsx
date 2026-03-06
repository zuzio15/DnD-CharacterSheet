import React, {useEffect, useState} from "react";


export default function Spell({id,name,level,desc,deleteSpell,saveSpellDesc,castSpell,spellSlotNumber}){
    const [isExpanded, setIsExpanded] = useState(false)
    const [isDisabled, setIsDisabled] = useState(spellSlotNumber <= 0)
    useEffect(()=>{
        setIsDisabled(spellSlotNumber <= 0)
    }, [spellSlotNumber])
    return(
        <div>
            <div className="spell">
                <div className="info">
                    {name}
                </div>

                <div className="spellButtons">
                    <button onClick={()=>deleteSpell(id)}>
                        usun
                    </button>
                    <button className="showDesc" onClick={()=>setIsExpanded(!isExpanded)}>
                        ▼
                    </button>
                    {isExpanded &&(
                        <textarea onChange={(e)=>saveSpellDesc(id,e.target.value)}
                                  value={desc}>
                </textarea>
                    )}
                    <button onClick={()=>castSpell(level)} disabled={isDisabled} className="castSpellButton">
                        rzuć zaklęcie
                    </button>
                </div>



            </div>

     </div>
    )
}
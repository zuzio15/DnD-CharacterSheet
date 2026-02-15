import React, {useState} from "react";


export default function Spell({id,name,level,desc,deleteSpell,saveSpellDesc,castSpell}){
    const [isExpanded, setIsExpanded] = useState(false)
    return(
        <div>
            <div className="spell">
                {name} {level}
                <button onClick={()=>deleteSpell(id)}>
                    usun
                </button>
                <button className="showDesc" onClick={()=>setIsExpanded(!isExpanded)}>
                </button>
                {isExpanded &&(
                    <textarea onChange={(e)=>saveSpellDesc(id,e.target.value)}
                              value={desc}>
                </textarea>
                )}
                <button onClick={()=>castSpell(level)}>
                    rzuć zaklęcie
                </button>


            </div>

        </div>
    )
}
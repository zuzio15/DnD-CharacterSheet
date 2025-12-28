import React, {useState} from "react";
import "../../styles/skillsStyles/ability.css"

export default function Ability({id,name,desc,deleteAbility,saveAbilityDesc}){
    const [isExpanded, setIsExpanded] = useState(false)
    return(
        <div>
            <div className="ability">
                {name}
                <button onClick={()=>deleteAbility(id)}>
                    usun
                </button>
                <button className="showDesc" onClick={()=>setIsExpanded(!isExpanded)}>
                </button>
                {isExpanded &&(
                    <textarea onChange={(e)=>saveAbilityDesc(id,e.target.value)}
                              value={desc}>
                </textarea>
                )}


            </div>

        </div>
    )
}
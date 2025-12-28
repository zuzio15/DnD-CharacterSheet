import React from "react";
import "../../styles/skillsStyles/proficiency.css"

export default function Proficiency({id,name,deleteProficiency}){
    return(
        <div>
            <div className="proficiency">
                {name}
                <button onClick={()=>deleteProficiency(id)}>
                    usun
                </button>
            </div>

        </div>
    )
}
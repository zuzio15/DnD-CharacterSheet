import React from "react";
import "../../styles/skillsStyles/language.css"


export default function Language({id,name,deleteLanguage}){
    return(
        <div>
            <div className="language">
                {name}
                <button onClick={()=>deleteLanguage(id)}>
                    usun
                </button>
            </div>

        </div>
    )
}
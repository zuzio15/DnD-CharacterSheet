import React from "react";
import "../../styles/skillsStyles/language.css"


export default function Language({id,name,deleteLanguage}){
    return(
        <div>
            <div className="language">
                <span className="language-text">{name}</span>
                <button onClick={()=>deleteLanguage(id)}>
                    usun
                </button>
            </div>

        </div>
    )
}
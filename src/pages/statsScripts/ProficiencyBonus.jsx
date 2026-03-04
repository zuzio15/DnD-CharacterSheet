import React, {useEffect, useState} from "react";
import "../../styles/statsStyles/otherStats.css"



export function ProficiencyBonus({proficiencyBonus}){
    return(
        <div className="otherStats">
            Proficiency bonus: {proficiencyBonus}
        </div>
    )


}
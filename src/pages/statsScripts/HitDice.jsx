import React, {useEffect, useState} from "react";
import "../../styles/statsStyles/otherStats.css"


export function HitDice({hitDice}){
    return(
        <div className="otherStats">
            Kości Wytrzymałości: {hitDice}
        </div>
    )


}
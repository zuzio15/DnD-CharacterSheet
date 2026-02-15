import React, {useEffect, useState} from "react";


export function Other({inspiration,maxHealth,armorClass,speed,passivePerception}){
    return(
        <div className="info-container">
            inspiracja:{inspiration}, Max życie:{maxHealth}, Zbroja:{armorClass}, Szybkość:{speed}, Pasywna Percepcja:{passivePerception}
        </div>
    )


}
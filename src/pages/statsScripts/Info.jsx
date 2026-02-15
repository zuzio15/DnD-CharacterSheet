import React, {useEffect, useState} from "react";
import "../../styles/statsStyles/info.css"

export function Info({name,profession,race,level,origin}){
    return(
        <div className="info-container">
            <h1>{name}</h1>
            {profession},{race},poziom: {level},{origin}
        </div>
    )


}
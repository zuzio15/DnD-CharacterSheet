import React, {useEffect, useState} from "react";


export function TempStats({currentHealth,initiative,temporaryHealth,goodThrows,badThrows}){
    return(
        <div className="info-container">
            życie:{currentHealth},inicjatywa:{initiative},tymczasowe życie:{temporaryHealth},
            <br/> przeciwko śmierci- sukcesy:{goodThrows},porażki:{badThrows}
        </div>
    )


}
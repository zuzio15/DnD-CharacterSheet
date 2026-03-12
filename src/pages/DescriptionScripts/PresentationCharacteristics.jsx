import React, {useEffect, useState} from "react";


export function PresentationCharacteristics({characteristics}){
    return(
        <div >
            {characteristics.age},{characteristics.height},{characteristics.weight},{characteristics.eyes},{characteristics.skin},{characteristics.hair}
        </div>
    )


}
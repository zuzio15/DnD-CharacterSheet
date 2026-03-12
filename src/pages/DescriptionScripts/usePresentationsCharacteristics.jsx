import React, {useEffect, useState} from "react";


export function usePresentationsCharacteristics() {
    const [characteristics,setCharacteristics] = useState(() => {
            const saved = localStorage.getItem("presCharacteristics")
            return saved ? JSON.parse(saved) : {age:"18",height:"170",weight:"70",eyes:"kolor oczu",skin:"skóra",hair:"włosy"};
        }
    );
    const changePresentationCharacteristics=(value)=>{
        setCharacteristics(value)
    }

    useEffect(() => {
        localStorage.setItem("presCharacteristics",JSON.stringify(characteristics))
    }, [characteristics]);

    return{  characteristics,changePresentationCharacteristics};

}
import React, {useEffect, useState} from "react";


export function useHitDice(){
    const [hitDice,setHitDice] = useState(() => {
            const saved = localStorage.getItem("hitDice")
            return saved || "1k4";
        }
    );
    const changeHitDice=(value)=>{
        setHitDice(value)
    }

    useEffect(() => {
        localStorage.setItem("hitDice",String(hitDice))
    }, [hitDice]);

    return{ hitDice,changeHitDice};

}
import React, {useEffect, useState} from "react";


export function useOther(){
    const [other,setOther] = useState(() => {
            const saved = localStorage.getItem("other")
            return saved ? JSON.parse(saved) : {inspiration:0,maxHealth:1,armorClass:1,speed:10,passivePerception:1};
        }
    );
    const changeOther=(value)=>{
        setOther(value)
    }

    useEffect(() => {
        localStorage.setItem("other",JSON.stringify(other))
    }, [other]);

    return{ other,changeOther};

}
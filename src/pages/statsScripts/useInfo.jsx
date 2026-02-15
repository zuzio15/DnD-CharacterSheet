import React, {useEffect, useState} from "react";


export function useInfo(){
    const [info,setInfo] = useState(() => {
            const saved = localStorage.getItem("info")
            return saved ? JSON.parse(saved) : {name:"imie",profession:"klasa",race:"rasa",level:1,origin:"pochodzenie"};
        }
    );
    const changeInfo=(value)=>{
        setInfo(value)
    }

    useEffect(() => {
        localStorage.setItem("info",JSON.stringify(info))
    }, [info]);

    return{  info,changeInfo};

}
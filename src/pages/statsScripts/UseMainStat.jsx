import React, {useEffect, useState} from "react";


export function useMainStat(){
    const statsNames=["siła","zręczność","kondycja","inteligencja","mądrość","charyzma"]

    const createStats=(() => {
        let temp=[];
        statsNames.map(name=>{
            const stat={
                name:name,
                value:10,
                modifier:0,
                isProficient:false
            }
            temp=[...temp,stat]
        })
        return temp;
    });
    const [mainStats,setMainStats]=useState(() => {
        const saved = localStorage.getItem("mainStats");
        return saved ? JSON.parse(saved) : createStats();
    });
    const updateStats =(prop)=>{
        setMainStats(prev=>prev.map((stat,index)=>({
            ...stat,
            value:prop[index],
            modifier:Math.floor((prop[index]-10)/2)
            })))
        }

    const changeProficiency =(name)=>{
        setMainStats(prevStats =>
            prevStats.map(stat =>
                stat.name === name
                    ? { ...stat, isProficient: !stat.isProficient }
                    : stat
            )
        )
    }

    useEffect(() => {
        localStorage.setItem("mainStats",JSON.stringify(mainStats))
    }, [mainStats]);

    return{mainStats,updateStats,changeProficiency}
}
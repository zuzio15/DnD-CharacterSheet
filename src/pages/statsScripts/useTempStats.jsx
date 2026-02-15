import React, {useEffect, useState} from "react";


export function useTempStats(){
    const [tempStats,setTempStats] = useState(() => {
            const saved = localStorage.getItem("tempStats")
            return saved ? JSON.parse(saved) : {currentHealth:10,initiative:0,temporaryHealth:0,goodThrows:0,badThrows:0};
        }
    );
    const takeDamage=(damage)=>{
        setTempStats(prev=>{

            if(prev.temporaryHealth-damage>0){
                prev.temporaryHealth=prev.temporaryHealth-damage
            }
            else{
                damage=damage-prev.temporaryHealth
                prev.temporaryHealth=0;
                if(damage>0){
                    prev.currentHealth-damage>0?prev.currentHealth=prev.currentHealth-damage:prev.currentHealth=0;
                }
            }
            return{
                ...prev,
                temporaryHealth: prev.temporaryHealth,
                currentHealth: prev.currentHealth
            }
        })
    }

    const changeInitiative =(value)=>{
        setTempStats(prev => ({
            ...prev,
            initiative: Number(value)
        }))
    }
    const manageGoodThrow=()=>{
        setTempStats(prev => ({
            ...prev,
            goodThrows: Math.min(3, prev.goodThrows + 1)
        }));
    }
    const manageBadThrow=()=>{
        setTempStats(prev => ({
            ...prev,
            badThrows: Math.min(3, prev.badThrows + 1)
        }));
    }
    const resetTempStats=(maxHealth)=>{
        setTempStats({currentHealth:maxHealth,initiative:0,temporaryHealth:0,goodThrows:0,badThrows:0})
    }

    const addTemporaryHealth=(value)=>{
        setTempStats(prev => ({
            ...prev,
            temporaryHealth:prev.temporaryHealth+Number(value)
        }));
    }
    useEffect(() => {
        localStorage.setItem("tempStats",JSON.stringify(tempStats))
    }, [tempStats]);

    return{ tempStats,takeDamage,changeInitiative,manageGoodThrow,manageBadThrow,resetTempStats,addTemporaryHealth};

}
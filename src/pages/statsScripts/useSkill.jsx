import React, {useEffect, useState} from "react";


export function useSkill(){

    const createSkills=(() => {
        return [
            { name: "Akrobatyka", fromMainStat: "zręczność", isProficient: false },
            { name: "Atletyka", fromMainStat: "siła", isProficient: false },
            { name: "Historia", fromMainStat: "inteligencja", isProficient: false },
            { name: "Intuicja", fromMainStat: "mądrość", isProficient: false },
            { name: "Kłamstwo", fromMainStat: "charyzma", isProficient: false },
            { name: "Medycyna", fromMainStat: "mądrość", isProficient: false },
            { name: "Natura", fromMainStat: "inteligencja", isProficient: false },
            { name: "Opieka nad zwierzętami", fromMainStat: "mądrość", isProficient: false },
            { name: "Oszukiwanie", fromMainStat: "charyzma", isProficient: false },
            { name: "Percepcja", fromMainStat: "mądrość", isProficient: false },
            { name: "Religia", fromMainStat: "inteligencja", isProficient: false },
            { name: "Skradanie się", fromMainStat: "zręczność", isProficient: false },
            { name: "Sztuka przetrwania", fromMainStat: "mądrość", isProficient: false },
            { name: "Śledzenie", fromMainStat: "mądrość", isProficient: false },
            { name: "Śledztwo", fromMainStat: "inteligencja", isProficient: false },
            { name: "Wiedza tajemna", fromMainStat: "inteligencja", isProficient: false },
            { name: "Występy", fromMainStat: "charyzma", isProficient: false },
            { name: "Zastraszanie", fromMainStat: "charyzma", isProficient: false },
            { name: "Zręczne dłonie", fromMainStat: "zręczność", isProficient: false }
        ]
    });
    const[skills,setSkills]=useState(() => {
        const saved = localStorage.getItem("skills");
        return saved ? JSON.parse(saved) : createSkills();
    });

    const changeSkillProficiency =(name)=>{
        setSkills(prevSkills =>
            prevSkills.map(skill =>
                skill.name === name
                    ? { ...skill, isProficient: !skill.isProficient }
                    : skill
            )
        )
    }

    useEffect(() => {
        localStorage.setItem("skills",JSON.stringify(skills))
    }, [skills]);

    return{skills,changeSkillProficiency}


}
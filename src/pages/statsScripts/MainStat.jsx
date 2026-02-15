import React, {useEffect, useState} from "react";
import  "../../styles/statsStyles/mainStat.css"
import {Skill} from "./Skill";


export  function MainStat({name,value,modifier,proficiencyBonus,isProficient,changeProficiency,skills,changeSkillProficiency}){
    const [isChecked,setIsChecked]=useState(isProficient)

    return(
        <div className="mainStat">
            <p>{name}</p>
            <p>{value}</p>
            <div className="modifier">
                +{modifier}
            </div>
            <input type="checkbox" onClick={()=> {
                setIsChecked(!isChecked);
                changeProficiency(name)
            }} defaultChecked={isChecked}/>
            {!isProficient && (<div>Rzut obronny {modifier}</div>)}
            {isProficient && (<div>Rzut obronny {modifier+proficiencyBonus}</div>)}
            <div className="temp-container">
                {skills.filter(skill=>(skill.fromMainStat===name)).map(skill =>
                    <Skill
                        key={skill.name}
                        name={skill.name}
                        isProficient={skill.isProficient}
                        value={skill.isProficient? modifier+proficiencyBonus:modifier}
                        changeSkillProficiency={changeSkillProficiency}
                    />

                )}
            </div>

        </div>
    )

}
import React, {useEffect, useState} from "react";
import "../../styles/statsStyles/skillStyle.css"

export function Skill({name,isProficient,value,changeSkillProficiency}){
    const [isChecked,setIsChecked]=useState(isProficient)

    return(
        <div>
            <input type="checkbox" onClick={()=> {
                setIsChecked(!isChecked);
                changeSkillProficiency(name)
            }} defaultChecked={isChecked} className="skill-checkbox"/>
            {name} {"  +"} {value}

        </div>
    )
}
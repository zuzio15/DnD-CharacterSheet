import React, {useEffect, useState} from "react";


export function Skill({name,isProficient,value,changeSkillProficiency}){
    const [isChecked,setIsChecked]=useState(isProficient)

    return(
        <div>
            <input type="checkbox" onClick={()=> {
                setIsChecked(!isChecked);
                changeSkillProficiency(name)
            }} defaultChecked={isChecked}/>
            {name} {"  +"} {value}

        </div>
    )
}
import React, {useEffect, useState,useRef} from "react";
import { useReward } from 'partycles';

export default function Spell({id,name,level,desc,deleteSpell,saveSpellDesc,castSpell,spellSlotNumber}){
    const [isExpanded, setIsExpanded] = useState(false)
    const [isDisabled, setIsDisabled] = useState(spellSlotNumber <= 0)
    const buttonRef = useRef(null);
    const { reward, isAnimating } = useReward(buttonRef,'sparkles', {
        "particleCount": 51,
        "spread": 120,
        "startVelocity": 31,
        "elementSize": 25,
        "lifetime": 50,
        "physics": {
            "gravity": -0.34,
            "wind": -0.12,
            "friction": 0.947
        },
        "effects": {
            "twinkle": false
        },
        "colors": [
            "#FFD700",
            "#FFFFFF"
        ]
    });

    useEffect(()=>{
        setIsDisabled(spellSlotNumber <= 0)
    }, [spellSlotNumber])


    const handleCastSpell = () => {
        reward()
        castSpell(level);

    };
    return(
        <div>
            <div className="spell">
                <div className="info">
                    {name}
                </div>

                <div className="spellButtons">
                    <button onClick={()=>deleteSpell(id)}>
                        usun
                    </button>
                    <button className="showDesc" onClick={()=>setIsExpanded(!isExpanded)}>
                        ▼
                    </button>
                    {isExpanded &&(
                        <textarea onChange={(e)=>saveSpellDesc(id,e.target.value)}
                                  value={desc}>
                </textarea>
                    )}
                    <button onClick={handleCastSpell}  ref={buttonRef} disabled={isDisabled || isAnimating} className="castSpellButton">
                        rzuć zaklęcie
                    </button>
                </div>



            </div>

     </div>
    )
}
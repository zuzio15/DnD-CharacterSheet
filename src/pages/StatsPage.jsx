import React, {useState,useEffect} from "react";
import {MainStat} from "./statsScripts/MainStat";
import "../styles/statsStyles/StatsPageMain.css"
import {useMainStat} from "./statsScripts/UseMainStat";
import {useSkill} from "./statsScripts/useSkill";
import {ProficiencyBonus} from "./statsScripts/ProficiencyBonus";
import {useProficiencyBonus} from "./statsScripts/useProficiencyBonus";
import {HitDice} from "./statsScripts/HitDice";
import {useHitDice} from "./statsScripts/useHitDice";
import {Info} from "./statsScripts/Info";
import {useInfo} from "./statsScripts/useInfo";

export default function StatsPage() {
    const {mainStats,updateStats,changeProficiency}=useMainStat();
    const {skills,changeSkillProficiency}=useSkill();
    const {info,changeInfo}=useInfo();
    const {proficiencyBonus,changeProficiencyBonus}=useProficiencyBonus();
    const {hitDice,changeHitDice}=useHitDice();


    const [strength,setStrength]=useState(mainStats.length>0 ? mainStats[0].value : "")
    const [dexterity,setDexterity]=useState(mainStats.length>0 ? mainStats[1].value : "")
    const [constitution,setConstitution]=useState(mainStats.length>0 ? mainStats[2].value : "")
    const [intelligence,setIntelligence]=useState(mainStats.length>0 ? mainStats[3].value : "")
    const [wisdom,setWisdom]=useState(mainStats.length>0 ? mainStats[4].value : "")
    const [charisma,setCharisma]=useState(mainStats.length>0 ? mainStats[5].value : "")

    const [newProficiencyBonus,setNewProficiencyBonus]=useState(proficiencyBonus)
    const [newHitDice,setNewHitDice]=useState(hitDice)


    const resetForms =() =>{
        setStrength(mainStats.length>0 ? mainStats[0].value : "");
        setDexterity(mainStats.length>0 ? mainStats[1].value : "");
        setConstitution(mainStats.length>0 ? mainStats[2].value : "");
        setIntelligence(mainStats.length>0 ? mainStats[3].value : "");
        setWisdom(mainStats.length>0 ? mainStats[4].value : "");
        setCharisma(mainStats.length>0 ? mainStats[5].value : "");
        setNewProficiencyBonus(proficiencyBonus);
        setNewHitDice(hitDice);
    }
    useEffect(()=>resetForms(),[mainStats])
    return (
        <div>
            <h2>Statystyki postaci</h2>

            <Info
                name={info.name}
                profession={info.profession}
                race={info.race}
                level={info.level}
                origin={info.origin}
            />
            <p className="break">============================================</p>
            <input
                type="number"
                value={strength}
                onChange={(e) =>setStrength(e.target.value)}
                placeholder="siła"
            />
            <input
                type="number"
                value={dexterity}
                onChange={(e) =>setDexterity(e.target.value)}
                placeholder="zręczność"
            />
            <input
                type="number"
                value={constitution}
                onChange={(e) =>setConstitution(e.target.value)}
                placeholder="wytrzymałość"
            />
            <input
                type="number"
                value={intelligence}
                onChange={(e) =>setIntelligence(e.target.value)}
                placeholder="inteligencja"
            />
            <input
                type="number"
                value={wisdom}
                onChange={(e) =>setWisdom(e.target.value)}
                placeholder="mądrość"
            />
            <input
                type="number"
                value={charisma}
                onChange={(e) =>setCharisma(e.target.value)}
                placeholder="charyzma"
            />


            <button onClick={() => {updateStats([strength,dexterity,constitution,intelligence,wisdom,charisma])
                }}>
                Aktualizuj Statystyki
            </button>

            <input
                type="number"
                value={newProficiencyBonus}
                onChange={(e) =>setNewProficiencyBonus(e.target.value)}
                placeholder="proficiencyBonus"
            />
            <button onClick={() => {changeProficiencyBonus(newProficiencyBonus)
            }}>
                Zmień Proficiency Bonus
            </button>
            <input
                value={newHitDice}
                onChange={(e) =>setNewHitDice(e.target.value)}
                placeholder="kości wytrzymałości"
            />
            <button onClick={() => {changeHitDice(newHitDice)
            }}>
                Zmień Kości Wytrzymałości
            </button>

            <div className="mainStats-container">
                {mainStats.map(stat=>
                    <MainStat
                    key={stat.name}
                    name={stat.name}
                    value={stat.value}
                    modifier={stat.modifier}
                    proficiencyBonus={proficiencyBonus}
                    isProficient={stat.isProficient}
                    changeProficiency={changeProficiency}
                    skills={skills}
                    changeSkillProficiency={changeSkillProficiency}
                    />
                )}
            </div>
            <div className="proficiencyBonus-container">
                <ProficiencyBonus
                    key={"proficiencyBonus"}
                    proficiencyBonus={proficiencyBonus}
                />
            </div>
            <div className="hitDice-container">
                <HitDice
                    key={"hitDice"}
                    hitDice={hitDice}
                />
            </div>

        </div>

    )
}
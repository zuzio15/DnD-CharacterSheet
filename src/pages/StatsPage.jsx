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
import {Other} from "./statsScripts/Other";
import {useOther} from "./statsScripts/useOther"
import {TempStats} from "./statsScripts/TempStats";
import {useTempStats} from "./statsScripts/useTempStats";

export default function StatsPage() {
    const {mainStats,updateStats,changeProficiency}=useMainStat();
    const {skills,changeSkillProficiency}=useSkill();
    const {info,changeInfo}=useInfo();
    const {other,changeOther}=useOther();
    const {proficiencyBonus,changeProficiencyBonus}=useProficiencyBonus();
    const {hitDice,changeHitDice}=useHitDice();
    const {tempStats,takeDamage,changeInitiative,manageGoodThrow,manageBadThrow,resetTempStats,addTemporaryHealth}=useTempStats()


    const [strength,setStrength]=useState(mainStats.length>0 ? mainStats[0].value : "")
    const [dexterity,setDexterity]=useState(mainStats.length>0 ? mainStats[1].value : "")
    const [constitution,setConstitution]=useState(mainStats.length>0 ? mainStats[2].value : "")
    const [intelligence,setIntelligence]=useState(mainStats.length>0 ? mainStats[3].value : "")
    const [wisdom,setWisdom]=useState(mainStats.length>0 ? mainStats[4].value : "")
    const [charisma,setCharisma]=useState(mainStats.length>0 ? mainStats[5].value : "")

    const[name,setName]=useState(info.name)
    const[profession,setProfession]=useState(info.profession)
    const[race,setRace]=useState(info.race)
    const[level,setLevel]=useState(info.level)
    const[origin,setOrigin]=useState(info.origin)

    const [inspiration,setInspiration]=useState(other.inspiration)
    const [maxHealth,setMaxHealth]=useState(other.maxHealth)
    const [armorClass,setArmorClass]=useState(other.armorClass)
    const [speed,setSpeed]=useState(other.speed)
    const [passivePerception,setPassivePerception]=useState(other.passivePerception)

    const [damage,setDamage]=useState("")
    const [initiative,setInitiative]=useState("")
    const [temporaryHealth,setTemporaryHealth]=useState("")


    const [newProficiencyBonus,setNewProficiencyBonus]=useState(proficiencyBonus)
    const [newHitDice,setNewHitDice]=useState(hitDice)


    const resetForms =() =>{                             //czy potrzebne?
        setStrength(mainStats.length>0 ? mainStats[0].value : "");
        setDexterity(mainStats.length>0 ? mainStats[1].value : "");
        setConstitution(mainStats.length>0 ? mainStats[2].value : "");
        setIntelligence(mainStats.length>0 ? mainStats[3].value : "");
        setWisdom(mainStats.length>0 ? mainStats[4].value : "");
        setCharisma(mainStats.length>0 ? mainStats[5].value : "");
        setNewProficiencyBonus(proficiencyBonus);
        setNewHitDice(hitDice);
        setDamage("")
        setInitiative("")
        setTemporaryHealth("")
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
                value={name}
                onChange={(e) =>setName(e.target.value)}
                placeholder="imię"
            />
            <input
                value={profession}
                onChange={(e) =>setProfession(e.target.value)}
                placeholder="klasa"
            />
            <input
                value={race}
                onChange={(e) =>setRace(e.target.value)}
                placeholder="rasa"
            />
            <input
                type="number"
                value={level}
                onChange={(e) =>setLevel(e.target.value)}
                placeholder="poziomi"
            />
            <input
                value={origin}
                onChange={(e) =>setOrigin(e.target.value)}
                placeholder="pochodzenie"
            />
            <button onClick={() => {changeInfo({name:name,profession:profession,race:race,level:level,origin:origin})
            }}>
                Zmień dane postaci
            </button>

            <p className="break">============================================</p>
            <Other
                inspiration={other.inspiration}
                maxHealth={other.maxHealth}
                armorClass={other.armorClass}
                speed={other.speed}
                passivePerception={other.passivePerception}

            />

            <input
                type="number"
                value={inspiration}
                onChange={(e) =>setInspiration(e.target.value)}
                placeholder="inspiracja"
            />
            <input
                type="number"
                value={maxHealth}
                onChange={(e) =>setMaxHealth(e.target.value)}
                placeholder="max życie"
            />
            <input
                type="number"
                value={armorClass}
                onChange={(e) =>setArmorClass(e.target.value)}
                placeholder="zbroja"
            />
            <input
                type="number"
                value={speed}
                onChange={(e) =>setSpeed(e.target.value)}
                placeholder="szybkość"
            />
            <input
                type="number"
                value={passivePerception}
                onChange={(e) =>setPassivePerception(e.target.value)}
                placeholder="pasywna percepcja"
            />
            <button onClick={() => {changeOther({inspiration:inspiration,maxHealth:maxHealth,armorClass:armorClass,speed:speed,passivePerception:passivePerception})
            }}>
                Zmień inne dane
            </button>
            <p className="break">============================================</p>
                <TempStats
                    currentHealth={tempStats.currentHealth}
                    initiative={tempStats.initiative}
                    temporaryHealth={tempStats.temporaryHealth}
                    goodThrows={tempStats.goodThrows}
                    badThrows={tempStats.badThrows}
                />
                <input
                    value={damage}
                    type="number"
                    onChange={(e) =>setDamage(e.target.value)}
                    placeholder="obrażenia"
                />
                <button onClick={()=>{takeDamage(damage);resetForms()}}>
                    Zadaj obrażenia
                </button>
                <input
                    value={initiative}
                    type="number"
                    onChange={(e) =>setInitiative(e.target.value)}
                    placeholder="inicjatywa"
                />
                <button onClick={()=>{changeInitiative(initiative);resetForms()}}>
                    Ustaw Inicjatywe
                </button>
                <input
                    value={temporaryHealth}
                    type="number"
                    onChange={(e) =>setTemporaryHealth(e.target.value)}
                    placeholder="tymczasowe życie"
                />
                <button onClick={()=>{addTemporaryHealth(temporaryHealth);resetForms()}}>
                    Dodaj tymczasowe życie
                </button>
                <button onClick={()=>{manageGoodThrow()}}>
                    Dobry rzut
                </button>
                <button onClick={()=>{manageBadThrow()}}>
                    Zły rzut
                </button>
                <button onClick={()=>{resetTempStats(other.maxHealth)}}>
                    Resetuj tymczasowe statystyki
                </button>


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
import React, {useState} from "react";
import Language from "./skillsScripts/Language";
import Proficiency from "./skillsScripts/Proficiency";
import Ability from "./skillsScripts/Ability";
import {useLanguage} from "./skillsScripts/UseLanguage";
import {useProficiency} from "./skillsScripts/UseProficiences";
import {useAbility} from "./skillsScripts/UseAbility";
import "../styles/skillsStyles/skillsMain.css"

export default function SkillsPage() {
    const {languages,addLanguage,deleteLanguage}=useLanguage();
    const {proficiencies,addProficiency,deleteProficiency}=useProficiency();
    const {abilities,addAbility,deleteAbility,saveAbilityDesc}=useAbility();
    const [newLanguage,setNewLanguage]=useState("");
    const [newProficiency,setNewProficiency]=useState("");
    const [newAbility,setNewAbility]=useState("");

    const resetForms =() =>{
        setNewLanguage("");
        setNewProficiency("")
        setNewAbility("")

    }

    return (
        <div>
            <h2>Skille</h2>
            <div className="skills-menu menu">
            <input
                type="text"
                value={newLanguage}
                onChange={(e) => setNewLanguage(e.target.value)}
                placeholder="Nazwa języka"
            />
            <button onClick={()=>{
                addLanguage(newLanguage);
                resetForms();
            }}>
                dodaj język
            </button>


            <input
                type="text"
                value={newProficiency}
                onChange={(e) => setNewProficiency(e.target.value)}
                placeholder="Nazwa biegłości"
            />
            <button onClick={()=>{
                addProficiency(newProficiency);
                resetForms();
                }}>
                dodaj biegłość
            </button>

            <input
                type="text"
                value={newAbility}
                onChange={(e) => setNewAbility(e.target.value)}
                placeholder="Nazwa zdolności"
            />
            <button onClick={()=>{
                addAbility(newAbility);
                resetForms();
            }}>
                dodaj zdolność
            </button>

            </div>


            <div className="languages-container skills-container">
                {languages.map(language =>(
                    <Language
                        key={language.id}
                        id={language.id}
                        name={language.name}
                        deleteLanguage={deleteLanguage}
                    />

                ))}

            </div>
            <div className="proficiences-container skills-container">
                {proficiencies.map(proficiency =>(
                    <Proficiency
                        key={proficiency.id}
                        id={proficiency.id}
                        name={proficiency.name}
                        deleteProficiency={deleteProficiency}
                    />

                ))}

            </div>
            <div className="abilities-container skills-container">
                {abilities.map(ability =>(
                    <Ability
                        key={ability.id}
                        id={ability.id}
                        name={ability.name}
                        desc={ability.desc}
                        deleteAbility={deleteAbility}
                        saveAbilityDesc={saveAbilityDesc}
                    />

                ))}

            </div>
        </div>


    );
}
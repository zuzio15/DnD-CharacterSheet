import React, {useEffect, useState} from "react";
import {PresentationCharacteristics} from "./DescriptionScripts/PresentationCharacteristics";
import {usePresentationsCharacteristics} from "./DescriptionScripts/usePresentationsCharacteristics";
import {Backstory} from "./DescriptionScripts/Backstory";
import {useBackstory} from "./DescriptionScripts/useBackstory";
import {Person} from "./DescriptionScripts/Person";
import {usePerson} from "./DescriptionScripts/usePerson";

//Wygląd zrobić osobno

export default function DescriptionPage() {

    const {characteristics,changePresentationCharacteristics} = usePresentationsCharacteristics();
    const {backstory,editBackstory} = useBackstory();
    const {people,addPerson,editDescription} = usePerson();

    const [age, setAge] = useState(characteristics.age)
    const [height, setHeight] = useState(characteristics.height)
    const [weight, setWeight] = useState(characteristics.weight)
    const [eyes, setEyes] = useState(characteristics.eyes)
    const [skin, setSkin] = useState(characteristics.skin)
    const [hair, setHair] = useState(characteristics.hair)

    const [peopleName, setPeopleName] = useState("")

    const [image, setImage] = useState(() => {
        const saved = localStorage.getItem("image")
        return saved ? saved : "";
    })
    const resetForms=()=>{
        setPeopleName("")
    }
    const listItems = people.map(person =>
        <Person
            key={person.id}
            person={person}
            editDescription={editDescription}
        />

    );
    const handleInput = (e) => {
        const file = e.target.files[0];
        if (!file) return;

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        };

        reader.readAsDataURL(file);
    }

    useEffect(() => {
        localStorage.setItem("image",image);
    },[image])

    return(
        <div>
            <h2>Opis</h2>
            <PresentationCharacteristics
             characteristics={characteristics}
            />
            <div className="characteristicsInputs">
                <input
                    value={age}
                    type="number"
                    placeholder="wiek"
                    onChange={(e) => setAge(e.target.value)}
                />
                <input
                    value={height}
                    type="number"
                    placeholder="wzrost"
                    onChange={(e) => setHeight(e.target.value)}
                />
                <input
                    value={weight}
                    type="number"
                    placeholder="waga"
                    onChange={(e) => setWeight(e.target.value)}
                />
                <input
                    value={eyes}
                    placeholder="kolor oczu"
                    onChange={(e) => {setEyes(e.target.value)}}
                />
                <input
                    value={skin}
                    placeholder="kolor skóry"
                    onChange={(e) => {setSkin(e.target.value)}}
                />
                <input
                    value={hair}
                    placeholder="kolor włosów"
                    onChange={(e) => {setHair(e.target.value)}}
                />
                <button onClick={() => {changePresentationCharacteristics({age, height, weight, eyes, skin,hair})}}>
                    Zmień cechy wyglądu
                </button>
            </div>

            <div>
                Wygląd
                <input type="file" id="avatar" name="avatar" accept="image/png, image/jpeg" onInput={handleInput} />
                {image && <img src={image} alt="Dodaj wygląd postaci!" width="250" height="300"/>}
            </div>
            <input
                placeholder="nazwa osoby/organizacji"
                value={peopleName}
                onChange={(e) => {setPeopleName(e.target.value)}}
            />
            <button onClick={()=>{addPerson(peopleName); resetForms()}}> Dodaj osobę/organizację</button>

            <ul>{listItems}</ul>

            <Backstory
                text={backstory}
                editBackstory={editBackstory}
            />
        </div>
    );
}
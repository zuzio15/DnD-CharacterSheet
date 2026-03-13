import React, {useEffect, useState} from "react";

export function usePerson() {
    const [people, setPeople] = useState(() => {
        const saved = localStorage.getItem("people")
        return saved ? JSON.parse(saved) : [];
    });

    const addPerson = (peopleName) => {
        setPeople(prev => [
            ...prev,
            {
                id: Date.now(),
                name: peopleName,
                description: ""
            }
        ])
    }

    const editDescription = (id,desc) => {
        const index =people.findIndex(people=>people.id===id);
        const tempPerson={...people[index], description:desc}
        const tempPeople =[...people.slice(0,index),tempPerson,...people.slice(index+1)]
        setPeople(tempPeople);
    }

    useEffect(() => {
        localStorage.setItem("people",JSON.stringify(people))
    }, [people]);

    return {people,addPerson,editDescription}

}
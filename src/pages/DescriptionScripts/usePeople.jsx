import React, {useEffect, useState} from "react";

export function usePeople() {
    const [people, setPeople] = useState([{id:0,name:"test0",description:"aaa"},{id:1,name:"test1",description: "bbb"}]);

    const addPerson = (peopleName) => {
        setPeople([...people,
            {
                id: Date.now(),
                name: peopleName,
                description: ""
            }])
    }

    const editDescription = (id) => {

    }

    return {people,addPerson,editDescription}

}
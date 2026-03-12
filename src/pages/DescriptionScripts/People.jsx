import React, {useEffect, useState} from "react";


export function People({id,people,editDescription}) {
    const [isEditing, setIsEditing] = useState(false);
    const listItems = people.map(person =>

        <li key={person.id}>
            <p>
                <b>{person.name}</b>
                {' ' + person.description}

            </p>
            <button onClick={()=>{setIsEditing(!isEditing)}}>edytuj opis</button>
            {isEditing && (
                <div>
                    <textarea defaultValue={person.description}></textarea>
                    <button onClick={()=>{editDescription(id);setIsEditing(false)}}>Zapisz opis</button>
                </div>
            )}

        </li>
    );

    return(
        <div>
            Ludzie
            <ul>{listItems}</ul>

        </div>
    )


}
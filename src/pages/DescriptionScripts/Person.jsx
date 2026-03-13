import React, {useEffect, useState} from "react";


export function Person({person,editDescription}) {
    const [isEditing, setIsEditing] = useState(false);
    const [text,setText]=useState(person.description)

    return(
        <div>
            <li>
                <p>
                    <b>{person.name}</b>
                    {' ' + person.description}
                    <button onClick={()=>{setIsEditing(!isEditing)}}>edytuj opis</button>
                </p>

                {isEditing && (
                    <div>
                        <textarea defaultValue={text} onChange={(e)=>setText(e.target.value)}></textarea>
                        <button onClick={()=>{editDescription(person.id,text);setIsEditing(false)}}>Zapisz opis</button>
                    </div>
                )}

            </li>

        </div>
    )


}
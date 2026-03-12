import React, {useEffect, useState} from "react";
import Markdown from "react-markdown";

export function Backstory({text,editBackstory}) {
    const [isEditing, setIsEditing] = useState(false);
    const [preview,setPreview] = useState(text)
    return(
        <div>
            Backsotry Postaci
            <button  onClick={()=>setIsEditing(!isEditing)}> edytuj backstory</button>
            {isEditing && (
                <div>
                    <textarea defaultValue={text} onChange={(e)=>{setPreview(e.target.value)}}  ></textarea>
                    <Markdown >
                        {preview}
                    </Markdown>
                    <button onClick={()=> {
                        editBackstory(preview);setIsEditing(false)
                    }}> zapisz edycję</button>
                </div>

            )}

            <Markdown >
                {text}
            </Markdown>

        </div>
    )
}
import React, {useEffect, useState} from "react";


export function useBackstory() {
    const [backstory, setBackstory] = useState(() => {
        const saved = localStorage.getItem("backstory")
        return saved ? saved : "";
    });

    const editBackstory = (value) => {
        setBackstory(value);
    }

    useEffect(() => {
        localStorage.setItem("backstory",backstory)
    }, [backstory]);



    return {backstory,editBackstory}
}
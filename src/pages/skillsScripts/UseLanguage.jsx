import React, {useEffect, useState} from "react";

export function useLanguage(){
    const [languages,setLanguages]= useState(() => {
        const saved = localStorage.getItem("languages");
        return saved ? JSON.parse(saved) : [];
    });

    const addLanguage = (name,desc) => {
        if(name.length > 0){const newLanguage ={
            id:Date.now(),
            name:name,
            desc:desc,

        };
            setLanguages([...languages, newLanguage]);

        }
    }
    const deleteLanguage = (languageId) =>{
        const index =languages.findIndex(language=>language.id===languageId);
        if(index !==-1){
            const tempLanguages =[...languages.slice(0,index),...languages.slice(index+1)]
            setLanguages(tempLanguages);
        }
    }

    useEffect(() => {
        localStorage.setItem("languages",JSON.stringify(languages))
    }, [languages]);
    return{languages,addLanguage,deleteLanguage}
}
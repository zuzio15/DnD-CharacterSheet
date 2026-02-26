import React, {useEffect, useState} from "react";


export function useSpecialItems(){
    const [specialItems,setSpecialItems]=useState(() => {
        const saved = localStorage.getItem("specialItems");
        return saved ? JSON.parse(saved) : [];
    });

    const addSpecialItem = (name,desc) => {
        if(name.length > 0){const newSItem ={
            id:Date.now(),
            name:name,
            desc:desc

        };
            setSpecialItems([...specialItems, newSItem]);

        }
    }
    const updateSpecialItemDesc =(SpecialItemId,textarea) =>{
        const index =specialItems.findIndex(item=>item.id===SpecialItemId);
        const tempSI={...specialItems[index], desc:textarea}
        const tempSpecialItems =[...specialItems.slice(0,index),tempSI,...specialItems.slice(index+1)]
        setSpecialItems(tempSpecialItems);

    }

    const deleteSpecialItem = (SpecialItemId) =>{
        const index =specialItems.findIndex(specialItem=>specialItem.id===SpecialItemId);
        if(index !==-1){
            const tempSItem =[...specialItems.slice(0,index),...specialItems.slice(index+1)]
            setSpecialItems(tempSItem);
        }
    }
    useEffect(() => {
        localStorage.setItem("specialItems",JSON.stringify(specialItems))
    }, [specialItems]);

    return {specialItems,addSpecialItem,deleteSpecialItem,updateSpecialItemDesc}

}
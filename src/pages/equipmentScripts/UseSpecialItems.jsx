import React, {useState} from "react";


export function useSpecialItems(){
    const [specialItems,setSpecialItems]=useState([])

    const addSpecialItem = (name,desc) => {
        if(name.length > 0){const newSItem ={
            id:Date.now(),
            name:name,
            desc:desc

        };
            setSpecialItems([...specialItems, newSItem]);

        }
    }

    const deleteSpecialItem = (SpecialItemId) =>{
        const index =specialItems.findIndex(specialItem=>specialItem.id===SpecialItemId);
        if(index !==-1){
            const tempSItem =[...specialItems.slice(0,index),...specialItems.slice(index+1)]
            setSpecialItems(tempSItem);
        }
    }
    return {specialItems,addSpecialItem,deleteSpecialItem}

}
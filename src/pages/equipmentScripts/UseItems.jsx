import React, {useEffect, useState} from "react";

export function useItems(){
    const [items,setItems]=useState(() => {
        const saved = localStorage.getItem("items");
        return saved ? JSON.parse(saved) : [];
    });


    const addItem = (name,number) =>{
        const temp=parseInt(number) |0
        if(name.length > 0){const newItem ={
            id:Date.now(),
            name:name,
            number:temp

        };
            setItems([...items, newItem]);

        }
    }
    const deleteItem = (ItemId) =>{
        const index =items.findIndex(item=>item.id===ItemId);
        if(index !==-1){
            const tempItems =[...items.slice(0,index),...items.slice(index+1)]
            setItems(tempItems);
        }
    }

    const addQuantity = (ItemId) =>{
        const index =items.findIndex(item=>item.id===ItemId);
        const tempitem=items[index];
        tempitem.number+=1;
        const tempItems =[...items.slice(0,index),tempitem,...items.slice(index+1)]
        setItems(tempItems)
    }

    const subtractQuantity = (ItemId) =>{
        const index =items.findIndex(item=>item.id===ItemId);
        const tempitem=items[index];
        if (tempitem.number===1){
            deleteItem(tempitem.id);
        }
        else{
            tempitem.number-=1;
            const tempItems =[...items.slice(0,index),tempitem,...items.slice(index+1)]
            setItems(tempItems)
        }



    }
    useEffect(() => {
        localStorage.setItem("items",JSON.stringify(items))
    }, [items]);

    return{items,addItem,deleteItem,addQuantity,subtractQuantity}
}
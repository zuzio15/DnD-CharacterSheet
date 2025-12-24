import React, {useState} from "react";


export function useMoney(){
    const [money,setMoney] = useState(0);

    const addMoney = (newMoney) => {
        const temp = parseInt(newMoney)|0;
        setMoney(money+temp);
    }

    const subtractMoney = (newMoney) => {
        const temp = parseInt(newMoney)|0;
        setMoney(money-temp);
    }

    return{money,addMoney,subtractMoney};
}
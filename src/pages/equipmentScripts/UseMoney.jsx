import React, {useEffect, useState} from "react";


export function useMoney(){
    const [money,setMoney] = useState(parseInt(localStorage.getItem("money")) );

    const addMoney = (newMoney) => {
        const temp = parseInt(newMoney)|0;
        setMoney(money+temp);
    }

    const subtractMoney = (newMoney) => {
        const temp = parseInt(newMoney)|0;
        setMoney(money-temp);

    }
    useEffect(() => {
        localStorage.setItem("money",String(money))
    }, [money]);

    return{money,addMoney,subtractMoney};
}
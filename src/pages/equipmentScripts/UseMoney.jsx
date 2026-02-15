import React, {useEffect, useState} from "react";


export function useMoney(){
    const [money,setMoney] = useState(() => {
        const saved = localStorage.getItem("money")
        return saved ? parseInt(JSON.parse(saved)) : 0;
    }
         );

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
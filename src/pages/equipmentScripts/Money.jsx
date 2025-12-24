import React from "react";
import "../../styles/equipmentStyles/money.css"

export default function Money ({money}){
    return (
        <div className="money">
            $ Kasa $= {money}
        </div>
    );
}


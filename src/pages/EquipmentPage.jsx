import React, {useState} from "react";


function Weapons  ({name}) {
    return (
        <div className="weapon">
            {name}
        </div>
    );
}

function Money ({money}){
    return (
        <div className="money">
            Kasa= {money}
        </div>
    );
}

export default function EquipmentPage() {

    const [weapons, setWeapons] = useState([]);
    const [newName, setNewName] = useState("");
    const [newMoney, setNewMoney] = useState("");
    const [money,setMoney] = useState(0);
    const addWeapon = () => {
        if(newName.length > 0){const newWeapon ={
            id:Date.now(),
            name:newName,

        };
            setWeapons([...weapons, newWeapon]);
            setNewName("");}

    }

    const addMoney = () => {
        const temp = parseInt(newMoney);
        setMoney(money+temp);
        setNewMoney("");


    }

    const subtractMoney = () => {
        const temp = parseInt(newMoney);
        setMoney(money-temp);
        setNewMoney("");


    }



    return (
        <div>
            <h2>Ekwipunek</h2>
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nazwa broni"
            />
            <button onClick={addWeapon}>
                Dodaj broń
            </button>
            <input
                type="number"
                value={newMoney}
                onChange={(e) =>setNewMoney(e.target.value)}
                placeholder="Money"
            />
            <button onClick={addMoney}>
                Dodaj kase
            </button>
            <button onClick={subtractMoney}>
                Usuń kase
            </button>
            <div className="weapons-container">
                {weapons.map(weapon =>(
                    <Weapons
                        key={weapon.id}
                        name={weapon.name}
                    />
                ))}
            </div>
            <Money money={money}/>
        </div>


    );

}
import React, {useState} from "react";
import Weapon from "./equipmentScripts/Weapon"
import Money from "./equipmentScripts/Money";
import SpecialItem from "./equipmentScripts/SpecialItem";
import Item from "./equipmentScripts/Item";
import {useWeapons} from "./equipmentScripts/UseWeapons"
import {useMoney} from "./equipmentScripts/UseMoney"
import {useSpecialItems} from "./equipmentScripts/UseSpecialItems";
import {useItems} from "./equipmentScripts/UseItems";



export default function EquipmentPage() {
    const {weapons,addWeapon,deleteWeapon}=useWeapons();
    const {money,addMoney,subtractMoney}=useMoney();
    const {specialItems,addSpecialItem,deleteSpecialItem}=useSpecialItems();
    const {items,addItem,deleteItem,addQuantity,subtractQuantity}=useItems();

    const [newName, setNewName] = useState("");
    const [newMoney, setNewMoney] = useState("");
    const [newDesc,setNewDesc]=useState("")
    const [newSpecialItem,setNewSpecialItem]=useState("")
    const [newItem,setNewItem]=useState("")
    const [newDescSI,setNewDescSI]=useState("")
    const [newNumber,setNewNumber]=useState("1")
    const [newDamage,setNewDamage]=useState("")


    const resetForms =() =>{
        setNewName("");
        setNewDesc("");
        setNewMoney("");
        setNewSpecialItem("");
        setNewItem("");
        setNewNumber("1")
        setNewDescSI("")
        setNewDamage("")
    }
    return (
        <div>
            <h2>Ekwipunek</h2>
            <div className="equipmentMenu">
            <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Nazwa broni"
            />
            <input
                type="text"
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                placeholder="opis"
            />
            <input
                type="text"
                value={newDamage}
                onChange={(e) => setNewDamage(e.target.value)}
                placeholder="damage"
            />
            <button onClick={() => {addWeapon(newName,newDesc,newDamage);
                resetForms()}}>
                Dodaj broń
            </button>

            <input
                type="number"
                value={newMoney}
                onChange={(e) =>setNewMoney(e.target.value)}
                placeholder="Money"
            />
            <button onClick={() => {addMoney(newMoney);
                resetForms()}}>
                Dodaj kase
            </button>
            <button onClick={() => {subtractMoney(newMoney);
                resetForms()}}>
                Usuń kase
            </button>

            <input
                type="text"
                value={newSpecialItem}
                onChange={(e) => setNewSpecialItem(e.target.value)}
                placeholder="specjalny itemek"
            />
            <input
                type="text"
                value={newDescSI}
                onChange={(e) => setNewDescSI(e.target.value)}
                placeholder="opis"
            />
            <button onClick={() => {addSpecialItem(newSpecialItem,newDescSI);
                resetForms()}}>
                Dodaj specjalny itemek
            </button>

            <input
                type="number"
                value={newNumber}
                onChange={(e) =>setNewNumber(e.target.value)}
                placeholder="ilosc itemkow"
            />
            <input
                type="text"
                value={newItem}
                onChange={(e) => setNewItem(e.target.value)}
                placeholder="itemek"
            />
            <button onClick={() => {addItem(newItem,newNumber);
                resetForms()}}>
                Dodaj  itemek
            </button>

            </div>
            <div className="weapons-container">
                {weapons.map(weapon =>(
                    <Weapon
                        key={weapon.id}
                        id={weapon.id}
                        name={weapon.name}
                        desc={weapon.desc}
                        damage={weapon.damage}
                        deleteWeapon={deleteWeapon}
                    />

                ))}

            </div>
            <Money money={money}/>
            <div className="specialItems-container">
                {specialItems.map(sitem =>(
                    <SpecialItem
                        key={sitem.id}
                        id={sitem.id}
                        name={sitem.name}
                        desc={sitem.desc}
                        deleteSpecialItem={deleteSpecialItem}
                    />
                ))}
            </div>
            <div className="items-container">
                {items.map(item =>(
                    <Item
                        key={item.id}
                        id={item.id}
                        name={item.name}
                        number={item.number}
                        deleteItem={deleteItem}
                        addQuantity={addQuantity}
                        subtractQuantity={subtractQuantity}
                    />
                ))}

            </div>
        </div>


    );

}
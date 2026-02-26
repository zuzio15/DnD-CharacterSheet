import React, {useState} from "react";
import "../../styles/equipmentStyles/specialItem.css"


export default function SpecialItem({id, name, desc, deleteSpecialItem,updateSpecialItemDesc}) {
    const [showDesc, setShowDesc] = useState(false)
    return (<div>
            <div className="SpecialItem">
                {name}
                <button onClick={() => setShowDesc(!showDesc)} className="desc-button"/>

            </div>
            {showDesc && <div>
                <textarea className="SpecialItem-description" value={desc}
                          onChange={(e)=>updateSpecialItemDesc(id,e.target.value)}/>

                <button className="specialItem-button" onClick={() => deleteSpecialItem(id)}>
                    usun
                </button>

            </div>
            }
        </div>

    );
}
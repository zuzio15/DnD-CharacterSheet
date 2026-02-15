import React, {useState} from "react";
import "../../styles/equipmentStyles/specialItem.css"


export default function SpecialItem({id, name, desc, deleteSpecialItem}) {
    const [showDesc, setShowDesc] = useState(false)
    return (<div>
            <div className="SpecialItem">
                {name}
                <button onClick={() => setShowDesc(!showDesc)} className="desc-button"/>

            </div>
            {showDesc && <div>
                <div className="SpecialItem-description">
                    {desc}
                </div>

                <button className="specialItem-button" onClick={() => deleteSpecialItem(id)}>
                    usun
                </button>

            </div>
            }
        </div>

    );
}
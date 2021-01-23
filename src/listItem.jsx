import React from 'react';
import './listItem.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FlipMove from "react-flip-move";

function Listitems(props) {
    const items = props.items;
    const listitems = items.map((item, index) => {
        
        return <div className="list" key={item.key} >
            <p>{index+1} &nbsp;
                <input type="text"
                    id={item.key}
                    value={item.text}
                    onChange={
                        (e) => {
                            props.setUpdate(e.target.value, item.key)

                        }
                    }
                />
                <span>
                    <FontAwesomeIcon className="faicons"
                        icon='trash'
                        onClick={() => {
                            props.deleteItem(item.key)
                        }}
                    />
                </span>
            </p>
        </div>
        
    })
    return (
        <div>
            <FlipMove duration={300} easing="ease-in-out">
            {listitems}
            </FlipMove>
        </div>
    )

}

export default Listitems;
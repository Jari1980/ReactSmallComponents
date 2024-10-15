import React, {useState} from "react"
import'./ListToggle.css'


function ListToggle(){
    const [showList, setShowList] = useState(true)
    const list = [{
        id: 0, 
        name:"Snus"
    }, {
        id: 1, 
        name: "Broccoli"
    }, {
        id: 2, 
        name: "Pepsi Max"
    }, {
        id: 3, 
        name: "Kaffe"
    }, {
        id: 4,
        name: "Java"
    }, {
        id: 5,
        name: "C#" 
    }]
    const listItems = list.map(list => <li key={list.id}>{list.name}</li>)

    const toggle = () =>{
        setShowList(!showList)
    }

    return(
        
        <>
        <div id="listToggleDiv">
            <h1>Good thing list</h1>
                <div id="listHorizontDiv">
                    <div id="listDiv">
                        {showList && <b>{listItems}</b>}  
                    </div>
                    <button id="toggleButton" onClick={toggle}>Toggle list</button>
                </div>
        </div>
        
        </>
    )
}

export default ListToggle;
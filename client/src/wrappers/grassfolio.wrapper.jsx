import React, {useState} from 'react'
import UsernameContext from '../context/username.context';
import {useHistory} from "react-router-dom"


export default (props) => {
    // const [username, setUsername] = useState('')
    
    //So this is going to keep track of...
    
    const [grassFolio, setGrassFolio] = useState({})
    //Currency => Cookies/Clicks/Money
    //Grass Per Second
    //Grass Per Click


    //this is an array of objects...
    const [grassShop, setGrassShop] = ([]) 
    
    //ID: 0-whenever
    //Amount of this grass you have
    //Base Cost Per item
    //Cost Per item is calculated as Item Base * (1+itemCount)
    //Requirements
        // this will check the grassfolio to see if something can be unlocked
    //
    
    //Permanent buffs to your Grass per second
    const [upgrades, setUpgrades] = ({})
    //Make Certain Grasses generate more grass
    //make Clicks scale off of the amount of grasses someone has

    const history = useHistory();

    const spinner = () => {
        return (
        <div className="spinner-border text-white" role="status">
            <span class="sr-only">⚙</span>
        </div>
        )
    }

    return (
        <UsernameContext.Provider value={{
            
            }} >
            {props.children}
        </UsernameContext.Provider >
        
    )
}

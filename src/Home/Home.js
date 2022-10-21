import React, { useEffect,useState } from 'react';
import {MorseConverter} from '../Functions/Functions'

const Home = ()=>{
    const [Text, setText] = useState("");
    return(
        <div>
            <h1>Morsetus</h1>
            <h4>Morse to text</h4>
            <p>{Text}</p>
            <input type="textbox" onChange={(e)=>{setText(MorseConverter({ Morse:true,Text:e.target.value}))}}/>
        </div>
    )
}

export{Home}
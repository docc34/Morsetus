import  { useEffect,useState } from 'react';
import {MorseConverter} from '../Functions/Functions'

const Home = ()=>{
    const [Output, setOutput] = useState([]);
    const [Text, setText] = useState("");
    
    useEffect(()=>{
        setOutput(MorseConverter({ Morse:true,Text:Text }))
    },[Text]);

    const textToElement = Output.map((e,i)=>{
        return " "+ e
    });

    return(
        <div>
            <h1>Morsetus</h1>
            <h4>Morse to text</h4> 

            <div>
                {textToElement}
            </div>
            <input type="textbox" onChange={(e)=>{
                    setText(e.target.value);
                    console.log(Output);
                }
                }/>
        </div>
    )
}

export{Home}
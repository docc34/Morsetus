import  { useEffect,useState } from 'react';
import {MorseConverter} from '../Functions/Functions'

const Home = ()=>{
    const [Output, setOutput] = useState([]);
    const [Text, setText] = useState("");
    
    useEffect(()=>{
    },[Text]);

    const textToElement = Output.map((e,i)=>{
        return " "+ e
    });

    return(
        <div>
            <div>
                <h1>Morsetus</h1>
                <h4>Text to Morse</h4> 
            </div>
            <div>
                {textToElement}
            </div>
            <div>
                <input type="textbox" onChange={(e)=>{
                    var i = Output;
                    var text = e.target.value;

                    if(i.length > text.length){
                        i.splice(-1, 1);
                    }
                    else{
                        i.push(MorseConverter({ Morse:false,Text:text }));
                    }
                    setOutput(i);
                    //settexts only point is to make the textToElement function to render changes to output
                    setText(text);
                    }
                    }/>
            </div>
           
        </div>
    )
}

export{Home}
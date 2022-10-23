import  { useEffect,useState } from 'react';
import {MorseConverter} from '../Functions/Functions'

const Home = ()=>{
    const [Output, setOutput] = useState([]);
    const [Text, setText] = useState("");
    const [InputMorse, setInputMorse] = useState("");
    const [InputMorseLetter, setInputMorseLetter] = useState("");
    const [InputMorseLetterList, setInputMorseLetterList] = useState([]);
    
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
                            var spliceAmount = i.length - text.length;
                            for(var k = 0; k < spliceAmount; k++){
                                i.splice(-1,1);
                                if(InputMorse == true){
                                    var morseLetterList = InputMorseLetterList;
                                    morseLetterList.splice(-1,1);
                                    setInputMorseLetterList(morseLetterList);
                                }
                            }
                        }
                        else if(InputMorse == false ){
                            i.push(MorseConverter({ Morse:InputMorse,Text:text }));
                            setOutput(i);
                        }
                        else{
                            var morseLetter = InputMorseLetter;
                            var spacesAmount = 0;
                            if(text[text.length-1] != ' '){
                                morseLetter = morseLetter + text[text.length-1];
                                setInputMorseLetter(morseLetter);
                            }

                            for(var k = 0; k < text.length; k++){

                                if(text[k] == ' '){
                                    spacesAmount++;
                                    var morseLetterList = InputMorseLetterList;
                                    console.log(morseLetterList.length);
                                    console.log("ee"+ spacesAmount);
                                    
                                    if(morseLetterList.length == 0 || morseLetterList == null|| morseLetterList == undefined){
                                       
                                        morseLetterList.push(morseLetter);
                                        setInputMorseLetterList(morseLetterList);
                                        
                                        console.log(morseLetterList[morseLetterList.length-1]);
                                        i.push(MorseConverter({ Morse:InputMorse,Text:morseLetterList[morseLetterList.length-1]}));
                                        setInputMorseLetter("");
                                    }
                                    else if(morseLetterList.length < spacesAmount){
                                        console.log(morseLetterList);

                                        morseLetterList.push(morseLetter);
                                        setInputMorseLetterList(morseLetterList);
                                        
                                        console.log(morseLetterList[morseLetterList.length-1]);
                                        i.push(MorseConverter({ Morse:InputMorse,Text:morseLetterList[morseLetterList.length-1]}));
                                        setInputMorseLetter("");
                                    }

                                }
                            }
                            
                            setOutput(i);  
                        }
                        //settexts only point is to make the textToElement function to render changes to output
                        setText(text);
                    }
                    }/>

                    <input type="checkbox" onChange={(e)=>{setInputMorse(e.target.checked);}}/>
            </div>
           
        </div>
    )
}

export{Home}
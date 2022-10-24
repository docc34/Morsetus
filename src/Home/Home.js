import  { useEffect,useState } from 'react';
import {MorseConverter} from '../Functions/Functions'
import './Home.css';
import Form from 'react-bootstrap/Form';

const Home = ()=>{
    const [Output, setOutput] = useState([]);
    const [Text, setText] = useState("");
    const [InputMorse, setInputMorse] = useState(false);
    const [InputMorseLetter, setInputMorseLetter] = useState("");
    const [InputMorseLetterList, setInputMorseLetterList] = useState([]);
    
    const resetValues = ()=>{
        setInputMorseLetter("");
        setInputMorseLetterList([]);
        setOutput([]);
        setText("");
    }

    useEffect(()=>{
    },[Text]);

    const textToElement = Output.map((e,i)=>{
        return <p className='singleMorseCharacter'>{e}</p>
    });

    return(
        <div id='mainContainer'>
            <div id='titleContainer'>
                <h1 id='mainTitle'>Morsetus</h1>
                <img id='morseImage' src='https://vaatekauppastorage.blob.core.windows.net/morsekuva/MorseAlphabet.jpg'/>
            </div>
            <div id='outputContainer' className='staticText '>
                <div>
                    {InputMorse == false ? 
                        (
                            <Form.Label className='staticText'htmlFor="inputFormMorse">Text to Morse</Form.Label>
                        )
                        :(
                            <Form.Label htmlFor="inputFormMorse">Morse to Text</Form.Label>
                        )
                    }
                </div>
                <div id='morseTextContainer'>
                    {textToElement}
                </div>
            </div>
            <div id="inputContainer">
                    <div>
                        {InputMorse == false ? 
                            (
                                <label className='staticText' htmlFor='morseCheckbox'>Convert from Morse to Text  </label>
                                
                            )
                            :(
                                <label className='staticText' htmlFor='morseCheckbox'>Convert from Morse to Text  </label>
                                
                            )
                        }
                        <input type="checkbox" id="morseCheckbox"onChange={(e)=>{resetValues(); setInputMorse(e.target.checked);}}/> 
                    </div>

                <Form.Control
                    id="inputFormMorse"
                    as="textarea"
                    aria-describedby="morseHelpBlock"
                    value={Text} 
                    onChange={(e)=>{
                        var i = Output;
                        var text = e.target.value;
                        var textLength = text.split(" ").length
                        
                        if(i.length >= textLength){
                            setInputMorseLetter("");
                            var spliceAmount = 0;
                            //This is for the last letter to be removed
                            if(textLength == 1 && i.length == 1)
                                spliceAmount++;
                            console.log(spliceAmount);
                            spliceAmount = spliceAmount + i.length - textLength;

                            for(var k = 0; k < spliceAmount; k++){
                                i.splice(-1,1);
                                if(InputMorse == true){
                                    var morseLetterList = InputMorseLetterList;
                                    morseLetterList.splice(-1,1);
                                    setInputMorseLetterList(morseLetterList);
                                }
                            }
                        }
                        
                        if(i.length < text.length){
                            for(var j = i.length; j < text.length-1; j++){

                                if(InputMorse == false ){
                                    var temporaryLetter = Output[0] +text[j];
                                    i.push(MorseConverter({ Morse:InputMorse,Text:temporaryLetter }));
                                    setOutput(i);
                                }
                            }   

                                if(InputMorse == true){
                                    var morseLetter = InputMorseLetter;
                                    var spacesAmount = 0;

                                    if(text.length <= 1){
                                        morseLetter = morseLetter + text;
                                        setInputMorseLetter(morseLetter);
                                    }
                                    else if(text[text.length-1] != ' '){
                                        morseLetter = morseLetter + text[text.length-1];
                                        setInputMorseLetter(morseLetter);
                                    }

                                    for(var k = 0; k < text.length; k++){
                                        
                                        //An space triggers the morse checck process
                                        if(text[k] == ' '){
                                            spacesAmount++;
                                            var morseLetterList = InputMorseLetterList;
                                            
                                            if(morseLetterList.length < spacesAmount){
                                                console.log(morseLetterList);
        
                                                morseLetterList.push(morseLetter);
                                                setInputMorseLetterList(morseLetterList);
                                                
                                                console.log("Morse letter:"+morseLetter);
                                                i.push(MorseConverter({ Morse:InputMorse,Text:morseLetter}));
                                                setInputMorseLetter("");
                                            }
        
                                        }
                                    }
                                    
                                    setOutput(i);  
                                }
                            }
                            //set texts only point is to make the textToElement function to render changes to output
                            setText(text);
                        }
                    }
                />
            </div>
            <div className='staticText'>
                {InputMorse == false ? 
                    (
                        <Form.Text id="morseHelpBlock" muted>
                            Write something and it will be converted to morse!
                        </Form.Text>
                    )
                    :(
                        <Form.Text id="morseHelpBlock" muted>
                            Write morse and it will be converted to text. Seperate the letters with the spacebar. Valid inputs are 0,1, .,- and ·,-
                        </Form.Text>
                    )
                }
            </div>
        </div>
    )
}

export{Home}
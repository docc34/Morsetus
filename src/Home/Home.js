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
    const [TextHistoryLength, setTextHistoryLength] = useState(0);
    
    const resetValues = ()=>{
        setInputMorseLetter("");
        setInputMorseLetterList([]);
        setOutput([]);
        setText("");
    }

    useEffect(()=>{
    },[Text]);

    const textToElement = Output.map((e,i)=>{
        return <p key={i} className='singleMorseCharacter'>{e}</p>
    });

    

    const saveOutput = ()=>{

    }
    const removeMorse = (e)=>{
        if(e.output.length >= e.text.length ){
                        
        }
        //Remove function for morce
        var textLength = e.text.split(" ").length
        if(e.output.length >= textLength){
            setInputMorseLetter("");

            for(var k = 0; k < e.spliceAmount; k++){
                e.output.splice(-1,1);
                var morseLetterList = InputMorseLetterList;
                morseLetterList.splice(-1,1);
                setInputMorseLetterList(morseLetterList);
                setOutput(e.output);  
            }
        }
    }

    const removeText = (e)=>{
        //Remove function for Text
        if(e.output.length > e.text.length){

            for(var k = 0; k < e.spliceAmount; k++){
                e.output.splice(-1,1);
            }

            setOutput(e.output);  
            return (e.output);
        }
        return ("");
    }
    return(
        <div id='mainContainer'>
            <div id='titleContainer'>
                <h1 id='mainTitle'>Morsetus</h1>
                {/* <img id='morseImage' src='https://vaatekauppastorage.blob.core.windows.net/morsekuva/MorseAlphabet.jpg'/> */}
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
                        var output = Output;
                        var text = e.target.value;
                        var textLength = text.split(" ").length;
                        var spliceAmount = 0;

                        //Error on listojen pituuksissa
                        if(output.length <= text.length ){
                            if(InputMorse == false){
                                for(var j = output.length; j < text.length; j++){
                                    if(InputMorse == false ){
                                        var temporaryLetter = Output[0] +text[j];
                                        output.push(MorseConverter({ Morse:InputMorse,Text:temporaryLetter }));
                                        setOutput(output);  
                                    }
                                }   
                            }
                            else if(InputMorse == true && InputMorseLetterList.length <= textLength){
                                var spacesAmount = 0;
                                var morseLetter = InputMorseLetter;
                                console.log(text[text.length-1]);
                                if(text.length <= 1){
                                    morseLetter = text;
                                    setInputMorseLetter(morseLetter);
                                }
                                else if(text[text.length-1] != ' ' || text[text.length-1] == ' ' && morseLetter.length == 1){
                                    console.log("Historylengtrh"+TextHistoryLength);
                                    console.log("textLength"+text.length);
                                    //Current error is in the removal of characters
                                    if(TextHistoryLength >= text.length){
                                            morseLetter = morseLetter.substring(0,morseLetter.length-1);
                                    }
                                    else{
                                        morseLetter = morseLetter + text[text.length-1];
                                    }
                                    setInputMorseLetter(morseLetter);
                                    setTextHistoryLength(text.length);
                                }
                               
                                console.log(morseLetter);

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
                                            output.push(MorseConverter({ Morse:InputMorse,Text:morseLetter}));
                                            setInputMorseLetter("");
                                            setOutput(output);  
                                        }
                                    }
                                }
                            }
                        }

                        //This is for the last letter to be removed
                        if(text.length == 1 && output.length == 1)
                            spliceAmount++;
                        //Splice amount is defined
                        spliceAmount = spliceAmount + output.length - text.length;

                        if(InputMorse == true){
                            removeMorse({output:output,text:text, spliceAmount:spliceAmount});
                        }
                        else if(InputMorse == false){
                            removeText({output:output,text:text, spliceAmount:spliceAmount});
                        }
                        console.log(output);

                            //set texts only point is to make the textToElement function to render changes to output
                            setText(text);
                        }
                    }
                />
            </div>
            <div className='staticText'>
                {InputMorse == false ? 
                    (
                        <div>
                        <Form.Text id="morseHelpBlock" muted>
                            Write something and it will be converted to morse!
                        </Form.Text>
                        </div>

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
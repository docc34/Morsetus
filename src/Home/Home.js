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
        var spliceAmount = 0;
        var textLength = e.text.split(" ").length
        //This is for the last letter to be removed
        if(e.text.length == 1 && e.output.length == 1)
            spliceAmount++;
        //Splice amount is defined
        spliceAmount = spliceAmount + e.output.length - textLength;

        //Remove function for morce
        if(e.output.length >= textLength){
            for(var k = 0; k < spliceAmount; k++){
                e.output.splice(-1,1);
                var morseLetterList = InputMorseLetterList;
                morseLetterList.splice(-1,1);
                setInputMorseLetterList(morseLetterList);
                setOutput(e.output);  
            }
        }
    }

    const removeText = (e)=>{
        var spliceAmount = 0;
        //This is for the last letter to be removed
        if(e.text.length == 1 && e.output.length == 1)
            spliceAmount++;
        //Splice amount is defined
        spliceAmount = spliceAmount +  e.output.length - e.text.length;
        //Remove function for Text
        if(e.output.length > e.text.length){

            for(var k = 0; k < spliceAmount; k++){
                e.output.splice(-1,1);
            }
            setOutput(e.output);  
        }
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

                                if(text.length <= 1){
                                    morseLetter = text;
                                    setInputMorseLetter(morseLetter);
                                }
                                else if(text[text.length-1] != ' ' || text[text.length-1] == ' ' && morseLetter.length == 1){
                                    //Current error is in the removal of characters
                                    if(TextHistoryLength >= text.length){
                                        console.log("aa");
                                        morseLetter = morseLetter.substring(0,morseLetter.length-1);
                                    }
                                    else{
                                        morseLetter = morseLetter + text[text.length-1];
                                    }
                                    setInputMorseLetter(morseLetter);
                                }
                               
                                console.log(morseLetter);
                                console.log(MorseConverter({ Morse:InputMorse,Text:morseLetter}));
                                
                                //This code is not currently capable of copy paste checking
                                //An space triggers the morse check process
                                
                                if(text[text.length-1] == ' ' ){
                                    
                                    var morseLetterList = InputMorseLetterList;
                                    console.log(morseLetterList);

                                    morseLetterList.push(morseLetter);
                                    setInputMorseLetterList(morseLetterList);
                                    
                                    console.log("Morse letter:"+morseLetter);
                                    output.push(MorseConverter({ Morse:InputMorse,Text:morseLetter}));
                                    setInputMorseLetter("");
                                    setOutput(output);  
                                    
                                }
                                
                                //The letter processing is limited to only 1 letter at a time while the adding is capable of multiple

                                // for(var k = 0; k < text.length; k++){
                                    
                                //     //An space triggers the morse checck process
                                //     if(text[k] == ' '){
                                //         spacesAmount++;
                                //         var morseLetterList = InputMorseLetterList;
                                        
                                //         if(morseLetterList.length < spacesAmount){
                                //             console.log(morseLetterList);
    
                                //             morseLetterList.push(morseLetter);
                                //             setInputMorseLetterList(morseLetterList);
                                            
                                //             console.log("Morse letter:"+morseLetter);
                                //             output.push(MorseConverter({ Morse:InputMorse,Text:morseLetter}));
                                //             setInputMorseLetter("");
                                //             setOutput(output);  
                                //         }
                                //     }
                                // }
                                
                            }
                        }


                        if(InputMorse == true){
                            removeMorse({output:output,text:text});
                        }
                        else if(InputMorse == false){
                            removeText({output:output,text:text});
                        }
                        console.log(output);
                        setTextHistoryLength(text.length);
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
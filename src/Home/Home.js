import  { useEffect,useState } from 'react';
import {MorseConverter} from '../Functions/Functions'
import './Home.css';
import Form from 'react-bootstrap/Form';

const Home = ()=>{
    const [Output, setOutput] = useState([]);
    const [Text, setText] = useState("");
    const [InputMorse, setInputMorse] = useState(false);
    
    useEffect(()=>{
        setText("");
        if(InputMorse == true)
            setOutput("Input something in morse!");
        else
            setOutput("Input something in text!");
        
    },[InputMorse]);

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
                    <p className='singleMorseCharacter'>{Output}</p>
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
                    <input type="checkbox" id="morseCheckbox"onChange={(e)=>{ setInputMorse(e.target.checked);}}/> 
                </div>

                <Form.Control
                    id="inputFormMorse"
                    as="textarea"
                    aria-describedby="morseHelpBlock"
                    value={Text} 
                    onChange={(e)=>{
                            setOutput(MorseConverter({ Morse:InputMorse,Text:e.target.value }));                          
                            setText(e.target.value);
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
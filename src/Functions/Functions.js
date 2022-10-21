import React, { useEffect,useState } from 'react';

const MorseTable = [{morse:"1", alphabet:'E'}]
const MorseConverter = (e)=>{
    if(e.Morse == true){
        return e.Text;

    }
    else if(e.Morse == false){

    }
    else {
        return"Fatal Error"
    }
}

export{MorseConverter}
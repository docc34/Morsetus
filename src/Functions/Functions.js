

const MorseConverter = (e)=>{
    var MorseTable = [ //·
        {morse:"01", alphabet:'A'},
        {morse:"1000", alphabet:'B'},
        {morse:"1010", alphabet:'C'},
        {morse:"100", alphabet:'D'},
        {morse:"0", alphabet:'E'},
        {morse:"0010", alphabet:'F'},
        {morse:"110", alphabet:'G'},
        {morse:"0000", alphabet:'H'},
        {morse:"00", alphabet:'I'},
        {morse:"0111", alphabet:'J'},
        {morse:"101", alphabet:'K'},
        {morse:"0100", alphabet:'L'},
        {morse:"11", alphabet:'M'},
        {morse:"10", alphabet:'N'},
        {morse:"111", alphabet:'O'},
        {morse:"0110", alphabet:'P'},
        {morse:"1101", alphabet:'Q'},
        {morse:"010", alphabet:'R'},
        {morse:"000", alphabet:'S'},
        {morse:"1", alphabet:'T'},
        {morse:"001", alphabet:'U'},
        {morse:"0001", alphabet:'V'},
        {morse:"011", alphabet:'W'},
        {morse:"1001", alphabet:'X'},
        {morse:"1011", alphabet:'Y'},
        {morse:"1100", alphabet:'Z'},
        {morse:"0101", alphabet:'Ä'},
        {morse:"1110", alphabet:'Ö'},
        {morse:"01111", alphabet:'1'},
        {morse:"00111", alphabet:'2'},
        {morse:"00011", alphabet:'3'},
        {morse:"00001", alphabet:'4'},
        {morse:"00000", alphabet:'5'},
        {morse:"10000", alphabet:'6'},
        {morse:"11000", alphabet:'7'},
        {morse:"11100", alphabet:'8'},
        {morse:"11110", alphabet:'9'},
        {morse:"11111", alphabet:'0'},
        {morse:"010101", alphabet:'.'},
        {morse:"110011", alphabet:','},
        {morse:"001100", alphabet:'?'},
        {morse:"111000", alphabet:':'},
        {morse:"10010", alphabet:'/'},
        {morse:"100001", alphabet:'-'},
        {morse:"10001", alphabet:'='},
        {morse:"011110", alphabet:'’'},
        {morse:"101101", alphabet:'('},
        {morse:"101101", alphabet:')'},
        {morse:"001101", alphabet:'_'},
        {morse:"101011", alphabet:'!'},
        {morse:"01000", alphabet:'&'},
        {morse:"010010", alphabet:'"'},
        {morse:"101010", alphabet:';'},
        {morse:"0001001", alphabet:'$'},
        {morse:"101000", alphabet:'§'}
    ]
        
    if(e.Text != '' && e.Text != null && e.Text != undefined){
        var outputText = "";
        var morse = "";
        
        if(e.Morse == false){
            for(var j = 0; j < e.Text.length; j++){
                var letter = e.Text[j].toUpperCase();

                MorseTable.map((i,l) => {
                    
                    if(i.alphabet == letter){
                        var outputMorseLetter = "";

                        for(var k = 0; k < i.morse.length; k++){
                            if(i.morse[k] == 0)
                                outputMorseLetter = outputMorseLetter + "·";
                            if(i.morse[k] == 1)
                                outputMorseLetter = outputMorseLetter + "-";
                            if(letter == ' ')
                                outputMorseLetter = outputMorseLetter + "_";
                        }
                        morse = morse+ " " + outputMorseLetter;
                    }
                });
            }

            return morse;
        }
        else if(e.Morse == true){
            var morseList = [];
            //Split the given input from spaces and remove blank input
            morseList = e?.Text?.split(" ").filter(e => e != '' && e != ' ');

            for(var j = 0; j < morseList.length; j++){
                //For each "morsestrip", go trough the morsetable and compare the values
                //Go trough every "Morsestrip" and translate the input to 1 and 0
                var morseStrip =  morseList[j];
                var tempMorseStrip = "";

                for(var k = 0; k < morseStrip.length; k++){
                    if(morseStrip[k] == '.' || morseStrip[k] == '·' )
                        tempMorseStrip = tempMorseStrip + '0';
                    else if(morseStrip[k] == '-')
                        tempMorseStrip = tempMorseStrip + '1';
                }

                MorseTable.map(i => {
                    if(i.morse == tempMorseStrip){
                        outputText = outputText+ i.alphabet;
                        
                        if (outputText.length > morseList.length+1){
                            
                            outputText = outputText.substring(1,outputText.length);
                            
                            if(outputText.length > 1)
                                outputText = outputText.substring(2,outputText.length);
                            
                        }
                    }
                });
            }            
            return outputText;
        }
    }
    else {
        if(e.Morse == true)
            return "Input something in morse!"
        else if(e.Morse == false)
            return "Input something in text!"
    }
}

export{MorseConverter}
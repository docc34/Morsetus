

const MorseConverter = (e)=>{
    var MorseTable = [
        {morse:"·-", alphabet:'A'},
        {morse:"-", alphabet:'E'}
    ]

    if(e.Text != '' && e.Text != null && e.Text != undefined){
        // Saadakseen tietää kumittiko käyttäjä kirjaimen, otetaan kirjainhistoria 2 kirjainta taaksepäin ja verrataan sitö nykyiseen inputtiin funktiossa.
        var inputText = e.Text.toUpperCase();
        var outputLetter = "";
        var letter = "";
        var morse = 0;
        
        if(inputText.length == 0)
            letter = inputText[inputText.length];
        else
            letter = inputText[inputText.length-1];

        console.log(e);
        
        if(e.Morse == false){

            MorseTable.map((i,l) => {
                if(i.alphabet == letter){
                    morse = i.morse;
                    
                }
            });

            return morse;

        }
        if(e.Morse == true){


            MorseTable.map(i => {
                console.log(e.Morse);
                console.log(e.Morse);
                if(i.morse == e.Text){
                    outputLetter = i.alphabet;
                    console.log(outputLetter);
                }
            });

            return outputLetter;
        }
        else {
            return["Fatal Error"]
        }
    }
    else {
        return "0"
    }
}

export{MorseConverter}
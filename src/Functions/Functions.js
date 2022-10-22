

const MorseConverter = (e)=>{
    var MorseTable = [
        {morse:"·-", alphabet:'A'},
        {morse:"-", alphabet:'E'}
    ]
    if(e.Text != '' && e.Text != null && e.Text != undefined){
        // Saadakseen tietää kumittiko käyttäjä kirjaimen, otetaan kirjainhistoria 2 kirjainta taaksepäin ja verrataan sitö nykyiseen inputtiin funktiossa.
        var text = e.Text.toUpperCase();
        var letter = "";
        if(text.length == 0)
        letter = text[text.length];
        else
        letter = text[text.length-1];

        var morse = 0;
        console.log(e);
        
        if(e.Morse == false){

            MorseTable.map((i,l) => {
                if(i.alphabet == letter){
                    morse = i.morse;
                    
                }
            });

            return morse;

        }
        else if(e.Morse == true){

            MorseTable.map(i => {
                if(i.morse == e.Morse){
                    text[0] = text[0]+i.alphabet
                    console.log(text);
                }
            });

            return [text];
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


const MorseConverter = (e)=>{
    var MorseTable = [
        {morse:"·-", alphabet:'A'},
        {morse:"-", alphabet:'E'}
    ]
    // Saadakseen tietää kumittiko käyttäjä kirjaimen, otetaan kirjainhistoria 2 kirjainta taaksepäin ja verrataan sitö nykyiseen inputtiin funktiossa.

    var Text = e.Text;
    var Letter = [Text.length-1]
    console.log(e);
    
    if(e.Morse == true){

        MorseTable.map((i,l) => {
            if(i.alphabet ==  Letter?.toUpperCase()){
                Text.push(i.morse)
                console.log(Text);
                
            }
        });

        return Text;

    }
    else if(e.Morse == false){

        MorseTable.map(i => {
            if(i.morse == e.Morse){
                Text[0] = Text[0]+i.alphabet
                console.log(Text);
            }
        });

        return Text;
    }
    else {
        return"Fatal Error"
    }
}

export{MorseConverter}
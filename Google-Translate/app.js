EventListener();


function EventListener(){
    document.getElementById("translate-form").addEventListener("submit",translateWord);

    document.getElementById("language").onchange=function(){
        ui.changeUi();
    }
}

const translate=new Translate();
const ui=new Ui();

function translateWord(e){
    translate.translater(document.getElementById("word").value,document.getElementById("language").value)
    .then(value=>{
        const word=value.data.translations[0].translatedText;
        ui.displayTranslate(word);
    })
    .catch(err=>console.log(err))
    e.preventDefault();
}


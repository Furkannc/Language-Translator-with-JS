class Ui{
    constructor(){
        this.outputImage=document.getElementById("outputImage");
        this.outputLanguage=document.getElementById("outputLanguage");
        this.outputWord=document.getElementById("outputWord");
        this.languageList=document.getElementById("language");
    }
    changeUi(){
        //Arayüz değiştir
        this.outputImage.src=`images/${this.languageList.value}.png`;
        this.outputLanguage.innerHTML = this.languageList.options[this.languageList.selectedIndex].textContent;
        //inner html veya text content olabilir
    }
    displayTranslate(word){
        this.outputWord.textContent=word;
    }

}
class Translate{ 
    async translater(word,language) {
        const encodedParams = new URLSearchParams();
        encodedParams.append("q", word);
        encodedParams.append("target", language);
        encodedParams.append("source", "tr");

        const options = {
	    method: 'POST',
	    headers: {
		'content-type': 'application/x-www-form-urlencoded',
		'Accept-Encoding': 'application/gzip',
		'X-RapidAPI-Host': 'google-translate1.p.rapidapi.com',
		'X-RapidAPI-Key': 'c84c18dd54msh51c09b1eed0713bp19e4f6jsnae78ea34f7ce'
	    },
	    body: encodedParams
        };

        const response=await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        
        const data=await response.json();

        return data;
    } 
}


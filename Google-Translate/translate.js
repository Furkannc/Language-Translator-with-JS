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
		'X-RapidAPI-Key': 'YOUR_API_KEY'
	    },
	    body: encodedParams
        };

        const response=await fetch('https://google-translate1.p.rapidapi.com/language/translate/v2', options)
        
        const data=await response.json();

        return data;
    } 
}


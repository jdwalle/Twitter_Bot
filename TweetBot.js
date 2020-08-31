var Twitter = require('twitter');
const express = require('express');
const server = express();

var client = new Twitter({
    consumer_key: '*********************',
    consumer_secret: '******************************',
    access_token_key: '*****************************************',
    access_token_secret: '******************************************'
});


server.get('/api/tweets/:keywrd', function(req, res){
    let searchParam = {q: req.params.keywrd, count: 50};
    client.get('search/tweets', searchParam, function(error,data,response){
        if(error){
             res.send(error);
         } else {
            
            let statuses = data.statuses;
            if(statuses.length < 50){
                res.send('Error: keyword does not have enough tweets');
            } else {
                let map = {};
                for(i =0; i< statuses.length; i++){
                    let text = statuses[i].text;
                    let splitStr = text.split(" ");
                    for(idx = 0; idx < splitStr.length; idx++){
                        if(splitStr[idx] in map){
                            map[splitStr[idx]].count = map[splitStr[idx]].count+1;
                        } else {
                            map[splitStr[idx]] = {word: splitStr[idx], count:1};
                        }
                    }
                }
                for(var x in map){
                    if(x.charAt(0) === "R" && x.charAt(1) === "T"){
                        delete map[x];
                    }
                }
                let maxCount = 0;
                let maxWord;
                let finalStr = "";
                for(idx = 0; idx < 50; idx++){
                    for(var x in map){
                        if(map[x].count > maxCount){
                            maxCount = map[x].count;
                            maxWord = x;
                        }
                    }
                    maxCount = 0;
                    if(finalStr.length + maxWord.length < 250){
                    finalStr = finalStr + " " + maxWord;
                    }
                    delete map[maxWord];
                }
                res.send(finalStr);
            }
        }
     })
})
server.listen(5000, ()=>{
    console.log("Connected to port 5000!");
});

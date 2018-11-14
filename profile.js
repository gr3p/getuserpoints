const https = require('https');
const print = require('./printMessage');
//const users = ['','alenaholligan','davemcfarland'];

var getUsers = (user) => {
 try {
        https.get(`https://teamtreehouse.com/${user}.json`, (resp) => {
          
            let responseDataResult  = "";
            var packages = 0;
            resp.on('data', responseData => {
            packages ++;
            responseDataResult += responseData;
            });
            resp.on('end', () => {
           
                let jsonResult = getJsonResult(responseDataResult);
                
                print.printMessage(user, jsonResult.badges.length, jsonResult.points.total)
                });
        
        }).on('error', (e) => {
            console.error('Problem with request: '+e.message);
        });
 } catch (error) {
     console.error(error.message);
 }   


}

function getJsonResult(str) {
    var result = String.empty;
    try {
        result = JSON.parse(str);
    } catch (e) {
       throw new Error('No Json to convert. Error:') 
    }
    return result;
}

module.exports.getUsers = getUsers;
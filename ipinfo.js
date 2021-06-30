import fetch from 'node-fetch'



fetch('https://ipinfo.io/167.40.79.24/json?token=4d2354576cfb97')

.then(function(response) {
  
  return response.json()
  
})

.then(function  (jsonResponse) {
  console.log(jsonResponse.ip, jsonResponse.country)

     if (jsonResponse.country === "CA") {
        console.log('Welcome to Canada')
        
    } else {
        console.log("You're not Canadian!")
    };
})
;

  
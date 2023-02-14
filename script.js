var userInput = $('userInput');


function getApi()  {
   var getURL = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={318d9e9397b1f9f0ae20f535e9a221ec}';
    fetch(getURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data);
            
            });

}

userInput.on('click', getApi());
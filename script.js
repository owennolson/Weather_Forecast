var searchBtn = $('searchBtn');
var userInput = $('searchInput');



function getApi()  {
   var getURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput.value + '&APPID=3eb6b9a5a18a639145c452fbac9d924a';
    fetch(getURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data);
        });
}

searchBtn.on('click', getApi());
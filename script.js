var searchBtn = $('#searchBtn');
var userInput = $('#searchInput');



function getApi()  {
   var getURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + userInput.val() + '&APPID=3eb6b9a5a18a639145c452fbac9d924a';
    fetch(getURL)
        .then(function (response) {
        return response.json();
        })
        .then(function (data) {
            console.log(data);
            $(".weatherCity").text(data.name);
            $("#mainTemp").text("Temp:" + data.main.temp + "°");
            $("#mainWind").text("Wind" + data.wind.speed + "mph");
            $("#mainHumidity").text("Humidity" + data.main.humidity + "%");
            $("#mainIcon").attr("src" , "http://openweathermap.org/img/wn/"+ data.weather[0].icon + ".png");
        });
        getFiveDayApi()
}
function getFiveDayApi() {
    var fiveDayURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' +userInput.val() + '&appid=3eb6b9a5a18a639145c452fbac9d924a';
    fetch(fiveDayURL)
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data);
        //day 1
        if(i = 1){
            $("#day1Temp").text("Temp:" + data.list[i].main.temp + "°")
            $("#day1Wind").text("Wind:" + data.list[i].wind.speed + "mph")
            $("#day1Humidity").text("Humidity:" + data.list[i].main.humidity + "%")
            $("#day1Icon").attr("src" , "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon + ".png")
            i++;
        }
        //day 2
        if(i = 2){
                $("#day2Temp").text("Temp:" + data.list[i].main.temp + "°")
                $("#day2Wind").text("Wind:" + data.list[i].wind.speed + "mph")
                $("#day2Humidity").text("Humidity:" + data.list[i].main.humidity + "%")
                $("#day2Icon").attr("src" , "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon + ".png")
                i++;
        }
        //day 3
        if(i = 3){
            $("#day3Temp").text("Temp:" + data.list[i].main.temp + "°")
            $("#day3Wind").text("Wind:" + data.list[i].wind.speed + "mph")
            $("#day3Humidity").text("Humidity:" + data.list[i].main.humidity + "%")
            $("#day3Icon").attr("src" , "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon + ".png")
            i++;
        }
        //day 4
        if(i = 4){
            $("#day4Temp").text("Temp:" + data.list[i].main.temp + "°")
            $("#day4Wind").text("Wind:" + data.list[i].wind.speed + "mph")
            $("#day4Humidity").text("Humidity:" + data.list[i].main.humidity + "%")
            $("#day4Icon").attr("src" , "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon + ".png")
            i++;
        }
        //day5
        if(i = 5){
            $("#day5Temp").text("Temp:" + data.list[i].main.temp + "°")
            $("#day5Wind").text("Wind:" + data.list[i].wind.speed + "mph")
            $("#day5Humidity").text("Humidity:" + data.list[i].main.humidity + "%")
            $("#day5Icon").attr("src" , "http://openweathermap.org/img/wn/"+ data.list[i].weather[0].icon + ".png")
            i++;
        }
    });
}

function saveName(){
    //event.preventDefault();
    var value = userInput.value;
    console.log(value);
    var value = localStorage.setItem("userValue" , JSON.stringify[value]);
};

function displayList() {
    var value = localStorage.getItem("userValue");
    value = JSON.parse(value);
    console.log(value);
    var list = document.createElement("li");
    list.textContent = value;
    var ul = $("#historyList");
    ul.appendChild(list);
}

displayList();
searchBtn.on('click', getApi, saveName);
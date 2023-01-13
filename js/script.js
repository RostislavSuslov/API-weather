fetch('https://api.openweathermap.org/data/2.5/weather?lat=49.23&lon=28.46&appid=476f278242abf7915200507af19d7db4')
// fetch('../js/test.json')
.then(function (resp){ return resp.json() })
.then(function (data) {
    document.querySelector('.city-name').innerHTML = data.name
    document.querySelector('.temp_max').innerHTML =    Math.round(data.main.temp_max - 273) + '&deg';
    document.querySelector('.temp_middle').innerHTML = Math.round(data.main.temp - 273) + '&deg';
    document.querySelector('.temp_min').innerHTML =    Math.round(data.main.temp_min - 273) + '&deg';
    console.log(data);
})
.catch(function(){
    //cath any errors
})

 


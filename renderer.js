
//Time Stuff
// var startDate = new Date(2015, 11, 18, 0, 0, 0, 0);
// var endDate = new Date(2165, 11, 18, 0, 0, 0, 0);
var startDate = new Date(2022, 11, 30, 0, 0, 0, 0);
var endDate = new Date(2023, 12, 31, 0, 0, 0, 0);


// var length_of_film = 5760; // In Seconds
var length_of_film = 41; // In Seconds
var seconds_of_film; // In Seconds
var percent_of_film;

var length =  endDate.getTime() - startDate.getTime();
var length_seconds = Math.floor((length) / (1000));

// Video Stuff
var vid = document.getElementById("main");
var curtain = document.getElementById("shade");
var loadedmetadata = false;

function currenttime(){
    var nowDate = new Date();
    var difference = nowDate.getTime() - startDate.getTime();
    var difference_seconds = Math.floor((difference) / (1000));
    
    
    seconds_of_film = (length_of_film * difference_seconds)/length_seconds;
    percent_of_film = ((seconds_of_film/length_of_film)*100).toFixed(3) + "%";
    console.log(seconds_of_film);
    return seconds_of_film;
}



window.addEventListener("load", (event) => {
    loadedmetadata = true;
    vid.currentTime = currenttime();

    curtain.classList.add('none');
});




// window.setInterval(function(){
//     if(loadedmetadata){
//         vid.currentTime = currenttime();
//         termConsole.log(currenttime());
//     }
// }, 5000);

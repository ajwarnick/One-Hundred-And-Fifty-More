// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.


//Time Stuff
var startDate = new Date(2015, 11, 18, 0, 0, 0, 0);
var endDate = new Date(2165, 11, 18, 0, 0, 0, 0);

var length_of_film = 5760; // In Seconds
var seconds_of_film; // In Seconds
var percent_of_film;

var length =  endDate.getTime() - startDate.getTime();
var length_seconds = Math.floor((length) / (1000));

function currenttime(){
    var nowDate = new Date();
    var difference = nowDate.getTime() - startDate.getTime();
    var difference_seconds = Math.floor((difference) / (1000));
    
    seconds_of_film = (length_of_film * difference_seconds)/length_seconds;
    percent_of_film = ((seconds_of_film/length_of_film)*100).toFixed(3) + "%";
    return seconds_of_film;
}



// Video Stuff
var vid = document.getElementById("main");

var loadedmetadata = false;
if (window.addEventListener) {
    window.addEventListener('loadedmetadata', function(ev) {
            loadedmetadata = true;
            vid.currentTime = currenttime();
    }, true);
}



window.setInterval(function(){
    if(loadedmetadata){
        vid.currentTime = currenttime();
        termConsole.log(currenttime());
    }
}, 5000);

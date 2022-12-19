// This is the JavaScript for my homepage website. This essentially houses two functions, one which is a live date/time on each webpage
// and the second is made to iterate through the art images on the AI Art webpage.

function date_time(e) {
    // Initializes variables uses datetime functions and create array variables. There is then a few conditionals to append a 0
    // to a minute if needed, as well as set the meridiem, change the time to 12 hour standard, and add the ordinal to the time.
    var date = new Date();
    var day = date.getDate()
    var hour = date.getHours()
    var minute = date.getMinutes()
    var second = date.getSeconds()
    var monthname = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    var weekday_name = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    if (minute <= 9) {
        minute = "0" + minute
    }
    if (second <= 9) {
        second = "0" + second
    }
    if (hour <= 11) {
        var meridiem = "AM"
    }
    else if (hour >= 12) {
        var meridiem = "PM"
    }
    if (hour != 0 && hour != 12) {
        hour = hour % 12
    }
    else if (hour === 0 || hour === 12) {
        hour = 12
    }
    if (day > 13 || day < 11) {
        if (day === 1 || day % 10 === 1) {
            day = day + "st"
        }
        else if (day === 2 || day % 10 === 2) {
            day = day + "nd";
        }
        else if (day === 3 || day % 10 === 3) {
            day = day + "rd";
        }
        else {
            day = day + "th";
        }
        var today = weekday_name[date.getDay()] + "<br>" + monthname[date.getMonth()] + " " + day + " " + date.getFullYear();
        var time = hour + ":" + minute + ":" + second + " " + meridiem;
        document.getElementById("time").innerHTML = time;
        document.getElementById("date").innerHTML = today;
        t = setTimeout(function () { date_time() }, 1000);
    }
}

// Initializes the n variable for the artsources index
var n = 0;
// This function creates two arrays for the AI Art images and image names. It then uses a nested function to iterate through each image as
// as a user clicks the Next button or Last button.
function loadArt(e) {
    var artsources = ["assets/moonthief.PNG", "assets/moonthief_2.PNG", "assets/spaceanimals.png", "assets/ScribingontheWalls.png", "assets/oldman.png", "assets/kidandmonster.png", "assets/kidandmonster2.png", "assets/GrimReaper.png", "assets/GrimReaper1.png", "assets/GhostinLibrary.png", "assets/EgyptianHeads.png", "assets/diseases.png", "assets/BohdiSpaceTree.png", "assets/submarine.png"];
    var artname = ["Moon Thief", "Older Moon Thief", "Space Animals", "Scribing on the Walls", "old man", "Kid & Monster", "Kid & Monster: 2nd Evolution", "Grim Reaper", "Grim Reaper 2", "Library Ghost", "Egyptian Bald", "Humanoid Diseases", "Bohdi Space Tree", "Submarine Blood"];
    var img = document.getElementById("aiartimg");
    var imgtext = document.getElementById("aiartname");
    function next_art(e) {
        n++;
        if (n >= artsources.length) {
            n = 0;
        }
        console.log(n)
        img.src = artsources[n];
        imgtext.innerHTML = artname[n];
    }
    function previous_art(e) {
        n--;
        if (n < 0) {
            n = artsources.length;
        }
        if (n === artsources.length) {
            n = artsources.length - 1;
        }
        console.log(n)
        img.src = artsources[n];
        imgtext.innerHTML = artname[n];
    }
    document.getElementById("artbtn").addEventListener("click", function () { next_art() });
    document.getElementById("artbtnb").addEventListener("click", function () { previous_art() });


}

document.addEventListener("DOMContentLoaded", function () { date_time() });
if (document.URL.includes("aiart.html")) {
    document.addEventListener("DOMContentLoaded", function () { loadArt() });
}

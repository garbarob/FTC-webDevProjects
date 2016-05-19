var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];



window.onload = function () {
    var myTimeout;
    var birthDate;
    
    /********************************
    *****   DISPLAY A MESSAGE   *****
    *********************************/
    function displayMessage(messageToBeDisplayed, typeOfMessage) {
        if (typeOfMessage === "error") {
            document.getElementById("messageBox").className = "redText";
            document.getElementById("yourAge").className = "notDefined";
        } else if (typeOfMessage === "info") {
            document.getElementById("messageBox").className = "greenText";
            document.getElementById("yourAge").classList.remove("notDefined");
        } else {
            document.getElementById("messageBox").classList.remove("redText");
            document.getElementById("yourAge").classList.remove("notDefined");
        }
        
        document.getElementById("messageBox").innerHTML = messageToBeDisplayed;
        clearTimeout(myTimeout);
        myTimeout = setTimeout(function () {
            document.getElementById("messageBox").innerHTML = "&nbsp;";
        }, 1500);
    }
    
    /********************************************
    *****   RETURNS A STRING WITH THE AGE   *****
    *********************************************/
    function age() {
        var today = new Date();
        birthDate = new Date(document.getElementById("dateOfBirth").value);
        var ageFull = new Date(today - birthDate);
        
        //var ageYear = Math.floor((Math.floor(ageFull / 1000)) / 31536000);
        
        var ageSeconds = Math.floor(ageFull / 1000);
        var ageMinutes = Math.floor(ageSeconds / 60);
        var ageHours = Math.floor(ageMinutes / 60);
        var ageDays = Math.floor(ageHours / 24);
        var ageYears = Math.floor(ageDays / 365);
        
        var youAgeString = "<span class='ageField'>Years:</span>" + ageYears + "<br>" + "<span class='ageField'>Days:</span>" + ageDays + "<br>" + "<span class='ageField'>Hours:</span>" + ageHours + "<br>" + "<span class='ageField'>Minutes:</span>" + ageMinutes + "<br>" + "<span class='ageField'>Seconds:</span>" + ageSeconds;
        
        return youAgeString;
    }
    
    /****************************************************
    *****   BUTTON TO CALCULATE AGE - CLICK EVENT   *****
    *****************************************************/
    document.getElementById("btnCalculateAge").addEventListener("click", function (event) {
        event.preventDefault();
        var dateFormat = /^(\d{4})\-(\d{1,2})\-(\d{1,2})$/;
        if (document.getElementById("dateOfBirth").value === "" || !document.getElementById("dateOfBirth").value.match(dateFormat)) {
            displayMessage("A valid date must be entered", "error");
        } else {
            displayMessage("Thanks", "info");
            document.getElementById("yourAge").innerHTML = age();
            loadAJAX(ageMinutes);
        }
    });
    
    /****************************************
    *****   DATE AND TIME - REAL TIME   *****
    *****************************************/
    function myTimer() {
        var today = new Date();
            
        if (!document.getElementById("yourAge").classList.contains("notDefined")) {
            document.getElementById("yourAge").innerHTML = age();
        }
            
    // Date
        var day = today.getDate();
        // suffix for the day
        if ((day % 10) === 1 && (day % 100) !== 11) {
            day += "st";
        } else if ((day % 10) === 2 && (day % 100) !== 12) {
            day += "nd";
        } else if ((day % 10) === 3 && (day % 100) !== 13) {
            day += "rd";
        } else {day += "th"; }
                
        var month = today.getMonth(),
            year = today.getFullYear();
    // Time
        var hours = today.getHours(),
            minutes = today.getMinutes(),
            seconds = today.getSeconds();
        
        var loadDate = day + " " + months[month] + " " + year,
            loadTime = ((hours > 9) ? "" : "0") + hours + " " + ((hours === 1) ? "hour" : "hours") + " and " + ((minutes > 9) ? "" : "0") +  minutes + " " + ((minutes === 1) ? "minute" : "minutes") + " and " + ((seconds > 9) ? "" : "0") + seconds + " " + ((seconds === 1) ? "second" : "seconds");
        document.getElementById("loadDate").innerHTML = loadDate;
        document.getElementById("loadTime").innerHTML = loadTime;
    }
    
    /****************************************************
    *****   AJAX -    *****
    *****************************************************/
    function loadAJAX(ageMinutes) {
        //alert("Clicked Load AJAX Content - this would load the specified url, but only works if we get the response from a server....");
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (xhttp.readyState === 4 && xhttp.status === 200) {
                document.getElementById("AJAXoutputDiv").innerHTML = xhttp.responseText;
            }
        };
        xhttp.open("GET", "mcr50-ajax.php#ageMinutes=" + ageMinutes, true);
        xhttp.send();
    }
    
    // called once before first setInterval starts to avoid initial delay of 1 second
    myTimer();
    
    // sets the timer to update every second
    var updateDateTime = setInterval(myTimer, 1000);
};
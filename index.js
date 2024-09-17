
/* Home variables*/

let homeScore = document.getElementById('home-score-el')
let homeFouls = document.getElementById('home-fouls-el')
let homeScoreTotal = 0
let homeFoulsTotal = 0

/* Guest variables*/

let guestScore = document.getElementById('guest-score-el')
let guestFouls = document.getElementById('guest-fouls-el')
let guestScoreTotal = 0
let guestFoulsTotal = 0

/* Game Timer variables */

let boardSeconds = 00;
let boardMinutes = 15;
let boardTime = "15:00";
let startCountDown = setInterval(countDown, 1000);
let boardClock = document.getElementById('clock-el')

/* Period Variables Variables */

let boardPeriod = document.getElementById('period-el')
let currentPeriod = 1;
let isHalfTime = false;

/* Set Half Time, Add 5 minutes, Take away 1 minute */

function halfTime() {
    isHalfTime = true;
    boardPeriod.textContent = "H"
    boardSeconds = 0;
    boardMinutes = 5;
    boardTime = "5:00";
    updateClock(); 
    stopClock();
}

function addFive() {
    boardMinutes += 5;
    updateClock(); 
}

function minusOne() {
    if (boardMinutes >= 1)
    {
        boardMinutes -= 1;
    }
    else 
    {
        boardSecons = 0;
    }
    updateClock(); 
}

/*
    countDown
    A function that is executed every second to reduce the time on the clock by one second
    Carry over from seconds to minutes is handled as well as adjustments at the end of a period
    Lastly, the clock is updated to reflect the new values in minutes and seconds
*/ 

function countDown() {
    if (boardSeconds > 0) {
        boardSeconds -= 1;
    } else if (boardMinutes > 0) {
        boardMinutes -= 1;
        boardSeconds = 59;
    } else {
        endPeriod();
    }
    updateClock();
}

/* Begins the execution of the updateClock function at an interval of once per second */

function startClock() {
    stopClock();    // stop the current clock to prevent multiple simultaneous clocks
    startCountDown = setInterval(countDown, 1000);
}

/* Halts the execution of the interval function */

function stopClock() {
    clearInterval(startCountDown);
    startCountDown = null;  // Prevention from multiple simultaneous clocks
}


/* 
    Update Clock
    - Sets the boardTime variable = to a string that includes the board minutes and board seconds as strings with a padded 0 at the start of each number
    - Then updates the element in HTML that holds the time with this new value
*/

function updateClock() {
    boardTime = `${String(boardMinutes).padStart(2, '0')}:${String(boardSeconds).padStart(2, '0')}`;
    boardClock.textContent = boardTime;
}

/* Reset the clock to 15 minutes whenever needed */

function resetTime() {
    boardSeconds = 0;
    boardMinutes = 15;
    updateClock();
}

/* 
    End Period
    Stop the countdown when it reaches 0:00
    Set half time to false
    Change the period on the board from to reflect the current period
    Set the time back to 15:00
*/

function endPeriod() {
    stopClock();
    isHalfTime = false;
    boardPeriod.textContent = currentPeriod
    resetTime();
}

/* Home Controls */

function home1Pointer() {
    homeScoreTotal += 1
    updateBoard()
}

function home2Pointer() {
    homeScoreTotal += 2
    updateBoard()
}

function home3Pointer() {
    homeScoreTotal += 3
    updateBoard()
}

function homeFoul() {
    homeFoulsTotal += 1
    updateBoard()
}


/* Guest Controls */

function guest1Pointer() {
    guestScoreTotal += 1
    updateBoard()
}

function guest2Pointer() {
    guestScoreTotal += 2
    updateBoard()
}

function guest3Pointer() {
    guestScoreTotal += 3
    updateBoard()
}

function guestFoul() {
    guestFoulsTotal += 1
    updateBoard()
}


/* Updating and resetting the board */

function updateBoard() {
    homeScore.textContent = homeScoreTotal
    guestScore.textContent = guestScoreTotal
    homeFouls.textContent = homeFoulsTotal
    guestFouls.textContent = guestFoulsTotal
    boardTime = boardMinutes + ":" + boardSeconds // Assemble time for presentation
    updateClock(); // Refresh the displayed time
    updateWinner()
    
    // Update period to reflect the current period or half time
    if (isHalfTime)
    {
        boardPeriod.textContent = "H"
    }
    else
    {
        boardPeriod.textContent = currentPeriod
    } 
}

/* 
    Sets the game values to zero except for the period(1) and the clock(15:00). 
    The board is updated to match
*/
function resetBoard() {
    // Home Values
    homeScoreTotal = 0
    homeFoulsTotal = 0
    
    // Guest Values
    guestScoreTotal = 0
    guestFoulsTotal = 0

    // Game Values
    currentPeriod = 1
    isHalfTime = false
    
    // Update Display
    resetTime()
    stopClock()
    updateBoard()
}

/* Period */

function newPeriod() {
    if (currentPeriod < 4)
    {
        currentPeriod += 1
    }
    else
    {
        currentPeriod = 1
    }
    
    resetTime()
    stopClock()
    updateBoard()
}


/* Highlighting the Winner */

function updateWinner() {
    
    homeScore.style.border = '5px solid black'
    guestScore.style.border = '5px solid black'    
    
    if (homeScoreTotal > guestScoreTotal)
    {
        homeScore.style.border = '5px solid green'
    }
    else if (homeScoreTotal < guestScoreTotal)
    {
        guestScore.style.border = '5px solid green'
    }
 
}


// Stop the clock and update display
stopClock()
updateBoard()
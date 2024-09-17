# Scoreboard

![Preview image of final project](images\project-scoreboard.png)

## Project Overview 
"Scoreboard" is a counting app meant to emulate a standard scoreboard used in basketball games. Basic HTML, CSS, and JavaScript are all demonstrated. Stretch goals were completed and functionality was expanded beyond the original scope of three buttons and a display to track points(per each of two teams). Functionality such as a countdown timer and persisting period states were added while expanding the project scope.


## Features

![Example Given for Requirements](images\requirements-scoreboard.png)

__Requirements:__ <br/>
- Build it from "scratch"
- Follow the design (taken from a Figma file)
- Make all six buttons work (+1, +2, + 3 for both home and guest)

__Stretch Goals:__ <br/>

- Add a "New Game" button
- Highlight the leader
- Add a few more counters (e.g. period, fouls, timer)
- Change the design (make it your own, turn into a counter for a different sport)
</br>

**My Implementation:**<br/>

- Changed the background to a gradient
- Added a countdown clock including
    - Start/Stop
    - "+5" or "-1" minutes (to fine tune timer settings as needed)
- Added a foul tracker for each team
- Added a period tracker for the game (includes "H" for halftime)
- Added a new game button to reset all values to their start
- Highlighted the winning team with a border

## Challenges and Learning

### DOM Element Initialization Order

I received an error indicating that the boardClock wasn't initialized before it was access. With clarification from ChatGPT, I learned that this can occur if the JavaScript code runs before the DOM is fully constructed. The solution to address this issue was to set the script tag for the JavaScript just before the closing body tag in the HTML. This ensured that the DOM elements were created before the code was run and resolved the issue.

### Calling SetInterval

I received an error that I had called setInterval incorrectly. With some assistance from ChatGPT, I learned that I should not pass countDown as a function call but as a reference to the function. I made this change by removing the () from the function within the setInterval parameter list. Before doing so, the countDown function would be referenced immediately, rather than as called for by the setInterval function.

### Clearing SetInterval

While reviewing this information, ChatGPT also highlighted the importance of using clearInterval() to ensure that multiple countdown instances did not exist simultaneously.


## Installation
Install the dependencies and run the project

npm install<br/>
npm start<br/>
Head over to https://vitejs.dev/ to learn more about configuring vite

## Contributing
Feel free to fork this project and submit pull requests. You can also open issues for any bugs you find or enhancements you think would be useful.

## Authors
John Okleberry - [Github profile](https://github.com/John-Okleberry)

About Scrimba
At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜 If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉 The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

Our courses
The Frontend Career Path
Become a Scrimba Pro member
Happy Coding!

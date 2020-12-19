import {
    startGame,
    informationOutput,
    showGameOutput,
    replayGame,
    showGames
} from './view.js';

import {
    nextInfo,
    nextShowGame,
    checkLetterBtn,
    playAgainBtn,
    checkLetter,
    replayBtn,
    listGames
} from "./model.js";

startGame();

nextInfo.addEventListener("click", informationOutput);
nextShowGame.addEventListener("click", showGameOutput);
checkLetterBtn.addEventListener("click", checkLetter);
playAgainBtn.addEventListener("click", showGameOutput);
replayBtn.addEventListener("click", replayGame);
listGames.addEventListener("click", showGames);
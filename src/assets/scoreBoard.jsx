const ScoreBoard = ({ scoreProp, highScoreProp }) => {
    return (
        <div id="scoreBoardContainer">
            <img src="/Logo.png" id="logo" alt="Logo"></img>
            <div id="scoreContainer">
                <h1>Score:</h1>
                <div id="score">{scoreProp}</div>
                <img src="/laserGun.png" id="scoreLogo" alt="Score Logo" />
            </div>

            <div id="highScoreContainer">
                <h1>Highscore:</h1>
                <div id="highScore">{highScoreProp}</div>
                <img src="/plumbus.png" id="highScoreLogo" alt="Highscore Logo" />
            </div>
        </div>
    );
};

export default ScoreBoard;

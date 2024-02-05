import { useState, useEffect } from "react";
import ScoreBoard from "./assets/scoreBoard";
import CreateCard from "./assets/cards";
import RandomNum from "./assets/randomNum";

function App() {
    const [score, setScore] = useState(0);
    const [highScore, setHighScore] = useState(0);
    const [dataArr, setDataArr] = useState([]);
    const [clickedCards, setClickedCards] = useState([]);

    const handleCardClick = (name) => {
        if (clickedCards.includes(name)) {
            console.log('doubleClick!');
            return setScore(0), setDataArr([...dataArr]),setClickedCards([])
        
        } else {
            if(score >= highScore ){setHighScore(prevScore => prevScore +1)}
            console.log(clickedCards);
            setClickedCards(prevClickedCards => [...prevClickedCards, name]);
            setScore(prevScore => prevScore +1)
            setDataArr([...dataArr]);
        }
    };

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setDataArr(data.results))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

    const renderCards = () => {
        const cards = [];
        for (let i = 0; i < 20; i++) {
            const index = RandomNum();
            cards.push(
                <CreateCard
                    key={dataArr[index].id + '-' + i}
                    character={dataArr[index].image}
                    name={dataArr[index].name}
                    species={'Species: ' + dataArr[index].species}
                    status={'Status: ' + dataArr[index].status}
                    origin={'Origin: ' + dataArr[index].origin.name}
                    created={'Created: ' + dataArr[index].created}
                    onClick={() => handleCardClick(dataArr[index].name)}
                />
            );
        }
        return cards;
    };

    return (
        <div id="main">
            <ScoreBoard
                scoreProp={score}
                highScoreProp={highScore}
            />
            <div id="deck">
                {dataArr.length > 0 ? renderCards() : <p>Loading...</p>}
            </div>
        </div>
    );
}

export default App;

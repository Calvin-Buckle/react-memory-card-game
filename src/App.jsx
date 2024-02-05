import { useState, useEffect } from "react";
import ScoreBoard from "./assets/scoreBoard";
import CreateCard from "./assets/cards";
import RandomNum from "./assets/randomNum"

function App() {

    
   
    const [dataArr, setDataArr] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setDataArr(data.results))
            .catch(error => console.error("Error fetching data:", error));
    }, []);

      
    const renderCards = () => {
        const cards = [];
        for(let i = 0; i < 20; i++){
            const index = RandomNum();
            cards.push(
                <CreateCard
                    key={dataArr[index].id + '-' + i}
                    character={dataArr[index].image}
                    name={ dataArr[index].name}
                    species={'Species: '+ dataArr[index].species}
                    status={'Status: '+ dataArr[index].status}
                    origin={'Origin: '+ dataArr[index].origin.name}
                    created={'Created: '+ dataArr[index].created}
                /> 
            )
        }
        return cards;
    }




    return (
        <>
        <div id="main">
      <ScoreBoard />
            <div id="deck">
            
           
            {dataArr.length > 0 && (renderCards())}
        
            </div>
            </div>
        </>
    );
}

export default App;


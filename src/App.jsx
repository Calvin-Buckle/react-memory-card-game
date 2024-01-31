import { useState, useEffect } from "react";
import CreateCard from "./assets/cards";

function App() {
    const [dataArr, setDataArr] = useState([]);

    useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character')
            .then(response => response.json())
            .then(data => setDataArr(data.results))
            .catch(error => console.error("Error fetching data:", error));
    }, []);



    return (
        <>
        <div id="main">
            <div id="deck">
            {dataArr.map(character => (
                <CreateCard
                    key={character.id}
                    character={character.image}
                    name={ character.name}
                    species={'Species: '+ character.species}
                    status={'Status: '+ character.status}
                    origin={'Origin: '+ character.origin.name}
                    created={'Created: '+ character.created}
                />
            ))}
            </div>
            </div>
        </>
    );
}

export default App;


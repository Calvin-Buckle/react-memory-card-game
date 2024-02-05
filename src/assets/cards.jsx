


const CreateCard = ({character, name, species, status, origin, created, onClick}) => {
     const handleClick = () => {
        onClick();
     }    

    return(
   
        <button className="card" onClick={handleClick}>
       <img src={character}></img>
       <h2 className="name">{name}</h2>
       <div className="description">
        <h4 className="species">{species}</h4>
        <h4 className="status">{status}</h4>
        <h4 className="origin">{origin}</h4>
        <h4 className="created">{created}</h4>
        
        </div></button>
       
    )
}


export default CreateCard;
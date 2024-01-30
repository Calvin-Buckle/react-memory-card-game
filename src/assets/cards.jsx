


const CreateCard = ({character, name, species, status}) => {
    return(
   
        <div className="card">
       <img src={character}></img>
        <h2>{name}</h2>
        <h4>{species}</h4>
        <h4>{status}</h4>
        </div>
       
    )
}


export default CreateCard;
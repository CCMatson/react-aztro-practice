import { useState, useEffect  } from "react";
import { getCharacters } from "../services/api-calls";
import { getDetails } from "../services/api-calls";
import { useLocation , Link } from "react-router-dom";
import Characters from "./characters";

const CharacterDetails = () => {
  const [characterDetails, setCharacterDetails] = useState({})
  const location = useLocation()

  useEffect (() => {
    const fetchDetails = async () => {
      const charData = await getDetails(location.state.character.url)
      setCharacterDetails(charData)
      console.log(charData)
    }
    fetchDetails()
  }, [location.state.character.url])



  return (
    <div>
      <h3>Character details</h3>
      <h4>Name: {characterDetails.name}</h4>
      <>
      <h4>Movies: {characterDetails.films} </h4>
      <h4>Tv:{characterDetails.tvShows}</h4>

      <img src={characterDetails.imageUrl} alt=''/>
      </>
      <div>
      <Link to='/' className="links">Return to the Main Page</Link>
      </div>
    </div>
  )
}

export default CharacterDetails;
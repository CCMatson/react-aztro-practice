import { useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { getCharDeets } from '../../services/api-calls'

const CharDetails = () => {
  const [charDeets, setCharDeets] = useState({})
  const { charName } = useParams()

  useEffect(() => {
    const fetchCharDeets = async () => {
      const charData = await getCharDeets(charName)
      setCharDeets(charData)
    }
    fetchCharDeets()
  }, [charName])

  
  return (
    <>
      <h3>Char Details from the movie search</h3>
    </>
  );
}
 
export default CharDetails;
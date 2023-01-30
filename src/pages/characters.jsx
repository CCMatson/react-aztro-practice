import { useEffect, useState } from 'react'
import { getCharacters } from '../services/api-calls'
import { Link } from 'react-router-dom'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterData = await getCharacters()
      setCharacters(characterData.data)
      console.log(characterData.data)
    }
    fetchCharacters()
  }, [])

  return (
    <>
      <h1>Do you know about your favorite character?</h1>
      {characters.length ?
        <>
          {characters.map((character, idx) =>
            <div key={idx}>
              <Link to="/details" state={{character}} key={character.id}>{character.name}</Link>
            </div>
          )}
        </>
        :
        <>
          <h4>Loading characters...</h4>
        </>
      }
    </>
  )
}

export default Characters;
import { useEffect, useState } from 'react'
import { getCharacters } from '../services/api-calls'

const Characters = () => {
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    const fetchCharacters = async () => {
      const characterData = await getCharacters()
      setCharacters(characterData.data)
    }
    console.log(CharacterData)
  }, [])

  return (
    <>
      <h1>Who is your favorite character?</h1>
      {characters.length ?
        <>
          {characters.map((character, idx) =>
            <div key={idx}>
              {character.name}
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
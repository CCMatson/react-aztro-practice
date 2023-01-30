import { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import { charSearch } from '../../services/api-calls';

const SearchChar = () => {
  const [chars, setChars] = useState([])
 

  const handleCharSearch = async formData => {
    const searchResults = await charSearch(formData)
    setChars(searchResults.data)
    console.log(searchResults.data)
  }
    return (
      <>
      <h3>Cool Chars</h3>
      <SearchForm handleCharSearch={handleCharSearch}/>
      {chars.length ?
      <>
      {chars.map((char,idx) => 
        <div key={idx}>
          {char.films}
        </div>)}
        </>
        :
        <h3>Search for a character</h3>
        }
      </>
    )
}
export default SearchChar;
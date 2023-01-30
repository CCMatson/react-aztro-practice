import { useState } from 'react'
import SearchForm from '../SearchForm/SearchForm';
import { charSearch } from '../../services/api-calls';
import CharCard from './charCard';

const SearchChar = () => {
  const [chars, setChars] = useState([])


  const handleCharSearch = async formData => {
    const searchResults = await charSearch(formData)
    setChars(searchResults.data)
    console.log(searchResults.data)
  }
    return (
      <>
      <h3>Cool Disney Charactrers</h3>
      <SearchForm handleCharSearch={handleCharSearch}/>
      {chars.length ?
      <>
      {chars.map((char,idx) => 
        <div key={idx} className='search-details'>
          {char.name} stars in {char.films[0]} 
          {/* {char.enemies.length ?
          <>
          <h1>  Their enemeies are {char.enemies}    </h1>
          
          </>
          :
          <>
          <div>They don't have any enemies</div></>
          
        } */}
          <img src={char.imageUrl} alt="" />
        </div>)}
        </>
        :
        <h3>Search for a character</h3>
        }
      </>
    )
}
export default SearchChar;
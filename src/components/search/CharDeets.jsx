// import { useState , useEffect} from 'react'
// import { useParams } from 'react-router-dom'
// import { getCharDeets } from '../../services/api-calls'
// import { Link } from 'react-router-dom'

// const CharDetails = (char) => {
//   const [charDeets, setCharDeets] = useState({})
//   const { charName } = useParams()

//   useEffect(() => {
//     const fetchCharDeets = async () => {
//       const charData = await getCharDeets(charName)
//       setCharDeets(charData)
//       console.log('charData' , charData)
//     }
//     fetchCharDeets()
//   }, [charName])

  
//   return (
//     <>
//       <h3>Video Games starring {charDeets.name}</h3>
//       <Link to='/games' state={{charDeets}}> {charDeets.videoGames} </ Link>
//   </>
//   );
// }

// export default CharDetails;
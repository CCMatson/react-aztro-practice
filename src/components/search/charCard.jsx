import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm';

const CharCard = (props) => {
  return ( 
    <>
      <Link to={`/seach/${props.char.index}`}>
        {props.char.name}
      </Link>
      <br/>
    </>
  )
}

export default CharCard;
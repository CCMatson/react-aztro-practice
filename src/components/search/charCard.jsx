import { Link } from 'react-router-dom'
import SearchForm from '../SearchForm/SearchForm';

const CharCard = (props) => {
  return ( 
    <>
      <Link to={`/search/${props.char.idx}`}>
        {props.char}
      </Link>
      <br/>
    </>
  )
}

export default CharCard;
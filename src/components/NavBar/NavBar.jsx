import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      {/* <Link to="/">Signs</Link> */}
			<Link to="/characters">Characters</Link>
    </header>
  );
};

export default NavBar;
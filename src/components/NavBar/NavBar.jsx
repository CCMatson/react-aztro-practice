import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header>
      <Link to="/search">Search</Link>
			<h1>50 Disney Characters</h1>

    </header>
  );
};

export default NavBar;
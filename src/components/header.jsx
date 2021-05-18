import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link to="/">
        <button>Upload</button>
      </Link>
      <Link to="/items">
        <button>Items</button>
      </Link>
      <Link to="/favorites">
        <button>Favorites</button>
      </Link>
    </div>
  );
}

export default Header;

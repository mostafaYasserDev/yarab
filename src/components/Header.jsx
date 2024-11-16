import SearchBar from "./SearchBar.jsx";
import logo from "../assets/images/logo.png";
function Header() {
  return (
    <>
      <header>
        <div className="container">
          <img src={logo} className="logo" alt="YAW KEYS logo" />
          <SearchBar />
          <ul className="nav">
            <li>
              <a href="../pages/Home">Home</a>
            </li>
            <li>
              <a href="../pages/About">About Games</a>
            </li>
            <li>
              <a href="#">User</a>
            </li>
            <li>
              Currency:
              <select name="" id="">
                <option value="US">US</option>
              </select>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;

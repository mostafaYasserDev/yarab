import SearchBar from "../components/SearchBar";
import logo from "../assets/images/logo.png";

function Home() {
  return (
    <>
      <header>
        <div className="container">
          <img src={logo} className="logo" alt="YAW KEYS logo" />
          <SearchBar />
          <ul className="nav">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Games</a>
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
        <h1
          style={{
            fontWeight: "600",
            textAlign: "center",
            width: "400px",
            margin: "auto",
            paddingBottom: "20px",
          }}
        >
          Quickly find your game using the search bar!
        </h1>
      </header>
    </>
  );
}

export default Home;

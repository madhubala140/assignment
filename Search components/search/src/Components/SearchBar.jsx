import "./SearchBar.css";
import searchIcon from "../Assets/Search icon.png";


const SearchBar = () => {
  return (
    <div className="searchBar">
      <input type="search" placeholder="Search a song of your choice" />
      <div className="searchIconCont">
        <img src={searchIcon} className="searchImage" alt="search Icon" />
      </div>
    </div>
  );
};

export default SearchBar;
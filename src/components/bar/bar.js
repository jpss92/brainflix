import "./bar.scss";

function Search({ src, id }) {
    return (

        <input className="nav__search" id={id} type="text" placeholder="Search"></input>
    );
}

export default Search;
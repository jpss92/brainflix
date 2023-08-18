import "./bar.scss";

function Search({ src }) {
    return (

            <input className="nav__search"  type="text" placeholder="Search"></input>
            
        
    );
}

export default Search;

// function Search({ src }) {
//     const searchIcon = src ? { backgroundImage: `url(${src})` } : {};
  
//     return (
//       <div className="nav__search--container">
//         <input className="nav__search" type="text" placeholder="Search" style={searchIcon} />
//       </div>
//     );
//   }
  
//   export default Search;
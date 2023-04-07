import { Component } from "react";
import "./searchbar.style.css"


class SearchBar extends Component{

    
    render(){
        return(
            <div>
                  <input className='search-box' type='search' placeholder='search monster' onChange={this.props.onChangeHandler}/>
            </div>
        )
    }
}

export default SearchBar;
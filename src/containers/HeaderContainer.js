import React, { Component } from 'react';
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'


class HeaderContainer extends Component{


  render() {
    return(
      <div>
        <Logo/>
        <SearchBar />
      </div>
    )
  }
}

export default HeaderContainer

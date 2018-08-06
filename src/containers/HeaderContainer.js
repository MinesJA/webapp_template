import React, { Component } from 'react';
import SearchBar from '../components/SearchBar'
import { Segment, Header, Icon } from 'semantic-ui-react'

class HeaderContainer extends Component{



  render() {
    return(
      <Segment vertical textAlign='center'>
        <Header icon>
          <Icon name='setting' />
          <Header.Content className='logo' stackable>
             Tools of the Trade
          </Header.Content>
        </Header>

        <Segment basic />
        <SearchBar />
        <Segment basic />

      </Segment>
    )
  }
}

export default HeaderContainer

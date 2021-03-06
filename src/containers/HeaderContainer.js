import React, { Fragment } from 'react';
import SearchBar from '../components/SearchBar';
import { Segment, Header, Icon, Message } from 'semantic-ui-react';
import { connect } from 'react-redux';


const HeaderContainer = (props) => (
  <Segment vertical textAlign='center'>
    <Header icon>
      <Icon name='setting' />
      <Header.Content className='logo'>
         Tools of the Trade
      </Header.Content>
    </Header>

    {props.savedTools ?
      <Fragment>
        <Segment basic>
          <Header as='h1' color='blue'>My Saved Tools</Header>
        </Segment>
      </Fragment>
        :
      <Fragment>
        <Segment basic />
        <SearchBar />
          {props.errors.length > 0 ?
            <Message negative>
              <Message.Header>{props.errors[0].message}</Message.Header>
            </Message>
            :
            null
          }
        <Segment basic />
      </Fragment>}
  </Segment>
)


function mapStateToProps(state){
  return{
    errors: state.Tools.errors
  }
}

export default connect(mapStateToProps)(HeaderContainer)

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from '../containers/search_bar';
import { Button } from 'reactstrap';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchUsers } from '../actions/index';
import { fetchFriends } from '../actions/friends_action';

const CLIENT_ID = "227XCH";
const RESPONSE_TYPE = "token";
const REDIRECT_URI = "http://localhost:8080";
const SCOPE = encodeURI("activity heartrate location nutrition profile settings sleep social weight");

class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
    this.state = {
      showLogin: true
    }
  }
  handleLogin() {
    location.href=`https://www.fitbit.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
  }

  componentWillMount() {
    if(window.location.hash) {
      // var hash = window.location.hash.substring(1);
      var pairs = location.hash.slice(1).split('&');
      var result = {};
      pairs.forEach(function(pair) {
          pair = pair.split('=');
          result[pair[0]] = decodeURIComponent(pair[1] || '');
      });

      if(result.access_token) {
        this.setState({
          showLogin: false
        })
        //fetch our users info
        this.props.fetchUsers(result.access_token);
        this.props.fetchFriends(result.access_token);
      }
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <p>
            OAuth2 flow with FitBit to display your info and friends info
          </p>
            {this.state.showLogin &&
            <div>
              <Button outline color="primary" onClick={this.handleLogin}>Authorize</Button>{' '}
            </div>
            }
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchUsers, fetchFriends }, dispatch);
}

// export default connect(null, mapDispatchToProps)(App);
export default connect(null, { fetchUsers, fetchFriends })(App);

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from '../containers/search_bar';
import { Button } from 'reactstrap';

const CLIENT_ID = "227XCH";
const RESPONSE_TYPE = "token";
const REDIRECT_URI = "http://localhost:8080";
const SCOPE = encodeURI("activity heartrate location nutrition profile settings sleep social weight");

export default class App extends Component {
  constructor(props) {
    super(props);
    this.handleLogin = this.handleLogin.bind(this);
  }
  handleLogin() {
    location.href=`https://www.fitbit.com/oauth2/authorize?client_id=${CLIENT_ID}&response_type=${RESPONSE_TYPE}&redirect_uri=${REDIRECT_URI}&scope=${SCOPE}`;
  }

  componentDidMount() {
    if(window.location.hash) {
      // var hash = window.location.hash.substring(1);
      var pairs = location.hash.slice(1).split('&');
      var result = {};
      pairs.forEach(function(pair) {
          pair = pair.split('=');
          result[pair[0]] = decodeURIComponent(pair[1] || '');
      });
      console.log(result);
      //store the access_token in the redux state store
    }
  }
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SearchBar />
          <p>
            OAuth2 flow with FitBit to display your info and friends info
          </p>
            <div>
              <Button outline color="primary" onClick={this.handleLogin}>Authorize</Button>{' '}
            </div>

          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

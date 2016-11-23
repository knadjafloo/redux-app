import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from '../containers/search_bar';
import injectTapEventPlugin from 'react-tap-event-plugin';
// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SearchBar />
          {this.props.children}
        </div>
      </MuiThemeProvider>
    );
  }
}

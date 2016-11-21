import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import SearchBar from '../containers/search_bar';

export default class App extends Component {
  render() {
    return (
      <MuiThemeProvider>
        <div>
          <SearchBar />
        </div>
      </MuiThemeProvider>
    );
  }
}

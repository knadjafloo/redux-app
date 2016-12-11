import React, { Component } from 'react';

export default class FriendsList  extends Component {

  static propTypes = {
    friends: React.PropTypes.object.isRequired
  }

  renderFriends() {
    console.log('inside component' + this.props.friends);


    if(this.props.friends.length) {
    var pairs = [];

      for(var key of this.props.friends){
        var value = key.user;
        pairs.push(<li key={value.displayName} className="list-group-item"><img src={value.avatar} /> {value.displayName} Avg: {value.averageDailySteps}</li>);
      }
    
      return pairs;
    }
  }


  render() {
    return (
       <ul>{this.renderFriends()}</ul>
    );
  }
}

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    console.log(this.props.users);
    var pairs = [];
      for(var key in this.props.users){
        pairs.push(<li key={key} className="list-group-item"><h4>{key} </h4> {this.props.users[key].toString()}</li>);
      }
      return pairs;
  }


  render() {
    return (
      <div>
      <ul className="list-group col-sm-8">
        {this.renderList()}
      </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}
// export default connect(null, mapDispatchToProps)(App);
export default connect(mapStateToProps, null)(UsersList);

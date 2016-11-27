import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';


class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    console.log(this.props.users);
    var pairs = [];
      for(var key in this.props.users){
        var value = this.convertValue(this.props.users[key]);
        pairs.push(<li key={key} className="list-group-item"><h4>{key} </h4>{value}</li>);
      }
      return pairs;
  }

  convertValue(val) {
    if(typeof val === 'string') {
      var valStr = val.toString();
      if(valStr.startsWith("https://")) {
        return <img src={valStr} />
      }
    }
    if(Array.isArray(val)) {
      val.toString();
    }
    if(typeof val === 'object')
      return val.toString();

    return val.toString();
  }


  render() {
    return (
      <div>
      {this.props.users && Object.keys(this.props.users).length != 0 &&
      <Card>
       <CardImg top src={this.props.users['avatar150']} alt="avatar150" />
       <CardBlock>
         <CardTitle>{this.props.users['displayName']}</CardTitle>
         <CardSubtitle>{this.props.users['gender']}</CardSubtitle>
         <CardText>Height: {this.props.users['height']}</CardText>
       </CardBlock>
     </Card>}
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

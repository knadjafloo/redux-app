import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
import { Container, Row, Col, Tag } from 'reactstrap';

import FriendsList from '../components/friends_list';

class UsersList extends Component {
  constructor(props) {
    super(props);
  }

  renderList() {
    console.log(this.props.users);
    console.log(this.props.friends);
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

  static propTypes = {
    users: React.PropTypes.object.isRequired,
    friends: React.PropTypes.array.isRequired
  }

  render() {
    return (
       <Container>
      {this.props.users && Object.keys(this.props.users).length != 0 &&
      <Card>
       <CardImg top src={this.props.users['avatar150']} alt="avatar150" />
       <CardBlock>
         <CardTitle>{this.props.users['displayName']}</CardTitle>
         <CardSubtitle>{this.props.users['gender']}</CardSubtitle>
         <CardText>Height: {this.props.users['height']}</CardText>
       </CardBlock>
     </Card>}
      <Row>
        <Col xs="6" >
        <ul className="list-group col-sm-8">
          {this.renderList()}
        </ul>
        </Col>
        <Col xs="6">
          <h2><Tag>Friends</Tag></h2>
          <FriendsList friends={this.props.friends} />
        </Col>
      </Row>
      </Container>
    )
  }
}

function mapStateToProps(state) {
  return {
    users: state.users,
    friends: state.friends
  }
}
// export default connect(null, mapDispatchToProps)(App);
export default connect(mapStateToProps, null)(UsersList);

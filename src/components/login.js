import React, { Component } from 'react';
import { Button, Popover, Tooltip } from 'reactstrap';

export default class Login extends Component {
  constructor(props, context) {
    super(props, context);

  }
  render() {
    return (
      <p>
       <Button color="secondary">Submit!</Button>       
     </p>
    );
  }
}

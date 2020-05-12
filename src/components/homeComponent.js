import React, {Component} from 'react';

class HomeComponent extends Component {

  constructor (props) {
    super(props);
    this.state = props.afterLoginState;
  }
  render() {
    return (
      <div>
        <h2>Welcome</h2>
      </div>
    )
  }
}

export default HomeComponent;

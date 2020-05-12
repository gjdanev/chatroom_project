import React, {Component} from 'react'

class ConversationComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      jwt: this.props.jwt
    }
  }

  render () {
    return super.render();
  }
}


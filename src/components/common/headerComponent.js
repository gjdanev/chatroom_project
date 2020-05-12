import React, {Component} from 'react';

class Header extends Component {

  constructor (props) {
    super(props);
    this.state = {
      jwt: this.props.jwt,
      unreadMessages: 0,
      friendRequests: 0
    }
  }

  render () {
    let options;
    if (this.state.jwt !== "") {
      options = (
        <div className="mr-auto">
          <ul className="nav navbar-nav">
            <li className="nav-item">
              <a href="/messages" className="nav-link">Inbox</a>
            </li>
            <li className="nav-item">
              <a href="/groups" className="nav-link">Groups</a>
            </li>
            <li className="nav-item">
              <a href="/friends" className="nav-link">Friends</a>
            </li>
            <li className="nav-item">
              <a href="/register-login" className="nav-link">Logout</a>
            </li>
          </ul>
        </div>
      )
    }

    return (
      <header>
        <nav className="navbar navbar-expand-md navbar-dark navbar-fixed bg-dark">
          <a className="navbar-brand" href="#">Chatroom</a>
          {options}
        </nav>
      </header>
    )
  }
}

export default Header;

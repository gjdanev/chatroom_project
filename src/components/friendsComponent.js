import React, {Component} from 'react'
import AccountService from "../chatroom-services/accountService";

class FriendsComponent extends Component {

  constructor (props) {
    super(props);
    this.state = {
      jwt: this.props.jwt,
      friends: [],
      friendRequests: []
    }
  }

  componentDidMount () {
    let friends = AccountService.findFriendsOfUser(this.state.jwt).then((response) => {
      return response.data;
    });
    let friendRequests = AccountService.findFriendRequestsOfUser(this.state.jwt).then((response) => {
      return response.data;
    });
    this.setState((prevState) => {
      return {
        "jwt": prevState.jwt,
        "friends": friends,
        "friendRequests": friendRequests
      }
    });
  }

  createFriendElement = (friend) => {
    return (
      <a href="/conversation">
        <li>
          <h5>{friend.username}</h5>
          <div>First name: {friend.firstName}</div>
          <div>Last name: {friend.lastName}</div>
          <div>Online: {friend.isOnline}</div>
        </li>
      </a>
    );
  };

  createFriendRequestElement = (friendRequest) => {
    return (
      <a href="/accept-friend-request">
        <li>
          <h5>{friendRequest.username}</h5>
          <div>First name: {friendRequest.firstName}</div>
          <div>Last name: {friendRequest.lastName}</div>
        </li>
      </a>
    );
  };

  render () {
    const friendsList = (
      this.state.friends.forEach(this.createFriendElement)
    );

    const friendRequests = (
      this.state.friendRequests.forEach(this.createFriendRequestElement)
    );

    return (
      <div>
        <h3>Friends:</h3>
        <ul>
          {friendsList}
          <hr/>
        </ul>
        <h3>Friend requests:</h3>
        <ul>
          {friendRequests}
          <hr/>
        </ul>
      </div>
    );
  }

}

export default FriendsComponent;

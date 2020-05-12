import axios from '../axios/axios'

const AccountService = {

  registerUser: (registerJsonRequestBody) => {
    console.log(registerJsonRequestBody);
    return axios.put("/register", registerJsonRequestBody);
  },

  loginUser: (loginJsonRequestBody) => {
    return axios.post("/login", loginJsonRequestBody);
  },

  getAllBindingKeys: (jwt) => {
    return axios.get("/bindings", {
      headers: {
        'Authorization': `Bearer ${jwt}`,
      }
    });
  },

  logoutUser: (jwt) => {
    return axios.post("/logout", {}, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  changePassword: (newPasswordJsonRequestBody, jwt) => {
    return axios.post("/change-password", newPasswordJsonRequestBody, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  deleteAccount: (jwt) => {
    return axios.delete("/delete-account", {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  findFriendsOfUser: (jwt) => {
    return axios.get("/friends", {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })
  },

  findFriendRequestsOfUser: (jwt) => {
    return axios.get("/friends/requests", {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    })
  },

  sendFriendRequest: (username, jwt) => {
    return axios.put(`/friends/send-friend-request/${username}`, {}, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  acceptFriendRequest: (username, jwt) => {
    return axios.post(`/friends/accept-friend-request/${username}`, {}, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  rejectFriendRequest: () => {

  }
};

export default AccountService;

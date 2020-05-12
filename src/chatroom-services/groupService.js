import axios from '../axios/axios'

const GroupService = {

  createNewGroup: (createNewGroupJsonRequestBody, jwt) => {
    return axios.put("/groups/new-group", createNewGroupJsonRequestBody, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  getGroup: (groupId, jwt) => {
    return axios.get(`/groups/${groupId}`, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  getAllGroupsForUser: (jwt) => {
    return axios.get("/groups", {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  joinGroup: (groupId, jwt) => {
    return axios.post(`/groups/${groupId}/join`, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  leaveGroup: (groupId, jwt) => {
    return axios.delete(`/groups/${groupId}/leave`, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  addNewPostInGroup: (groupId, addNewPostJsonRequestBody, jwt) => {
    return axios.put(`/groups/${groupId}/add-post`, addNewPostJsonRequestBody, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  addNewCommentOnPost: (groupId, postId, addNewCommentJsonRequestBody, jwt) => {
    return axios.put(`/groups/${groupId}/post/${postId}`, addNewCommentJsonRequestBody, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  }
};

export default GroupService;

import axios from '../axios/axios'

const MessagingService = {

  getAllConversationsForUser: (jwt) => {
    return axios.get("/messages", {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  getMessagesFromConversationPaged: (conversationId, jwt, page = 0, pageSize = 20) => {
    return axios.get(`/messages/conversation/${conversationId}?page=${page}&pageSize=${pageSize}`, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  },

  sendNewMessage: (sendMessageJsonRequestBody, jwt) => {
    return axios.post("/messages/send-new-message", sendMessageJsonRequestBody, {
      headers: {
        'Authorization': `Bearer ${jwt}`
      }
    });
  }

};

export default MessagingService;

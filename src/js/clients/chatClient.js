//Chat client API

const ChatClient = {
  //should be used for informing the room of the top 10 words.
  sendMessage: function(messageText) {},

  //should be used to register a listener for incoming messages.
  //The listener should be a function that accepts a single parameter:
  //a string in the form of "[username]:[messageText]".
  //Please state about acceptable usernames.
  onReceiveMessage: function(callback) {}
};

export default ChatClient;

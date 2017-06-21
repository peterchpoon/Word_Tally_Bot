import UserStore from "./stores/userStore";
import ChatClient from "./clients/chatClient";
import CountbotFactory from "./factories/countbotFactory";

//Driver/controller file.

//Chat client on recevie message listener API
ChatClient.onReceiveMessage((msg) => {
  //split with 1st colon
  let username_message = msg.split(/:(.+)/);
  UserStore.addUserMessage(username_message[0], username_message[1]);
});

//create new countbot from factory
let countbot = CountbotFactory();

//start countbot with default timer
countbot.runCountbot(ChatClient.sendMessage.bind(ChatClient));

import UserStore from "./stores/userStore";
import ChatClient from "./clients/chatClient";
import CountbotFactory from "./factories/countbotFactory";

ChatClient.onReceiveMessage((msg) => {
  let username_message = msg.split(/:(.+)/);
  UserStore.addUserMessage(username_message[0], username_message[1]);
});

let countbot = CountbotFactory();
countbot.runCountbot(ChatClient.sendMessage.bind(ChatClient));
ChatClient.trigger();

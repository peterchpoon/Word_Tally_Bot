const ChatClient = {
  cb: "",
  sendMessage: function(messageText) {console.log(messageText);},

  onReceiveMessage: function(callback) {this.cb = callback;},
  
  trigger: function (){
    let arr = [
      "Joe1:an apple pie!",
      "Joe2: I am a cat",
      "Joe3 :I am dog",
      "Joe4:an apple pie!",
      "Joe5: able",
      "Joe5: able we wont jump jump",
    ];

    let that = this;

    arr.forEach((element) => {
      setTimeout(function(){
        that.cb(element);
      },2000);
    });
  }
};

window.chatClient = ChatClient;
export default ChatClient;

import MessageFactory from "../factories/messageFactory";

//User store: keeps the states of users and thier message history

const userStore = () => {
  const users = {};
  const store = {
    //Adds an user.
    //param: a unqiue user name as string with length > 0 after triming
    //of whitespaces.
    addUser: (name) => {
      if(typeof name === 'string' && name.trim().length > 0
        && !users.hasOwnProperty(name.trim())){

        //create a new property with the name as key, and message object
        //as its value.
        users[name.trim()] = MessageFactory();
      }
    },

    //Gets an array of all usernames
    getUsernames: () => {
      return Object.keys(users).map((username) => username)
    },

    //Adds an user with with and a message.
    //param: a unqiue user name as string with length > 0 after triming
    //of whitespaces.
    //param: String to add with its length > 0 after triming of whitespaces.
    addUserMessage: (name, msg) => {
      store.addUser(name);
      if(users[name.trim()]){
        users[name.trim()].addSentence(msg);
      }
    },

    //Gets an array of sentences of an existing user.
    //param: an existening user name as string with length > 0 after triming
    //of whitespaces.
    getUserMessages: (name) => {
      return users[name] && users[name].getSentences();
    },

    //Gets an array of words of an existing user.
    //param: an existening user name as string with length > 0 after triming
    //of whitespaces.
    getUserWords: (name) => {
      return users[name] && users[name].getWords();
    }
  };

  return store;
}

export default userStore();

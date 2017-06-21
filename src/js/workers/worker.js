import UserStore from "../stores/userStore";

//A worker that do work for count bot; in this case, get a list of top ten words
//and their counts.

//Adds a word token to the object provided in the second parameter.
//param: word token object with word as key and count as value to add the
//second param.
//param: object to add the word token to.
function addWord(token, words){
  //get the word from the token object as key.
  let key = Object.keys(token)[0];

  //tally the value if property found, else create new property with key and
  //set count.
  if(words.hasOwnProperty(key)){
    words[key] = parseInt(words[key]) + parseInt(Object.values(token));
  }else{
    words[key] = parseInt(Object.values(token));
  }
}

function getWords(words){
  //return an array of word/count pairs
  return Object.keys(words).map((token) => {
    return { [token]: words[token] };
  });
}

//Gets list of the top 10 words with their counts from user store
export function getSortedTopWords(){
  const words = {};

  //get all usernames from store.
  let usernames = UserStore.getUsernames();

  //for each username...
  usernames.forEach((username) => {
    //get their words...
    let userWords = UserStore.getUserWords(username);
    //with each word, add to the words object
    userWords.forEach((token) => addWord(token, words));
  });

  //sort the word object array, then get only the 1st 10
  return getWords(words).sort((a, b) => (Object.values(a) - Object.values(b)) * -1).slice(0, 10);
}

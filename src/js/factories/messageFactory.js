//Message facotry: create message object. The message object keeps the states
//sentences, and all the words used with their counts of the sentences.

export default () => {
  const sentences = [];
  const words = {};

  //Adds a word to the words object.
  //param: string token to add.
  function addWord(token){
    //if a word is found in the words object, then increment it's
    //count in the words object; else create a new property with the word
    //as the key with it value set to 1
    if(words.hasOwnProperty(token)){
      words[token] = words[token] + 1;
    }else{
      words[token] = 1;
    }
  }

  return {
    //Adds a sentence.
    //param: String to add with its length > 0 after triming of whitespaces.
    addSentence: (sentence) => {
      if(typeof sentence === 'string' && sentence.trim().length > 0){
        sentences.push(sentence);

        //trim whitespaces from the ends; replace all consecutive whitespaces
        //with single space; split with word boundary, and remove spaces
        //on both sides fo word boundary
        let tokens = sentence.trim().replace(/\s\s+/g, ' ').split(/\s*\b\s*/);

        //for each word found, add to words object
        tokens.forEach((token) => addWord(token));
      }
    },

    getSentences: () => {
      //return a deep copy of sentences.
      return sentences.map((sentence) => sentence);
    },

    getWords: () => {
      //return an array of word/count pairs
      return Object.keys(words).map((token) => {
        return { [token]: words[token] };
      });
    }
  };
}

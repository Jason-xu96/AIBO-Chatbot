export const returnAnswer = (question) => {
  // Set up a parallel array
  // keywordsArray is a 2D array storing all the keywords
  var keywordsArray = []
  // answerArray is a stirng array storing all the answers
  var answersArray = []


  function addKeywordAndAnswerPair(keywords, answer) {
    keywordsArray.push(keywords)
    answersArray.push(answer)
  }

  // Utility function that print out every answer with its associated keywords
  function printAllAnswersAndKeywords() {
    for (var i = 0; i < keywordsArray.length; i++) {
      console.log("Answer: " + answersArray[i])
      var keywords = ""
      for (var j = 0; j < keywordsArray[i].length; j++) {
        keywords += (keywordsArray[i][j])
        if (j !== keywordsArray[i].length-1) { keywords += ", " }
      }
      console.log("Keywords: " + keywords)
    }
  }
  // Add answers and keywords 
  addKeywordAndAnswerPair(["when", "introduce", "announce"], "1999.")
  addKeywordAndAnswerPair(["how much", "cost", "money", "spend", "pay", "payment", "cash"], "AIBO retails at USD $1,800.")
  addKeywordAndAnswerPair(["where", "buy", "purchase", "get", "obtain", "shop", "pick up"], "It’s currently only available in USA and Japan.")
  printAllAnswersAndKeywords()
}

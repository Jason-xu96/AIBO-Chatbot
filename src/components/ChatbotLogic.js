export const returnAnswer = (question) => {
  // Set up a parallel array
  // keywordsArray is a 2D array storing all the question keywords
  var keywordsArray = []
  // answerArray is a stirng array storing all the answers
  var answersArray = []
  setUpKnowledgeBase()

  // Index of the answer with the highest keyword matching rate
  var indexOfSelectedAnswer = -1
  // The percentage is derived from the number of matched keywords divided by the total number of question keywords that an answer has
  var highestMatchRate = 0
  // Convert every letter to lower case so it's easy to work with
  var userInput = question.toLowerCase()
  console.log("Question: " + question)
  for (var i = 0; i < keywordsArray.length; i++) {
    console.log("Answer: " + answersArray[i])
    // Used for debuging and printing
    var allKeywords = ""
    var identifiedKeywords = ""
    var numOfKeywords = keywordsArray[i].length
    var numOfIdentifiedKeywords = 0

    for (var j = 0; j < numOfKeywords; j++) {
      var currentKeyword = keywordsArray[i][j]
      allKeywords += (currentKeyword + ', ')
      // If current keyword is found in the user's question
      if (userInput.indexOf(currentKeyword) !== -1) {
        identifiedKeywords += (currentKeyword + ', ')
        numOfIdentifiedKeywords += 1
      }

      // If the current keyword is the last, calculate the percent of matched question keywords
      // It's derive from dividing the number of matched keywords by the total number of question keywords that an answer has.
      if (j === keywordsArray[i].length - 1) {
        var currentMatchRate = numOfIdentifiedKeywords * 100 / numOfKeywords
        console.log("Current Match Rate: " + currentMatchRate+"%")
        // If the current match rate is the highest
        // Replace the highest match rate with current match rate
        // Record its index
        if (currentMatchRate > highestMatchRate) {
          highestMatchRate = currentMatchRate
          indexOfSelectedAnswer = j
        }
      }
    }
    console.log("Identified Keywords: " + identifiedKeywords)
    console.log("All Question Keywords: " + allKeywords)
    console.log("-----------------------------------------------------------------------")
  }
  console.log("Selected Answer: " + answersArray[indexOfSelectedAnswer])
  return answersArray[indexOfSelectedAnswer]


  // -----------------------------------------------------------------------
  // Set up the knowledge base by adding answers and keywords 
  function setUpKnowledgeBase() {
    addKeywordAndAnswerPair(["when", "introduce", "announce"], "1999.")
    addKeywordAndAnswerPair(["how much", "cost", "money", "spend", "pay", "cash"], "AIBO retails at USD $1,800.")
    addKeywordAndAnswerPair(["where", "buy", "purchase", "get", "obtain", "shop", "pick up"], "It is currently only available in USA and Japan.")
    //printAllAnswersAndKeywordsInKnowledgeBase()
  }

  function addKeywordAndAnswerPair(keywords, answer) {
    keywordsArray.push(keywords)
    answersArray.push(answer)
  }

  // Utility function that print out every answer with its associated keywords in the knowledge base
  function printAllAnswersAndKeywordsInKnowledgeBase() {
    for (var i = 0; i < keywordsArray.length; i++) {
      console.log("Answer: " + answersArray[i])
      var allKeywords = ""
      for (var j = 0; j < keywordsArray[i].length; j++) {
        allKeywords += (keywordsArray[i][j])
        if (j !== keywordsArray[i].length - 1) { allKeywords += ", " }
      }
      console.log("All Question Keywords: " + allKeywords)
      console.log("-----------------------------------------------------------------------")
    }
  }
}

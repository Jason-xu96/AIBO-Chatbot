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
        console.log("Current Match Rate: " + currentMatchRate + "%")
        // If the current match rate is the highest
        // Replace the highest match rate with current match rate
        // Record its index
        if (currentMatchRate > highestMatchRate) {
          highestMatchRate = currentMatchRate
          indexOfSelectedAnswer = i
        }
      }
    }
    console.log("Identified Keywords: " + identifiedKeywords)
    console.log("All Question Keywords: " + allKeywords)
    console.log("-----------------------------------------------------------------------")
  }
  console.log("indexOfSelectedAnswer: " + indexOfSelectedAnswer)
  // When no keyword is identified in the question,
  // tell the user the chatbot doesn’t know how to answer yet,
  // and prompt users to rephrase their question.
  if (highestMatchRate === 0) {
    return "I don't know how to answer yet. Maybe try to rephrase your question :)"
  } else {
    console.log("Selected Answer: " + answersArray[indexOfSelectedAnswer])
    return answersArray[indexOfSelectedAnswer]
  }


  // -----------------------------------------------------------------------


  // Set up the knowledge base by adding answers and keywords 
  function setUpKnowledgeBase() {
    addKeywordAndAnswerPair(["what", "definition", "is", "explain", "meaning", "description", "describe", "information"], "AIBO is a series of robotic dogs designed and manufactured by Sony.")
    addKeywordAndAnswerPair(["when", "what time", "first", "introduce", "reveal", "release", "announce", "start", "sell", "enter the market"], "1999.")
    addKeywordAndAnswerPair(["how much", "cost", "money", "spend", "pay", "cash"], "AIBO retails at USD $1,800.")
    addKeywordAndAnswerPair(["where", "buy", "purchase", "get", "obtain", "shop", "pick up"], "It is currently only available in USA and Japan.")
    addKeywordAndAnswerPair(["when", "what time", "discontinue", "stop", "manufactur", "produc", "sell"], "2006")
    addKeywordAndAnswerPair(["when", "introduce", "announce", "new", "release", "reveal", "modern"], "2017")
    addKeywordAndAnswerPair(["what", "how many", "model", "make", "configuration", "form", "version", "type", "design", "generations"], "There are four models: ERS-110, ERS-210, ERS-7, and ERS-1000")
    addKeywordAndAnswerPair(["what", "where", "website", "information", "web", "site", "Internet", "page"], "Please visit https://us.aibo.com/")
    addKeywordAndAnswerPair(["program", "cod", "customeriz", "api", "change", "computer"], "Sony is going to release its open API to the general public. Stay tuned.")
    printAllAnswersAndKeywords()
  }

  function addKeywordAndAnswerPair(keywords, answer) {
    keywordsArray.push(keywords)
    answersArray.push(answer)
  }

  // Utility function that print out every answer with its associated keywords in the knowledge base
  function printAllAnswersAndKeywords() {
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

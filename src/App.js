import React from 'react';
import MessageBoard from './components/MessageBoard'
import InputBox from './components/InputBox'
import { returnAnswer } from './components/ChatbotLogic'
import './Style.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      // Stores all the messages
      messages: []
    }
    this.sendQuestion = this.sendQuestion.bind(this)
  }

  sendQuestion = message => {
    // Get the question from the user and print it
    var messages = this.state.messages
    messages.push(message)
    console.log(this.state.messages.toString())
    var question = message.content
    // If the user input is valid
    // the chatbot logic will process the question
    // And return the answer
    if (question) {
      var answer = returnAnswer(question)
      messages.push({ senderName: "Chatbot", content: answer })
      console.log(this.state.messages.toString())
    } else { // If users enter empty string
      var retryMessage = {
        senderName: "Chatbot",
        content: "Please enter your question."
      }
      messages.push(retryMessage)
    }
    this.setState({
      messages: messages
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to AIBO Chatbot
          </p>
        </header>
        <MessageBoard messages={this.state.messages} />
        <InputBox sendQuestion={this.sendQuestion} />
      </div>
    )
  }
}

export default App;

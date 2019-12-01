import React from 'react';
import MessageBoard from './components/MessageBoard'
import ComposeBox from './components/ComposeBox'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      messages: []
    }
    //this.sendMessage = this.sendMessage.bind(this)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Welcome to AIBO Chatbot
          </p>
        </header>
        <MessageBoard />
        <ComposeBox />
      </div>
    )
  }
}

export default App;

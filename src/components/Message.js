import React from 'react'
import '../Style.css';

class Message extends React.Component {

  render() {
    // Decide if the message should show up on the left or right side
    let messageSender = "message-sender"
    if (this.props.sender === "Chatbot") {
      messageSender += " chatbot"
    }
    else if (this.props.sender === "You") {
      messageSender += " you"
    }

    return (
      <div className="message">
        <div className={messageSender}>{this.props.sender}</div>
        <div className="message-content">{this.props.content}</div>
      </div>
    )
  }
}

export default Message

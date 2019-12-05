import React from 'react'
import ReactDOM from 'react-dom'
import Message from './Message'
import '../Style.css';

class MessageBoard extends React.Component {
  render() {
    return (
      <div className="message-board">
        {
          this.props.messages.map((message, index) => {
            return (
              <Message key={index} senderName={message.senderName} content={message.content} />
            )
          })
        }
      </div>
    )
  }
}

export default MessageBoard

import React from 'react'
import Message from './Message'
import '../Style.css';

class MessageBoard extends React.Component {
  render() {
    return (
      <div className="message-board">
        {
          this.props.messages.map((message, index) => {
            return (
              <Message key={index} sender={message.sender} content={message.content} />
            )
          })
        }
      </div>
    )
  }
}

export default MessageBoard

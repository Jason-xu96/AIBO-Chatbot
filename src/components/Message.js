import React from 'react'

class Message extends React.Component {

  render() {
    return (
      <div className="message">
        <div className="message-senderName">{this.props.senderName}</div>
        <div className="message-content">{this.props.content}</div>
      </div>
    )
  }
}

export default Message

import React, { Component } from 'react'
import Chat from './Chat'

export default class Body extends Component {

    render() {
        const chats = this.props.chatsList.map((chat, index) => {
            const isleft = 'recive' === chat.type
            return <Chat
                key={index}
                isLeft={isleft}
                gravatar={isleft ? this.props.gravatars.user2 : this.props.gravatars.user1}
                message={chat.message}
                time={chat.time}
            />
        })

        return (
            <div onScroll={this.props.handleScroll} className="panel-body">
                <div className="chats">
                    {chats}
                </div>
            </div>
        )
    }
}

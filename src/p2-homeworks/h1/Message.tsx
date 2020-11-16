import React from "react";
import m from './Message.module.css';

type messageDataType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: messageDataType) {
    return (
        <div className={m.message}>
            <img src={props.avatar} alt="Красивая картинка"/>
            <div className={m.content}>
                <div className={m.name}>{props.name}</div>
                <div className={m.messageTime}>
                    <div className={m.text}>{props.message}</div>
                    <span>{props.time}</span>
                </div>
            </div>
        </div>
    );
}

export default Message;

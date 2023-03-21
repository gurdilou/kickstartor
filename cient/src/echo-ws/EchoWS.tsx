import React, {memo, useCallback, useEffect, useState} from "react";
import {useEchoWebsocket} from "./api";

export const EchoWS = memo(() => {
    const {sendMessage, lastMessage, readyState} = useEchoWebsocket();
    const [count, setCount] = useState(0);
    const onClick = useCallback(() => {
        setCount(prev => prev + 1);
    }, [setCount]);
    useEffect(() => {
        if(count === 0)
            return;
        sendMessage(`Bonjour le monde, envoyé ${count} fois.`);
    }, [count, sendMessage]);

    useEffect(() => {
        if(lastMessage == null)
            return;
        console.log("message received", lastMessage);
    }, [lastMessage]);


    return (
        <div style={{border: "1px solid #CCC", margin: "2em"}}>
            <h3>Test web socket</h3>
            <div>{"Socket is " + readyState}</div>
            <button type="button" onClick={onClick}>Click me to end a hello world.</button>
            <div>{`Last message received: ${lastMessage?.data}`}</div>
        </div>
    )
});
EchoWS.displayName = "EchoWS";
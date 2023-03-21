import useWebSocket from "react-use-websocket";


const SOCKET_URL = "ws://localhost:8000/echo"


export const useEchoWebsocket = () => {
    const {sendMessage, lastMessage, readyState} = useWebSocket(SOCKET_URL);
    return {sendMessage, lastMessage, readyState};
}
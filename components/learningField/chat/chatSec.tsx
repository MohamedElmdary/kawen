import React, { useEffect, Dispatch } from "react";
import ChatView from "../../chatView";
import { useSelector, useDispatch } from "react-redux";
import { AppState } from "../../../store";
import { ChatActions } from "../../../store/chat";

const Chat: React.FC = () => {
    const dispatch: Dispatch<ChatActions> = useDispatch();
    const contact = useSelector(
        (state: AppState) => (state.chat.contacts ?? [])[0]
    );

    useEffect(() => {
        dispatch({
            type: "[Chat] SET_MINI_CHAT",
            payload: false,
        });
        return () => {
            dispatch({
                type: "[Chat] SET_MINI_CHAT",
                payload: true,
            });
        };
    }, []);

    return <ChatView chat={contact} />;
};

export default Chat;

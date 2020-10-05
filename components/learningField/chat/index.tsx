import Link from "next/link";
import React from "react";
import { ChatUsersProps } from "../../../data/learning-fieldProps";
import Chat from "./chatSec";
import classes from "./chat.module.scss";

const ChatPage: React.FC<ChatUsersProps> = ({ users }) => {
    return (
        <section className={classes.chat}>
            <Chat />
            <aside>
                <h3>Classmates</h3>
                <ul>
                    {users.map((user, i) => (
                        <li key={i}>
                            <img src={user.img} alt={`${user.name} image`}/>
                            <Link href="/user/[id]" as="/user/1">
                                <a> {user.name} </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </aside>
        </section>
    );
};

export default ChatPage;

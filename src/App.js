import { ChatEngine } from "react-chat-engine";

import LoginForm from './components/LoginForm'
import ChatFeed from "./components/ChatFeed";

import './App.css'

const App = () => {
    if(!localStorage.getItem('username')) return <LoginForm />
    return (
        <ChatEngine
            height="100vh"
            projectID="f36904a6-0182-400d-8c7f-2f190e108e50"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed= {(chatAppProps) => <ChatFeed {...chatAppProps} />}
        />
    )
}

export default App
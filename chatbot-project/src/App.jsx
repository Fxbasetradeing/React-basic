import { useState} from 'react'
import { ChatInput } from './component/chatInputComponent';
import ChatMessages  from './component/ChatMessages';

import './App.css'
 


function App() {
  const [chatMessages, setChatMessages] = useState([]);
    // const [chatMessages, setChatMessages] = array;
    // const chatMessages = array[0];
    // const setChatMessages = array[1];

  function Text() {
    return(
      <p className='header-text'>Welcome to Chatbot</p>
    )  
  }

  localStorage.setItem('chatMessages', JSON.stringify(chatMessages));
  
    return (
      <div className="app-container">
        <Text />
        <ChatMessages
          chatMessages={chatMessages}
        />
        <ChatInput
          chatMessages={chatMessages}
          setChatMessages={setChatMessages}
        />
      </div>
    );
  }

export default App

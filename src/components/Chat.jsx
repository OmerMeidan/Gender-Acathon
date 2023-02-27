import React , {useRef,useState} from 'react';
import styles from '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { MainContainer, ChatContainer, MessageList, Message, MessageInput,ConversationHeader,Avatar,VoiceCallButton,VideoCallButton,InfoButton } from '@chatscope/chat-ui-kit-react';
import NavBar from './NavBar';
function Chat(props) {
    const inputRef = useRef();
    const [messages, setMessages] = useState([]);
  
    const handleSend = message => {
      setMessages([...messages, {
        message,
        direction: 'outgoing'
      }]);
      inputRef.current.focus();
    };
    return (
        <div>
             <NavBar/>
        <div style={{
            height: "500px"
          }}>                
                                <ChatContainer style={{width:'100vw',height:'92vh'}}>
                                    <ConversationHeader>
                                        <Avatar src='https://chatscope.io/storybook/react/static/media/zoe.e31a4ff8.svg' name="Kai" />
                                        <ConversationHeader.Content userName="המורה שלי" info="מחובר/ת" />
                                        <ConversationHeader.Actions>
                                            <VoiceCallButton />
                                            <VideoCallButton />
                                            <InfoButton />
                                        </ConversationHeader.Actions>          
                                        </ConversationHeader>
                                        <MessageList scrollBehavior="smooth">
                                          {messages.map((m, i) => <Message key={i} model={m} />)}
                                        </MessageList>
                                        <MessageInput placeholder="Type message here" onSend={handleSend} ref={inputRef} />
                              </ChatContainer>
                        </div>
                        </div>
    );
}

export default Chat;
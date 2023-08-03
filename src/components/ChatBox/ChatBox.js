import React, { useEffect, useRef, useState } from 'react'
import { fetchUserData } from '../../features/auth/authSlice';
import './ChatBox.css';
import {format} from 'timeago.js';
import InputEmoji from 'react-input-emoji';
import { useDispatch, useSelector } from 'react-redux';
import { addMessage, getMessages } from '../../features/chat/chatSlice';
const ChatBox = ({chat, currentUserId, setSendMessage, recieveMessage}) => {

  let dispatch = useDispatch();

  // fetching data for header
  const {userData} = useSelector((state) => state?.auth)
  // const {messages} = useSelector((state) => state?.chat)

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const scroll = useRef();

    useEffect(() => {      
        const userId = chat?.members?.find((id) => id !== currentUserId);
        dispatch(fetchUserData(userId));
    }, [chat, currentUserId]);

    // fetching data for messages
    useEffect(() => {
      const userId = chat?.members?.find((id) => id !== currentUserId);
      const fetchMessages = async () => {
        dispatch(getMessages(chat?._id));
      }
      if (chat != null) fetchMessages();
  }, [chat, currentUserId]);

  // recieve message from the socket server
  useEffect(() => {
    if (recieveMessage !== null && recieveMessage.chatId == chat?._id) {
      setMessages([...messages, recieveMessage]);
    }
  }, [recieveMessage])
  const handleChange = (newMessage) => {
    setNewMessage(newMessage);
  }

  // always scroll to last message
  useEffect(() => {
    scroll.current.scrollIntoView({ behavior: "smooth", })
  }, [messages])
  // handleSend the message

  const handleSend = async (e) => {
    e?.preventDefault();
    const message = {
      senderId: currentUserId,
      text: newMessage,
      chatId: chat?._id,
    }
    // send message to the database
    try {
      const {data} = await addMessage(message);
      setMessages([...messages, data])
      setNewMessage("");
    } catch(error) {
      console.log(error);
    }

    // send message to the socket server
    const recieverId = chat.members.find((id) => id !== currentUserId);
    setSendMessage({...message, recieverId});
  }
  return (
    <>
      <div className=' w-[100%] min-h-[85vh] ' >
        <div className=''>
          <div className='w-[100%] '>
            <div className='flex justify-start items-center gap-[1rem] w-[100%] relative p-[.4rem]'>
              <div className='ml-[.5rem]'>
                  <div className='online-dot'></div>
                  <img src={userData?.profilePicture ? 'http://localhost:5000/images/' + userData?.profilePicture : '/images/web3.jpg'} alt='followerImage' className='w-[50px] h-[50px] rounded-full object-cover' />
              </div>
              <div className='name text-[.8rem] flex flex-col '>
                  <span className='font-semibold text-[1.1rem] '>
                    {/* {userData?.firstname} {userData?.lastname}  */}
                    Abdullah Allahham </span>
                  <span>Online</span>
              </div>
            </div>
          </div>
        </div>

        <hr className='w-[85%] mx-auto border-[.1px] border-[#ececec]' />
        
          {/* chatBox Messages */}
        <div className='chat-body overflow-y-scroll h-[70vh] bg-red-500' ref={scroll}>
          {
            messages.map((message) => (
              <div className={message?.senderId === currentUserId ? "message own" : "message"} >
                <span>{message?.text}</span>
                <span>{format(message?.createdAt)}</span>
              </div>
            ))
          }

        </div>
        {/* chat input  */}
        <div className='chat-sender' >
          <div className='p-[1.5rem] flex items-center justify-center text-[1.2rem] h-[2rem]'>+</div>
          <InputEmoji value={newMessage} onChange={handleChange} />
          <button className='' onClick={handleSend}>
            Send
          </button>

        </div>
      </div>
      
    </>

  )
}

export default ChatBox;
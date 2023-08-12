import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllUsers } from '../../features/auth/authSlice';
// import LogoSearch from '../../components/LogoSearch'
// import NavIcons from '../../components/NavIcons';
import ChatBox from '../../components/ChatBox/ChatBox';
import Conversation from '../../components/Conversation'
import {BsPlusCircleDotted} from 'react-icons/bs'


import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import './Chat.css'

import { io } from 'socket.io-client';
import { createChat, getUserChats } from '../../features/chat/chatSlice';
import API from '../../features/MainApi';

const Chat = () => {
  // authData
  const {user, allUsers} = useSelector((state) => state?.auth);
  const {chats} = useSelector((state) => state?.chat);

  // dispatch
  const dispatch = useDispatch();
  const [currentChat, setCurrentChat] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);





  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  // socket
  const socket = useRef();

  useEffect(() => {
    socket.current = io('http://localhost:9000');
    socket.current.emit("new-user-add", user?._id);
    socket.current.on('get-users', (users) => {
      console.log('user', users)
      setOnlineUsers(users)
    })
  }, [user])

  useEffect(() => {
    dispatch(getUserChats(user?._id));
    dispatch(getAllUsers());
  }, [user]);
  
  // send message to the socket server
  useEffect(() => {
    if (sendMessage !== null) {
      socket.current.emit('send-message', sendMessage);
    }
  }, [sendMessage]);

  // recieve message from the the socket server
  useEffect(() => {
    // setCurrentChat(chats[0]);
    socket.current.on("recieve-message", (data) => {
      setRecieveMessage(data);
    })
  }, []);
  const checkOnlineStatus = (chat) => {
    const chatMember = chat.members.find((member) => member !== user?._id);
    const online = onlineUsers.find((user) => user?.userId === chatMember);
    return online ? true : false;
  }

  const createNewChat = (data) => {
    dispatch(createChat({senderId: user?._id, receiverId: data?._id}));
    setOpen(false)
  }
  return (
    <div className='Chat'>
      {/* left side */}
        <div className='flex flex-col gap-[1rem] mt-[1rem]'>
          {/* <LogoSearch /> */}
          <div className='flex flex-col gap-[1rem] bg-[#f3f3f3] p-[1rem] h-auto min-h-[80vh] overflow-scroll rounded-[1rem]'>
            <h2>Chats</h2>
            <div className=''>
              {chats?.map((chat) => {
                return (
                  <div className='cursor-pointer' onClick={() => setCurrentChat(chat)}>
                    {/* <p>{chat?._id}</p> */}
                    <Conversation data={chat} currentUserId={user?._id} online={checkOnlineStatus(chat)} />
                  </div>
                )
              })}
              <Button  onClick={handleOpen} className='flex items-center gap-2 cursor-pointer'><BsPlusCircleDotted />Create Chat</Button>
              <div>
              <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open}
                onClose={handleClose}
                closeAfterTransition
                slots={{ backdrop: Backdrop }}
                slotProps={{
                  backdrop: {
                    timeout: 500,
                  },
                }}
              >
                <Fade in={open}>
                  <Box sx={style}>
                    <Typography variant="h6" component="h6">
                      Create New Chat
                    </Typography>
                    {allUsers?.map((user) => {
                      return <div className='flex items-center gap-3 cursor-pointer' onClick={() => createNewChat(user)}>
                      <img src='/images/web3.jpg' className='w-[1.5rem]  h-[1.5rem]  rounded-full object-cover' />
                      <Typography variant='h6'>{user?.firstname} {user?.lastname}</Typography>
                    </div>
                    })}
                  </Box>
                </Fade>
              </Modal>
    </div>
{/* 
              {allUsers?.map((chat) => {
                return (
                  <div className='cursor-pointer' onClick={() => setCurrentChat(chat)}>
                    <Conversation data={chat} currentUserId={user?._id} online={checkOnlineStatus(chat)} />
                  </div>
                )
              })} */}

            </div>
          </div>
        </div>
      {/* right side */}
      <div className='flex flex-col gap-[1rem] flex-1 mt-[1rem]'>
          
          <div className='flex flex-col justify-end'>
            {/* <div className='w-[20rem] mb-[.4rem]'  style={{alignSelf: 'flex-end', }}>
              <NavIcons />
            </div> */}
            {/* chat body */}
            <ChatBox setSendMessage={setSendMessage} chat={currentChat} currentUserId={user?._id} recieveMessage={recieveMessage} />
          </div>    
      </div>
    </div>
  )
}

export default Chat
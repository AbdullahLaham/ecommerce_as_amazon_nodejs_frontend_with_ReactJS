import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import ws from 'ws';

const ChatPage = () => {
    const [ws, setWs] = useState(null)
    useEffect(() => {
        let token = JSON.parse(localStorage.getItem('auth'))?.token;
        const websocket = new WebSocket("ws://localhost:4000");
        setWs(websocket);
        websocket.addEventListener('message', handleMessage)
    }, []);

    const handleMessage = async (e) => {
        console.log('new message', e)    
    }
  return (
    <div className='flex h-[68vh]'>
        <div className='bg-blue-100 w-1/3'>

        </div>
        <div className='flex flex-col bg-blue-300 w-2/3'>
            <div className='flex-grow'>
                
            </div>
            <div className='flex items-center justify-start gap-2 mx-2 my-1 '>
                <input placeholder='Type Your message Here ' className='bg-white border p-2 flex-grow rounded-sm border-none outline-none ' />
                <button type="submit" className="bg-blue-500 p-2 text-white rounded-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
                    </svg>
                </button>
            </div>
        </div>
        
    </div>
  )
}

export default ChatPage
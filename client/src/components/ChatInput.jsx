import React from 'react'

const ChatInput = () => {
  return (
    <div className='w-full bg-white bg-opacity-10 max-h-40
     rounded-lg py-4 px-4 overflow-auto relative'>

        <textarea 
        rows={5}
        className='border-0 bg-transparent outline-none w-11/12'/>

        <img src="/send.png"  width={60} alt="send-button" className='absolute top-9 right-9 hover:cursor-pointer ease-in duration-100 hover:scale-125'/>

            </div>
  )
}

export default ChatInput
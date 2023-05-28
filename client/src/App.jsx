import ChatBody from './components/ChatBody'
import ChatInput from './components/ChatInput'

function App() {
  return (
    <div className='bg-[#1A232E] h-screen py-6 relative sm:px-40 px-10 text-white overflow-hidden flex flex-col justify-between align-middle'>

    <div className="gradient-01 z-0 absolute"></div>
    <div className="gradient-02 z-0 absolute"></div>

      <div>
        <img class="h-auto max-w-xs mx-auto" src="src/assets/2.gif" alt="image description"/>
      </div>

      <div className='h-[90%] overflow-auto w-full max-w-4x1 min-w-[20rem] py-8 px-4 self-center'><ChatBody/></div>

      <div className="w-full max-w-4x1 min-w-[20 rem] self-center">
        <ChatInput/>
        </div> 

    </div>
  )
}

export default App

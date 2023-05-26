import './App.css'
import ChatBody from './components/ChatBody'

function App() {
  return (
    <div className='bg-[#1A232E] h-screen py-6 relative sm:px-28 text-white overflow-hidden flex flex-col justify-between align-middle'>

    <div className="gradient-01 z-0 absolute"></div>
    <div className="gradient-02 z-0 absolute"></div>

      <div>
        <img class="h-auto max-w-xs mx-auto" src="src/assets/asd.png" alt="image description"/>
      </div>

      <div><ChatBody/></div>

      <div>input</div> 

    </div>
  )
}

export default App

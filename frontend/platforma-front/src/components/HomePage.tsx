import { Link } from "react-router-dom"
import NavBar from "./NavBar"
import Footer from "./Footer"

const HomePage = () => {
  return (
    <div className="w-full">
        <NavBar />
        <section className="w-full items-center justify-center flex flex-col p-3 m-0
        border-0 border-black rounded-2xl shadow-2xl">
          <h1 className="text-black text-2xl">Welcome to our Q&A interactive platfrom</h1>
        </section>
        <div className="flex flex-col md:flex-col justify-center
        items-center lg:flex-row xl:flex-row">   
          <div className="flex sm:flex-row flex-col p-3 m-3">
            <div className="justify-items-start lg:max-w-[30%] sm:min-w-[30%] m-3 border-solid border-2
            border-blue-100 rounded-2xl shadow-2xl text-center items-center">
              <p className="font-serif p-2">This is an online platform for a simple yet useful Q&A interactive place.</p>
              <div className="flex flex-row items-center justify-center w-full">
                <img src="/q&a.webp" alt="q&a" className="w-[95px] h-[95px] rounded-full
                m-5 items-center justify-center"/>
              </div>
            </div>
            <div className="justify-items-end m-3 lg:max-w-[30%] sm:min-w-[30%] border-solid border-2 
            border-blue-100 rounded-2xl shadow-2xl text-center items-center">
              <p className="font-serif p-2">Here you can ask questions or answer them without no problem</p>
              <div className="flex sm:flex-row flex-col items-center justify-center w-full"> 
                <img src="/question.jpeg" alt="question" className="w-[95px] h-[95px]
                rounded-full m-5"/>
                <img src="/answer.webp" alt="answer" className="w-[95px] h-[95px] rounded-full m-5
                "/>
              </div>
            </div>
            <div className="justify-items-center m-3 lg:max-w-[30%] sm:min-w-[30%] border-solid border-2 
            border-blue-100 rounded-2xl shadow-2xl text-center items-center">
            <p className="font-serif p-2">Video or simply by text you have it all. You just have to ask or answer 
              for what you want to know or what you know.</p>
              <div className="flex sm:flex-row flex-col items-center justify-center w-full"> 
                <img src="/ask.png" alt="question" className="w-[95px] h-[95px]
                rounded-full m-5"/>
                <img src="/greetings.png" alt="answer" className="w-[95px] h-[95px] rounded-full m-5
                "/>
              </div>
            </div>
          </div>
        </div>
        <div className="m-9 p-5 rounded-2xl border-solid border-2 border-blue-100 shadow-2xl text-center">
          <h1 className="text-[20px] font-serif m-2">If you have an question that you are not finding the answer to don't hesitate to write here.</h1><br/>
          <h1 className="text-[20px] font-serif m-2">Mabye you will find the answer here, or better yet you can help someone else find the answer to his/her question.</h1><br/>
          <h1 className="text-[20px] font-serif m-2">This is a platform for everyone, so don't be shy and ask or answer.</h1>
          <h1 className="text-[20px] font-serif m-2">Click the button and get started</h1>
          <Link to={"/register"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold
          py-2 px-4 rounded m-3 border-solid border-b-blue-500">Get started</Link>
          <div className="relative w-full flex items-center justify-center py-3">
            <div className="w-2/3 h-[2px] bg-gray-800"></div>
            <h3 className="font-lora text-xs md:text-sm px-4 text-gray-400">Or</h3>
            <div className="w-2/3 h-[2px] bg-gray-800"></div>
        </div>
          <h1 className="text-[20px] font-serif m-2">If you already have an account just login and do you.</h1>
          <Link to={"/Login"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold
        py-2 px-4 rounded m-3 border-solid border-b-blue-500">Login</Link>
        </div>   
      <Footer/>
    </div>
  )
}

export default HomePage
import UserNavBar from "./UserNavBar"
import { useNavigate } from "react-router-dom"

const QuestionTable = () => {

  const navigate = useNavigate();
  const redirect = (path:string) => navigate(path);
  const onClick = () => {
    redirect("/answerCard");
  }
  const onNavigate = () =>{
    redirect("/questionForm");
  }

  return (
    <div className="flex flex-col w-[100%] items-center justify-center">
      <UserNavBar />
      <div className="flex flex-col w-[80%] h-[80%] items-center justify-center 
      rounded-2xl m-4 p-4 border-2 border-black shadow-2xl shadow-gray-500">
        <h1 className="text-3xl font-bold">Survey Questions</h1>
        <hr className="w-[100%] m-2 p-2 h-2"/>
          <div className="flex flex-col items-center justify-center w-[100%]">
              <div className="flex flex-row items-center w-[100%] justify-between border-2 rounded-2xl p-3 m-2">
                  <p className="text-xl text-center text-black">This is just a question to the survey</p>
                  <button className="p-2 mr-1 bg-blue-400 rounded-full 
                  text-center cursor-pointer hover:bg-blue-700"
                  onClick={onClick}>+</button>
              </div>
              <div className="flex flex-row items-center w-[100%] justify-between border-2 rounded-2xl p-3 m-2">
                  <p className="text-xl text-center text-black">This is just a question to the survey</p>
                  <button className="p-2 mr-1 bg-blue-400 rounded-full 
                  text-center cursor-pointer hover:bg-blue-700"
                  onClick={onClick}>+</button>
              </div>
              <div className="flex flex-row items-center w-[100%] justify-between border-2 rounded-2xl p-3 m-2">
                  <p className="text-xl text-center text-black">This is just a question to the survey</p>
                  <button className="p-2 mr-1 bg-blue-400 rounded-full 
                  text-center cursor-pointer hover:bg-blue-700"
                  onClick={onClick}>+</button>
              </div>
              <div className="flex flex-row items-center w-[100%] justify-between border-2 rounded-2xl p-3 m-2">
                  <p className="text-xl text-center text-black">This is just a question to the survey</p>
                  <button className="p-2 mr-1 bg-blue-400 rounded-full 
                  text-center cursor-pointer hover:bg-blue-700"
                  onClick={onClick}>+</button>
              </div>
              <div className="flex flex-row items-center w-[100%] justify-between border-2 rounded-2xl p-3 m-2">
                  <p className="text-xl text-center text-black">This is just a question to the survey</p>
                  <button className="p-2 mr-1 bg-blue-400 rounded-full 
                  text-center cursor-pointer hover:bg-blue-700"
                  onClick={onClick}>+</button>
              </div>
              <div className="flex flex-row items-center w-[100%] justify-between border-2 rounded-2xl p-3 m-2">
                  <p className="text-xl text-center text-black">This is just a question to the survey</p>
                  <button className="p-2 mr-1 bg-blue-400 rounded-full 
                  text-center cursor-pointer hover:bg-blue-700"
                  onClick={onClick}>+</button>
              </div>
              <div className="flex flex-row items-center w-[100%] justify-between border-2 rounded-2xl p-3 m-2">
                  <p className="text-xl text-center text-black">This is just a question to the survey</p>
                  <button className="p-2 mr-1 bg-blue-400 rounded-full 
                  text-center cursor-pointer hover:bg-blue-700"
                  onClick={onClick}>+</button>
              </div>
              <div className="w-full flex-col flex items-end justify-center m-3">
                <button className="p-2.5 text-center bg-blue-400 rounded-3xl
                cursor-pointer hover:bg-blue-700"
                onClick={onNavigate}>Add new question</button>
              </div>
          </div>
      </div>
    </div>
  )
}

export default QuestionTable
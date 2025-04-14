import { useNavigate } from "react-router-dom"
import UserNavBar from "./UserNavBar";

const SurveyCard = () => {

  const navigate = useNavigate();
  const redirect = (path:string) => navigate(path);

  const onDivClick = (path: string) => {
    redirect(path);
  }

  const role:string = "Asker"



  return (
    <div className="flex flex-col w-[100%] items-center justify-center">
      <UserNavBar />
      <div className="flex flex-col w-[80%] h-[80%] items-center justify-center 
      rounded-2xl m-4 p-4 border-2 border-black shadow-2xl shadow-gray-500">
         <h1 className="text-3xl font-bold">Surveys</h1>
         <hr className="w-[100%] m-2 p-2 h-2"/>
        <div className="w-[75%] m-4 border-2 text-2xl border-black
        bg-gray-300 shadow-2xl p-4 text-center rounded-2xl hover:cursor-pointer"
        onClick={() => onDivClick("/questionTable")}>
            This is just a survey.
        </div>
        <div className="w-[75%] m-4 border-2 text-2xl border-black
        bg-gray-300 shadow-2xl p-4 text-center rounded-2xl">
            This is just a survey.
        </div>
        <div className="w-[75%] m-4 border-2 text-2xl border-black
        bg-gray-300 shadow-2xl p-4 text-center rounded-2xl">
            This is just a survey.
        </div>
        <div className="w-[75%] m-4 border-2 text-2xl border-black
        bg-gray-300 shadow-2xl p-4 text-center rounded-2xl">
            This is just a survey.
        </div>
        <div className="w-[75%] m-4 border-2 text-2xl border-black
        bg-gray-300 shadow-2xl p-4 text-center rounded-2xl">
            This is just a survey.
        </div>
        {
          role == "Asker" ? (
            <button className="flex items-end justify-center p-3 text-center rounded-3xl bg-blue-500
            hover:bg-blue-800 cursor-pointer"
            onClick={() => {onDivClick("/surveyForm")}}>Add new survey</button>
          ):
          (
            <button className="flex items-end justify-center p-3 text-center rounded-3xl bg-blue-500
            hover:bg-blue-800 cursor-pointer"
            onClick={() => {onDivClick("/surveyForm")}}>Add video answer</button>
          )
        }
        
      </div>
    </div>
  )
}

export default SurveyCard
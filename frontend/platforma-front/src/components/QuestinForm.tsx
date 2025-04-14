import {  useState } from "react"
import UserNavBar from "./UserNavBar";

const QuestinForm = () => {

    const [value, setValue] = useState<string>("TECHNOLOGY");
    const [question, setQuestion] = useState<string>("");

    const createQuestion = () => {
        localStorage.setItem("question", question);
        localStorage.setItem("value", value);
        window.location.reload();
    }

  return (
    <div className="flex flex-col w-[100%] items-center justify-center m-0">
        <UserNavBar />
        <div className="flex flex-col w-[80%] items-center justify-center border-2 border-solid
        border-black shadow-2 shadow-gray-600 rounded-4xl m-5 p-3">
            <input type="text" placeholder="Enter your quesiton" className="flex w-full
            p-3 m-4 rounded-2xl border-2" onChange={(e) => {setQuestion(e.target.value)}}/>
            <div className="flex w-[100%] mt-3">
                <select value={value} onChange={(e) =>{setValue(e.target.value)}}
                    className="w-[70%] flex border-2 border-solid border-black rounded-2xl text-center
                    p-3">
                    <option value="TECHNOLOGY">TECHNOLOGY</option>
                    <option value="PROGRAMMING">PROGRAMMING</option>
                    <option value="WEB_DEVELOPMENT">WEB_DEVELOPMENT</option>
                    <option value="MOBILE_DEVELOPMENT">MOBILE_DEVELOPMENT</option>
                    <option value="DATA_SCIENCE">DATA_SCIENCE</option>
                    <option value="ARTIFICIAL_INTELLIGENCE">ARTIFICIAL_INTELLIGENCE</option>
                    <option value="MACHINE_LEARNING">MACHINE_LEARNING</option>
                    <option value="CYBERSECURITY">CYBERSECURITY</option>
                    <option value="CLOUD_COMPUTING">CLOUD_COMPUTING</option>
                    <option value="DEVOPS">DEVOPS</option>
                </select>
            </div>
            <div className="flex items-center justify-center w-[100%] p-3 m-4">
                <button className="p-3 m-4 border-2 bg-blue-400 hover:bg-blue-700 cursor-pointer
                border-none rounded-2xl font-bold text-white"
                onClick={createQuestion}>Create Question</button>
            </div>
        </div>
    </div>
  )
}

export default QuestinForm
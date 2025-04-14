// import { useState } from "react"

import { useState } from "react"


const SurveyForm = () => {

    type Question = { question: string };
    const [questions, setQuestions] = useState<Question[]>([{ question: "" }]);
    const [surveyTitle, setSurveyTitle] = useState<string>("");
    const [surveyDiscription, setSurveyDiscription] = useState<string>("");

    const handleAddQuestion = () => {
        setQuestions([...questions, { question: "" }]);
    };
    const handleQuestionChange = (index: number, field: keyof Question, value: string) => {
        const updatedQuestions = [...questions];
        updatedQuestions[index][field] = value;
        setQuestions(updatedQuestions);
    };

    const onCreateSurvey = () =>{
        localStorage.setItem("surveyTitle", surveyTitle);
        localStorage.setItem("description", surveyDiscription);
        const question = [...questions];
        localStorage.setItem("questions", JSON.stringify(question));
        window.location.reload();
    }
    

  return (
    <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[75%] border-2
        border-black rounded-2xl shadow shadow-gray-400 m-4 p-3">
            <input type="text" placeholder="Enter the survey tittle" className="w-[80%] border-2 p-3
            rounded-2xl m-4" onChange={(e)=>setSurveyTitle(e.target.value)}/>
            <input type="text" placeholder="Enter the survey description" className="w-[80%] border-2 p-3
            rounded-2xl m-4" onChange={(e)=>setSurveyDiscription(e.target.value)}/>
            <div className="w-full flex flex-col items-center justify-center">
            {questions.map((q, index) => (
            <div key={index} className="w-full flex flex-col items-center">
              <input
                type="text"
                placeholder={`Enter Question ${index + 1}`}
                value={q.question}
                onChange={(e) =>
                    handleQuestionChange(index, "question", e.target.value)
                }
                className="w-[80%] border-2 p-3 rounded-2xl m-4"
              />
            </div>
          ))}
          <button
            onClick={handleAddQuestion}
            className="p-3 m-3 bg-green-400 hover:bg-green-700 relative cursor-pointer text-center rounded-full"
          >+</button>
            </div>
            <button className="p-3 m-3 bg-blue-400 hover:bg-blue-700 cursor-pointer
            text-center rounded-3xl" onClick={onCreateSurvey}>Create survey</button>
        </div>
    </div>
)
}

export default SurveyForm
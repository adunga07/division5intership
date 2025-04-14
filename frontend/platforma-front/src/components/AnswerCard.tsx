import UserNavBar from "./UserNavBar"

const AnswerCard = () => {
  return (
    <div className="flex flex-col w-[100%] items-center justify-center">
      <UserNavBar />
        <div className="flex flex-col text-center items-center w-[75%] justify-center border-2 border-black
        m-4 p-3 shadow shadow-gray-500 rounded-3xl">
          <div className="flex flex-col w-full text-center items-center justify-center text-xl">
            <h1 className="flex text-4xl font-bold p-3 m-4">This is the question</h1>
            <p className="flex text-2xl p-3 m-4">This is the question description</p>
          </div>
        </div>
        <div className="flex w-[75%] items-center p-2  m-12">
          <input type="text" className="flex w-[75%] border-2 m-2 p-2 rounded-2xl" 
          placeholder="Enter your answer here." 
          />
          <button className="bg-blue-400 p-2.5 rounded-2xl w-[25%] hover:bg-blue-700 cursor-pointer">
            Answer
          </button>
        </div>
    </div>
  )
}

export default AnswerCard
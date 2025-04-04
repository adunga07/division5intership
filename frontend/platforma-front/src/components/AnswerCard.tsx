
const AnswerCard = () => {
  return (
    <div className="flex w-[90%] p-1 items-center justify-between m-3">
            <div className="w-full bg-white flex flex-col items-start justify-evenly rounded-[35px] h-fit">
                <p className="ml-4">Username</p>
                <p className="m-4">This is an answer 
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque ipsum, eos blanditiis temporibus id cupiditate sint delectus exercitationem, voluptate recusandae dolorem! Ab unde est voluptates ipsa, voluptate eveniet provident facere?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae delectus numquam eligendi libero architecto neque, excepturi perspiciatis, illum quisquam ratione repellat tempore error inventore asperiores nemo. Architecto blanditiis animi quasi.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas distinctio asperiores eveniet laborum totam corrupti quod dolorum quam ipsam voluptatum id repellendus beatae, maiores ex! Temporibus harum autem atque!
                </p>
            </div>
        {/* Here will be the answer button. */}
            {/* <div className="flex w-[20%] p-2 items-center justify-end">
                <button className="bg-[#124E66] text-white rounded-[20px] p-2 w-[90%]">Answer</button>
            </div> */}
    </div>
  )
}

export default AnswerCard
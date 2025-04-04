import UserNavBar from './UserNavBar'
import SideBar from './SideBar'
import AnswerCard from './AnswerCard'

const QuestionAnswers = () => {
  return (
    <>
        <UserNavBar />
        <div className="w-full flex">
            <SideBar link1="My questions" link2="My answers" link3="My profile"/>
            <div className="bg-[#B3B4BD] w-full h-auto flex flex-col items-center justify-
            p-3">
                <div className="flex flex-col w-full bg-[#D3D9D4] border-none rounded-[20px] 
                items-center justify-center mb-10 mt-0.5">
                    <div className="flex flex-row items-center justify-between w-[90%] p-3">
                        {/* //This flex div will contain Username avatar and time of post for the question. */}
                        <div className="flex w-[90%] p-1 items-center justify-start m-3">
                            <img src="/images.png" alt="avatar" className="sm:w-8 sm:h-8 w-4 h-4 rounded-full m-1"/>
                            <p className="uppercase text-[16px] text-black font-sans m-1">Username</p>
                            <p className="uppercase text-[16px] text-black font-sans m-1">27-03-2025</p>
                        </div>
                        <div className="flex justify-end items-center w-[40%]">
                            <button className="bg-[#124E66] text-white rounded-[20px] p-2 w-[90%]">Report</button>
                        </div>
                    </div>
                    {/* This div will contain the question body itself. */}
                    <div className="flex p-3 m-3 text-black font-sans overflow-y-scroll w-[90%] h-[205px] 
                    bg-white rounded-[20px]">
                        <p className="text-[16px] m-1">What is the best way to learn React? 
                        Here you will learn the best way on how to learn react and some best practices
                        safjgdhfiejrfamdhvsljbgrdsvlhjfgsvdbgyjhtrgaethgrstjukymjdhngrfieadpjlksfjgbrwfjaelkjdvf
                        sfthgurhoseiajkdbvsgioefqaljdgkvswieflagvdgshr Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet ex minima iure impedit eius, unde temporibus placeat nisi.
                        Labore rerum quia nesciunt officia reprehenderit iure, accusamus sunt vero eum. Impedit.
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officiis eaque maxime in deserunt dolorem vel obcaecati quod id culpa ad consequuntur
                        expedita provident, tenetur, praesentium soluta earum quis corrupti nostrum? 
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id aperiam amet asperiores expedita ipsum? Vero perspiciatis reiciendis adipisci ratione? Porro, labore! Sapiente ut dolore beatae error tempora non fugit voluptatem.     
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id aperiam amet asperiores expedita ipsum? Vero perspiciatis reiciendis adipisci ratione? Porro, labore! Sapiente ut dolore beatae error tempora non fugit voluptatem.     
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id aperiam amet asperiores expedita ipsum? Vero perspiciatis reiciendis adipisci ratione? Porro, labore! Sapiente ut dolore beatae error tempora non fugit voluptatem.     
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id aperiam amet asperiores expedita ipsum? Vero perspiciatis reiciendis adipisci ratione? Porro, labore! Sapiente ut dolore beatae error tempora non fugit voluptatem.     
                        </p>
                    </div>
                </div>
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
                <AnswerCard />
            </div>
        </div>
    </>
  )
}

export default QuestionAnswers
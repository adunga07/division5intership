
const QuestionCard = () => {
  return (

    //This will be the dic container for the question card component.
    <div className="flex flex-col w-full bg-[#D3D9D4] border-none rounded-[20px] items-center justify-center mb-10 ">
        {/* //This flex div will contain Username avatar and time of post for the question. */}
        <div className="flex w-[90%] p-1 items-center justify-start m-3">
            <img src="/images.png" alt="avatar" className="sm:w-8 sm:h-8 w-4 h-4 rounded-full m-1"/>
            <p className="uppercase text-[16px] text-black font-sans m-1">Username</p>
            <p className="uppercase text-[16px] text-black font-sans m-1">27-03-2025</p>
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
        {/* Here we will do the answer section for this question. */}
        <hr className="w-full h-1"/>
        <div className="flex w-[90%] p-1 items-center justify-between m-3">
            <div className="w-[80%] bg-white flex flex-col items-start justify-evenly rounded-[35px] overflow-hidden">
                <p className="ml-2.5">Username</p>
                <p className="ml-3.5">This is an answer</p>
            </div>
        {/* Here will be the answer button. */}
            <div className="flex w-[20%] p-2 items-center justify-end">
                <button className="bg-[#124E66] text-white rounded-[20px] p-2 w-[90%]">Answer</button>
            </div>
        </div>
    </div>
  )
}

export default QuestionCard
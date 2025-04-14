import { CgSearch } from "react-icons/cg"
import { Link, useNavigate } from "react-router-dom"

const UserNavBar = () => {

    const navigate = useNavigate();
    const navigateTo = (path:string) => navigate(path)

  return (
    <div className="flex w-full m-0 bg-[#124E66] justify-between items-center p-2">
        {/* Here we will have an user avatar and the user username. */}
        <div className="flex p-1 sm:p-1.5 lg:p-3 xl:p-3.5 2xl:p-5">
            <div onClick={() => navigateTo("/userProfile")} className="text-xl flex items-center gap-2 font-semibold text-white">
                <img src="/images.png" alt="avatar" className="bg-transparent rounded-full w-16 h-16 gap-1 cursor-pointer" />
                <p>username</p>
            </div>
        </div>
        {/* Here we will have a search bar */}
        <div className="flex items-center font-semibold text-black
        bg-white border-2 border-transparent rounded-3xl  w-[50%]">
            <button onClick={() => console.log("Search button clicked")} className="cursor-pointer">
                <CgSearch className="text-2xl" />
            </button>
            <input type="text" placeholder="Search a question"
            className="bg-transparent w-full active:border-0 border-0 appearance-none focus:outline-none p-3 rounded-3xl border-transparent"/>
        </div>
        {/* Here we will have the user navigation links. */}
        <div className="flex justify-between items-center gap-2 p-2">
                <Link to={"/surveyCard"} className="bg-[#808080] p-2 items-center rounded-3xl m-1">Ask question</Link>
                <Link to={"/homepage"} className="bg-[#808080] p-2 items-center rounded-3xl m-1">Log out</Link>
        </div>
    </div>
  )
}

export default UserNavBar
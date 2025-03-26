import { Link } from "react-router-dom"

const SideBar = () => {
  return (
    <div className="flex bg-[#D9D9D9] sm:w-1/5 flex-col h-screen sticky ml-0 items-center justify-between">
    <div className="w-full">
        <div className="flex flex-row items-center justify-around w-full">
          <Link
            to={""}
            className="bg-[#808080] p-1.5 rounded-2xl w-full text-center m-2"
          >
            Home page
          </Link>
        </div>
        <div className="flex flex-row items-center justify-around w-full">
          <Link
            to={""}
            className="bg-[#808080] p-1.5 rounded-2xl w-full text-center m-2"
          >
            My questions
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-around">
        <Link
          to={""}
          className="bg-[#808080] p-1.5 rounded-2xl w-full text-center m-2"
        >
          My profile
        </Link>
      </div>
    </div>
  );
}

export default SideBar
import { Link } from "react-router-dom"

const SideBar = (
  {
    link1,
    link2,
    link3
  }:
  {
    link1:string;
    link2:string;
    link3:string;
  }
) => {
  return (
    <div className="flex bg-[#D9D9D9] sm:w-1/5 flex-col h-screen sticky ml-0 items-center justify-between">
    <div className="w-full m-3">
        <div className="flex flex-row items-center justify-around w-full">
          <Link
            to={""}
            className="bg-[#808080] p-1.5 rounded-2xl w-full text-center m-2"
          >
            {link1}
          </Link>
        </div>
        <div className="flex flex-row items-center justify-around w-full">
          <Link
            to={""}
            className="bg-[#808080] p-1.5 rounded-2xl w-full text-center m-2"
          >
            {link2}
          </Link>
        </div>
      </div>
      <div className="w-full flex flex-row items-center justify-around">
        <Link
          to={""}
          className="bg-[#808080] p-1.5 rounded-2xl w-full text-center m-2"
        >
          {link3}
        </Link>
      </div>
    </div>
  );
}

export default SideBar
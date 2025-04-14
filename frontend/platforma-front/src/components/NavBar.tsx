import { Link } from "react-router-dom"


//This will be the nav bar component that will be displayed on all the pages. It will have props and links to other pages.
const NavBar = (
  {
    link,
    link1,
    link2
  }:{
  link:string;
  link1:string;
  link2:string;
}) => {
  return (
    <div>
        <nav className="w-full p-2 bg-[#124E66] mt-0 text-white flex
        items-center justify-center text-center">
            <ul>
                <li className="flex items-center justify-center">
                    <Link className="m-2.5" to={"/register"}>{link}</Link>
                    <Link className="m-2.5" to={"/Login"}>{link1}</Link>
                    <Link className="m-2.5" to={"#"}>{link2}</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
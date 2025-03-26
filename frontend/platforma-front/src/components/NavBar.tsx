import { Link } from "react-router-dom"

//This will be the nav bar component that will be displayed on all the pages. It will have props and links to other pages.




const NavBar = () => {
  return (
    <div>
        <nav className="w-full p-2 bg-[#124E66] mt-0 text-white flex
        items-center justify-center text-center">
            <ul>
                <li className="flex items-center justify-center">
                    <Link className="m-2.5" to={"/register"}>Register</Link>
                    <Link className="m-2.5" to={"/Login"}>Login</Link>
                    <Link className="m-2.5" to={"/guest"}>Continue as guest.</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}

export default NavBar
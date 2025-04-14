import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import UserNavBar from "./UserNavBar";

const UserProfilePage = () => {

    // const [name, setName] = useState<string>("Albert");
    // const [email, setEmail] = useState<string>("albert@gmail.com");
    // const [lastName, setLastName] = useState<string>("Dunga");
    // const [dateCreated, setDateCreated] = useState<string>("");
    // const [role, setRole] = useState<string>("Admin");
    const [newPassword, setNewPassword] = useState<string>("");
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);

    const name: string = "Albert";
    const email: string = "albert@gmail.com";
    const lastName: string = "Dunga";
    const dateCreated: string = "08/04/2025";
    const role: string = "Admin";

    const onDelete = () => {
        const element = document.getElementById("modal");
        element?.classList.remove("hidden");
        element?.scrollIntoView({
            behavior: "smooth"
        });
    }

  return (
    <div>
        <UserNavBar/>
        <div className="flex flex-col w-[98%] items-center justify-center m-4 p-3">
            <label className="w-full p-3 m-3 mb-0">Name</label>
            <p className="w-full border-2 rounded-2xl p-3 m-3">{name}</p>
            <label className="w-full p-3 m-3 mb-0">Lastname</label>
            <p className="w-full border-2 rounded-2xl p-3 m-3">{lastName}</p>
            <label className="w-full p-3 m-3 mb-0">Email</label>
            <p className="w-full border-2 rounded-2xl p-3 m-3">{email}</p>
            <label className="w-full p-3 m-3 mb-0">Date created</label>
            <p className="w-full border-2 rounded-2xl p-3 m-3">{dateCreated}</p>
            <label className="w-full p-3 m-3 mb-0">Role</label>
            <p className="w-full border-2 rounded-2xl p-3 m-3">{role}</p>
            <div className="w-full flex flex-col p-2 rounded-xl relative">
                <label className="w-full p-3 m-3 mb-0">Change your password</label>
                <div className="w-full flex flex-col p-2 rounded-xl relative items-center justify-center">
                    <input type={showPassword ? "text" : "password"} onChange={(e) => {
                        setNewPassword(e.target.value)
                    }}
                    className="w-full border-2 rounded-2xl p-3" 
                    />
                    {
                        showPassword ? (
                            <FaRegEyeSlash 
                            onClick={toggleShowPassword}
                            className="absolute right-5 cursor-pointer"
                            />
                        ) : (
                            <FaRegEye 
                            onClick={toggleShowPassword}
                            className="absolute right-5 cursor-pointer self-center"
                            />
                        )
                    }
                </div>
            </div>
        </div>

        <div className="flex items-center justify-around w-[98%]">
            <button className="p-3 rounded-2xl m-4 bg-amber-500 disabled:bg-amber-200 cursor-pointer" disabled={newPassword.length < 8}>Change password</button>
            <button className="p-3 rounded-2xl m-4 bg-red-600 cursor-pointer"
            onClick={onDelete}>Delete account</button>
        </div>
        <div className="flex items-center justify-center m-5 hidden"  id="modal">
            <div className="w-[60%] border-2 border-black z-[1] h-[150px] rounded-4xl flex
            items-center justify-between flex-col text-3xl">
                Are you sure you want to delete yoour account?

                <div className="flex items-center justify-between w-full p-10">
                    <button className="bg-red-500 p-3 cursor-pointer">YES {"\u{1F972}"}</button>
                    <button className="bg-green-500 p-3 cursor-pointer">NO &#x1F603;</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UserProfilePage
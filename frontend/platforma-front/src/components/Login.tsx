import { FaRegEye,FaRegEyeSlash } from "react-icons/fa";
import { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    const redirect = (path: string) => navigate(path);
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const toggleShowPassword = () => setShowPassword(!showPassword);
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState("");
    const onLogin = () => {
        console.log(email,password);
        redirect("/userpage")
    }

  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="w-[25%] h-[80%] md:max-w-md p-5 bg-[#F5F5F5] flex-col 
      flex items-center gap-3 rounded-xl shadow-gray-400 shadow-lg">
        <img src="/images.png" alt="avatar" className="w-20 h-20 rounded-full shadow-slate-700 shadow-lg" />
        <h1 className="text-lg md:text-sm font-semibold">Login</h1>

        <div className="w-full flex flex-col gap-3">
            <div className="w-full flex items-center gap-2 bg-[#CCCCCC] p-2 rounded-xl">
                <input type="email" 
                placeholder="Your account email" 
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className="w-full flex items-center gap-2 bg-[#CCCCCC] p-2 rounded-xl relative">
                <input type= {showPassword ? "text" : "password"}
                placeholder="Your password"
                className="bg-transparent border-0 w-full outline-none text-sm md:text-base"
                onChange={(e) => setPassword(e.target.value)}
                />
                {
                    showPassword ? (
                        <FaRegEyeSlash
                        className="absolute right-5 cursor-pointer"
                        onClick = {toggleShowPassword}
                        />
                    ):(
                        <FaRegEye
                        className="absolute right-5 cursor-pointer"
                        onClick={toggleShowPassword}
                        />
                    )
                }
            </div>
        </div>
        <button className="w-full h-9 bg-blue-700 text-center rounded-lg mt-3
         hover:bg-blue-900 text-sm md:text-base text-white"
         onClick={onLogin}>
            Login
        </button>
        <div className="relative w-full flex items-center justify-center py-3">
            <div className="w-2/5 h-[2px] bg-gray-800"></div>
            <h3 className="font-lora text-xs md:text-sm px-4 text-gray-400">Or</h3>
            <div className="w-2/5 h-[2px] bg-gray-800"></div>
        </div>
        <p className="text-xs md:text-sm text-black text-center">
            Don't have an account <Link to={"/register"} className="text-[#0000FF]">Sign up</Link>
        </p>
        <p className="text-xs md:text-sm text-[#0000FF] text-center">
            <Link to={"/guest"}>Continue as guest</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;

import { useState } from "react"
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa"
import { useNavigate } from "react-router-dom"




const Register = () => {


      //Using useNavigate to redirect the user to the login page.
      const naviagte = useNavigate();
      const routeChange = () =>{
        const path = "/Login";
        naviagte(path);
      }

      //Using state to see if user wants to show password or not.
      const [showPassword, setShowPassword] = useState<boolean>(false);
      const toggleShowPassword = () => setShowPassword(!showPassword);
      //Using state to store the user.
      const [name, setName] = useState<string>("");
      const [surname, setSurname] = useState<string>("");
      const [email, setEmail] = useState<string>("");
      const [password, setPassword] = useState<string>("");
      const [qualifications, setQualifications] = useState<string>("");
      //Using an function to register the user.
      const onRegister = () => {
          console.log(`Name: ${name} Surname: ${surname} Email: ${email} 
            Password: ${password} Qualifications: ${qualifications}`);
            //Redirecting the user to the login page.
            routeChange();
      }

  return (

    //Register form
    <div className="w-full h-screen flex items-center justify-center">
        <div className="w-[25%] h-[90%] md:max-w-md p-5 bg-[#F5F5F5] flex-col 
            flex items-center gap-3 rounded-xl shadow-gray-400 shadow-lg">
            <img src="/images.png" alt="avatar" className="w-20 h-20 rounded-full shadow-slate-700 shadow-lg"/>
            <h1 className="text-lg md:text-sm font-semibold">Register</h1>

            <div className="w-full flex flex-col gap-3">
              <div className="w-full flex items-center
              gap-2 bg-[#CCCCCC] p-2 rounded-xl relative">
                <input type="text" 
                placeholder="Your name" 
                className="w-full border-0 outline-none bg-transparent text-sm md:text-base"
                onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-3 bg-[#CCCCCC] p-2 rounded-xl realtive">
                <input type="text"
                placeholder="Your surname"
                className="w-full border-0 outline-none bg-transparent text-sm md:text-base"
                onChange={(e) => setSurname(e.target.value)}
                />
              </div>
              <div className="w-full flex flex-col gap-3 bg-[#CCCCCC] p-2 rounded-xl relative">
                <input type="email"
                placeholder="Your email"
                className="w-full border-0 outline-none bg-transparent text-sm md:text-base" 
                onChange={(e) => setEmail(e.target.value)}/>
              </div>
              <div className="w-full flex flex-col gap-3 bg-[#CCCCCC] p-2 rounded-xl relative">
                <input type={showPassword ? "text" : "password"}
                placeholder="Please enter a password" 
                className="w-full border-0 outline-none bg-transparent text-sm md:text-base" 
                onChange={(e) => setPassword(e.target.value)}
                />
                {
                  showPassword ? (
                    <FaRegEyeSlash
                    className="absolute right-5 cursor-pointer"
                    onClick={toggleShowPassword}
                    />
                  ):(
                    <FaRegEye
                    className="absolute right-5 cursor-pointer"
                    onClick={toggleShowPassword}
                    />
                  )
                }
              </div>

              <div className="w-full flex flex-col bg-[#CCCCCC] gap-3 p-2 rounded-xl relative">
                <textarea name="qualifications" placeholder="Your qualifications"
                className="w-full bg-transparent text-sm md:text-base border-0 outline-none"
                onChange={(e) => setQualifications(e.target.value)}/>
              </div>
            </div>
          <button className="w-full h-9 bg-blue-700 text-center rounded-lg mt-3
         hover:bg-blue-900 text-sm md:text-base text-white"
         onClick={onRegister}>
            Register
          </button>
        </div>
    </div>
  );
}

export default Register
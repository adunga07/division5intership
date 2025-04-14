const authService = require("../Services/authServices");

const register = async (req, res) => {
    try{
        const {name,surname,email,password} = req.body
        const user = await authService.registerUser(name,surname,email,password);
        if(!user.error){
            return res.status(201).json({message: "User created successfully",user});
        }
        return res.status(400).json({ message: user.error })
    }catch (error) {
        console.error("Error creating user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const login = async (req, res) => {
    try{
        const {email, password} = req.body;
        const authResult = await authService.loginUser(email, password);
        if(authResult.error){
            return res.status(401).json({message: "Invalid credentials"});
        }else{
            res.status(200).json({message:"Login successful", token: authResult.token})
        }
    }catch (error) {
        console.error("Error logging in user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

module.exports = {
    register,
    login
};
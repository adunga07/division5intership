const authService = require("../Services/authServices");

const register = async (req, res) => {
    try{
        await authService.registerUser(req.body);
        res.status(201).json({message: "User created successfully"});
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
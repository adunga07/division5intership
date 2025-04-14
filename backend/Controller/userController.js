const express = require("express");
const router = express.Router();
const userService = require("../Services/userService");

const getUserByID = async (req, res) => {
    try{
        const userID = req.params.userID;
        const user = await userService.getUserByID(userID)
        if(!user.error){
            return res.status(200).json(user);
        }
        return res.status(404).json({error: user.error, user: user});
    }catch(error){
        console.error("Error getting user:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const editUserPassword = async (req, res) => {
    try{
        const userID = req.params.userID;
        const newPassword = req.body.password;

        const result = await userService.editUserPassword(userID, newPassword,token);
        if(result.error){
            return res.status(400).json({ message: result.error });
        }
        return res.status(200).json({ message: result.message});

    }catch(error){
        console.error("Error editing user password:", error);
        res.status(500).json({ message: "Internal server error" });
    }
}

const deleteUser = async(req,res) => {
    try{
        const userID = req.params.userID;
        const result = await userService.deleteUser(userID);
        if(result.error){
            return res.status(404).json({ message: result.error });
        }
        return res.status(204).json({ message: result.message });
    }catch(error){
        res.status(500).json({ message:"Internal server error" });
    }
}

module.exports = {
    getUserByID,
    editUserPassword,
    deleteUser
}
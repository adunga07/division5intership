import prisma from "../database/prismaClient.js";
import bcrypt from "bcrypt";

export const getUserByID = async (userID) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                user_ID: parseInt(userID)
            }
        })
        return user;
    }catch(error){
        return { error: `User not found.${userID}`};
    }
}

export const editUserPassword = async (userID, newPassword) => {
    try{
        const user = await prisma.user.findUnique({
            where: {
                user_ID: parseInt(userID),
            }
        })
        
        if(!user){
            return { error: "User not found."};
        }
        const samePassword = await bcrypt.compare(newPassword, user.password);
        if(samePassword){
            return {error: "New password must be different from the old one."};
        }
        const hashedPassword = await bcrypt.hash(newPassword, 10);
        const updateUser = await prisma.user.update({
            where: {
                user_ID: parseInt(userID),
            },
            data:{
                password: hashedPassword,
            }
        })
        if(!updateUser){
            return { error: "Uesr not found."};
        }
        return { message: "Your password has been updated."};
    }catch(error){
        return { error: "Server problem."};
    }
}

export const deleteUser = async (userID) => {
    try{
        const result = await prisma.user.delete({
            where:{
                user_ID: userID
            }
        });

        if(!result){
            return { error: "User couldn't be found!" };
        }

        return { message:"User deleted succefully" };
    }catch(error){
        return { error: "Server error"};
    }
}
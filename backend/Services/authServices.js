import prisma from "../database/prismaClient.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//Register a new user service
export const registerUser = async (name,surname,email,password,role) => {

    try {
        //Checking if the user has filled in all the fields else we send him an error message that he
        //has to fill in all the fields.
        if(!name || !surname || !email || !password){
            return { error: `Please fill in all the fields.${name}, ${surname}, ${email}, ${password}` };
        }

        if (password.length < 8){
            return { error: "Password should be 8 characters long." }
        }

        

        //Checking to see if there is a user with the same email in the database.
        const user = await prisma.user.findFirst({
            where: {
                email: email,
            }
        });

        //If there is a user with the same email we send an error message
        //and ask him to register with another email.
        if (user){
            return ({ error: "User already exists. Please enter another email." });
        }


        //If the user has filled in all fields and every other validation is correct we will hash 
        //the password and create a new user in the database.
        const hashedPassword = await bcrypt.hash(password,10);

        //Creating the new user in the database with the hashed passwrord and the other fields.
        const newUser = await prisma.user.create({
            data: {
                name: name,
                last_name: surname,
                email: email,
                password: hashedPassword,
                role: role
            }
        });
        return { message: `User created successfully ${newUser}` };
    }catch (error) {
        //If there is an error where the response from the server is not coming we 
        //will send a 500 error message.
        return ({ error: "Internal server error" });
    }
}

export const loginUser = async (email, password) => {

    //Getting the neccessary fields from the request body for the login to happen.

    try {

        //Checking the fields are completed.
        if(!email || !password){
            return ({message: "Please fill in all the fields."});
        }

        //Checking if the user with the provided email exists on the database or not.
        const user = await prisma.user.findFirst({
            where:{
                email: email
            }
        })

        //If user doesn't exist we send him a message to enter the correct email.
        //If the user exists the next step is to check if the password is correct or not and it is 
        //done the same way as with the email but we will use bcrypt to compare since we bycrypted
        //the password before saving the user to database.
        if(!user)
            return ({error: "Please enter the correct email"});

        //Creating a variable to save the returend value of the bycrypt compare function.
        const isPasswordValid = await bcrypt.compare(password, user.password);
        //If password is not correct we then return a 401 status code with 
        //the message to enter the correct password.
        //After the password is proven correct then we will advance and create a token for the user.
        if(!isPasswordValid)
            return ({error: "Please enter the correct password"});

        //Here we are saving the generated token to a variable and sending it back because
        //the user needs it to login and to be authenticated to be able to use the app
        const token = generateJwtToken(user);
        return{
            message:"Logged in successfully",
            token: token
        };
    }catch(error){
        //There might also be cases where the server is not responding so there might be a error and
        //for that reason in the catch block we send a 500 status code with a message
        //that says please try again later.
        return {
            error:"There seem to be a problem with the server please try again later"
        };
    }
}

//In this function we are generating the token for the user to use and be able to login only after 
//every validation is done.
const  generateJwtToken = (user) => {
    //Creating the payload of the token that we will send to the client.
    const payload = {
        userID: user.user_ID,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
    };

    //Creating the token and signing it with the secret key the payload and the expiration time.
    //This expiration time will be used to determine for how long this token is valid.
    //After the expiration time passes the user will not have to do anything because 
    //after creating the middleware the middleware will take care to refresh the token
    //so the user won't have to login again if he/she is using the app and is active.
    //The secret key is saved in a .env file that is not expozed to anyone. 
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

}
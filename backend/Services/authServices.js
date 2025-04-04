import prisma from "../database/prismaClient";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";


//Register a new user service
export const registerUser = async (req,res) => {

    //Here we are taking the request body and spreading it to get the username,name,surname
    //email and password from the user that is trying to register.
    const { username,name,surname,email,password } = req.body;

    try {
        //Checking if the user has filled in all the fields else we send him an error message that he
        //has to fill in all the fields.
        if(!username || !name || !surname || !email || ! password){
            return res.status(400).json({message: "Please fill in all the fields."});
        }

        if (password.length < 8){
            return res.status(400).json({
                message: "Password must be at least 8 characters long."}
            );
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
            return res.status(409).json({ message: "User already exists. Please enter another email." });
        }

        //Checking to see if there is a user with the same username in the database already.
        const userName = await prisma.user.findFirst({
            where: {
                username: username,
            }
        });

        //If username exists we send him a error with a message to enter another username.
        if(userName){
            return res.status(409).json(
                { message: "Username already exists. Please enter another username." }
            );
        }

        //I will enter other types of validatios here as well.

        //If the user has filled in all fields and every other validation is correct we will hash 
        //the password and create a new user in the database.
        const hashedPassword = await bcrypt.hash(password,10);

        //Creating the new user in the database with the hashed passwrord and the other fields.
        const newUser = await prisma.user.create({
            data: {
                username: username,
                name: name,
                surname: surname,
                email: email,
                password: hashedPassword,
            }
        });
        return res.status(201).json({ message: "User created successfully", user: newUser });
    }catch (error) {
        //If there is an error where the response from the server is not coming we 
        //will send a 500 error message.
        console.error("Error creating user:", error);
        return res.status(500).json({ message: "Internal server error" });
    }
}

export const loginUser = async (req,res) => {

    //Getting the neccessary fields from the request body for the login to happen.
    const {email, password} = req.body;

    try {

        //Checking the fields are completed.
        if(!email || !password){
            return res.status(400).json({message: "Please fill in all the fields."});
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
            return res.status(401).json({message: "Please enter the correct email"});

        //Creating a variable to save the returend value of the bycrypt compare function.
        const isPasswordValid = await bcrypt.compare(password, user.password);
        //If password is not correct we then return a 401 status code with 
        //the message to enter the correct password.
        //After the password is proven correct then we will advance and create a token for the user.
        if(!isPasswordValid)
            return res.status(401).json({message: "Please enter the correct password"});

        //Here we are saving the generated token to a variable and sending it back because
        //the user needs it to login and to be authenticated to be able to use the app
        const token = generateJwtToken(user);
        return res.status(200).json({
            message:"Logged in successfully",
            token: token
        });
    }catch(error){
        //There might also be cases where the server is not responding so there might be a error and
        //for that reason in the catch block we send a 500 status code with a message
        //that says please try again later.
        console.error("Error logging in user:", error);
        return res.status(500).json({
            message:"There seem to be a problem with the server please try again later"
        });
    }
}

//In this function we are generating the token for the user to use and be able to login only after 
//every validation is done.
const  generateJwtToken = (user) => {
    //Creating the payload of the token that we will send to the client.
    const payload = {
        username: user.username,
        name: user.name,
        surname: user.surname,
        email: user.email,
        role: user.role,
        strikes: user.strikes
    };

    //Creating the token and signing it with the secret key the payload and the expiration time.
    //This expiration time will be used to determine for how long this token is valid.
    //After the expiration time passes the user will not have to do anything because 
    //after creating the middleware the middleware will take care to refresh the token
    //so the user won't have to login again if he/she is using the app and is active.
    //The secret key is saved in a .env file that is not expozed to anyone. 
    return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

}
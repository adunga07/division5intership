import jwt from "jsonwebtoken";

const auth = async (req, res, next) => {

    //Cheking if the token provided by the user exists in the header request.
    const token = req.headers.authorization && req.headers.authorization.split(' ')[1];

    //If the token doesn't exist we send him an unauthorized message.
    if(!token){
        return res.status(401).json({message: "Unauthorized, token not provided."});
    }

    //If the token exists we verify it with the secret key we used to sign it.
    jwt.verify(token, "this-is-a-secret-key-saved-somewhere-else", (err, decoded) => {
        //If the token somehow is invalid we send him and unauthorized message with an invalid token
        //message.
        if(err){
            return res.status(401).json({message: "Unauthorized, invalid token."});
        }

        //If the token is valid we will save the decoded token on the request object so we can
        //send it to the next middleware/service/controller where we can use it again.
        req.user = decoded;

        next();
    });
};

export default auth;

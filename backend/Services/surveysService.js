import prisma from "../database/prismaClient";

export const createSurvey = async(res, req)=>{

    //Getting all the information from the request body.
    const { title, description, questions, author_ID } = req.body;

    //In this try catch bllock will be all the logic of creating a survey.
    try {
        //Some validations to check if we are getting all the neccesary fields.
        if( !title || !description){
            return res.status(400).json({ message: "Please fill in all the fields required."});
        }
        
        //Creating the survey and adding it to the database.
        const survey = await prisma.survey.create({
            data: {
                title: title,
                description: description,
                authorID: author_ID,
                questions: {
                    questions : questions.map((question) => ({
                        question: question.question
                    })),
                }
            }
        })

        return res.status(201).json({ message: "Survey created successfully", survey: survey.title });
    }catch(error){
        return res.status(500).json({ message: "Server error"});
    }
}

export const getAllSurveys = async (res, req) => {
    //In this try catch bllock we are having the logic for getting all the surveys.
    try{
        const surveys = await prisma.survey.findMany();
        return res.status(200).json(surveys);
    }catch(error){
        return res.status(500).
        json({ message: "Server error couldn't connect to the database pls try again later."});
    }
}

export const getSurveyByID = async (res, req) => {
    //Getting the ID from the request body.
    const survey_ID = req.params.id;
    try{
        //Checking if the ID is provided or not.
        if(!survey_ID){
            return res.status(400).json({ message: "Please provide a survey ID."});
        }

        //Finding the survey with the provided ID in the database.
        const survey = await prisma.survey.findUnique({
            where: {
                survey_ID: survey_ID
            }
        })
        //If the survey is not found we are returning a 404 error with a message.
        if(!survey){
            return res.status(404).json({ message: "Survey not found. Please provide a valid survey ID."});
        }
        //Getting the survey after finding it.
        return res.status(200).json(survey);
    }catch(error){
        return res.status(500).json({ message: "Coudn't connect to server please try again later."})
    }
}

export const deleteSurvey = async (res, req) => {
    //Getting the ID from the request body.
    const survey_ID = req.params.id;
    
    //Checking if the ID is provided or not.
    if(!survey_ID){
        return res.status(400).json({ message: "Please provide a survey ID."});
    }

    //In this try catch bllock we have all the logic for the delete operation of the survey.
    try{
        //Finding the survey with the provided ID in the database and deleting it.
        const deletedSurvey = await prisma.survey.delete({
            where: {
                survey_ID: survey_ID
            }
        })
        //If the survey is not found we are returning a 404 error with a message.
        if(!deletedSurvey){
            return res.status(404).json({ message: "Survey not found. Please provide a valid survey ID"});
        }
        return res.status(200).json({ message: "Survey deleted successfully"});
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

export const updateSurvey = async (res, req) => {
    //Getting the ID and body from the request.
    const surveyID = req.params.id;
    const {title, description, questions} = req.body;

    try{
        //Validationing the ID of the surveys and the form fields.
        if(!surveyID){
            return res.status(400).json({ message: "Please provide a survey ID."});
        }

        if(!title || !description){
            return res.status(400).json({ message: "Please fill in all the fields required."});
        }

        //Finding and updating the survey with the provided ID in the database.
        const updatedSurvey = await prisma.survey.update({
            where: {
                survey_ID: surveyID
            },
            data:{
                title: title,
                description: description,
                questions: {
                    questions: questions.map((question) => ({
                        question: question.question
                    })),
                }
            }
        })

        //If the survey is not found we are returning a 404 error with a message.
        if(!updatedSurvey){
            return res.status(404).json({ message: "Survey not found. Please enter a valid survey ID."})
        }
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."})
    }
}

export const getSurveysByAuthorID = async (res, req) => {
    //Getting the author ID from the request body.
    const authorID = req.params.id;

    //Creating the try catch block for the logic of getting all the surveys by the author.
    try{
        if(!authorID){
            return res.status(400).json({ message:"Please provide an author ID." });
        }

        const surveys = await prisma.survey.findMany({
            where: {
                authorID: authorID
            }
        })

        return res.status(200).json(surveys);
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}
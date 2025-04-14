import prisma from "../database/prismaClient.js";

export const createSurvey = async(title, description, author_ID)=>{

    //Getting all the information from the request body.

    //In this try catch bllock will be all the logic of creating a survey.
    try {
        //Some validations to check if we are getting all the neccesary fields.
        if( !title || !description){
            return { error: "Please fill in all the fields required."};
        }
        
        //Creating the survey and adding it to the database.
        const survey = await prisma.survey.create({
            data: {
                title: title,
                description: description,
                authorID: parseInt(author_ID)
            }
        })

        if(!survey){
            return { error:"Coudn't create survey." };
        }

        return { message: "Survey created successfully", survey: survey };
    }catch(error){
        return { error: "Server error"};
    }
}

export const getAllSurveys = async () => {
    //In this try catch bllock we are having the logic for getting all the surveys.
    try{
        const surveys = await prisma.survey.findMany({
            include: {
                questions: true,
                author: true
            }
        });
        return surveys;
    }catch(error){
        return { error: "Server error couldn't connect to the database pls try again later."};
    }
}

export const getSurveyByID = async (id) => {
    //Getting the ID from the request body.
    const survey_ID = id;
    try{
        //Checking if the ID is provided or not.
        if(!survey_ID){
            return { error: "Please provide a survey ID."};
        }

        //Finding the survey with the provided ID in the database.
        const survey = await prisma.survey.findUnique({
            where: {
                survey_ID: parseInt(survey_ID)
            },
            include:{
                questions: true,
                author: true
            }
        })
        //If the survey is not found we are returning a 404 error with a message.
        if(!survey){
            return { error: "Survey not found. Please provide a valid survey ID."};
        }
        //Getting the survey after finding it.
        return survey;
    }catch(error){
        return { message: "Coudn't connect to server please try again later."};
    }
}

export const deleteSurvey = async (id) => {
    //Getting the ID from the request body.
    const survey_ID = id;
    
    //Checking if the ID is provided or not.
    if(!survey_ID){
        return { error: "Please provide a survey ID."};
    }

    //In this try catch bllock we have all the logic for the delete operation of the survey.
    try{
        //Finding the survey with the provided ID in the database and deleting it.
        const deletedSurvey = await prisma.survey.delete({
            where: {
                survey_ID: parseInt(survey_ID)
            }
        })
        //If the survey is not found we are returning a 404 error with a message.
        if(!deletedSurvey){
            return { error: "Survey not found. Please provide a valid survey ID"};
        }
        return { message: "Survey deleted successfully"};
    }catch(error){
        return { error: "Couldn't connect to server please try again later."};
    }
}

export const updateSurvey = async (id, title, description, questions) => {
    //Getting the ID and body from the request.
    const surveyID = id;

    try{
        //Validationing the ID of the surveys and the form fields.
        if(!surveyID){
            return { error: "Please provide a survey ID."};
        }

        if(!title || !description){
            return { error: "Please fill in all the fields required."};
        }

        //Finding and updating the survey with the provided ID in the database.
        const updatedSurvey = await prisma.survey.update({
            where: {
                survey_ID: parseInt(surveyID)
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
            return { error: "Survey not found. Please enter a valid survey ID."};
        }

        return { message:"Survey updated successfully" };
    }catch(error){
        return { error: "Couldn't connect to server please try again later."};
    }
}

export const getSurveysByAuthorID = async (id) => {
    //Getting the author ID from the request body.
    const authorID = id;

    //Creating the try catch block for the logic of getting all the surveys by the author.
    try{
        const surveys = await prisma.survey.findMany({
            where: {
                authorID: parseInt(authorID)
            },
            include:{
                questions: true,
                author: true
            }
        })
        return surveys;
    }catch(error){
        return { error: "Couldn't connect to server please try again later." };
    }
}
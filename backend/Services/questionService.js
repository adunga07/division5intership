import prisma from "../database/prismaClient.js";

export const createQuestion = async(surveyID, categoty, question) => {
    //Try catch block for the logic of creaeting a question.
    try{
        const survey = await prisma.survey.findUnique({
            where: {
                survey_ID: surveyID
            }
        })

        //If we dont find the survey.
        if(!survey){
            return { error: "Survey not found."};
        }
        //Some validations
        if(!categoty || !question){
            return { error: "Please provide a category and question."};
        }

        //Creating question to the survey.
        const questions = await prisma.question.create({
            data: {
                surveyID: surveyID,
                category: categoty,
                question: question
            }
        })
        return { message: "Question created successfully"};
    }catch(error){
        return { message: "Couldn't connect to server please try again later."};
    }
}

export const getAllQuestionsBySurveyID = async(surveyID) => {
    //Logic to get all questions by survey ID.
    try{

        //Checking if the survey is found or not.
        const survey = await prisma.survey.findUnique({
            where: {
                survey_ID: surveyID
            }
        })
        if(!survey){
            return { error: "Survey not found."};
        }

        //Getting all the quesitons by survey ID.
        const surveyQuestions = await prisma.question.findMany({
            where: {
                surveyID: surveyID
            },
            include: {
                questions: true
            }
        })
        return surveyQuestions;
    }catch(error){
        return { error: "Couldn't connect to server please try again later."};
    }
}

export const deleteQuestion = async(quesitonID) => {
    try{
        const deletedQuesiton = await prisma.question.delete({
            where:{
                question_ID: quesitonID
            }
        })
        if(!deletedQuesiton){
            return { error: "Question not found."};
        }
        return { message: "Question deleted successfully."};
    }catch(error){
        return { error: "Couldn't connect to server please try again later."}
    }
}
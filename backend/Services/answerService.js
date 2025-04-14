import prisma from "../database/prismaClient.js";

export const createAnswer = async (surveyID, questionID, answer, author_ID) => {
    try{
        //Checking if the survey is in database or not.
        const survey = await prisma.survey.findUnique({
            where: {
                survey_ID: surveyID
            }
        })
        if(!survey){
            return { error: "Survey not found."};
        }
        //Cheking if the quesition exists or not.
        const question = await prisma.question.findUnique({
            where: {
                questionID: questionID
            }
        })
        if(!question){
            return { error: "Question not found."};
        }

        //Creating the answer to the question.
        const createAnswer = await prisma.answer.create({
            data: {
                surveyID: surveyID,
                questionID: questionID,
                answer: answer,
                userID: author_ID
            }
        })

        return { message: "Answer created successfully"};
    }catch(error){
        return { error: "Couldn't connect to server please try again later."};
    }
}

export const getAllAnswersByQuestionID = async (quesitionID) => {
    try{
        //checking if the question exists or not.
        const question = await prisma.question.findUnique({
            where: {
                question_ID: quesitionID
            }
        })
        if(!question){
            return {error: "Question not found."};
        }
        //Getting all the answers by question ID.
        const answers = await prisma.answer.findMany({
            where:{
                questionID: quesitionID
            },
            include: {
                user: true,
                question: true
            }
        })

        return answers;
    }catch(error){
        return { error: "Couldn't connect to server please try again later."};
    }
}

export const getAnswersBySurveyIDAndQuestionIDAndAuthorID = async (surveyID, questionID, author_ID) => {
    try{
        //Checking if the survey exists or not.
        const survey = await prisma.survey.findUnique({
            where: {
                survey_ID: surveyID
            }
        })
        if(!survey){
            return { error: "Survey not found."};
        }
        const question = await prisma.question.findUnique({
            where: {
                question_ID: questionID
            }
        })
        if(!question){
            return { error: "Question not found."};
        }
        //Checking if the user exists or not.
        const user = await prisma.user.findUnique({
            where: {
                user_ID: author_ID
            }
        })
        if(!user){
            return { error:"User not found."};
        }
        //Getting the answers by survey ID question ID and author ID.
        const answers = await prisma.answer.findMany({
            where: {
                surveyID: surveyID,
                questionID: questionID,
                userID: author_ID
            },
            include: {
                question: true,
                user: true
            }
        })
        return answers;
    }catch(error){
        return { error: "Couldn't connect to server please try again later."};
    }
}

export const getAnswersBySurveyIDAndAuthourID = async (surveyID, author_ID) => {
    try{
        //Checking if the survey exists or not.
        const survey = await prisma.survey.findUnique({
            where: {
                survey_ID: surveyID
            }
        })
        if(!survey){
            return { error: "Survey not found."};
        }
        //Checking if the user exists or not.
        const user = await prisma.user.findUnique({
            where:{
                user_ID: author_ID
            }
        })
        if(!user){
            return {error: "User not found."};
        }
        //Getting the answers by survey ID and author ID.
        const answers = await prisma.answer.findMany({
            where: {
                surveyID: surveyID,
                userID: author_ID
            },
            include: {
                question: true,
                user: true
            }
        })
        return answers;
    }catch(error){
        return { error: "Couldn't connect to server please try again later."};
    }
}
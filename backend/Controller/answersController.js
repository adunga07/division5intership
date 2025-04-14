const answerService = require("../Services/answerService");

const createAnswer = async (req, res) => {
    const { surveyID, questionID, questionAnswer} = req.body;
    const author_ID = req.params.user_ID;
    try{
        const answer = await answerService.createAnswer(surveyID,questionID,questionAnswer,author_ID)
        if(answer.error){
            return res.status(400).json({ error: answer.error});
        }
        return res.status(201).json({ message: answer.message});
    }catch(error){
        return res.status(500).json({ error: "Server error."});
    }
}

const getAllAnswersByQuestionID = async (req, res) => {
    const questionID = req.params.questionID;
    try{
        const answers = await answerService.getAllAnswersByQuestionID(questionID);
        if(answers.error){
            return res.status(400).json({ error: answers.error});
        }
        return res.status(200).json(answers);
    }catch(error){
        return res.status(500).json({ error: "Server error."});
    }
}

const getAnswersBySurveyIDAndQuestionIDAndAuthorID = async (req, res) =>{
    const surveyID = req.params.surveyID;
    const questionID = req.params.questionID;
    const author_ID = req.params.user_ID;

    try{
        const answers = await answerService.getAnswersBySurveyIDAndQuestionIDAndAuthorID
        (surveyID,questionID,author_ID);
        if(answers.error){
            return res.status(400).json({ error: answers.error});
        }
        return res.status(200).json(answers);
    }catch(error){
        return res.status(500).json({ error: "Server error."});
    }
}

const getAnswersBySurveyIDAndAuthourID = async (req, res) => {
    const surveyID = req.params.surveyID;
    const author_ID = req.params.user_ID;
    try{
        const answers = await answerService.getAnswersBySurveyIDAndAuthourID(surveyID, author_ID);
        if(answers.error){
            return res.status(400).json({ error: answers.error});
        }
        return res.status(200).json(answers);
    }catch(error){
        return res.status(500).json({ error:"Server error."});
    }
}

module.exports = {
    createAnswer,
    getAllAnswersByQuestionID,
    getAnswersBySurveyIDAndQuestionIDAndAuthorID,
    getAnswersBySurveyIDAndAuthourID
}
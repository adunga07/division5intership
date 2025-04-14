const questionController = require("../Services/questionService");

const createQuestion = async (req, res) => {
    try{
        const result = await questionController.createQuestion(req.params.surveyID, req.body);
        if(result.error){
            return res.status(400).json({ message: result.error});
        }
        res.status(201).json({result: result,message: result.message});
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

const getAllQuestionsBySurveyID = async (req, res) => {
    try{
        const surveyQuestions = await questionController.getAllQuestionsBySurveyID(req.params.surveyID);
        if(surveyQuestions.error){
            return res.status(404).json({ message: surveyQuestions.error});
        }
        res.status(200).json(surveyQuestions);
    }catch(error){
        return res.status(500).json({ message:"Couldn't connect to server please try again later."});
    }
}

const deleteQuestion = async (req, res) => {
    try{
        const deletedQuesition = await questionController.deleteQuestion(req.params.quesiton);
        if(deletedQuesition.error){
            return res.status(404).json({ message: deletedQuesition.error});
        }
        return res.status(200).json({ message: deletedQuesition.message});
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

module.exports = { 
    createQuestion,
    getAllQuestionsBySurveyID,
    deleteQuestion
}

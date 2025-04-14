const surveyService = require('../Services/surveysService');

const createSurvey = async (req, res) => {
    try {
        const title = req.body.title;
        const description = req.body.description;
        const author_ID = req.body.author_ID;
        const survey = await surveyService.createSurvey(title,description,author_ID);
        if(survey.error){
            return res.status(404).json({ error: survey.error });
        }
        res.status(201).json({ message: "Survey created successfully", survey });
    }catch (error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

const getAllSurveys = async (req,res) => {
    try{
        const surveys = await surveyService.getAllSurveys();
        if(surveys.error){
            return res.status(400).json({ error: surveys.error });
        }
        res.status(200).json(surveys);
    }catch(error){
        return res.status(500).json({ message: "Coudn't connect to the database"})
    }
}

const getSurveyByID = async (req, res) => {
    try{
        const survey = await surveyService.getSurveyByID(req.params.id);
        if(!survey){
            return res.status(404).json({ message: "Survey not found. Please provide a valid survey ID."});
        }
        res.status(200).json(survey);
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

const deleteSurvey = async (req, res) => {
    try{
        const deletedSurvey = await surveyService.deleteSurvey(req.params.id);
        if(!deletedSurvey){
            return res.status(404).json({ message: "Survey not found. Please provide a valid survey ID."});
        }
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

const updateSurvey = async (req, res) => {
    try{
        const updatedSurvey = await surveyService.updateSurvey(req.params.id, req.body);
        if(!updatedSurvey){
            return res.status(400).json({ message: "Couldn't update the survey!"});
        }
        res.status(200).json({ message: "Survey updated successfully"});
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

const getSurveysByAuthorID = async (req, res) => {
    try{
        const id = req.params.id;
        const surveys = await surveyService.getSurveysByAuthorID(id);
        if(surveys.error){
            return res.status(404).json({ message: surveys.error });
        }
        return res.status(200).json(surveys);
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

module.exports = {
    createSurvey,
    getAllSurveys,
    getSurveyByID,
    getSurveysByAuthorID,
    updateSurvey,
    deleteSurvey
}
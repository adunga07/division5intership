const surveyService = require('../Services/surveysService');

const createSurvey = async (req, res) => {
    try {
        const survey = await surveyService.createSurvey(req.body);
        res.status(201).json({ message: "Survey created successfully", survey });
    }catch (error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
    }
}

const getAllSurveys = async (req, res) => {
    try{
        const surveys = await surveyService.getAllSurveys();
        res.status(200).json(surveys);
    }catch(error){
        return res.status(500).json({ message: "Couldn't connect to server please try again later."});
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
        const surveys = await surveyService.getSurveysByAuthorID(req.params.id);
        if(!surveys){
            return res.status(404).json({ message: "Couldn't find any surveys for this author."});
        }
        return res.status(200).json(surveys.array());
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
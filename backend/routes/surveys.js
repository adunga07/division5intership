const express = require('express');
const router = express.Router();
const surveyController = require("../Controller/surveysController");


router.post('/createSurvey', surveyController.createSurvey);
router.get("/getAllSurveys", surveyController.getAllSurveys);
router.get("/getSurveysByAuthorID/:id", surveyController.getSurveysByAuthorID);
router.get("/getSurveyByID/:id", surveyController.getSurveyByID);
router.delete("deleteSurvey/:id", surveyController.deleteSurvey);
router.put("updateSurvey/:id", surveyController.updateSurvey);
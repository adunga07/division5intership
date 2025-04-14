const express = require("express");
const router = express.Router();
const questionController = require("../Controller/quesitonController");


router.post("/createQuestion/:surveyID", questionController.createQuestion);
router.get("/getAllQuestionsBySurveyID/:surveyID", questionController.getAllQuestionsBySurveyID);
router.delete("/deleteQuestion/:quesitonID", questionController.deleteQuestion);

module.exports = router;
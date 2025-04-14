const express = require("express");
const router = express.Router();
const answerService = require("../Services/answerService");

router.post("/createAnswer/:userID", answerService.createAnswer);
router.get("/getAllAnswersByQuestionID/:questionID", answerService.getAllAnswersByQuestionID);
router.get("/getAnswerBySurveyIDAndQuestionIDAndAuthorID/:surveyID/:questionID/:userID",
    answerService.getAnswersBySurveyIDAndQuestionIDAndAuthorID
);
router.get("/getAnswersBySurveyIDAndAuthorID/:survetID/:userID", 
    answerService.getAnswersBySurveyIDAndAuthourID
);

module.exports = router;

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import UserPage from "../components/UserPage";
import QuestionAnswers from "../components/QuestionAnswers";
import HomePage from "../components/HomePage";
import SurveyCard from "../components/SurveyCard";
import QuestionTable from "../components/QuestionTable";
import AnswerCard from "../components/AnswerCard";
import WebCam from "../components/WebCam";
import SurveyForm from "../components/SurveyForm";
import UserProfilePage from "../components/UserProfilePage";
import QuestinForm from "../components/QuestinForm";

const path = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/Login', element: <Login /> },
    { path: '/register', element: <Register />},
    { path: '/userpage', element: <UserPage />},
    { path: '/questionanswer', element: <QuestionAnswers />},
    { path: '/homepage', element: <HomePage />},
    { path: '/surveyCard', element: <SurveyCard /> },
    { path: '/questionTable', element: <QuestionTable /> },
    { path: '/answerCard', element: <AnswerCard /> },
    { path: '/reactWebCam', element: <WebCam /> },
    { path: '/surveyForm', element: <SurveyForm /> },
    { path: '/userProfile', element: <UserProfilePage /> },
    { path: '/questionForm', element: <QuestinForm /> }
])

export default path;
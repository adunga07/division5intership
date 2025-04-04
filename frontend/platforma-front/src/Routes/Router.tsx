import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../components/Login";
import Register from "../components/Register";
import UserPage from "../components/UserPage";
import QuestionAnswers from "../components/QuestionAnswers";
import HomePage from "../components/HomePage";

const path = createBrowserRouter([
    { path: '/', element: <App /> },
    { path: '/Login', element: <Login /> },
    { path: '/register', element: <Register />},
    { path: '/userpage', element: <UserPage />},
    { path: '/questionanswer', element: <QuestionAnswers />},
    { path: 'homepage', element: <HomePage />}
])

export default path;
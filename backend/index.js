const express = require("express");
const { Client } = require("pg");
const answerRoutes = require("./routes/answer");
const questionRoutes = require("./routes/question");
const surveyRoutes = require("./routes/surveys");
const userRoutes = require("./routes/userRoutes");
const loginRoutes = require("./routes/login");

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000;

app.get("/",()=>{
  console.log("This is just a message");
})

app.use("/api/answer", answerRoutes); 
app.use("/api/question", questionRoutes);
app.use("/api/survey", surveyRoutes);
app.use("/api/user", userRoutes);
app.use("/api/login", loginRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port:${PORT}`);
});
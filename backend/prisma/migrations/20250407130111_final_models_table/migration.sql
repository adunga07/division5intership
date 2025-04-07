/*
  Warnings:

  - The primary key for the `Users` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `strikes` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `surname` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `username` on the `Users` table. All the data in the column will be lost.
  - The `role` column on the `Users` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `last_name` to the `Users` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Role" AS ENUM ('ADMIN', 'Asker', 'Responder');

-- CreateEnum
CREATE TYPE "Category" AS ENUM ('TECHNOLOGY', 'PROGRAMMING', 'WEB_DEVELOPMENT', 'MOBILE_DEVELOPMENT', 'DATA_SCIENCE', 'ARTIFICIAL_INTELLIGENCE', 'MACHINE_LEARNING', 'CYBERSECURITY', 'CLOUD_COMPUTING', 'DEVOPS', 'DATABASES', 'BLOCKCHAIN', 'HEALTH_AND_MEDICINE', 'MENTAL_HEALTH', 'PHYSICAL_FITNESS', 'NUTRITION', 'BUSINESS', 'ENTREPRENEURSHIP', 'MARKETING', 'FINANCE', 'INVESTING', 'CAREER_ADVICE', 'EDUCATION', 'LANGUAGES', 'MATHEMATICS', 'SCIENCE', 'PHYSICS', 'CHEMISTRY', 'BIOLOGY', 'ASTRONOMY', 'ENVIRONMENTAL_SCIENCE', 'HISTORY', 'POLITICS', 'LAW', 'PHILOSOPHY', 'PSYCHOLOGY', 'SOCIOLOGY', 'ARTS_AND_CULTURE', 'MUSIC', 'LITERATURE', 'FILM_AND_TELEVISION', 'GAMING', 'TRAVEL', 'COOKING', 'FASHION', 'RELATIONSHIPS', 'PARENTING', 'HOME_IMPROVEMENT', 'GARDENING', 'PETS', 'AUTOMOTIVE', 'SPORTS', 'DIY_AND_CRAFTS', 'PHOTOGRAPHY');

-- DropIndex
DROP INDEX "Users_username_key";

-- AlterTable
ALTER TABLE "Users" DROP CONSTRAINT "Users_pkey",
DROP COLUMN "strikes",
DROP COLUMN "surname",
DROP COLUMN "username",
ADD COLUMN     "last_name" TEXT NOT NULL,
ADD COLUMN     "user_ID" SERIAL NOT NULL,
DROP COLUMN "role",
ADD COLUMN     "role" "Role" NOT NULL DEFAULT 'Responder',
ADD CONSTRAINT "Users_pkey" PRIMARY KEY ("user_ID");

-- CreateTable
CREATE TABLE "Surveys" (
    "survey_ID" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "authorID" INTEGER NOT NULL,

    CONSTRAINT "Surveys_pkey" PRIMARY KEY ("survey_ID")
);

-- CreateTable
CREATE TABLE "Questions" (
    "question_ID" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "categoty" "Category" NOT NULL,
    "surveyID" INTEGER NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "Questions_pkey" PRIMARY KEY ("question_ID")
);

-- CreateTable
CREATE TABLE "Answers" (
    "id" SERIAL NOT NULL,
    "answer" TEXT NOT NULL,
    "CreatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "surveyID" INTEGER NOT NULL,
    "questionID" INTEGER NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "Answers_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VideoSurveys" (
    "survey_video_ID" SERIAL NOT NULL,
    "answer_link" TEXT NOT NULL,
    "surveyID" INTEGER NOT NULL,
    "userID" INTEGER NOT NULL,

    CONSTRAINT "VideoSurveys_pkey" PRIMARY KEY ("survey_video_ID")
);

-- AddForeignKey
ALTER TABLE "Surveys" ADD CONSTRAINT "Surveys_authorID_fkey" FOREIGN KEY ("authorID") REFERENCES "Users"("user_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_surveyID_fkey" FOREIGN KEY ("surveyID") REFERENCES "Surveys"("survey_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Questions" ADD CONSTRAINT "Questions_userID_fkey" FOREIGN KEY ("userID") REFERENCES "Users"("user_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_questionID_fkey" FOREIGN KEY ("questionID") REFERENCES "Questions"("question_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Answers" ADD CONSTRAINT "Answers_userID_fkey" FOREIGN KEY ("userID") REFERENCES "Users"("user_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VideoSurveys" ADD CONSTRAINT "VideoSurveys_userID_fkey" FOREIGN KEY ("userID") REFERENCES "Users"("user_ID") ON DELETE RESTRICT ON UPDATE CASCADE;

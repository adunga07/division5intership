
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.5.0
 * Query Engine version: 173f8d54f8d52e692c7e27e72a88314ec7aeff60
 */
Prisma.prismaVersion = {
  client: "6.5.0",
  engine: "173f8d54f8d52e692c7e27e72a88314ec7aeff60"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  user_ID: 'user_ID',
  name: 'name',
  last_name: 'last_name',
  email: 'email',
  password: 'password',
  role: 'role',
  createdAt: 'createdAt'
};

exports.Prisma.SurveyScalarFieldEnum = {
  survey_ID: 'survey_ID',
  title: 'title',
  description: 'description',
  createdAt: 'createdAt',
  authorID: 'authorID'
};

exports.Prisma.QuestionScalarFieldEnum = {
  question_ID: 'question_ID',
  title: 'title',
  categoty: 'categoty',
  surveyID: 'surveyID',
  userID: 'userID'
};

exports.Prisma.AnswerScalarFieldEnum = {
  id: 'id',
  answer: 'answer',
  CreatedAt: 'CreatedAt',
  questionID: 'questionID',
  userID: 'userID'
};

exports.Prisma.VideoSurveyScalarFieldEnum = {
  survey_video_ID: 'survey_video_ID',
  answer_link: 'answer_link',
  surveyID: 'surveyID',
  userID: 'userID'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};
exports.Role = exports.$Enums.Role = {
  ADMIN: 'ADMIN',
  Asker: 'Asker',
  Responder: 'Responder'
};

exports.Category = exports.$Enums.Category = {
  TECHNOLOGY: 'TECHNOLOGY',
  PROGRAMMING: 'PROGRAMMING',
  WEB_DEVELOPMENT: 'WEB_DEVELOPMENT',
  MOBILE_DEVELOPMENT: 'MOBILE_DEVELOPMENT',
  DATA_SCIENCE: 'DATA_SCIENCE',
  ARTIFICIAL_INTELLIGENCE: 'ARTIFICIAL_INTELLIGENCE',
  MACHINE_LEARNING: 'MACHINE_LEARNING',
  CYBERSECURITY: 'CYBERSECURITY',
  CLOUD_COMPUTING: 'CLOUD_COMPUTING',
  DEVOPS: 'DEVOPS',
  DATABASES: 'DATABASES',
  BLOCKCHAIN: 'BLOCKCHAIN',
  HEALTH_AND_MEDICINE: 'HEALTH_AND_MEDICINE',
  MENTAL_HEALTH: 'MENTAL_HEALTH',
  PHYSICAL_FITNESS: 'PHYSICAL_FITNESS',
  NUTRITION: 'NUTRITION',
  BUSINESS: 'BUSINESS',
  ENTREPRENEURSHIP: 'ENTREPRENEURSHIP',
  MARKETING: 'MARKETING',
  FINANCE: 'FINANCE',
  INVESTING: 'INVESTING',
  CAREER_ADVICE: 'CAREER_ADVICE',
  EDUCATION: 'EDUCATION',
  LANGUAGES: 'LANGUAGES',
  MATHEMATICS: 'MATHEMATICS',
  SCIENCE: 'SCIENCE',
  PHYSICS: 'PHYSICS',
  CHEMISTRY: 'CHEMISTRY',
  BIOLOGY: 'BIOLOGY',
  ASTRONOMY: 'ASTRONOMY',
  ENVIRONMENTAL_SCIENCE: 'ENVIRONMENTAL_SCIENCE',
  HISTORY: 'HISTORY',
  POLITICS: 'POLITICS',
  LAW: 'LAW',
  PHILOSOPHY: 'PHILOSOPHY',
  PSYCHOLOGY: 'PSYCHOLOGY',
  SOCIOLOGY: 'SOCIOLOGY',
  ARTS_AND_CULTURE: 'ARTS_AND_CULTURE',
  MUSIC: 'MUSIC',
  LITERATURE: 'LITERATURE',
  FILM_AND_TELEVISION: 'FILM_AND_TELEVISION',
  GAMING: 'GAMING',
  TRAVEL: 'TRAVEL',
  COOKING: 'COOKING',
  FASHION: 'FASHION',
  RELATIONSHIPS: 'RELATIONSHIPS',
  PARENTING: 'PARENTING',
  HOME_IMPROVEMENT: 'HOME_IMPROVEMENT',
  GARDENING: 'GARDENING',
  PETS: 'PETS',
  AUTOMOTIVE: 'AUTOMOTIVE',
  SPORTS: 'SPORTS',
  DIY_AND_CRAFTS: 'DIY_AND_CRAFTS',
  PHOTOGRAPHY: 'PHOTOGRAPHY'
};

exports.Prisma.ModelName = {
  User: 'User',
  Survey: 'Survey',
  Question: 'Question',
  Answer: 'Answer',
  VideoSurvey: 'VideoSurvey'
};

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }
        
        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)

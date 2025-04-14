
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  skip,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime,
  createParam,
} = require('./runtime/edge.js')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

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
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "C:\\Users\\Albert\\Desktop\\division5\\backend\\database\\prismaClient",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "sourceFilePath": "C:\\Users\\Albert\\Desktop\\division5\\backend\\prisma\\schema.prisma",
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../.env",
    "schemaEnvPath": "../../.env"
  },
  "relativePath": "../../prisma",
  "clientVersion": "6.5.0",
  "engineVersion": "173f8d54f8d52e692c7e27e72a88314ec7aeff60",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = \"prisma-client-js\"\n  output   = \"../database/prismaClient\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = env(\"DATABASE_URL\")\n}\n\nenum Role {\n  ADMIN\n  Asker //Can create surveys.\n  Responder //Answers all the surevy questions and can watch all the surveys.\n}\n\nmodel User {\n  user_ID   Int      @id @default(autoincrement())\n  name      String\n  last_name String\n  email     String   @unique\n  password  String\n  role      Role     @default(Responder)\n  createdAt DateTime @default(now())\n\n  //One to many realationship with Survey\n  surveys      Survey[]\n  //One to many realationship with Question\n  questions    Question[]\n  //One to many realationship with Answer\n  answers      Answer[]\n  //One to many realationship with VideoSurvey\n  videoSurveys VideoSurvey[]\n\n  @@map(\"Users\")\n}\n\nmodel Survey {\n  survey_ID   Int      @id @default(autoincrement())\n  title       String\n  description String\n  createdAt   DateTime @default(now())\n\n  //One to many realationship with Question\n  questions Question[]\n  //User ID for the author of the survey.\n  authorID  Int\n  author    User       @relation(fields: [authorID], references: [user_ID])\n  //One to many realtionship with VideoSurvey table\n\n  @@map(\"Surveys\")\n}\n\nmodel Question {\n  question_ID Int      @id @default(autoincrement())\n  title       String\n  categoty    Category\n  //Relationship with Survey\n  surveyID    Int\n  survey      Survey   @relation(fields: [surveyID], references: [survey_ID])\n  //Relationship with Answer one to many.\n  answers     Answer[]\n  //Relationship with User\n  userID      Int\n  user        User     @relation(fields: [userID], references: [user_ID])\n\n  @@map(\"Questions\")\n}\n\nmodel Answer {\n  id         Int      @id @default(autoincrement())\n  answer     String\n  CreatedAt  DateTime @default(now())\n  //Relationship with Question\n  questionID Int\n  question   Question @relation(fields: [questionID], references: [question_ID])\n  //Relationship with User\n  userID     Int\n  user       User     @relation(fields: [userID], references: [user_ID])\n\n  @@map(\"Answers\")\n}\n\nmodel VideoSurvey {\n  survey_video_ID Int    @id @default(autoincrement())\n  answer_link     String\n\n  //Relationship with Survey\n  surveyID Int\n\n  //RelationShip with User\n  userID Int\n  user   User @relation(fields: [userID], references: [user_ID])\n\n  //Mos harro per te bo migrations per ndryshimet e databazes.\n\n  @@map(\"VideoSurveys\")\n}\n\nenum Category {\n  TECHNOLOGY\n  PROGRAMMING\n  WEB_DEVELOPMENT\n  MOBILE_DEVELOPMENT\n  DATA_SCIENCE\n  ARTIFICIAL_INTELLIGENCE\n  MACHINE_LEARNING\n  CYBERSECURITY\n  CLOUD_COMPUTING\n  DEVOPS\n  DATABASES\n  BLOCKCHAIN\n  HEALTH_AND_MEDICINE\n  MENTAL_HEALTH\n  PHYSICAL_FITNESS\n  NUTRITION\n  BUSINESS\n  ENTREPRENEURSHIP\n  MARKETING\n  FINANCE\n  INVESTING\n  CAREER_ADVICE\n  EDUCATION\n  LANGUAGES\n  MATHEMATICS\n  SCIENCE\n  PHYSICS\n  CHEMISTRY\n  BIOLOGY\n  ASTRONOMY\n  ENVIRONMENTAL_SCIENCE\n  HISTORY\n  POLITICS\n  LAW\n  PHILOSOPHY\n  PSYCHOLOGY\n  SOCIOLOGY\n  ARTS_AND_CULTURE\n  MUSIC\n  LITERATURE\n  FILM_AND_TELEVISION\n  GAMING\n  TRAVEL\n  COOKING\n  FASHION\n  RELATIONSHIPS\n  PARENTING\n  HOME_IMPROVEMENT\n  GARDENING\n  PETS\n  AUTOMOTIVE\n  SPORTS\n  DIY_AND_CRAFTS\n  PHOTOGRAPHY\n}\n",
  "inlineSchemaHash": "de86baabbd1e19c72a6a8d2be0ace6f67ec190ec3d1e503c5bdef23dca167796",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":\"Users\",\"schema\":null,\"fields\":[{\"name\":\"user_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"last_name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Role\",\"nativeType\":null,\"default\":\"Responder\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surveys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Survey\",\"nativeType\":null,\"relationName\":\"SurveyToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Question\",\"nativeType\":null,\"relationName\":\"QuestionToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Answer\",\"nativeType\":null,\"relationName\":\"AnswerToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"videoSurveys\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"VideoSurvey\",\"nativeType\":null,\"relationName\":\"UserToVideoSurvey\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Survey\":{\"dbName\":\"Surveys\",\"schema\":null,\"fields\":[{\"name\":\"survey_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questions\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Question\",\"nativeType\":null,\"relationName\":\"QuestionToSurvey\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"authorID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"author\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"SurveyToUser\",\"relationFromFields\":[\"authorID\"],\"relationToFields\":[\"user_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Question\":{\"dbName\":\"Questions\",\"schema\":null,\"fields\":[{\"name\":\"question_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"title\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"categoty\",\"kind\":\"enum\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Category\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surveyID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"survey\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Survey\",\"nativeType\":null,\"relationName\":\"QuestionToSurvey\",\"relationFromFields\":[\"surveyID\"],\"relationToFields\":[\"survey_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Answer\",\"nativeType\":null,\"relationName\":\"AnswerToQuestion\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"QuestionToUser\",\"relationFromFields\":[\"userID\"],\"relationToFields\":[\"user_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Answer\":{\"dbName\":\"Answers\",\"schema\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answer\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"CreatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"nativeType\":null,\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"questionID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"question\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Question\",\"nativeType\":null,\"relationName\":\"AnswerToQuestion\",\"relationFromFields\":[\"questionID\"],\"relationToFields\":[\"question_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"AnswerToUser\",\"relationFromFields\":[\"userID\"],\"relationToFields\":[\"user_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"VideoSurvey\":{\"dbName\":\"VideoSurveys\",\"schema\":null,\"fields\":[{\"name\":\"survey_video_ID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"nativeType\":null,\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"answer_link\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"surveyID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userID\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"nativeType\":null,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"nativeType\":null,\"relationName\":\"UserToVideoSurvey\",\"relationFromFields\":[\"userID\"],\"relationToFields\":[\"user_ID\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}},\"enums\":{\"Role\":{\"values\":[{\"name\":\"ADMIN\",\"dbName\":null},{\"name\":\"Asker\",\"dbName\":null},{\"name\":\"Responder\",\"dbName\":null}],\"dbName\":null},\"Category\":{\"values\":[{\"name\":\"TECHNOLOGY\",\"dbName\":null},{\"name\":\"PROGRAMMING\",\"dbName\":null},{\"name\":\"WEB_DEVELOPMENT\",\"dbName\":null},{\"name\":\"MOBILE_DEVELOPMENT\",\"dbName\":null},{\"name\":\"DATA_SCIENCE\",\"dbName\":null},{\"name\":\"ARTIFICIAL_INTELLIGENCE\",\"dbName\":null},{\"name\":\"MACHINE_LEARNING\",\"dbName\":null},{\"name\":\"CYBERSECURITY\",\"dbName\":null},{\"name\":\"CLOUD_COMPUTING\",\"dbName\":null},{\"name\":\"DEVOPS\",\"dbName\":null},{\"name\":\"DATABASES\",\"dbName\":null},{\"name\":\"BLOCKCHAIN\",\"dbName\":null},{\"name\":\"HEALTH_AND_MEDICINE\",\"dbName\":null},{\"name\":\"MENTAL_HEALTH\",\"dbName\":null},{\"name\":\"PHYSICAL_FITNESS\",\"dbName\":null},{\"name\":\"NUTRITION\",\"dbName\":null},{\"name\":\"BUSINESS\",\"dbName\":null},{\"name\":\"ENTREPRENEURSHIP\",\"dbName\":null},{\"name\":\"MARKETING\",\"dbName\":null},{\"name\":\"FINANCE\",\"dbName\":null},{\"name\":\"INVESTING\",\"dbName\":null},{\"name\":\"CAREER_ADVICE\",\"dbName\":null},{\"name\":\"EDUCATION\",\"dbName\":null},{\"name\":\"LANGUAGES\",\"dbName\":null},{\"name\":\"MATHEMATICS\",\"dbName\":null},{\"name\":\"SCIENCE\",\"dbName\":null},{\"name\":\"PHYSICS\",\"dbName\":null},{\"name\":\"CHEMISTRY\",\"dbName\":null},{\"name\":\"BIOLOGY\",\"dbName\":null},{\"name\":\"ASTRONOMY\",\"dbName\":null},{\"name\":\"ENVIRONMENTAL_SCIENCE\",\"dbName\":null},{\"name\":\"HISTORY\",\"dbName\":null},{\"name\":\"POLITICS\",\"dbName\":null},{\"name\":\"LAW\",\"dbName\":null},{\"name\":\"PHILOSOPHY\",\"dbName\":null},{\"name\":\"PSYCHOLOGY\",\"dbName\":null},{\"name\":\"SOCIOLOGY\",\"dbName\":null},{\"name\":\"ARTS_AND_CULTURE\",\"dbName\":null},{\"name\":\"MUSIC\",\"dbName\":null},{\"name\":\"LITERATURE\",\"dbName\":null},{\"name\":\"FILM_AND_TELEVISION\",\"dbName\":null},{\"name\":\"GAMING\",\"dbName\":null},{\"name\":\"TRAVEL\",\"dbName\":null},{\"name\":\"COOKING\",\"dbName\":null},{\"name\":\"FASHION\",\"dbName\":null},{\"name\":\"RELATIONSHIPS\",\"dbName\":null},{\"name\":\"PARENTING\",\"dbName\":null},{\"name\":\"HOME_IMPROVEMENT\",\"dbName\":null},{\"name\":\"GARDENING\",\"dbName\":null},{\"name\":\"PETS\",\"dbName\":null},{\"name\":\"AUTOMOTIVE\",\"dbName\":null},{\"name\":\"SPORTS\",\"dbName\":null},{\"name\":\"DIY_AND_CRAFTS\",\"dbName\":null},{\"name\":\"PHOTOGRAPHY\",\"dbName\":null}],\"dbName\":null}},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined
config.compilerWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)


import dotenv from "dotenv";

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error("⚠️  Couldn't find .env file  ⚠️");
}
process.env.NODE_ENV = process.env.NODE_ENV || "development";

export default {
  port: process.env.PORT || "8000",
  environment: process.env.NODE_ENV,
  db_port: process.env.DB_PORT || "3306", // 3306
  database: process.env.DATABASE, // RDS 서비스의 DB를 이야기함. create database test;
  host: process.env.HOST, // RDS 서비스의 주소
  dbUsername: process.env.DB_USERNAME, // DATABASE ID
  dbPassword: process.env.PASSWORD, // DATABASE PW
};

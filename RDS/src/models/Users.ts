import { DataTypes, Model } from "sequelize";
import sequelize from "../loaders/database";

export default class Users extends Model {}

// 테이블.
Users.init(
  {
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "Users 테이블의 Primary key",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "사용자 이메일",
    },
    password: {
      type: DataTypes.STRING,
      comment: "사용자의 비밀번호",
    },
    platformType: {
      type: DataTypes.STRING,
      comment: "소셜 로그인 유형",
    },
    signUpAt: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "회원가입 날짜",
      defaultValue: sequelize.literal('now()')
    },
    loginAt: {
      type: DataTypes.DATE,
      allowNull: false,
      comment: "마지막 로그인 날짜",
      defaultValue: sequelize.literal('now()')
    },
  },
  {
    sequelize,
    modelName: "Users",
  }
);

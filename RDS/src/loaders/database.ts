import { Sequelize } from "sequelize";
import config from "../config";

export default new Sequelize(
  config.database as string,
  config.dbUsername as string,
  config.dbPassword as string,
  {
    host: config.host as string,
    port: parseInt(config.db_port as string),
    dialect: "mariadb",
    // logging: true,
  }
);

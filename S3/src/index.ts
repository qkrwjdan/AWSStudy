import express, { Request, Response, NextFunction } from "express";
import multer from "multer";
import fs from "fs";

import config from "./config";
import storage from "./config/s3Config";
import { multerConfig } from "./config/multer";

const app = express();

app.use(express.json());
const upload = multer(multerConfig);

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("Hello World!");
});

app.post(
  "/api/fileUpload",
  upload.single("image"),
  async (req: Request, res: Response, next: NextFunction) => {
    if (!req.file)
      return res.status(400).send({ message: "잘못된 요청입니다." });

    const fileData: Express.Multer.File = req.file;

    try {
      const fileContent: Buffer = fs.readFileSync(fileData.path);

      const params: {
        Bucket: string;
        Key: string;
        Body: Buffer;
      } = {
        Bucket: config.bucketName,
        Key: fileData.originalname,
        Body: fileContent,
      };

      const result = await storage.upload(params).promise();

      const data = {
        link: result.Location,
      };
      res.status(200).send({ message: "성공적인 요청입니다.", data: data });
    } catch (error) {
      console.log(error);
      res.status(500).send({ message: "서버 내부에 에러가 발생했습니다." });
    }
  }
);

app.listen(config.port, () => {
  console.log(`
        #############################################
            🛡️ Server listening on port: ${config.port} 🛡️
        #############################################
    `);
});

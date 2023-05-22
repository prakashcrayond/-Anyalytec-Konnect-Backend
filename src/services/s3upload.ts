import * as AWS from "aws-sdk";
import * as dotenv from "dotenv";
dotenv.config();

// import format
// let file = {
//     mimetype: "",
//     buffer: Buffer.from(data, "binary"),
// };

// Uploading Activity Image to s3 Bucket
// let uploadData = await s3Upload(file);
// end

// AWS.config.update({
//     endpoint: process.env.S3_URL,
//     accessKeyId: process.env.AWS_ID,
//     secretAccessKey: process.env.AWS_SECRET,
// });
const S3_BUCKET = process.env.AWS_BUCKET_NAME;

const s3 = new AWS.S3({
  endpoint: process.env.AWS_ENDPOINT,
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

export const s3Upload = (file: any) => {
  return new Promise<{
    status: number;
    message: string;
    url: string;
    key: string;
  }>(async (resolve, reject) => {
    try {
      const fileType = file.mimetype?.toString()?.split("/")?.[1] ?? "";
      const s3Params: any = {
        Bucket: S3_BUCKET,
        Key: Date.now().toString() + "." + fileType,
        Body: await file?.toBuffer(),
      };

      const response = await s3.upload(s3Params).promise();

      resolve({
        status: 200,
        message: "Success",
        url: response.Location,
        key: s3Params.Key,
      });
    } catch (error: any) {
      console.log("Error while uploading file to S3 : ", error);
      reject({ status: 400, message: error.message });
    }
  });
};

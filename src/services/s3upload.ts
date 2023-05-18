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
  endpoint: process.env.S3_URL,
  accessKeyId: process.env.AWS_ID,
  secretAccessKey: process.env.AWS_SECRET,
});

export const s3Upload = (file: any) => {
  return new Promise<{
    status: number;
    message: string;
    filepath: string;
    key: string;
  }>(async (resolve, reject) => {
    try {
      const fileType = file.mimetype?.toString()?.split("/")?.[1] ?? "";
      const s3Params: any = {
        Bucket: S3_BUCKET,
        Key: Date.now().toString() + "." + fileType,
        Body: file?.buffer,
      };

      s3.putObject(s3Params)
        .promise()
        .then(() => {
          let url = `https://${S3_BUCKET}.${process.env.S3_URL}/${s3Params.Key}`;
          resolve({
            status: 200,
            message: "Success",
            filepath: url,
            key: s3Params.Key,
          });
        })
        .catch(reject);
    } catch (error: any) {
      console.log("Error while uploading file to S3 : ", error);
      reject({ status: 400, message: error.message });
    }
  });
};

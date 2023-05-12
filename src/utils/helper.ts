export const parseJwt = (token: any) => {
  return JSON.parse(Buffer.from(token, "base64").toString());
};

// import fs from "fs";
// import { s3Upload } from "../services/s3upload";

// const convertUrlToFileObject = async (url: string, fileData: any): Promise<any> => {
//   const file = 'property-logo.jpg';
//   const convertedFileData = await dataURLtoFile(`data:image/jpg;base64,${url}`, file, fileData);
//   return convertedFileData;
// };

// const dataURLtoFile = async (dataurl: string, filename: string, fileData: any): Promise<string> => {
//   const arr = dataurl?.split(',');
//   const mime = arr[0].match(/:(.*?);/)[1];
//   const bstr = atob(arr[1]);
//   const n = bstr.length;
//   const u8arr = new Uint8Array(n);

//   while (n--) {
//     u8arr[n] = bstr.charCodeAt(n);
//   }

//   fs.writeFileSync(`prop_images/${filename}`, u8arr);

//   const files = [
//     {
//       path: `prop_images/${filename}`,
//       filename: filename,
//       mimetype: mime,
//     },
//   ];

//   const promArr = files.map((file) => s3Upload(file));
//   const resp = await Promise.all(promArr);
//   const successData = resp.filter((r) => r[0]);
//   fs.unlinkSync(`prop_images/${filename}`);
//   return successData?.[0]?.[1]?.Location;
// };

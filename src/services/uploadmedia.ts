import { ResponseType } from "../utils";
import { s3Upload } from "./s3upload";

interface uploaded_files_type {
  url: string;
}

export const UploadFiles = async (body: any) => {
  return new Promise<ResponseType>(async (resolve, reject) => {
    try {
      const { image } = body;

      let uploaded_files: uploaded_files_type[] = [];

      if (image?.file?.bytesRead === 0) {
        return reject({
          ...globalThis.status_codes?.bad_request,
          message: "File is empty!",
        });
      }

      // if (image?.mimetype != "png" || "jpg" || "svg"  )

      if (image && Array.isArray(image) && image?.length > 0) {
        for (const i of image) {
          let result: any = await s3Upload(i);

          uploaded_files.push(result);
        }

        return resolve({
          data: uploaded_files,
          ...globalThis.status_codes?.success,
          message: "upload files successfully!",
        });
      } else {
        let result = await s3Upload(image);

        return resolve({
          data: [result],
          ...globalThis.status_codes?.success,
          message: "upload files successfully!",
        });
      }
    } catch (err) {
      console.log("Error in Upload Files:", err);
      return reject({
        ...globalThis.status_codes?.error,
        message: "Internal Server Error!",
      });
    }
  });
};

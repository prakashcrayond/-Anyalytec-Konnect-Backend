import { FastifyPluginAsync } from "fastify";
import { UploadFilesSchema } from "./schema";
import { UploadFiles } from "../../../../services";

const file: FastifyPluginAsync = async (fastify): Promise<void> => {
  fastify.post(
    "/upload_files",
    UploadFilesSchema,
    async (request: any, reply) => {
      try {
        console.log("------------------>", request.body);

        const response = await UploadFiles(request.body);
        reply.code(response.status).send(response);
      } catch (error) {
        reply.code(globalThis.status_codes?.error?.status).send(error);
      }
    }
  );
};

export default file;

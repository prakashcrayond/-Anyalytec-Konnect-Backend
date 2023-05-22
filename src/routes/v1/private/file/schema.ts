const userBody: object = {
  type: "object",
  properties: {
    file: {},
  },
  required: ["file"],
};

export const UploadFilesSchema: any = {
  description: "A Upload Files Schema",
  tags: ["File Storage"],
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
    required: ["authorization"],
  },
  body: userBody,

  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        data: {
          type: "array",
          items: {
            type: "object",
            properties: {
              url: { type: "string" },
            },
          },
        },
        status: { type: "number" },
        api_status: { type: "string" },
        message: { type: "string" },
      },
    },
    400: {
      description: "Bad Request",
      type: "object",
      properties: {
        status: { type: "string" },
        api_status: { type: "string" },
        message: { type: "string" },
      },
    },
    401: {
      description: "Un Authorized response",
      type: "object",
      properties: {
        status: { type: "string" },
        api_status: { type: "string" },
        message: { type: "string" },
      },
    },
    500: {
      description: "Internal Server Error Response",
      type: "object",
      properties: {
        status: { type: "string" },
        api_status: { type: "string" },
        message: { type: "string" },
      },
    },
  },
};

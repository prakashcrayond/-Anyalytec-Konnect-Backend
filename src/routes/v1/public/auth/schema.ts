export const getLoginLogoSchema: any = {
  description: "Getting a Login Logo Schema",
  tags: ["Auth"],
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
    required: ["authorization"],
  },
  response: {
    200: {
      description: "Successful response",
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        image: {
          type: "integer",
        },
        name: {
          type: "string",
        },
      },
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
};

export const createAdminSchema: any = {
  description: "A Add Admin Details Schema",
  tags: ["Auth"],
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
    required: ["authorization"],
  },
  body: {
    type: "object",
    properties: {
      username: { type: "string", nullable: false },
      email: { type: "string", nullable: false },
      password: { type: "string", nullable: false },
      designation: { type: "string", nullable: false },
      telephoneNumber: { type: "string", nullable: false },
      dateOfBirth: { type: "string" },
      dateOfJoining: { type: "string" },
      active: { type: "boolean" },
    },
    required: [
      "username",
      "email",
      "password",
      "designation",
      "dateOfBirth",
      "dateOfJoining",
      "active",
    ],
  },
  response: {
    200: {
      description: "Successful response",
      type: "object",
      properties: {
        status: { type: "string" },
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

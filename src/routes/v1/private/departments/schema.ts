export const createDepartmentSchema: any = {
  description: "A Add Master Department Details Schema",
  tags: ["Master Department"],
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
      name: { type: "string", nullable: false },
      active: {
        type: "boolean",
        nullable: false,
      },
    },
    required: ["name", "active"],
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

export const updateDepartmentSchema: any = {
  description: "A Update Master Department Details Schema",
  tags: ["Master Department"],
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
      id: { type: "number", nullable: false },
      name: { type: "string", nullable: false },
      active: {
        type: "boolean",
        nullable: false,
      },
    },
    required: ["id"],
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

export const updateDepartmentStatusSchema: any = {
  description: "A Update Master Department Status Details Schema",
  tags: ["Master Department"],
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
      id: { type: "number", nullable: false },
      active: {
        type: "boolean",
        nullable: false,
      },
    },
    required: ["id", "active"],
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

export const getActiveDepartmentSchema: any = {
  description: "Getting a Master Department Schema",
  tags: ["Master Department"],
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
    required: ["authorization"],
  },
  params: {
    type: "object",
    properties: {
      active: { type: "string" },
    },
    required: ["active"],
  },
  response: {
    200: {
      description: "Successful response",
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          name: {
            type: "string",
          },
          active: {
            type: "boolean",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          createdBy: {
            type: ["string", "null"],
          },
          updatedBy: {
            type: ["string", "null"],
          },
          users: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "integer",
                },
                username: {
                  type: "string",
                },
                fullName: {
                  type: "string",
                },
              },
              required: ["id", "username", "fullName"],
            },
          },
        },
        required: ["id", "name", "active", "updatedAt", "createdAt", "users"],
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

export const DeleteDepartmentSchema: any = {
  description: "Schema for deleting a department (Soft Delete)",
  tags: ["Master Department"],
  headers: {
    type: "object",
    properties: {
      authorization: { type: "string" },
    },
    required: ["authorization"],
  },
  params: {
    type: "object",
    properties: {
      id: { type: "integer" },
    },
    required: ["id"],
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
      description: "Unauthorized response",
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

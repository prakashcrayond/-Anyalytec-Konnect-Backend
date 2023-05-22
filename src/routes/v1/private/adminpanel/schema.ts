export const getAdminPanelSchema: any = {
  description: "Getting a Admin Panel Schema",
  tags: ["AdminPanel"],
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
      type: "array",
      items: {
        type: "object",
        properties: {
          id: {
            type: "integer",
          },
          color: {
            type: "string",
          },
          financialYear: {
            type: "integer",
          },
          dateFormat: {
            type: "string",
          },
          timeFormat: {
            type: "string",
          },
          language: {
            type: "string",
          },
          loginLogoByte: {
            type: "object",
            properties: {
              image: {
                type: ["string", "null"],
              },
              name: {
                type: "string",
              },
            },
            required: ["image", "name"],
          },
          headerLogoByte: {
            type: "object",
            properties: {
              image: {
                type: ["string", "null"],
              },
              name: {
                type: "string",
              },
            },
            required: ["image", "name"],
          },
          createdOn: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
          createdBy: {
            type: "object",
            properties: {
              UserID: {
                type: "integer",
              },
              fullName: {
                type: "string",
              },
            },
            required: ["UserID", "fullName"],
          },
          updatedBy: {
            type: "object",
            properties: {
              UserID: {
                type: "integer",
              },
              fullName: {
                type: "string",
              },
            },
            required: ["UserID", "fullName"],
          },
        },
        required: [
          "id",
          "color",
          "financialYear",
          "dateFormat",
          "timeFormat",
          "language",
          "loginLogoByte",
          "headerLogoByte",
          "createdOn",
          "updatedAt",
          "createdBy",
          "updatedBy",
        ],
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

export const createAdminPanelSchema: any = {
  description: "A Add AdminPanel Details Schema",
  tags: ["AdminPanel"],
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
      color: { type: "string", nullable: false },
      financialYear: {
        type: "string",
        nullable: false,
      },
      dateFormat: { type: "string", nullable: false },
      timeFormat: { type: "string", nullable: false },
      language: { type: "string", nullable: false },
      loginLogoByte: { type: "string" },
      headerLogoByte: { type: "string" },
    },
    required: [
      "color",
      "financialYear",
      "dateFormat",
      "timeFormat",
      "language",
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

export const updateAdminPanelSchema: any = {
  description: "A Update AdminPanel Details Schema",
  tags: ["AdminPanel"],
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
      color: { type: "string", nullable: false },
      financialYear: {
        type: "string",
        nullable: false,
      },
      dateFormat: { type: "string", nullable: false },
      timeFormat: { type: "string", nullable: false },
      language: { type: "string", nullable: false },
      loginLogoByte: { type: "string" },
      headerLogoByte: { type: "string" },
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

export const getHeaderLogoSchema: any = {
  description: "Getting a Header Logo Schema",
  tags: ["AdminPanel"],
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

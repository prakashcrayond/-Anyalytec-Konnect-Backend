export const createHashTagSchema: any = {
  description: "A Add HashTag Details Schema",
  tags: ["HashTag"],
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
      hashtagName: { type: "string", nullable: false },
      colorCode: { type: "string", nullable: false },
      active: {
        type: "boolean",
        nullable: false,
      },
    },
    required: ["hashtagName", "colorCode", "active"],
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

export const updateHashTagSchema: any = {
  description: "A udpate HashTag Details Schema",
  tags: ["HashTag"],
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
      hashtagName: { type: "string", nullable: false },
      colorCode: { type: "string", nullable: false },
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

export const getHashtagbyIdSchema: any = {
  description: "Getting a HashTag Schema",
  tags: ["Hashtag"],
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
      id: { type: "number" },
    },
    required: ["id"],
  },
  response: {
    200: {
      description: "Successful response",
      $schema: "http://json-schema.org/draft-07/schema#",
      type: "object",
      properties: {
        id: {
          type: "integer",
        },
        hashtagName: {
          type: "string",
        },
        colorCode: {
          type: "string",
        },
        createdAt: {
          type: "string",
          format: "date-time",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
        },
        active: {
          type: "boolean",
        },
        createdBy: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            username: {
              type: "string",
            },
            firstname: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },
            active: {
              type: "boolean",
            },
          },
          required: ["id", "username", "firstname", "email", "active"],
        },
        updatedBy: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            username: {
              type: "string",
            },
            firstname: {
              type: "string",
            },
            email: {
              type: "string",
              format: "email",
            },
            active: {
              type: "boolean",
            },
          },
          required: ["id", "username", "firstname", "email", "active"],
        },
      },
      required: [
        "id",
        "hashtagName",
        "colorCode",
        "createdAt",
        "updatedAt",
        "active",
        "createdBy",
        "updatedBy",
      ],
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

export const getAllHashtagbySchema: any = {
  description: "Getting a HashTag Schema",
  tags: ["Hashtag"],
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
          hashtagName: {
            type: "string",
          },
          colorCode: {
            type: "string",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
          active: {
            type: "boolean",
          },
          createdBy: {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
              username: {
                type: "string",
              },
              firstname: {
                type: "string",
              },
              email: {
                type: "string",
                format: "email",
              },
              active: {
                type: "boolean",
              },
            },
            required: ["id", "username", "firstname", "email", "active"],
          },
          updatedBy: {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
              username: {
                type: "string",
              },
              firstname: {
                type: "string",
              },
              email: {
                type: "string",
                format: "email",
              },
              active: {
                type: "boolean",
              },
            },
            required: ["id", "username", "firstname", "email", "active"],
          },
        },
        required: [
          "id",
          "hashtagName",
          "colorCode",
          "createdAt",
          "updatedAt",
          "active",
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

export const getActiveHashtagbySchema: any = {
  description: "Getting a HashTag Schema",
  tags: ["Hashtag"],
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
          hashtagName: {
            type: "string",
          },
          colorCode: {
            type: "string",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
          active: {
            type: "boolean",
          },
          createdBy: {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
              username: {
                type: "string",
              },
              firstname: {
                type: "string",
              },
              email: {
                type: "string",
                format: "email",
              },
              active: {
                type: "boolean",
              },
            },
            required: ["id", "username", "firstname", "email", "active"],
          },
          updatedBy: {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
              username: {
                type: "string",
              },
              firstname: {
                type: "string",
              },
              email: {
                type: "string",
                format: "email",
              },
              active: {
                type: "boolean",
              },
            },
            required: ["id", "username", "firstname", "email", "active"],
          },
        },
        required: [
          "id",
          "hashtagName",
          "colorCode",
          "createdAt",
          "updatedAt",
          "active",
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

export const bulkUpdateHashTagSchema: any = {
  description: "A udpate HashTag Details Schema",
  tags: ["HashTag"],
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
      hashtag: { type: "array", items: { type: "string" }, nullable: false },
      active: {
        type: "boolean",
        nullable: false,
      },
    },
    required: ["hashtag", "active"],
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

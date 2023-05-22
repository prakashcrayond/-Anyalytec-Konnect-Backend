export const getUsersbyDepartmentIdSchema: any = {
  description: "Getting a Users by Department Id Schema",
  tags: ["Users"],
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
      dept: { type: "string" },
    },
    required: ["dept"],
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
          username: {
            type: "string",
          },
          firstname: {
            type: "string",
          },
          lastname: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
          },
          designation: {
            type: "string",
          },
          dateOfBirth: {
            type: "string",
            format: "date-time",
          },
          dateOfJoining: {
            type: "string",
            format: "date-time",
          },
          countryCode: {
            type: "string",
          },
          telephoneNumber: {
            type: "string",
          },
          active: {
            type: "boolean",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
          createdBy: {
            type: "integer",
          },
          updatedBy: {
            type: "integer",
          },
          department: {
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
            },
            required: ["id", "name", "active"],
          },
          role: {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
              roleName: {
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
              adminRole: {
                type: "boolean",
              },
              default: {
                type: "boolean",
              },
            },
            required: [
              "id",
              "roleName",
              "colorCode",
              "createdAt",
              "updatedAt",
              "adminRole",
              "default",
            ],
          },
          enabledReason: {
            type: "null",
          },
          manager: {
            type: "null",
          },
          picName: {
            type: "null",
          },
          imageByte: {
            type: "string",
          },
          sigName: {
            type: "null",
          },
          signatureByte: {
            type: "string",
          },
          createdUser: {
            type: "null",
          },
          updatedUser: {
            type: "null",
          },
          projectTour: {
            type: "string",
          },
          tour: {
            type: "string",
          },
          default: {
            type: "boolean",
          },
          fullName: {
            type: "string",
          },
        },
        required: [
          "id",
          "username",
          "firstname",
          "lastname",
          "email",
          "password",
          "designation",
          "dateOfBirth",
          "dateOfJoining",
          "countryCode",
          "telephoneNumber",
          "active",
          "createdAt",
          "updatedAt",
          "createdBy",
          "updatedBy",
          "department",
          "role",
          "enabledReason",
          "manager",
          "picName",
          "imageByte",
          "sigName",
          "signatureByte",
          "createdUser",
          "updatedUser",
          "projectTour",
          "tour",
          "default",
          "fullName",
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

export const getUsersbyIdSchema: any = {
  description: "Getting a Users by Id Schema",
  tags: ["Users"],
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
      id: { type: "string" },
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
        username: {
          type: "string",
        },
        firstname: {
          type: "string",
        },
        lastname: {
          type: "string",
        },
        email: {
          type: "string",
          format: "email",
        },
        password: {
          type: "string",
        },
        designation: {
          type: "string",
        },
        dateOfBirth: {
          type: "string",
          format: "date-time",
        },
        dateOfJoining: {
          type: "string",
          format: "date-time",
        },
        countryCode: {
          type: "string",
        },
        telephoneNumber: {
          type: "string",
        },
        active: {
          type: "boolean",
        },
        createdAt: {
          type: "string",
          format: "date-time",
        },
        updatedAt: {
          type: "string",
          format: "date-time",
        },
        createdBy: {
          type: "integer",
        },
        updatedBy: {
          type: "integer",
        },
        department: {
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
          },
          required: ["id", "name", "active"],
        },
        role: {
          type: "object",
          properties: {
            id: {
              type: "integer",
            },
            roleName: {
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
            adminRole: {
              type: "boolean",
            },
            default: {
              type: "boolean",
            },
          },
          required: [
            "id",
            "roleName",
            "colorCode",
            "createdAt",
            "updatedAt",
            "adminRole",
            "default",
          ],
        },
        enabledReason: {
          type: "null",
        },
        manager: {
          type: "null",
        },
        picName: {
          type: "null",
        },
        imageByte: {
          type: "string",
        },
        sigName: {
          type: "null",
        },
        signatureByte: {
          type: "string",
        },
        createdUser: {
          type: "null",
        },
        updatedUser: {
          type: "null",
        },
        projectTour: {
          type: "string",
        },
        tour: {
          type: "string",
        },
        default: {
          type: "boolean",
        },
        fullName: {
          type: "string",
        },
      },
      required: [
        "id",
        "username",
        "firstname",
        "lastname",
        "email",
        "password",
        "designation",
        "dateOfBirth",
        "dateOfJoining",
        "countryCode",
        "telephoneNumber",
        "active",
        "createdAt",
        "updatedAt",
        "createdBy",
        "updatedBy",
        "department",
        "role",
        "enabledReason",
        "manager",
        "picName",
        "imageByte",
        "sigName",
        "signatureByte",
        "createdUser",
        "updatedUser",
        "projectTour",
        "tour",
        "default",
        "fullName",
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

export const getUsersbyActiveDepartmentSchema: any = {
  description: "Getting a Users by Active Schema",
  tags: ["Users"],
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
          username: {
            type: "string",
          },
          firstname: {
            type: "string",
          },
          lastname: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
          },
          designation: {
            type: "string",
          },
          dateOfBirth: {
            type: "string",
            format: "date-time",
          },
          dateOfJoining: {
            type: "string",
            format: "date-time",
          },
          countryCode: {
            type: "string",
          },
          telephoneNumber: {
            type: "string",
          },
          active: {
            type: "boolean",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
          createdBy: {
            type: "integer",
          },
          updatedBy: {
            type: "integer",
          },
          department: {
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
            },
            required: ["id", "name", "active"],
          },
          role: {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
              roleName: {
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
              adminRole: {
                type: "boolean",
              },
              default: {
                type: "boolean",
              },
            },
            required: [
              "id",
              "roleName",
              "colorCode",
              "createdAt",
              "updatedAt",
              "adminRole",
              "default",
            ],
          },
          enabledReason: {
            type: "null",
          },
          manager: {
            type: "null",
          },
          picName: {
            type: "null",
          },
          imageByte: {
            type: "string",
          },
          sigName: {
            type: "null",
          },
          signatureByte: {
            type: "string",
          },
          createdUser: {
            type: "null",
          },
          updatedUser: {
            type: "null",
          },
          projectTour: {
            type: "string",
          },
          tour: {
            type: "string",
          },
          default: {
            type: "boolean",
          },
          fullName: {
            type: "string",
          },
        },
        required: [
          "id",
          "username",
          "firstname",
          "lastname",
          "email",
          "password",
          "designation",
          "dateOfBirth",
          "dateOfJoining",
          "countryCode",
          "telephoneNumber",
          "active",
          "createdAt",
          "updatedAt",
          "createdBy",
          "updatedBy",
          "department",
          "role",
          "enabledReason",
          "manager",
          "picName",
          "imageByte",
          "sigName",
          "signatureByte",
          "createdUser",
          "updatedUser",
          "projectTour",
          "tour",
          "default",
          "fullName",
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

export const getUsersbyActiveInactiveSchema: any = {
  description: "Getting a Users by Active Schema",
  tags: ["Users"],
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
          username: {
            type: "string",
          },
          firstname: {
            type: "string",
          },
          lastname: {
            type: "string",
          },
          email: {
            type: "string",
            format: "email",
          },
          password: {
            type: "string",
          },
          designation: {
            type: "string",
          },
          dateOfBirth: {
            type: "string",
            format: "date-time",
          },
          dateOfJoining: {
            type: "string",
            format: "date-time",
          },
          countryCode: {
            type: "string",
          },
          telephoneNumber: {
            type: "string",
          },
          active: {
            type: "boolean",
          },
          createdAt: {
            type: "string",
            format: "date-time",
          },
          updatedAt: {
            type: "string",
            format: "date-time",
          },
          createdBy: {
            type: "integer",
          },
          updatedBy: {
            type: "integer",
          },
          department: {
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
            },
            required: ["id", "name", "active"],
          },
          role: {
            type: "object",
            properties: {
              id: {
                type: "integer",
              },
              roleName: {
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
              adminRole: {
                type: "boolean",
              },
              default: {
                type: "boolean",
              },
            },
            required: [
              "id",
              "roleName",
              "colorCode",
              "createdAt",
              "updatedAt",
              "adminRole",
              "default",
            ],
          },
          enabledReason: {
            type: "null",
          },
          manager: {
            type: "null",
          },
          picName: {
            type: "null",
          },
          imageByte: {
            type: "string",
          },
          sigName: {
            type: "null",
          },
          signatureByte: {
            type: "string",
          },
          createdUser: {
            type: "null",
          },
          updatedUser: {
            type: "null",
          },
          projectTour: {
            type: "string",
          },
          tour: {
            type: "string",
          },
          default: {
            type: "boolean",
          },
          fullName: {
            type: "string",
          },
        },
        required: [
          "id",
          "username",
          "firstname",
          "lastname",
          "email",
          "password",
          "designation",
          "dateOfBirth",
          "dateOfJoining",
          "countryCode",
          "telephoneNumber",
          "active",
          "createdAt",
          "updatedAt",
          "createdBy",
          "updatedBy",
          "department",
          "role",
          "enabledReason",
          "manager",
          "picName",
          "imageByte",
          "sigName",
          "signatureByte",
          "createdUser",
          "updatedUser",
          "projectTour",
          "tour",
          "default",
          "fullName",
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

export const createUsersSchema: any = {
  description: "A Add Users Details Schema",
  tags: ["Users"],
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
      countryCode: { type: "string", nullable: false },
      profilePic: { type: "string", nullable: false },
      username: { type: "string", nullable: false },
      firstname: { type: "string", nullable: false },
      lastname: { type: "string", nullable: false },
      designation: { type: "string", nullable: false },
      department: { type: "object", properties: { id: { type: "number" } } },
      manager: { type: "object", properties: { id: { type: "number" } } },
      email: { type: "string", nullable: false },
      telephoneNumber: { type: "string", nullable: false },
      dateOfJoining: { type: "string", nullable: false },
      dateOfBirth: { type: "string", nullable: false },
      role: { type: "object", properties: { id: { type: "number" } } },
      password: { type: "string", nullable: false },
      active: { type: "boolean", nullable: false },
    },
    required: [
      "countryCode",
      "profilePic",
      "username",
      "firstname",
      "lastname",
      "designation",
      "department",
      "manager",
      "email",
      "telephoneNumber",
      "dateOfJoining",
      "dateOfBirth",
      "role",
      "password",
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

export const updateUsersSchema: any = {
  description: "A Add Users Details Schema",
  tags: ["Users"],
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
      countryCode: { type: "string", nullable: false },
      profilePic: { type: "string", nullable: false },
      signPic: { type: "string", nullable: false },
      username: { type: "string", nullable: false },
      firstname: { type: "string", nullable: false },
      lastname: { type: "string", nullable: false },
      designation: { type: "string", nullable: false },
      department: { type: "object", properties: { id: { type: "number" } } },
      manager: { type: "object", properties: { id: { type: "number" } } },
      email: { type: "string", nullable: false },
      telephoneNumber: { type: "string", nullable: false },
      dateOfJoining: { type: "string", nullable: false },
      dateOfBirth: { type: "string", nullable: false },
      role: { type: "object", properties: { id: { type: "number" } } },
      password: { type: "string", nullable: false },
      active: { type: "boolean", nullable: false },
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

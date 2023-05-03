import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { survey_question, survey_questionId } from './survey_question';
import type { survey_response, survey_responseId } from './survey_response';
import type { user, userId } from './user';

export interface survey_response_itemAttributes {
  id: number;
  created_at?: Date;
  multiple: boolean;
  name?: string;
  parameters?: string;
  question?: string;
  type?: string;
  updated_at?: Date;
  value?: string;
  created_by?: number;
  question_id?: number;
  survey_response?: number;
  updated_by?: number;
}

export type survey_response_itemPk = "id";
export type survey_response_itemId = survey_response_item[survey_response_itemPk];
export type survey_response_itemOptionalAttributes = "id" | "created_at" | "name" | "parameters" | "question" | "type" | "updated_at" | "value" | "created_by" | "question_id" | "survey_response" | "updated_by";
export type survey_response_itemCreationAttributes = Optional<survey_response_itemAttributes, survey_response_itemOptionalAttributes>;

export class survey_response_item extends Model<survey_response_itemAttributes, survey_response_itemCreationAttributes> implements survey_response_itemAttributes {
  id!: number;
  created_at?: Date;
  multiple!: boolean;
  name?: string;
  parameters?: string;
  question?: string;
  type?: string;
  updated_at?: Date;
  value?: string;
  created_by?: number;
  question_id?: number;
  survey_response?: number;
  updated_by?: number;

  // survey_response_item belongsTo survey_question via question_id
  question!: survey_question;
  getQuestion!: Sequelize.BelongsToGetAssociationMixin<survey_question>;
  setQuestion!: Sequelize.BelongsToSetAssociationMixin<survey_question, survey_questionId>;
  createQuestion!: Sequelize.BelongsToCreateAssociationMixin<survey_question>;
  // survey_response_item belongsTo survey_response via survey_response
  survey_response_survey_response!: survey_response;
  getSurvey_response_survey_response!: Sequelize.BelongsToGetAssociationMixin<survey_response>;
  setSurvey_response_survey_response!: Sequelize.BelongsToSetAssociationMixin<survey_response, survey_responseId>;
  createSurvey_response_survey_response!: Sequelize.BelongsToCreateAssociationMixin<survey_response>;
  // survey_response_item belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // survey_response_item belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof survey_response_item {
    return survey_response_item.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    multiple: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    parameters: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    question_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'survey_question',
        key: 'id'
      }
    },
    survey_response: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'survey_response',
        key: 'id'
      }
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'survey_response_item',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKc4q3d48mao4e3fclhon8g1x39",
        fields: [
          { name: "question_id" },
        ]
      },
      {
        name: "FKda9yxwqxre7g9u08fo4y910ud",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKi8lftwy016hw3risyaxkt7g1p",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKr7rf7wi5eble1jrr63jqntk0p",
        fields: [
          { name: "survey_response" },
        ]
      },
      {
        name: "survey_response_item_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

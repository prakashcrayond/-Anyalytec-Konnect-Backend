import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { survey, surveyId } from './survey';
import type { survey_response_item, survey_response_itemId } from './survey_response_item';
import type { user, userId } from './user';

export interface survey_questionAttributes {
  id: number;
  created_at?: Date;
  extras?: string;
  label?: string;
  name?: string;
  parameters?: string;
  question?: string;
  type?: string;
  updated_at?: Date;
  created_by?: number;
  survey_id?: number;
  updated_by?: number;
}

export type survey_questionPk = "id";
export type survey_questionId = survey_question[survey_questionPk];
export type survey_questionOptionalAttributes = "id" | "created_at" | "extras" | "label" | "name" | "parameters" | "question" | "type" | "updated_at" | "created_by" | "survey_id" | "updated_by";
export type survey_questionCreationAttributes = Optional<survey_questionAttributes, survey_questionOptionalAttributes>;

export class survey_question extends Model<survey_questionAttributes, survey_questionCreationAttributes> implements survey_questionAttributes {
  id!: number;
  created_at?: Date;
  extras?: string;
  label?: string;
  name?: string;
  parameters?: string;
  question?: string;
  type?: string;
  updated_at?: Date;
  created_by?: number;
  survey_id?: number;
  updated_by?: number;

  // survey_question belongsTo survey via survey_id
  survey!: survey;
  getSurvey!: Sequelize.BelongsToGetAssociationMixin<survey>;
  setSurvey!: Sequelize.BelongsToSetAssociationMixin<survey, surveyId>;
  createSurvey!: Sequelize.BelongsToCreateAssociationMixin<survey>;
  // survey_question hasMany survey_response_item via question_id
  survey_response_items!: survey_response_item[];
  getSurvey_response_items!: Sequelize.HasManyGetAssociationsMixin<survey_response_item>;
  setSurvey_response_items!: Sequelize.HasManySetAssociationsMixin<survey_response_item, survey_response_itemId>;
  addSurvey_response_item!: Sequelize.HasManyAddAssociationMixin<survey_response_item, survey_response_itemId>;
  addSurvey_response_items!: Sequelize.HasManyAddAssociationsMixin<survey_response_item, survey_response_itemId>;
  createSurvey_response_item!: Sequelize.HasManyCreateAssociationMixin<survey_response_item>;
  removeSurvey_response_item!: Sequelize.HasManyRemoveAssociationMixin<survey_response_item, survey_response_itemId>;
  removeSurvey_response_items!: Sequelize.HasManyRemoveAssociationsMixin<survey_response_item, survey_response_itemId>;
  hasSurvey_response_item!: Sequelize.HasManyHasAssociationMixin<survey_response_item, survey_response_itemId>;
  hasSurvey_response_items!: Sequelize.HasManyHasAssociationsMixin<survey_response_item, survey_response_itemId>;
  countSurvey_response_items!: Sequelize.HasManyCountAssociationsMixin;
  // survey_question belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // survey_question belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof survey_question {
    return survey_question.init({
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
    extras: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    label: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
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
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    survey_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'survey',
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
    tableName: 'survey_question',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK4on0qx9r7ovwpnkvxqa15rtob",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FK573vicrl6b0e4d2jdg3wpvuhy",
        fields: [
          { name: "survey_id" },
        ]
      },
      {
        name: "FKndaf9lgogmgl1oc2qxkl9d2rw",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "survey_question_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

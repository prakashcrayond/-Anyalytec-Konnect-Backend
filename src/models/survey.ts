import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { survey_important, survey_importantId } from './survey_important';
import type { survey_mapping, survey_mappingId } from './survey_mapping';
import type { survey_question, survey_questionId } from './survey_question';
import type { survey_response, survey_responseId } from './survey_response';
import type { user, userId } from './user';

export interface surveyAttributes {
  id: number;
  accept_response: boolean;
  created_at?: Date;
  name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type surveyPk = "id";
export type surveyId = survey[surveyPk];
export type surveyOptionalAttributes = "id" | "created_at" | "name" | "updated_at" | "created_by" | "updated_by";
export type surveyCreationAttributes = Optional<surveyAttributes, surveyOptionalAttributes>;

export class survey extends Model<surveyAttributes, surveyCreationAttributes> implements surveyAttributes {
  id!: number;
  accept_response!: boolean;
  created_at?: Date;
  name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // survey hasMany survey_important via survey_id
  survey_importants!: survey_important[];
  getSurvey_importants!: Sequelize.HasManyGetAssociationsMixin<survey_important>;
  setSurvey_importants!: Sequelize.HasManySetAssociationsMixin<survey_important, survey_importantId>;
  addSurvey_important!: Sequelize.HasManyAddAssociationMixin<survey_important, survey_importantId>;
  addSurvey_importants!: Sequelize.HasManyAddAssociationsMixin<survey_important, survey_importantId>;
  createSurvey_important!: Sequelize.HasManyCreateAssociationMixin<survey_important>;
  removeSurvey_important!: Sequelize.HasManyRemoveAssociationMixin<survey_important, survey_importantId>;
  removeSurvey_importants!: Sequelize.HasManyRemoveAssociationsMixin<survey_important, survey_importantId>;
  hasSurvey_important!: Sequelize.HasManyHasAssociationMixin<survey_important, survey_importantId>;
  hasSurvey_importants!: Sequelize.HasManyHasAssociationsMixin<survey_important, survey_importantId>;
  countSurvey_importants!: Sequelize.HasManyCountAssociationsMixin;
  // survey hasMany survey_mapping via survey_id
  survey_mappings!: survey_mapping[];
  getSurvey_mappings!: Sequelize.HasManyGetAssociationsMixin<survey_mapping>;
  setSurvey_mappings!: Sequelize.HasManySetAssociationsMixin<survey_mapping, survey_mappingId>;
  addSurvey_mapping!: Sequelize.HasManyAddAssociationMixin<survey_mapping, survey_mappingId>;
  addSurvey_mappings!: Sequelize.HasManyAddAssociationsMixin<survey_mapping, survey_mappingId>;
  createSurvey_mapping!: Sequelize.HasManyCreateAssociationMixin<survey_mapping>;
  removeSurvey_mapping!: Sequelize.HasManyRemoveAssociationMixin<survey_mapping, survey_mappingId>;
  removeSurvey_mappings!: Sequelize.HasManyRemoveAssociationsMixin<survey_mapping, survey_mappingId>;
  hasSurvey_mapping!: Sequelize.HasManyHasAssociationMixin<survey_mapping, survey_mappingId>;
  hasSurvey_mappings!: Sequelize.HasManyHasAssociationsMixin<survey_mapping, survey_mappingId>;
  countSurvey_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // survey hasMany survey_question via survey_id
  survey_questions!: survey_question[];
  getSurvey_questions!: Sequelize.HasManyGetAssociationsMixin<survey_question>;
  setSurvey_questions!: Sequelize.HasManySetAssociationsMixin<survey_question, survey_questionId>;
  addSurvey_question!: Sequelize.HasManyAddAssociationMixin<survey_question, survey_questionId>;
  addSurvey_questions!: Sequelize.HasManyAddAssociationsMixin<survey_question, survey_questionId>;
  createSurvey_question!: Sequelize.HasManyCreateAssociationMixin<survey_question>;
  removeSurvey_question!: Sequelize.HasManyRemoveAssociationMixin<survey_question, survey_questionId>;
  removeSurvey_questions!: Sequelize.HasManyRemoveAssociationsMixin<survey_question, survey_questionId>;
  hasSurvey_question!: Sequelize.HasManyHasAssociationMixin<survey_question, survey_questionId>;
  hasSurvey_questions!: Sequelize.HasManyHasAssociationsMixin<survey_question, survey_questionId>;
  countSurvey_questions!: Sequelize.HasManyCountAssociationsMixin;
  // survey hasMany survey_response via survey_id
  survey_responses!: survey_response[];
  getSurvey_responses!: Sequelize.HasManyGetAssociationsMixin<survey_response>;
  setSurvey_responses!: Sequelize.HasManySetAssociationsMixin<survey_response, survey_responseId>;
  addSurvey_response!: Sequelize.HasManyAddAssociationMixin<survey_response, survey_responseId>;
  addSurvey_responses!: Sequelize.HasManyAddAssociationsMixin<survey_response, survey_responseId>;
  createSurvey_response!: Sequelize.HasManyCreateAssociationMixin<survey_response>;
  removeSurvey_response!: Sequelize.HasManyRemoveAssociationMixin<survey_response, survey_responseId>;
  removeSurvey_responses!: Sequelize.HasManyRemoveAssociationsMixin<survey_response, survey_responseId>;
  hasSurvey_response!: Sequelize.HasManyHasAssociationMixin<survey_response, survey_responseId>;
  hasSurvey_responses!: Sequelize.HasManyHasAssociationsMixin<survey_response, survey_responseId>;
  countSurvey_responses!: Sequelize.HasManyCountAssociationsMixin;
  // survey belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // survey belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof survey {
    return survey.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    accept_response: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
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
    tableName: 'survey',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKd5rux4n7k4jgjlt3nn0olcu6k",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKmr1kae2l3yvfr5fnaa9fu63ij",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "survey_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { survey, surveyId } from './survey';

export interface survey_mappingAttributes {
  id: number;
  mappingid?: number;
  type?: string;
  survey_id?: number;
}

export type survey_mappingPk = "id";
export type survey_mappingId = survey_mapping[survey_mappingPk];
export type survey_mappingOptionalAttributes = "id" | "mappingid" | "type" | "survey_id";
export type survey_mappingCreationAttributes = Optional<survey_mappingAttributes, survey_mappingOptionalAttributes>;

export class survey_mapping extends Model<survey_mappingAttributes, survey_mappingCreationAttributes> implements survey_mappingAttributes {
  id!: number;
  mappingid?: number;
  type?: string;
  survey_id?: number;

  // survey_mapping belongsTo survey via survey_id
  survey!: survey;
  getSurvey!: Sequelize.BelongsToGetAssociationMixin<survey>;
  setSurvey!: Sequelize.BelongsToSetAssociationMixin<survey, surveyId>;
  createSurvey!: Sequelize.BelongsToCreateAssociationMixin<survey>;

  static initModel(sequelize: Sequelize.Sequelize): typeof survey_mapping {
    return survey_mapping.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mappingid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "NULL"
    },
    survey_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'survey',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'survey_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKlyft4fw7s79gtaj2kalrbtewn",
        fields: [
          { name: "survey_id" },
        ]
      },
      {
        name: "survey_mapping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

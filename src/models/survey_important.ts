import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { survey, surveyId } from './survey';
import type { user, userId } from './user';

export interface survey_importantAttributes {
  id: number;
  created_at?: Date;
  survey_id?: number;
  user_id?: number;
}

export type survey_importantPk = "id";
export type survey_importantId = survey_important[survey_importantPk];
export type survey_importantOptionalAttributes = "id" | "created_at" | "survey_id" | "user_id";
export type survey_importantCreationAttributes = Optional<survey_importantAttributes, survey_importantOptionalAttributes>;

export class survey_important extends Model<survey_importantAttributes, survey_importantCreationAttributes> implements survey_importantAttributes {
  id!: number;
  created_at?: Date;
  survey_id?: number;
  user_id?: number;

  // survey_important belongsTo survey via survey_id
  survey!: survey;
  getSurvey!: Sequelize.BelongsToGetAssociationMixin<survey>;
  setSurvey!: Sequelize.BelongsToSetAssociationMixin<survey, surveyId>;
  createSurvey!: Sequelize.BelongsToCreateAssociationMixin<survey>;
  // survey_important belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof survey_important {
    return survey_important.init({
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
    survey_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'survey',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'survey_important',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK1vqgvvw48xkpopv5ll75oq6hi",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK9ju1hxm3gxkcdfcxrue2g8867",
        fields: [
          { name: "survey_id" },
        ]
      },
      {
        name: "survey_important_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

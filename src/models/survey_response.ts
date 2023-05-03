import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { survey, surveyId } from './survey';
import type { survey_response_item, survey_response_itemId } from './survey_response_item';
import type { user, userId } from './user';

export interface survey_responseAttributes {
  id: number;
  created_at?: Date;
  name?: string;
  state?: string;
  updated_at?: Date;
  created_by?: number;
  survey_id?: number;
  updated_by?: number;
  user_id?: number;
}

export type survey_responsePk = "id";
export type survey_responseId = survey_response[survey_responsePk];
export type survey_responseOptionalAttributes = "id" | "created_at" | "name" | "state" | "updated_at" | "created_by" | "survey_id" | "updated_by" | "user_id";
export type survey_responseCreationAttributes = Optional<survey_responseAttributes, survey_responseOptionalAttributes>;

export class survey_response extends Model<survey_responseAttributes, survey_responseCreationAttributes> implements survey_responseAttributes {
  id!: number;
  created_at?: Date;
  name?: string;
  state?: string;
  updated_at?: Date;
  created_by?: number;
  survey_id?: number;
  updated_by?: number;
  user_id?: number;

  // survey_response belongsTo survey via survey_id
  survey!: survey;
  getSurvey!: Sequelize.BelongsToGetAssociationMixin<survey>;
  setSurvey!: Sequelize.BelongsToSetAssociationMixin<survey, surveyId>;
  createSurvey!: Sequelize.BelongsToCreateAssociationMixin<survey>;
  // survey_response hasMany survey_response_item via survey_response
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
  // survey_response belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // survey_response belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // survey_response belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof survey_response {
    return survey_response.init({
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
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    state: {
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
    tableName: 'survey_response',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK3fdv8xj6rp9yjr17snmhrsph5",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FK84qtox6878n0fh337ent4mwgo",
        fields: [
          { name: "survey_id" },
        ]
      },
      {
        name: "FKf1irm9doka77hxalur6ox86wt",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FKhxqwhoq7rb4jqbi0oxkf1o6b0",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "survey_response_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

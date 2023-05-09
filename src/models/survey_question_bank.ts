import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface survey_question_bankAttributes {
  id: number;
  created_at?: Date;
  parameters?: string;
  question?: string;
  question_hash?: number;
  type?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type survey_question_bankPk = "id";
export type survey_question_bankId = survey_question_bank[survey_question_bankPk];
export type survey_question_bankOptionalAttributes = "id" | "created_at" | "parameters" | "question" | "question_hash" | "type" | "updated_at" | "created_by" | "updated_by";
export type survey_question_bankCreationAttributes = Optional<survey_question_bankAttributes, survey_question_bankOptionalAttributes>;

export class survey_question_bank extends Model<survey_question_bankAttributes, survey_question_bankCreationAttributes> implements survey_question_bankAttributes {
  id!: number;
  created_at?: Date;
  parameters?: string;
  question?: string;
  question_hash?: number;
  type?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // survey_question_bank belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // survey_question_bank belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof survey_question_bank {
    return sequelize.define('survey_question_bank', {
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
    parameters: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    question: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    question_hash: {
      type: DataTypes.INTEGER,
      allowNull: true
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
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'survey_question_bank',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKa2t7aa62tm9dh95uao9n10cq3",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKmhg3qhy8bwxh1ijrsfnn4kcvs",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "UK_1i7jjdd1ya3kh65umgw0dhdiu",
        unique: true,
        fields: [
          { name: "question_hash" },
        ]
      },
      {
        name: "survey_question_bank_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof survey_question_bank;
  }
}

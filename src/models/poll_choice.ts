import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { poll_response, poll_responseId } from './poll_response';
import type { user, userId } from './user';

export interface poll_choiceAttributes {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  value?: string;
  created_by?: number;
  poll_response_id?: number;
  updated_by?: number;
}

export type poll_choicePk = "id";
export type poll_choiceId = poll_choice[poll_choicePk];
export type poll_choiceOptionalAttributes = "id" | "created_at" | "updated_at" | "value" | "created_by" | "poll_response_id" | "updated_by";
export type poll_choiceCreationAttributes = Optional<poll_choiceAttributes, poll_choiceOptionalAttributes>;

export class poll_choice extends Model<poll_choiceAttributes, poll_choiceCreationAttributes> implements poll_choiceAttributes {
  id!: number;
  created_at?: Date;
  updated_at?: Date;
  value?: string;
  created_by?: number;
  poll_response_id?: number;
  updated_by?: number;

  // poll_choice belongsTo poll_response via poll_response_id
  poll_response!: poll_response;
  getPoll_response!: Sequelize.BelongsToGetAssociationMixin<poll_response>;
  setPoll_response!: Sequelize.BelongsToSetAssociationMixin<poll_response, poll_responseId>;
  createPoll_response!: Sequelize.BelongsToCreateAssociationMixin<poll_response>;
  // poll_choice belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // poll_choice belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof poll_choice {
    return sequelize.define('poll_choice', {
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
    poll_response_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'poll_response',
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
    tableName: 'poll_choice',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK5snw0athooq1abl82ynlo0opk",
        fields: [
          { name: "poll_response_id" },
        ]
      },
      {
        name: "FKe4bah0tcpo1drb2htj5xbd4ot",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKn6jdbx874pprf4937vlffry5p",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "poll_choice_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof poll_choice;
  }
}

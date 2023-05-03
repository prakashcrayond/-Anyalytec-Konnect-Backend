import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { poll_choice, poll_choiceId } from './poll_choice';
import type { poll, pollId } from './poll';
import type { user, userId } from './user';

export interface poll_responseAttributes {
  id: number;
  created_at?: Date;
  state?: string;
  updated_at?: Date;
  created_by?: number;
  poll_id?: number;
  updated_by?: number;
  user_id?: number;
}

export type poll_responsePk = "id";
export type poll_responseId = poll_response[poll_responsePk];
export type poll_responseOptionalAttributes = "id" | "created_at" | "state" | "updated_at" | "created_by" | "poll_id" | "updated_by" | "user_id";
export type poll_responseCreationAttributes = Optional<poll_responseAttributes, poll_responseOptionalAttributes>;

export class poll_response extends Model<poll_responseAttributes, poll_responseCreationAttributes> implements poll_responseAttributes {
  id!: number;
  created_at?: Date;
  state?: string;
  updated_at?: Date;
  created_by?: number;
  poll_id?: number;
  updated_by?: number;
  user_id?: number;

  // poll_response hasMany poll_choice via poll_response_id
  poll_choices!: poll_choice[];
  getPoll_choices!: Sequelize.HasManyGetAssociationsMixin<poll_choice>;
  setPoll_choices!: Sequelize.HasManySetAssociationsMixin<poll_choice, poll_choiceId>;
  addPoll_choice!: Sequelize.HasManyAddAssociationMixin<poll_choice, poll_choiceId>;
  addPoll_choices!: Sequelize.HasManyAddAssociationsMixin<poll_choice, poll_choiceId>;
  createPoll_choice!: Sequelize.HasManyCreateAssociationMixin<poll_choice>;
  removePoll_choice!: Sequelize.HasManyRemoveAssociationMixin<poll_choice, poll_choiceId>;
  removePoll_choices!: Sequelize.HasManyRemoveAssociationsMixin<poll_choice, poll_choiceId>;
  hasPoll_choice!: Sequelize.HasManyHasAssociationMixin<poll_choice, poll_choiceId>;
  hasPoll_choices!: Sequelize.HasManyHasAssociationsMixin<poll_choice, poll_choiceId>;
  countPoll_choices!: Sequelize.HasManyCountAssociationsMixin;
  // poll_response belongsTo poll via poll_id
  poll!: poll;
  getPoll!: Sequelize.BelongsToGetAssociationMixin<poll>;
  setPoll!: Sequelize.BelongsToSetAssociationMixin<poll, pollId>;
  createPoll!: Sequelize.BelongsToCreateAssociationMixin<poll>;
  // poll_response belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // poll_response belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // poll_response belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof poll_response {
    return poll_response.init({
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
    poll_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'polls',
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
    tableName: 'poll_response',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK71v708ysi932j1vqlkye7oet5",
        fields: [
          { name: "poll_id" },
        ]
      },
      {
        name: "FK7rl86cenysajjngjxkqb2jbic",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FKdgitr07rile9ma1gi6pug2kqh",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKf204k70uknyjk8ag0t1jr95b1",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "poll_response_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

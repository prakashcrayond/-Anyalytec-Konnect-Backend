import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { poll_mapping, poll_mappingId } from './poll_mapping';
import type { poll_response, poll_responseId } from './poll_response';
import type { user, userId } from './user';

export interface pollAttributes {
  id: number;
  active?: boolean;
  created_at?: Date;
  end_date?: Date;
  name?: string;
  options?: string;
  type?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type pollPk = "id";
export type pollId = poll[pollPk];
export type pollOptionalAttributes = "id" | "active" | "created_at" | "end_date" | "name" | "options" | "type" | "updated_at" | "created_by" | "updated_by";
export type pollCreationAttributes = Optional<pollAttributes, pollOptionalAttributes>;

export class poll extends Model<pollAttributes, pollCreationAttributes> implements pollAttributes {
  id!: number;
  active?: boolean;
  created_at?: Date;
  end_date?: Date;
  name?: string;
  options?: string;
  type?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // poll hasMany poll_mapping via poll_id
  poll_mappings!: poll_mapping[];
  getPoll_mappings!: Sequelize.HasManyGetAssociationsMixin<poll_mapping>;
  setPoll_mappings!: Sequelize.HasManySetAssociationsMixin<poll_mapping, poll_mappingId>;
  addPoll_mapping!: Sequelize.HasManyAddAssociationMixin<poll_mapping, poll_mappingId>;
  addPoll_mappings!: Sequelize.HasManyAddAssociationsMixin<poll_mapping, poll_mappingId>;
  createPoll_mapping!: Sequelize.HasManyCreateAssociationMixin<poll_mapping>;
  removePoll_mapping!: Sequelize.HasManyRemoveAssociationMixin<poll_mapping, poll_mappingId>;
  removePoll_mappings!: Sequelize.HasManyRemoveAssociationsMixin<poll_mapping, poll_mappingId>;
  hasPoll_mapping!: Sequelize.HasManyHasAssociationMixin<poll_mapping, poll_mappingId>;
  hasPoll_mappings!: Sequelize.HasManyHasAssociationsMixin<poll_mapping, poll_mappingId>;
  countPoll_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // poll hasMany poll_response via poll_id
  poll_responses!: poll_response[];
  getPoll_responses!: Sequelize.HasManyGetAssociationsMixin<poll_response>;
  setPoll_responses!: Sequelize.HasManySetAssociationsMixin<poll_response, poll_responseId>;
  addPoll_response!: Sequelize.HasManyAddAssociationMixin<poll_response, poll_responseId>;
  addPoll_responses!: Sequelize.HasManyAddAssociationsMixin<poll_response, poll_responseId>;
  createPoll_response!: Sequelize.HasManyCreateAssociationMixin<poll_response>;
  removePoll_response!: Sequelize.HasManyRemoveAssociationMixin<poll_response, poll_responseId>;
  removePoll_responses!: Sequelize.HasManyRemoveAssociationsMixin<poll_response, poll_responseId>;
  hasPoll_response!: Sequelize.HasManyHasAssociationMixin<poll_response, poll_responseId>;
  hasPoll_responses!: Sequelize.HasManyHasAssociationsMixin<poll_response, poll_responseId>;
  countPoll_responses!: Sequelize.HasManyCountAssociationsMixin;
  // poll belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // poll belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof poll {
    return sequelize.define('poll', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    options: {
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
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'polls',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK2hnu88tdwx35jhutli532ellg",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKs2iay0nvudl3tl0a33ji0pxyn",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "polls_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof poll;
  }
}

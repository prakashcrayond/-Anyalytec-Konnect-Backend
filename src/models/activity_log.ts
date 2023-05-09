import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface activity_logAttributes {
  id: number;
  created_at?: Date;
  description?: string;
  type?: string;
  updated_at?: Date;
  user_id?: number;
}

export type activity_logPk = "id";
export type activity_logId = activity_log[activity_logPk];
export type activity_logOptionalAttributes = "id" | "created_at" | "description" | "type" | "updated_at" | "user_id";
export type activity_logCreationAttributes = Optional<activity_logAttributes, activity_logOptionalAttributes>;

export class activity_log extends Model<activity_logAttributes, activity_logCreationAttributes> implements activity_logAttributes {
  id!: number;
  created_at?: Date;
  description?: string;
  type?: string;
  updated_at?: Date;
  user_id?: number;

  // activity_log belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof activity_log {
    return sequelize.define('activity_log', {
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
    description: {
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
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'activity_log',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK634sb3dvk7nyxjcjcem7m282a",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "activity_log_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof activity_log;
  }
}

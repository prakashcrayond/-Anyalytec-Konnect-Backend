import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface notificationAttributes {
  id: number;
  created_at?: Date;
  date?: Date;
  message?: string;
  resource_id: number;
  seen?: boolean;
  type?: string;
  updated_at?: Date;
  user_id?: number;
}

export type notificationPk = "id";
export type notificationId = notification[notificationPk];
export type notificationOptionalAttributes = "id" | "created_at" | "date" | "message" | "seen" | "type" | "updated_at" | "user_id";
export type notificationCreationAttributes = Optional<notificationAttributes, notificationOptionalAttributes>;

export class notification extends Model<notificationAttributes, notificationCreationAttributes> implements notificationAttributes {
  id!: number;
  created_at?: Date;
  date?: Date;
  message?: string;
  resource_id!: number;
  seen?: boolean;
  type?: string;
  updated_at?: Date;
  user_id?: number;

  // notification belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof notification {
    return sequelize.define('notification', {
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
    date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    resource_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    seen: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
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
    tableName: 'notification',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKnk4ftb5am9ubmkv1661h15ds9",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "notification_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof notification;
  }
}

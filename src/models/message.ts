import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { schedule_setting, schedule_settingId } from './schedule_setting';
import type { schedule_setting_schedule_message, schedule_setting_schedule_messageId } from './schedule_setting_schedule_message';
import type { user, userId } from './user';

export interface messageAttributes {
  id: number;
  category?: string;
  created_at?: Date;
  message?: string;
  scheduled: boolean;
  settings_id?: number;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type messagePk = "id";
export type messageId = message[messagePk];
export type messageOptionalAttributes = "id" | "category" | "created_at" | "message" | "settings_id" | "updated_at" | "created_by" | "updated_by";
export type messageCreationAttributes = Optional<messageAttributes, messageOptionalAttributes>;

export class message extends Model<messageAttributes, messageCreationAttributes> implements messageAttributes {
  id!: number;
  category?: string;
  created_at?: Date;
  message?: string;
  scheduled!: boolean;
  settings_id?: number;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // message belongsToMany schedule_setting via schedule_messages_id and schedule_setting_id
  schedule_setting_id_schedule_settings!: schedule_setting[];
  getSchedule_setting_id_schedule_settings!: Sequelize.BelongsToManyGetAssociationsMixin<schedule_setting>;
  setSchedule_setting_id_schedule_settings!: Sequelize.BelongsToManySetAssociationsMixin<schedule_setting, schedule_settingId>;
  addSchedule_setting_id_schedule_setting!: Sequelize.BelongsToManyAddAssociationMixin<schedule_setting, schedule_settingId>;
  addSchedule_setting_id_schedule_settings!: Sequelize.BelongsToManyAddAssociationsMixin<schedule_setting, schedule_settingId>;
  createSchedule_setting_id_schedule_setting!: Sequelize.BelongsToManyCreateAssociationMixin<schedule_setting>;
  removeSchedule_setting_id_schedule_setting!: Sequelize.BelongsToManyRemoveAssociationMixin<schedule_setting, schedule_settingId>;
  removeSchedule_setting_id_schedule_settings!: Sequelize.BelongsToManyRemoveAssociationsMixin<schedule_setting, schedule_settingId>;
  hasSchedule_setting_id_schedule_setting!: Sequelize.BelongsToManyHasAssociationMixin<schedule_setting, schedule_settingId>;
  hasSchedule_setting_id_schedule_settings!: Sequelize.BelongsToManyHasAssociationsMixin<schedule_setting, schedule_settingId>;
  countSchedule_setting_id_schedule_settings!: Sequelize.BelongsToManyCountAssociationsMixin;
  // message hasMany schedule_setting_schedule_message via schedule_messages_id
  schedule_setting_schedule_messages!: schedule_setting_schedule_message[];
  getSchedule_setting_schedule_messages!: Sequelize.HasManyGetAssociationsMixin<schedule_setting_schedule_message>;
  setSchedule_setting_schedule_messages!: Sequelize.HasManySetAssociationsMixin<schedule_setting_schedule_message, schedule_setting_schedule_messageId>;
  addSchedule_setting_schedule_message!: Sequelize.HasManyAddAssociationMixin<schedule_setting_schedule_message, schedule_setting_schedule_messageId>;
  addSchedule_setting_schedule_messages!: Sequelize.HasManyAddAssociationsMixin<schedule_setting_schedule_message, schedule_setting_schedule_messageId>;
  createSchedule_setting_schedule_message!: Sequelize.HasManyCreateAssociationMixin<schedule_setting_schedule_message>;
  removeSchedule_setting_schedule_message!: Sequelize.HasManyRemoveAssociationMixin<schedule_setting_schedule_message, schedule_setting_schedule_messageId>;
  removeSchedule_setting_schedule_messages!: Sequelize.HasManyRemoveAssociationsMixin<schedule_setting_schedule_message, schedule_setting_schedule_messageId>;
  hasSchedule_setting_schedule_message!: Sequelize.HasManyHasAssociationMixin<schedule_setting_schedule_message, schedule_setting_schedule_messageId>;
  hasSchedule_setting_schedule_messages!: Sequelize.HasManyHasAssociationsMixin<schedule_setting_schedule_message, schedule_setting_schedule_messageId>;
  countSchedule_setting_schedule_messages!: Sequelize.HasManyCountAssociationsMixin;
  // message belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // message belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof message {
    return sequelize.define('message', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    category: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    scheduled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    settings_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'message',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKbftknoj99why07plhbgqqmk6g",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKc1hkpmhysxpms2cdct76h8kmk",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "message_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof message;
  }
}

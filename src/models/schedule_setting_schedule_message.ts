import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { message, messageId } from './message';
import type { schedule_setting, schedule_settingId } from './schedule_setting';

export interface schedule_setting_schedule_messageAttributes {
  schedule_setting_id: number;
  schedule_messages_id: number;
}

export type schedule_setting_schedule_messagePk = "schedule_setting_id" | "schedule_messages_id";
export type schedule_setting_schedule_messageId = schedule_setting_schedule_message[schedule_setting_schedule_messagePk];
export type schedule_setting_schedule_messageCreationAttributes = schedule_setting_schedule_messageAttributes;

export class schedule_setting_schedule_message extends Model<schedule_setting_schedule_messageAttributes, schedule_setting_schedule_messageCreationAttributes> implements schedule_setting_schedule_messageAttributes {
  schedule_setting_id!: number;
  schedule_messages_id!: number;

  // schedule_setting_schedule_message belongsTo message via schedule_messages_id
  schedule_message!: message;
  getSchedule_message!: Sequelize.BelongsToGetAssociationMixin<message>;
  setSchedule_message!: Sequelize.BelongsToSetAssociationMixin<message, messageId>;
  createSchedule_message!: Sequelize.BelongsToCreateAssociationMixin<message>;
  // schedule_setting_schedule_message belongsTo schedule_setting via schedule_setting_id
  schedule_setting!: schedule_setting;
  getSchedule_setting!: Sequelize.BelongsToGetAssociationMixin<schedule_setting>;
  setSchedule_setting!: Sequelize.BelongsToSetAssociationMixin<schedule_setting, schedule_settingId>;
  createSchedule_setting!: Sequelize.BelongsToCreateAssociationMixin<schedule_setting>;

  static initModel(sequelize: Sequelize.Sequelize): typeof schedule_setting_schedule_message {
    return schedule_setting_schedule_message.init({
    schedule_setting_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'schedule_setting',
        key: 'id'
      }
    },
    schedule_messages_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'message',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'schedule_setting_schedule_messages',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "UK_rxgloiflf6pei4h89s26n214c",
        unique: true,
        fields: [
          { name: "schedule_messages_id" },
        ]
      },
      {
        name: "schedule_setting_schedule_messages_pkey",
        unique: true,
        fields: [
          { name: "schedule_setting_id" },
          { name: "schedule_messages_id" },
        ]
      },
    ]
  });
  }
}

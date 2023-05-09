import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { message, messageId } from './message';
import type { schedule_setting_schedule_message, schedule_setting_schedule_messageId } from './schedule_setting_schedule_message';
import type { schedule_setting_schedule_template, schedule_setting_schedule_templateId } from './schedule_setting_schedule_template';
import type { template, templateId } from './template';
import type { user, userId } from './user';

export interface schedule_settingAttributes {
  id: number;
  category?: string;
  created_at?: Date;
  updated_at?: Date;
  years_interval: number;
  created_by?: number;
  updated_by?: number;
}

export type schedule_settingPk = "id";
export type schedule_settingId = schedule_setting[schedule_settingPk];
export type schedule_settingOptionalAttributes = "id" | "category" | "created_at" | "updated_at" | "created_by" | "updated_by";
export type schedule_settingCreationAttributes = Optional<schedule_settingAttributes, schedule_settingOptionalAttributes>;

export class schedule_setting extends Model<schedule_settingAttributes, schedule_settingCreationAttributes> implements schedule_settingAttributes {
  id!: number;
  category?: string;
  created_at?: Date;
  updated_at?: Date;
  years_interval!: number;
  created_by?: number;
  updated_by?: number;

  // schedule_setting belongsToMany message via schedule_setting_id and schedule_messages_id
  schedule_messages_id_messages!: message[];
  getSchedule_messages_id_messages!: Sequelize.BelongsToManyGetAssociationsMixin<message>;
  setSchedule_messages_id_messages!: Sequelize.BelongsToManySetAssociationsMixin<message, messageId>;
  addSchedule_messages_id_message!: Sequelize.BelongsToManyAddAssociationMixin<message, messageId>;
  addSchedule_messages_id_messages!: Sequelize.BelongsToManyAddAssociationsMixin<message, messageId>;
  createSchedule_messages_id_message!: Sequelize.BelongsToManyCreateAssociationMixin<message>;
  removeSchedule_messages_id_message!: Sequelize.BelongsToManyRemoveAssociationMixin<message, messageId>;
  removeSchedule_messages_id_messages!: Sequelize.BelongsToManyRemoveAssociationsMixin<message, messageId>;
  hasSchedule_messages_id_message!: Sequelize.BelongsToManyHasAssociationMixin<message, messageId>;
  hasSchedule_messages_id_messages!: Sequelize.BelongsToManyHasAssociationsMixin<message, messageId>;
  countSchedule_messages_id_messages!: Sequelize.BelongsToManyCountAssociationsMixin;
  // schedule_setting hasMany schedule_setting_schedule_message via schedule_setting_id
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
  // schedule_setting hasMany schedule_setting_schedule_template via schedule_setting_id
  schedule_setting_schedule_templates!: schedule_setting_schedule_template[];
  getSchedule_setting_schedule_templates!: Sequelize.HasManyGetAssociationsMixin<schedule_setting_schedule_template>;
  setSchedule_setting_schedule_templates!: Sequelize.HasManySetAssociationsMixin<schedule_setting_schedule_template, schedule_setting_schedule_templateId>;
  addSchedule_setting_schedule_template!: Sequelize.HasManyAddAssociationMixin<schedule_setting_schedule_template, schedule_setting_schedule_templateId>;
  addSchedule_setting_schedule_templates!: Sequelize.HasManyAddAssociationsMixin<schedule_setting_schedule_template, schedule_setting_schedule_templateId>;
  createSchedule_setting_schedule_template!: Sequelize.HasManyCreateAssociationMixin<schedule_setting_schedule_template>;
  removeSchedule_setting_schedule_template!: Sequelize.HasManyRemoveAssociationMixin<schedule_setting_schedule_template, schedule_setting_schedule_templateId>;
  removeSchedule_setting_schedule_templates!: Sequelize.HasManyRemoveAssociationsMixin<schedule_setting_schedule_template, schedule_setting_schedule_templateId>;
  hasSchedule_setting_schedule_template!: Sequelize.HasManyHasAssociationMixin<schedule_setting_schedule_template, schedule_setting_schedule_templateId>;
  hasSchedule_setting_schedule_templates!: Sequelize.HasManyHasAssociationsMixin<schedule_setting_schedule_template, schedule_setting_schedule_templateId>;
  countSchedule_setting_schedule_templates!: Sequelize.HasManyCountAssociationsMixin;
  // schedule_setting belongsToMany template via schedule_setting_id and schedule_templates_id
  schedule_templates_id_templates!: template[];
  getSchedule_templates_id_templates!: Sequelize.BelongsToManyGetAssociationsMixin<template>;
  setSchedule_templates_id_templates!: Sequelize.BelongsToManySetAssociationsMixin<template, templateId>;
  addSchedule_templates_id_template!: Sequelize.BelongsToManyAddAssociationMixin<template, templateId>;
  addSchedule_templates_id_templates!: Sequelize.BelongsToManyAddAssociationsMixin<template, templateId>;
  createSchedule_templates_id_template!: Sequelize.BelongsToManyCreateAssociationMixin<template>;
  removeSchedule_templates_id_template!: Sequelize.BelongsToManyRemoveAssociationMixin<template, templateId>;
  removeSchedule_templates_id_templates!: Sequelize.BelongsToManyRemoveAssociationsMixin<template, templateId>;
  hasSchedule_templates_id_template!: Sequelize.BelongsToManyHasAssociationMixin<template, templateId>;
  hasSchedule_templates_id_templates!: Sequelize.BelongsToManyHasAssociationsMixin<template, templateId>;
  countSchedule_templates_id_templates!: Sequelize.BelongsToManyCountAssociationsMixin;
  // schedule_setting belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // schedule_setting belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof schedule_setting {
    return sequelize.define('schedule_setting', {
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
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    years_interval: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    tableName: 'schedule_setting',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK9yhwjv916eesbm3nap9hdfjbu",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKd2qkiajrw08yfh9w4nofj3jo0",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "schedule_setting_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof schedule_setting;
  }
}

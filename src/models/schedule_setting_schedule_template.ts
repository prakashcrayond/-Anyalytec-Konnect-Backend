import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { schedule_setting, schedule_settingId } from './schedule_setting';
import type { template, templateId } from './template';

export interface schedule_setting_schedule_templateAttributes {
  schedule_setting_id: number;
  schedule_templates_id: number;
}

export type schedule_setting_schedule_templatePk = "schedule_setting_id" | "schedule_templates_id";
export type schedule_setting_schedule_templateId = schedule_setting_schedule_template[schedule_setting_schedule_templatePk];
export type schedule_setting_schedule_templateCreationAttributes = schedule_setting_schedule_templateAttributes;

export class schedule_setting_schedule_template extends Model<schedule_setting_schedule_templateAttributes, schedule_setting_schedule_templateCreationAttributes> implements schedule_setting_schedule_templateAttributes {
  schedule_setting_id!: number;
  schedule_templates_id!: number;

  // schedule_setting_schedule_template belongsTo schedule_setting via schedule_setting_id
  schedule_setting!: schedule_setting;
  getSchedule_setting!: Sequelize.BelongsToGetAssociationMixin<schedule_setting>;
  setSchedule_setting!: Sequelize.BelongsToSetAssociationMixin<schedule_setting, schedule_settingId>;
  createSchedule_setting!: Sequelize.BelongsToCreateAssociationMixin<schedule_setting>;
  // schedule_setting_schedule_template belongsTo template via schedule_templates_id
  schedule_template!: template;
  getSchedule_template!: Sequelize.BelongsToGetAssociationMixin<template>;
  setSchedule_template!: Sequelize.BelongsToSetAssociationMixin<template, templateId>;
  createSchedule_template!: Sequelize.BelongsToCreateAssociationMixin<template>;

  static initModel(sequelize: Sequelize.Sequelize): typeof schedule_setting_schedule_template {
    return sequelize.define('schedule_setting_schedule_template', {
    schedule_setting_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'schedule_setting',
        key: 'id'
      }
    },
    schedule_templates_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'template',
        key: 'id'
      }
    }
  }, {
    tableName: 'schedule_setting_schedule_templates',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "UK_48ob3y4h6pmbi1lelyom6fya",
        unique: true,
        fields: [
          { name: "schedule_templates_id" },
        ]
      },
      {
        name: "schedule_setting_schedule_templates_pkey",
        unique: true,
        fields: [
          { name: "schedule_setting_id" },
          { name: "schedule_templates_id" },
        ]
      },
    ]
  }) as typeof schedule_setting_schedule_template;
  }
}

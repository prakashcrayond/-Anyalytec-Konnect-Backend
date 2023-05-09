import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { schedule_setting, schedule_settingId } from './schedule_setting';
import type { schedule_setting_schedule_template, schedule_setting_schedule_templateId } from './schedule_setting_schedule_template';
import type { user, userId } from './user';

export interface templateAttributes {
  id: number;
  category?: string;
  created_at?: Date;
  name?: string;
  scheduled: boolean;
  settings_id?: number;
  template_file_name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type templatePk = "id";
export type templateId = template[templatePk];
export type templateOptionalAttributes = "id" | "category" | "created_at" | "name" | "settings_id" | "template_file_name" | "updated_at" | "created_by" | "updated_by";
export type templateCreationAttributes = Optional<templateAttributes, templateOptionalAttributes>;

export class template extends Model<templateAttributes, templateCreationAttributes> implements templateAttributes {
  id!: number;
  category?: string;
  created_at?: Date;
  name?: string;
  scheduled!: boolean;
  settings_id?: number;
  template_file_name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // template belongsToMany schedule_setting via schedule_templates_id and schedule_setting_id
  schedule_setting_id_schedule_setting_schedule_setting_schedule_templates!: schedule_setting[];
  getSchedule_setting_id_schedule_setting_schedule_setting_schedule_templates!: Sequelize.BelongsToManyGetAssociationsMixin<schedule_setting>;
  setSchedule_setting_id_schedule_setting_schedule_setting_schedule_templates!: Sequelize.BelongsToManySetAssociationsMixin<schedule_setting, schedule_settingId>;
  addSchedule_setting_id_schedule_setting_schedule_setting_schedule_template!: Sequelize.BelongsToManyAddAssociationMixin<schedule_setting, schedule_settingId>;
  addSchedule_setting_id_schedule_setting_schedule_setting_schedule_templates!: Sequelize.BelongsToManyAddAssociationsMixin<schedule_setting, schedule_settingId>;
  createSchedule_setting_id_schedule_setting_schedule_setting_schedule_template!: Sequelize.BelongsToManyCreateAssociationMixin<schedule_setting>;
  removeSchedule_setting_id_schedule_setting_schedule_setting_schedule_template!: Sequelize.BelongsToManyRemoveAssociationMixin<schedule_setting, schedule_settingId>;
  removeSchedule_setting_id_schedule_setting_schedule_setting_schedule_templates!: Sequelize.BelongsToManyRemoveAssociationsMixin<schedule_setting, schedule_settingId>;
  hasSchedule_setting_id_schedule_setting_schedule_setting_schedule_template!: Sequelize.BelongsToManyHasAssociationMixin<schedule_setting, schedule_settingId>;
  hasSchedule_setting_id_schedule_setting_schedule_setting_schedule_templates!: Sequelize.BelongsToManyHasAssociationsMixin<schedule_setting, schedule_settingId>;
  countSchedule_setting_id_schedule_setting_schedule_setting_schedule_templates!: Sequelize.BelongsToManyCountAssociationsMixin;
  // template hasMany schedule_setting_schedule_template via schedule_templates_id
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
  // template belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // template belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof template {
    return sequelize.define('template', {
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
    name: {
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
    template_file_name: {
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
    tableName: 'template',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKb9l5iu7uf0pk5y0arvy771q1m",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKi8ikdyh2g3oe5f1on8oh4y7s5",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "template_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof template;
  }
}

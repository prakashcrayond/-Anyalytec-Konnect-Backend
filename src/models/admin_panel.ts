import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface admin_panelAttributes {
  id: number;
  color?: string;
  created_at?: Date;
  date_format?: string;
  financial_year?: number;
  header_logo?: string;
  language?: string;
  login_logo?: string;
  time_format?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type admin_panelPk = "id";
export type admin_panelId = admin_panel[admin_panelPk];
export type admin_panelOptionalAttributes = "id" | "color" | "created_at" | "date_format" | "financial_year" | "header_logo" | "language" | "login_logo" | "time_format" | "updated_at" | "created_by" | "updated_by";
export type admin_panelCreationAttributes = Optional<admin_panelAttributes, admin_panelOptionalAttributes>;

export class admin_panel extends Model<admin_panelAttributes, admin_panelCreationAttributes> implements admin_panelAttributes {
  id!: number;
  color?: string;
  created_at?: Date;
  date_format?: string;
  financial_year?: number;
  header_logo?: string;
  language?: string;
  login_logo?: string;
  time_format?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // admin_panel belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // admin_panel belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof admin_panel {
    return sequelize.define('admin_panel', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    color: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_format: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    financial_year: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    header_logo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    language: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    login_logo: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    time_format: {
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
    tableName: 'admin_panel',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "admin_panel_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof admin_panel;
  }
}

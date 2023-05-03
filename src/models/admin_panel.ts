import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

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
}

export type admin_panelPk = "id";
export type admin_panelId = admin_panel[admin_panelPk];
export type admin_panelOptionalAttributes = "id" | "color" | "created_at" | "date_format" | "financial_year" | "header_logo" | "language" | "login_logo" | "time_format" | "updated_at";
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


  static initModel(sequelize: Sequelize.Sequelize): typeof admin_panel {
    return admin_panel.init({
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
    }
  }, {
    sequelize,
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
  });
  }
}

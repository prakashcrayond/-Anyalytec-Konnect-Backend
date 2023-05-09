import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface configurationAttributes {
  name: string;
  created_at?: Date;
  updated_at?: Date;
  value?: string;
  created_by?: number;
  updated_by?: number;
}

export type configurationPk = "name";
export type configurationId = configuration[configurationPk];
export type configurationOptionalAttributes = "created_at" | "updated_at" | "value" | "created_by" | "updated_by";
export type configurationCreationAttributes = Optional<configurationAttributes, configurationOptionalAttributes>;

export class configuration extends Model<configurationAttributes, configurationCreationAttributes> implements configurationAttributes {
  name!: string;
  created_at?: Date;
  updated_at?: Date;
  value?: string;
  created_by?: number;
  updated_by?: number;

  // configuration belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // configuration belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof configuration {
    return sequelize.define('configuration', {
    name: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    value: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
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
    tableName: 'configuration',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKapl4thrv5ur3n3426ncyi9pkl",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKk6l4a1cqnkam028v34rvopqon",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "configuration_pkey",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
    ]
  }) as typeof configuration;
  }
}

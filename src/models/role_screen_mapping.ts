import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { role, roleId } from './role';
import type { user, userId } from './user';

export interface role_screen_mappingAttributes {
  id: number;
  created_at?: Date;
  screen_access?: string;
  updated_at?: Date;
  created_by?: number;
  role_id?: number;
  updated_by?: number;
}

export type role_screen_mappingPk = "id";
export type role_screen_mappingId = role_screen_mapping[role_screen_mappingPk];
export type role_screen_mappingOptionalAttributes = "id" | "created_at" | "screen_access" | "updated_at" | "created_by" | "role_id" | "updated_by";
export type role_screen_mappingCreationAttributes = Optional<role_screen_mappingAttributes, role_screen_mappingOptionalAttributes>;

export class role_screen_mapping extends Model<role_screen_mappingAttributes, role_screen_mappingCreationAttributes> implements role_screen_mappingAttributes {
  id!: number;
  created_at?: Date;
  screen_access?: string;
  updated_at?: Date;
  created_by?: number;
  role_id?: number;
  updated_by?: number;

  // role_screen_mapping belongsTo role via role_id
  role!: role;
  getRole!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole!: Sequelize.BelongsToCreateAssociationMixin<role>;
  // role_screen_mapping belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // role_screen_mapping belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role_screen_mapping {
    return role_screen_mapping.init({
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
    screen_access: {
      type: DataTypes.TEXT,
      allowNull: true
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
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'role',
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
    sequelize,
    tableName: 'role_screen_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK1fnmvbsltmqmpxdg1vvqny4gf",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKd1xsogrq4k539kprrt6vah6u1",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "UK_qtp8i4eegbs0n2f548knr4b8u",
        unique: true,
        fields: [
          { name: "role_id" },
        ]
      },
      {
        name: "role_screen_mapping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

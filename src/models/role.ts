import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { role_screen_mapping, role_screen_mappingId } from './role_screen_mapping';
import type { user, userId } from './user';

export interface roleAttributes {
  id: number;
  admin_role?: boolean;
  color_code?: string;
  created_at?: Date;
  is_default?: boolean;
  role_name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type rolePk = "id";
export type roleId = role[rolePk];
export type roleOptionalAttributes = "id" | "admin_role" | "color_code" | "created_at" | "is_default" | "role_name" | "updated_at" | "created_by" | "updated_by";
export type roleCreationAttributes = Optional<roleAttributes, roleOptionalAttributes>;

export class role extends Model<roleAttributes, roleCreationAttributes> implements roleAttributes {
  id!: number;
  admin_role?: boolean;
  color_code?: string;
  created_at?: Date;
  is_default?: boolean;
  role_name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // role hasMany role_screen_mapping via role_id
  role_screen_mappings!: role_screen_mapping[];
  getRole_screen_mappings!: Sequelize.HasManyGetAssociationsMixin<role_screen_mapping>;
  setRole_screen_mappings!: Sequelize.HasManySetAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  addRole_screen_mapping!: Sequelize.HasManyAddAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  addRole_screen_mappings!: Sequelize.HasManyAddAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  createRole_screen_mapping!: Sequelize.HasManyCreateAssociationMixin<role_screen_mapping>;
  removeRole_screen_mapping!: Sequelize.HasManyRemoveAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  removeRole_screen_mappings!: Sequelize.HasManyRemoveAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  hasRole_screen_mapping!: Sequelize.HasManyHasAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  hasRole_screen_mappings!: Sequelize.HasManyHasAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  countRole_screen_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // role hasMany user via role_id
  users!: user[];
  getUsers!: Sequelize.HasManyGetAssociationsMixin<user>;
  setUsers!: Sequelize.HasManySetAssociationsMixin<user, userId>;
  addUser!: Sequelize.HasManyAddAssociationMixin<user, userId>;
  addUsers!: Sequelize.HasManyAddAssociationsMixin<user, userId>;
  createUser!: Sequelize.HasManyCreateAssociationMixin<user>;
  removeUser!: Sequelize.HasManyRemoveAssociationMixin<user, userId>;
  removeUsers!: Sequelize.HasManyRemoveAssociationsMixin<user, userId>;
  hasUser!: Sequelize.HasManyHasAssociationMixin<user, userId>;
  hasUsers!: Sequelize.HasManyHasAssociationsMixin<user, userId>;
  countUsers!: Sequelize.HasManyCountAssociationsMixin;
  // role belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // role belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof role {
    return role.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    admin_role: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    color_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    role_name: {
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
    sequelize,
    tableName: 'role',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKqktgp5xuf8n0mwea8i6ddu4vw",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKrj6deb5a83r2ms9aes1mxu0ge",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "UKbgeqjb5opmijvwc14fbtaj4xx",
        unique: true,
        fields: [
          { name: "role_name" },
        ]
      },
      {
        name: "role_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

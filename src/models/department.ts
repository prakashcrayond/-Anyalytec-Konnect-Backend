import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forum_department, forum_departmentId } from './forum_department';
import type { idea_department, idea_departmentId } from './idea_department';
import type { manage_award, manage_awardId } from './manage_award';
import type { user, userId } from './user';

export interface departmentAttributes {
  id: number;
  active?: boolean;
  created_at?: Date;
  name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type departmentPk = "id";
export type departmentId = department[departmentPk];
export type departmentOptionalAttributes = "id" | "active" | "created_at" | "name" | "updated_at" | "created_by" | "updated_by";
export type departmentCreationAttributes = Optional<departmentAttributes, departmentOptionalAttributes>;

export class department extends Model<departmentAttributes, departmentCreationAttributes> implements departmentAttributes {
  id!: number;
  active?: boolean;
  created_at?: Date;
  name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // department hasMany forum_department via dep_id
  forum_departments!: forum_department[];
  getForum_departments!: Sequelize.HasManyGetAssociationsMixin<forum_department>;
  setForum_departments!: Sequelize.HasManySetAssociationsMixin<forum_department, forum_departmentId>;
  addForum_department!: Sequelize.HasManyAddAssociationMixin<forum_department, forum_departmentId>;
  addForum_departments!: Sequelize.HasManyAddAssociationsMixin<forum_department, forum_departmentId>;
  createForum_department!: Sequelize.HasManyCreateAssociationMixin<forum_department>;
  removeForum_department!: Sequelize.HasManyRemoveAssociationMixin<forum_department, forum_departmentId>;
  removeForum_departments!: Sequelize.HasManyRemoveAssociationsMixin<forum_department, forum_departmentId>;
  hasForum_department!: Sequelize.HasManyHasAssociationMixin<forum_department, forum_departmentId>;
  hasForum_departments!: Sequelize.HasManyHasAssociationsMixin<forum_department, forum_departmentId>;
  countForum_departments!: Sequelize.HasManyCountAssociationsMixin;
  // department hasMany idea_department via dep_id
  idea_departments!: idea_department[];
  getIdea_departments!: Sequelize.HasManyGetAssociationsMixin<idea_department>;
  setIdea_departments!: Sequelize.HasManySetAssociationsMixin<idea_department, idea_departmentId>;
  addIdea_department!: Sequelize.HasManyAddAssociationMixin<idea_department, idea_departmentId>;
  addIdea_departments!: Sequelize.HasManyAddAssociationsMixin<idea_department, idea_departmentId>;
  createIdea_department!: Sequelize.HasManyCreateAssociationMixin<idea_department>;
  removeIdea_department!: Sequelize.HasManyRemoveAssociationMixin<idea_department, idea_departmentId>;
  removeIdea_departments!: Sequelize.HasManyRemoveAssociationsMixin<idea_department, idea_departmentId>;
  hasIdea_department!: Sequelize.HasManyHasAssociationMixin<idea_department, idea_departmentId>;
  hasIdea_departments!: Sequelize.HasManyHasAssociationsMixin<idea_department, idea_departmentId>;
  countIdea_departments!: Sequelize.HasManyCountAssociationsMixin;
  // department hasMany manage_award via department_id
  manage_awards!: manage_award[];
  getManage_awards!: Sequelize.HasManyGetAssociationsMixin<manage_award>;
  setManage_awards!: Sequelize.HasManySetAssociationsMixin<manage_award, manage_awardId>;
  addManage_award!: Sequelize.HasManyAddAssociationMixin<manage_award, manage_awardId>;
  addManage_awards!: Sequelize.HasManyAddAssociationsMixin<manage_award, manage_awardId>;
  createManage_award!: Sequelize.HasManyCreateAssociationMixin<manage_award>;
  removeManage_award!: Sequelize.HasManyRemoveAssociationMixin<manage_award, manage_awardId>;
  removeManage_awards!: Sequelize.HasManyRemoveAssociationsMixin<manage_award, manage_awardId>;
  hasManage_award!: Sequelize.HasManyHasAssociationMixin<manage_award, manage_awardId>;
  hasManage_awards!: Sequelize.HasManyHasAssociationsMixin<manage_award, manage_awardId>;
  countManage_awards!: Sequelize.HasManyCountAssociationsMixin;
  // department hasMany user via department_id
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
  // department belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // department belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof department {
    return department.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
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
    tableName: 'department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK31u2id76kj4mjgagsm70lcv7i",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKg6n6ouam844nhpilf5mgis9df",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "UK1t68827l97cwyxo9r1u6t4p7d",
        unique: true,
        fields: [
          { name: "name" },
        ]
      },
      {
        name: "department_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

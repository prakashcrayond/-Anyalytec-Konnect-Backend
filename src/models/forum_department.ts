import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { department, departmentId } from './department';
import type { forum, forumId } from './forum';
import type { user, userId } from './user';

export interface forum_departmentAttributes {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  dep_id?: number;
  forum_id?: number;
  updated_by?: number;
}

export type forum_departmentPk = "id";
export type forum_departmentId = forum_department[forum_departmentPk];
export type forum_departmentOptionalAttributes = "id" | "created_at" | "updated_at" | "created_by" | "dep_id" | "forum_id" | "updated_by";
export type forum_departmentCreationAttributes = Optional<forum_departmentAttributes, forum_departmentOptionalAttributes>;

export class forum_department extends Model<forum_departmentAttributes, forum_departmentCreationAttributes> implements forum_departmentAttributes {
  id!: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  dep_id?: number;
  forum_id?: number;
  updated_by?: number;

  // forum_department belongsTo department via dep_id
  dep!: department;
  getDep!: Sequelize.BelongsToGetAssociationMixin<department>;
  setDep!: Sequelize.BelongsToSetAssociationMixin<department, departmentId>;
  createDep!: Sequelize.BelongsToCreateAssociationMixin<department>;
  // forum_department belongsTo forum via forum_id
  forum!: forum;
  getForum!: Sequelize.BelongsToGetAssociationMixin<forum>;
  setForum!: Sequelize.BelongsToSetAssociationMixin<forum, forumId>;
  createForum!: Sequelize.BelongsToCreateAssociationMixin<forum>;
  // forum_department belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // forum_department belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof forum_department {
    return sequelize.define('forum_department', {
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
    dep_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      }
    },
    forum_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'forum',
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
    tableName: 'forum_department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK23odyt41kct39c4hq58t75bl3",
        fields: [
          { name: "forum_id" },
        ]
      },
      {
        name: "FK8afaftgqvqfaf6bhxjocve4ar",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKbx9bai0w4f2lqiubsm42ac1bn",
        fields: [
          { name: "dep_id" },
        ]
      },
      {
        name: "FKsxuy4bjfpoqrieeucajps5exa",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "forum_department_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof forum_department;
  }
}

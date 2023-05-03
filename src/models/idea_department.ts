import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { department, departmentId } from './department';
import type { idea, ideaId } from './idea';
import type { user, userId } from './user';

export interface idea_departmentAttributes {
  id: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  dep_id?: number;
  idea_id?: number;
  updated_by?: number;
}

export type idea_departmentPk = "id";
export type idea_departmentId = idea_department[idea_departmentPk];
export type idea_departmentOptionalAttributes = "id" | "created_at" | "updated_at" | "created_by" | "dep_id" | "idea_id" | "updated_by";
export type idea_departmentCreationAttributes = Optional<idea_departmentAttributes, idea_departmentOptionalAttributes>;

export class idea_department extends Model<idea_departmentAttributes, idea_departmentCreationAttributes> implements idea_departmentAttributes {
  id!: number;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  dep_id?: number;
  idea_id?: number;
  updated_by?: number;

  // idea_department belongsTo department via dep_id
  dep!: department;
  getDep!: Sequelize.BelongsToGetAssociationMixin<department>;
  setDep!: Sequelize.BelongsToSetAssociationMixin<department, departmentId>;
  createDep!: Sequelize.BelongsToCreateAssociationMixin<department>;
  // idea_department belongsTo idea via idea_id
  idea!: idea;
  getIdea!: Sequelize.BelongsToGetAssociationMixin<idea>;
  setIdea!: Sequelize.BelongsToSetAssociationMixin<idea, ideaId>;
  createIdea!: Sequelize.BelongsToCreateAssociationMixin<idea>;
  // idea_department belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // idea_department belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof idea_department {
    return idea_department.init({
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
    idea_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'idea',
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
    tableName: 'idea_department',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK6ybugub0kmm95uoiml7b3rk8w",
        fields: [
          { name: "dep_id" },
        ]
      },
      {
        name: "FKa2ka3pgclmqhjnbm5y40ysn2k",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKal70idmgxxrfviw9ofnxx1h1r",
        fields: [
          { name: "idea_id" },
        ]
      },
      {
        name: "FKn03vcd9yjfqihv9nu2mvn8s7x",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "idea_department_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

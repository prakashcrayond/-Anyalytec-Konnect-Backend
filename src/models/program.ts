import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { program_reward, program_rewardId } from './program_reward';
import type { program_task, program_taskId } from './program_task';
import type { program_user, program_userId } from './program_user';
import type { user, userId } from './user';

export interface programAttributes {
  id: number;
  created_at?: Date;
  department_id?: number;
  description?: string;
  end_date?: Date;
  name?: string;
  progress?: number;
  start_date?: Date;
  state?: string;
  updated_at?: Date;
  created_by?: number;
  manager_id?: number;
  updated_by?: number;
}

export type programPk = "id";
export type programId = program[programPk];
export type programOptionalAttributes = "id" | "created_at" | "department_id" | "description" | "end_date" | "name" | "progress" | "start_date" | "state" | "updated_at" | "created_by" | "manager_id" | "updated_by";
export type programCreationAttributes = Optional<programAttributes, programOptionalAttributes>;

export class program extends Model<programAttributes, programCreationAttributes> implements programAttributes {
  id!: number;
  created_at?: Date;
  department_id?: number;
  description?: string;
  end_date?: Date;
  name?: string;
  progress?: number;
  start_date?: Date;
  state?: string;
  updated_at?: Date;
  created_by?: number;
  manager_id?: number;
  updated_by?: number;

  // program hasMany program_reward via program_id
  program_rewards!: program_reward[];
  getProgram_rewards!: Sequelize.HasManyGetAssociationsMixin<program_reward>;
  setProgram_rewards!: Sequelize.HasManySetAssociationsMixin<program_reward, program_rewardId>;
  addProgram_reward!: Sequelize.HasManyAddAssociationMixin<program_reward, program_rewardId>;
  addProgram_rewards!: Sequelize.HasManyAddAssociationsMixin<program_reward, program_rewardId>;
  createProgram_reward!: Sequelize.HasManyCreateAssociationMixin<program_reward>;
  removeProgram_reward!: Sequelize.HasManyRemoveAssociationMixin<program_reward, program_rewardId>;
  removeProgram_rewards!: Sequelize.HasManyRemoveAssociationsMixin<program_reward, program_rewardId>;
  hasProgram_reward!: Sequelize.HasManyHasAssociationMixin<program_reward, program_rewardId>;
  hasProgram_rewards!: Sequelize.HasManyHasAssociationsMixin<program_reward, program_rewardId>;
  countProgram_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // program hasMany program_task via program_id
  program_tasks!: program_task[];
  getProgram_tasks!: Sequelize.HasManyGetAssociationsMixin<program_task>;
  setProgram_tasks!: Sequelize.HasManySetAssociationsMixin<program_task, program_taskId>;
  addProgram_task!: Sequelize.HasManyAddAssociationMixin<program_task, program_taskId>;
  addProgram_tasks!: Sequelize.HasManyAddAssociationsMixin<program_task, program_taskId>;
  createProgram_task!: Sequelize.HasManyCreateAssociationMixin<program_task>;
  removeProgram_task!: Sequelize.HasManyRemoveAssociationMixin<program_task, program_taskId>;
  removeProgram_tasks!: Sequelize.HasManyRemoveAssociationsMixin<program_task, program_taskId>;
  hasProgram_task!: Sequelize.HasManyHasAssociationMixin<program_task, program_taskId>;
  hasProgram_tasks!: Sequelize.HasManyHasAssociationsMixin<program_task, program_taskId>;
  countProgram_tasks!: Sequelize.HasManyCountAssociationsMixin;
  // program hasMany program_user via program_id
  program_users!: program_user[];
  getProgram_users!: Sequelize.HasManyGetAssociationsMixin<program_user>;
  setProgram_users!: Sequelize.HasManySetAssociationsMixin<program_user, program_userId>;
  addProgram_user!: Sequelize.HasManyAddAssociationMixin<program_user, program_userId>;
  addProgram_users!: Sequelize.HasManyAddAssociationsMixin<program_user, program_userId>;
  createProgram_user!: Sequelize.HasManyCreateAssociationMixin<program_user>;
  removeProgram_user!: Sequelize.HasManyRemoveAssociationMixin<program_user, program_userId>;
  removeProgram_users!: Sequelize.HasManyRemoveAssociationsMixin<program_user, program_userId>;
  hasProgram_user!: Sequelize.HasManyHasAssociationMixin<program_user, program_userId>;
  hasProgram_users!: Sequelize.HasManyHasAssociationsMixin<program_user, program_userId>;
  countProgram_users!: Sequelize.HasManyCountAssociationsMixin;
  // program belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // program belongsTo user via manager_id
  manager!: user;
  getManager!: Sequelize.BelongsToGetAssociationMixin<user>;
  setManager!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createManager!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // program belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program {
    return program.init({
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
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    progress: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    start_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    state: {
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
    manager_id: {
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
    tableName: 'program',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKhuivd8ihrqc6ic7sfsx0kycyi",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKi1732kjrifbwt2h3lsgbwwr1u",
        fields: [
          { name: "manager_id" },
        ]
      },
      {
        name: "FKn8vu9lf9okaov14gg274lv6h6",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "program_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

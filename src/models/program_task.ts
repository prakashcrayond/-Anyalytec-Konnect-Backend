import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { program, programId } from './program';
import type { program_task_attachment, program_task_attachmentId } from './program_task_attachment';
import type { program_task_comment, program_task_commentId } from './program_task_comment';
import type { program_task_reward, program_task_rewardId } from './program_task_reward';
import type { program_task_user, program_task_userId } from './program_task_user';
import type { user, userId } from './user';

export interface program_taskAttributes {
  id: number;
  created_at?: Date;
  deny_reason?: string;
  end_date?: Date;
  progress?: number;
  start_date?: Date;
  state?: string;
  task_description?: string;
  task_name?: string;
  updated_at?: Date;
  created_by?: number;
  program_id?: number;
  submitted_by?: number;
  updated_by?: number;
}

export type program_taskPk = "id";
export type program_taskId = program_task[program_taskPk];
export type program_taskOptionalAttributes = "id" | "created_at" | "deny_reason" | "end_date" | "progress" | "start_date" | "state" | "task_description" | "task_name" | "updated_at" | "created_by" | "program_id" | "submitted_by" | "updated_by";
export type program_taskCreationAttributes = Optional<program_taskAttributes, program_taskOptionalAttributes>;

export class program_task extends Model<program_taskAttributes, program_taskCreationAttributes> implements program_taskAttributes {
  id!: number;
  created_at?: Date;
  deny_reason?: string;
  end_date?: Date;
  progress?: number;
  start_date?: Date;
  state?: string;
  task_description?: string;
  task_name?: string;
  updated_at?: Date;
  created_by?: number;
  program_id?: number;
  submitted_by?: number;
  updated_by?: number;

  // program_task belongsTo program via program_id
  program!: program;
  getProgram!: Sequelize.BelongsToGetAssociationMixin<program>;
  setProgram!: Sequelize.BelongsToSetAssociationMixin<program, programId>;
  createProgram!: Sequelize.BelongsToCreateAssociationMixin<program>;
  // program_task hasMany program_task_attachment via programtask_id
  program_task_attachments!: program_task_attachment[];
  getProgram_task_attachments!: Sequelize.HasManyGetAssociationsMixin<program_task_attachment>;
  setProgram_task_attachments!: Sequelize.HasManySetAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  addProgram_task_attachment!: Sequelize.HasManyAddAssociationMixin<program_task_attachment, program_task_attachmentId>;
  addProgram_task_attachments!: Sequelize.HasManyAddAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  createProgram_task_attachment!: Sequelize.HasManyCreateAssociationMixin<program_task_attachment>;
  removeProgram_task_attachment!: Sequelize.HasManyRemoveAssociationMixin<program_task_attachment, program_task_attachmentId>;
  removeProgram_task_attachments!: Sequelize.HasManyRemoveAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  hasProgram_task_attachment!: Sequelize.HasManyHasAssociationMixin<program_task_attachment, program_task_attachmentId>;
  hasProgram_task_attachments!: Sequelize.HasManyHasAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  countProgram_task_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // program_task hasMany program_task_comment via programtask_id
  program_task_comments!: program_task_comment[];
  getProgram_task_comments!: Sequelize.HasManyGetAssociationsMixin<program_task_comment>;
  setProgram_task_comments!: Sequelize.HasManySetAssociationsMixin<program_task_comment, program_task_commentId>;
  addProgram_task_comment!: Sequelize.HasManyAddAssociationMixin<program_task_comment, program_task_commentId>;
  addProgram_task_comments!: Sequelize.HasManyAddAssociationsMixin<program_task_comment, program_task_commentId>;
  createProgram_task_comment!: Sequelize.HasManyCreateAssociationMixin<program_task_comment>;
  removeProgram_task_comment!: Sequelize.HasManyRemoveAssociationMixin<program_task_comment, program_task_commentId>;
  removeProgram_task_comments!: Sequelize.HasManyRemoveAssociationsMixin<program_task_comment, program_task_commentId>;
  hasProgram_task_comment!: Sequelize.HasManyHasAssociationMixin<program_task_comment, program_task_commentId>;
  hasProgram_task_comments!: Sequelize.HasManyHasAssociationsMixin<program_task_comment, program_task_commentId>;
  countProgram_task_comments!: Sequelize.HasManyCountAssociationsMixin;
  // program_task hasMany program_task_reward via programtask_id
  program_task_rewards!: program_task_reward[];
  getProgram_task_rewards!: Sequelize.HasManyGetAssociationsMixin<program_task_reward>;
  setProgram_task_rewards!: Sequelize.HasManySetAssociationsMixin<program_task_reward, program_task_rewardId>;
  addProgram_task_reward!: Sequelize.HasManyAddAssociationMixin<program_task_reward, program_task_rewardId>;
  addProgram_task_rewards!: Sequelize.HasManyAddAssociationsMixin<program_task_reward, program_task_rewardId>;
  createProgram_task_reward!: Sequelize.HasManyCreateAssociationMixin<program_task_reward>;
  removeProgram_task_reward!: Sequelize.HasManyRemoveAssociationMixin<program_task_reward, program_task_rewardId>;
  removeProgram_task_rewards!: Sequelize.HasManyRemoveAssociationsMixin<program_task_reward, program_task_rewardId>;
  hasProgram_task_reward!: Sequelize.HasManyHasAssociationMixin<program_task_reward, program_task_rewardId>;
  hasProgram_task_rewards!: Sequelize.HasManyHasAssociationsMixin<program_task_reward, program_task_rewardId>;
  countProgram_task_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // program_task hasMany program_task_user via programtask_id
  program_task_users!: program_task_user[];
  getProgram_task_users!: Sequelize.HasManyGetAssociationsMixin<program_task_user>;
  setProgram_task_users!: Sequelize.HasManySetAssociationsMixin<program_task_user, program_task_userId>;
  addProgram_task_user!: Sequelize.HasManyAddAssociationMixin<program_task_user, program_task_userId>;
  addProgram_task_users!: Sequelize.HasManyAddAssociationsMixin<program_task_user, program_task_userId>;
  createProgram_task_user!: Sequelize.HasManyCreateAssociationMixin<program_task_user>;
  removeProgram_task_user!: Sequelize.HasManyRemoveAssociationMixin<program_task_user, program_task_userId>;
  removeProgram_task_users!: Sequelize.HasManyRemoveAssociationsMixin<program_task_user, program_task_userId>;
  hasProgram_task_user!: Sequelize.HasManyHasAssociationMixin<program_task_user, program_task_userId>;
  hasProgram_task_users!: Sequelize.HasManyHasAssociationsMixin<program_task_user, program_task_userId>;
  countProgram_task_users!: Sequelize.HasManyCountAssociationsMixin;
  // program_task belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // program_task belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // program_task belongsTo user via submitted_by
  submitted_by_user!: user;
  getSubmitted_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setSubmitted_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createSubmitted_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program_task {
    return program_task.init({
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
    deny_reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    end_date: {
      type: DataTypes.DATE,
      allowNull: true
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
    task_description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    task_name: {
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
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program',
        key: 'id'
      }
    },
    submitted_by: {
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
    tableName: 'program_task',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK2078xks8iam4stjlhpfp9dwjq",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKclk0pstokbo16ghrfymltgs24",
        fields: [
          { name: "program_id" },
        ]
      },
      {
        name: "FKk7gtn2vglrmd8raqu714y2de5",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKsxx0bunrs25v5shnjqnimjgod",
        fields: [
          { name: "submitted_by" },
        ]
      },
      {
        name: "program_task_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

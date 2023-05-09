import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { program_task, program_taskId } from './program_task';
import type { user, userId } from './user';

export interface program_task_attachmentAttributes {
  id: number;
  created_at?: Date;
  file_name?: string;
  updated_at?: Date;
  created_by?: number;
  programtask_id?: number;
  updated_by?: number;
}

export type program_task_attachmentPk = "id";
export type program_task_attachmentId = program_task_attachment[program_task_attachmentPk];
export type program_task_attachmentOptionalAttributes = "id" | "created_at" | "file_name" | "updated_at" | "created_by" | "programtask_id" | "updated_by";
export type program_task_attachmentCreationAttributes = Optional<program_task_attachmentAttributes, program_task_attachmentOptionalAttributes>;

export class program_task_attachment extends Model<program_task_attachmentAttributes, program_task_attachmentCreationAttributes> implements program_task_attachmentAttributes {
  id!: number;
  created_at?: Date;
  file_name?: string;
  updated_at?: Date;
  created_by?: number;
  programtask_id?: number;
  updated_by?: number;

  // program_task_attachment belongsTo program_task via programtask_id
  programtask!: program_task;
  getProgramtask!: Sequelize.BelongsToGetAssociationMixin<program_task>;
  setProgramtask!: Sequelize.BelongsToSetAssociationMixin<program_task, program_taskId>;
  createProgramtask!: Sequelize.BelongsToCreateAssociationMixin<program_task>;
  // program_task_attachment belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // program_task_attachment belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program_task_attachment {
    return sequelize.define('program_task_attachment', {
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
    file_name: {
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
    programtask_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program_task',
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
    tableName: 'program_task_attachment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK37qqtc3xdfmrxvyp8s6y3aobg",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKmo7bwwh1oushtlcl3yrdrcr1v",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKopsqth5iy9d8hcoue25bigo2x",
        fields: [
          { name: "programtask_id" },
        ]
      },
      {
        name: "program_task_attachment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof program_task_attachment;
  }
}

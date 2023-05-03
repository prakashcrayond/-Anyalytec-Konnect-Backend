import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { program_task, program_taskId } from './program_task';
import type { user, userId } from './user';

export interface program_task_commentAttributes {
  id: number;
  comment?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  programtask_id?: number;
  updated_by?: number;
}

export type program_task_commentPk = "id";
export type program_task_commentId = program_task_comment[program_task_commentPk];
export type program_task_commentOptionalAttributes = "id" | "comment" | "created_at" | "updated_at" | "created_by" | "programtask_id" | "updated_by";
export type program_task_commentCreationAttributes = Optional<program_task_commentAttributes, program_task_commentOptionalAttributes>;

export class program_task_comment extends Model<program_task_commentAttributes, program_task_commentCreationAttributes> implements program_task_commentAttributes {
  id!: number;
  comment?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  programtask_id?: number;
  updated_by?: number;

  // program_task_comment belongsTo program_task via programtask_id
  programtask!: program_task;
  getProgramtask!: Sequelize.BelongsToGetAssociationMixin<program_task>;
  setProgramtask!: Sequelize.BelongsToSetAssociationMixin<program_task, program_taskId>;
  createProgramtask!: Sequelize.BelongsToCreateAssociationMixin<program_task>;
  // program_task_comment belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // program_task_comment belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program_task_comment {
    return program_task_comment.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comment: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
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
    sequelize,
    tableName: 'program_task_comment',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK3u0tf0tm4v4bn1givsuotjnbt",
        fields: [
          { name: "programtask_id" },
        ]
      },
      {
        name: "FKq7urepa2c8yho9qvsf2kr7vw9",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKqym5v5r39lv46gp76y70b2y66",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "program_task_comment_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

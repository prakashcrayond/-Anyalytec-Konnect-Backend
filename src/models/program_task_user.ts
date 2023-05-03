import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { program_task, program_taskId } from './program_task';
import type { user, userId } from './user';

export interface program_task_userAttributes {
  id: number;
  programtask_id?: number;
  user_id?: number;
}

export type program_task_userPk = "id";
export type program_task_userId = program_task_user[program_task_userPk];
export type program_task_userOptionalAttributes = "id" | "programtask_id" | "user_id";
export type program_task_userCreationAttributes = Optional<program_task_userAttributes, program_task_userOptionalAttributes>;

export class program_task_user extends Model<program_task_userAttributes, program_task_userCreationAttributes> implements program_task_userAttributes {
  id!: number;
  programtask_id?: number;
  user_id?: number;

  // program_task_user belongsTo program_task via programtask_id
  programtask!: program_task;
  getProgramtask!: Sequelize.BelongsToGetAssociationMixin<program_task>;
  setProgramtask!: Sequelize.BelongsToSetAssociationMixin<program_task, program_taskId>;
  createProgramtask!: Sequelize.BelongsToCreateAssociationMixin<program_task>;
  // program_task_user belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program_task_user {
    return program_task_user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    programtask_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program_task',
        key: 'id'
      }
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'program_task_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKlh4ld1cbqdco3keu8hh0sfy4x",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FKnufbsp7fgpy4ms25lci4f32i2",
        fields: [
          { name: "programtask_id" },
        ]
      },
      {
        name: "program_task_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

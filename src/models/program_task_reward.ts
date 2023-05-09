import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { program_task, program_taskId } from './program_task';

export interface program_task_rewardAttributes {
  id: number;
  reward: number;
  type: number;
  programtask_id?: number;
}

export type program_task_rewardPk = "id";
export type program_task_rewardId = program_task_reward[program_task_rewardPk];
export type program_task_rewardOptionalAttributes = "id" | "programtask_id";
export type program_task_rewardCreationAttributes = Optional<program_task_rewardAttributes, program_task_rewardOptionalAttributes>;

export class program_task_reward extends Model<program_task_rewardAttributes, program_task_rewardCreationAttributes> implements program_task_rewardAttributes {
  id!: number;
  reward!: number;
  type!: number;
  programtask_id?: number;

  // program_task_reward belongsTo program_task via programtask_id
  programtask!: program_task;
  getProgramtask!: Sequelize.BelongsToGetAssociationMixin<program_task>;
  setProgramtask!: Sequelize.BelongsToSetAssociationMixin<program_task, program_taskId>;
  createProgramtask!: Sequelize.BelongsToCreateAssociationMixin<program_task>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program_task_reward {
    return sequelize.define('program_task_reward', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    reward: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    programtask_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program_task',
        key: 'id'
      }
    }
  }, {
    tableName: 'program_task_reward',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK3htue8yita7ufc2c92dh0qef8",
        fields: [
          { name: "programtask_id" },
        ]
      },
      {
        name: "program_task_reward_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof program_task_reward;
  }
}

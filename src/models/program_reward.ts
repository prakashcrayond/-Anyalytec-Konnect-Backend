import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { program, programId } from './program';

export interface program_rewardAttributes {
  id: number;
  reward: number;
  type: number;
  program_id?: number;
}

export type program_rewardPk = "id";
export type program_rewardId = program_reward[program_rewardPk];
export type program_rewardOptionalAttributes = "id" | "program_id";
export type program_rewardCreationAttributes = Optional<program_rewardAttributes, program_rewardOptionalAttributes>;

export class program_reward extends Model<program_rewardAttributes, program_rewardCreationAttributes> implements program_rewardAttributes {
  id!: number;
  reward!: number;
  type!: number;
  program_id?: number;

  // program_reward belongsTo program via program_id
  program!: program;
  getProgram!: Sequelize.BelongsToGetAssociationMixin<program>;
  setProgram!: Sequelize.BelongsToSetAssociationMixin<program, programId>;
  createProgram!: Sequelize.BelongsToCreateAssociationMixin<program>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program_reward {
    return program_reward.init({
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
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'program_reward',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKlov1r65wv65vq3jdtewln0pbu",
        fields: [
          { name: "program_id" },
        ]
      },
      {
        name: "program_reward_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

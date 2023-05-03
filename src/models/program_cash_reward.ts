import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface program_cash_rewardAttributes {
  id: number;
  amount?: number;
  created_at?: Date;
  source_reso_id?: number;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
  user_id?: number;
}

export type program_cash_rewardPk = "id";
export type program_cash_rewardId = program_cash_reward[program_cash_rewardPk];
export type program_cash_rewardOptionalAttributes = "id" | "amount" | "created_at" | "source_reso_id" | "updated_at" | "created_by" | "updated_by" | "user_id";
export type program_cash_rewardCreationAttributes = Optional<program_cash_rewardAttributes, program_cash_rewardOptionalAttributes>;

export class program_cash_reward extends Model<program_cash_rewardAttributes, program_cash_rewardCreationAttributes> implements program_cash_rewardAttributes {
  id!: number;
  amount?: number;
  created_at?: Date;
  source_reso_id?: number;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
  user_id?: number;

  // program_cash_reward belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // program_cash_reward belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // program_cash_reward belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program_cash_reward {
    return program_cash_reward.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    amount: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    source_reso_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
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
    tableName: 'program_cash_reward',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKgc857ax7pp06tsdwrx53wid2j",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKjfa5qfa44ud7b6tsnocnb7mbg",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKpwtfq0vk08b3cth2r1y3c4u5y",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "program_cash_reward_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

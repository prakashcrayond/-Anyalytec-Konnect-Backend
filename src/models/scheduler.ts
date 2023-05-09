import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { award, awardId } from './award';
import type { user, userId } from './user';

export interface schedulerAttributes {
  id: number;
  created_at?: Date;
  date1?: string;
  date2?: string;
  day: number;
  details?: string;
  entity_type?: string;
  last_run?: Date;
  month: number;
  next_run?: Date;
  time?: string;
  type?: string;
  updated_at?: Date;
  award_id?: number;
  created_by?: number;
  judge_id?: number;
  nominator_id?: number;
  updated_by?: number;
}

export type schedulerPk = "id";
export type schedulerId = scheduler[schedulerPk];
export type schedulerOptionalAttributes = "id" | "created_at" | "date1" | "date2" | "details" | "entity_type" | "last_run" | "next_run" | "time" | "type" | "updated_at" | "award_id" | "created_by" | "judge_id" | "nominator_id" | "updated_by";
export type schedulerCreationAttributes = Optional<schedulerAttributes, schedulerOptionalAttributes>;

export class scheduler extends Model<schedulerAttributes, schedulerCreationAttributes> implements schedulerAttributes {
  id!: number;
  created_at?: Date;
  date1?: string;
  date2?: string;
  day!: number;
  details?: string;
  entity_type?: string;
  last_run?: Date;
  month!: number;
  next_run?: Date;
  time?: string;
  type?: string;
  updated_at?: Date;
  award_id?: number;
  created_by?: number;
  judge_id?: number;
  nominator_id?: number;
  updated_by?: number;

  // scheduler belongsTo award via award_id
  award!: award;
  getAward!: Sequelize.BelongsToGetAssociationMixin<award>;
  setAward!: Sequelize.BelongsToSetAssociationMixin<award, awardId>;
  createAward!: Sequelize.BelongsToCreateAssociationMixin<award>;
  // scheduler belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // scheduler belongsTo user via nominator_id
  nominator!: user;
  getNominator!: Sequelize.BelongsToGetAssociationMixin<user>;
  setNominator!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createNominator!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // scheduler belongsTo user via judge_id
  judge!: user;
  getJudge!: Sequelize.BelongsToGetAssociationMixin<user>;
  setJudge!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createJudge!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // scheduler belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof scheduler {
    return sequelize.define('scheduler', {
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
    date1: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    date2: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    day: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    details: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    entity_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: true
    },
    month: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    next_run: {
      type: DataTypes.DATE,
      allowNull: true
    },
    time: {
      type: DataTypes.TIME,
      allowNull: true
    },
    type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    award_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'award',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    judge_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    nominator_id: {
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
    tableName: 'scheduler',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKa7gilww5sfaiiyd5q7phof7g5",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKlk92qhsf95uw1vdopqjjj4krs",
        fields: [
          { name: "nominator_id" },
        ]
      },
      {
        name: "FKp9dnst8ls28xwuwcalc3u3e2b",
        fields: [
          { name: "judge_id" },
        ]
      },
      {
        name: "FKryisv43l524n6wp2fr64me3ea",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKtpd8onwjypecwxpmvlo5au1ji",
        fields: [
          { name: "award_id" },
        ]
      },
      {
        name: "scheduler_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof scheduler;
  }
}

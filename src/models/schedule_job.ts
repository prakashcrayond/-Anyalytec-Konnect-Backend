import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface schedule_jobAttributes {
  id: number;
  created_at?: Date;
  job_id: number;
  job_type?: string;
  message?: string;
  status?: string;
  time?: Date;
  updated_at?: Date;
}

export type schedule_jobPk = "id";
export type schedule_jobId = schedule_job[schedule_jobPk];
export type schedule_jobOptionalAttributes = "id" | "created_at" | "job_type" | "message" | "status" | "time" | "updated_at";
export type schedule_jobCreationAttributes = Optional<schedule_jobAttributes, schedule_jobOptionalAttributes>;

export class schedule_job extends Model<schedule_jobAttributes, schedule_jobCreationAttributes> implements schedule_jobAttributes {
  id!: number;
  created_at?: Date;
  job_id!: number;
  job_type?: string;
  message?: string;
  status?: string;
  time?: Date;
  updated_at?: Date;


  static initModel(sequelize: Sequelize.Sequelize): typeof schedule_job {
    return sequelize.define('schedule_job', {
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
    job_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    job_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    time: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'schedule_job',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "schedule_job_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof schedule_job;
  }
}

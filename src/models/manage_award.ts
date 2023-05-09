import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { award, awardId } from './award';
import type { department, departmentId } from './department';
import type { manage_award_nomination, manage_award_nominationId } from './manage_award_nomination';
import type { user, userId } from './user';

export interface manage_awardAttributes {
  id: number;
  created_at?: Date;
  ends_on?: string;
  nominated: boolean;
  recognized: boolean;
  sub_type?: string;
  type?: string;
  updated_at?: Date;
  award_id?: number;
  created_by?: number;
  department_id?: number;
  judge_id?: number;
  nominator_id?: number;
  updated_by?: number;
}

export type manage_awardPk = "id";
export type manage_awardId = manage_award[manage_awardPk];
export type manage_awardOptionalAttributes = "id" | "created_at" | "ends_on" | "sub_type" | "type" | "updated_at" | "award_id" | "created_by" | "department_id" | "judge_id" | "nominator_id" | "updated_by";
export type manage_awardCreationAttributes = Optional<manage_awardAttributes, manage_awardOptionalAttributes>;

export class manage_award extends Model<manage_awardAttributes, manage_awardCreationAttributes> implements manage_awardAttributes {
  id!: number;
  created_at?: Date;
  ends_on?: string;
  nominated!: boolean;
  recognized!: boolean;
  sub_type?: string;
  type?: string;
  updated_at?: Date;
  award_id?: number;
  created_by?: number;
  department_id?: number;
  judge_id?: number;
  nominator_id?: number;
  updated_by?: number;

  // manage_award belongsTo award via award_id
  award!: award;
  getAward!: Sequelize.BelongsToGetAssociationMixin<award>;
  setAward!: Sequelize.BelongsToSetAssociationMixin<award, awardId>;
  createAward!: Sequelize.BelongsToCreateAssociationMixin<award>;
  // manage_award belongsTo department via department_id
  department!: department;
  getDepartment!: Sequelize.BelongsToGetAssociationMixin<department>;
  setDepartment!: Sequelize.BelongsToSetAssociationMixin<department, departmentId>;
  createDepartment!: Sequelize.BelongsToCreateAssociationMixin<department>;
  // manage_award hasMany manage_award_nomination via manage_awards_id
  manage_award_nominations!: manage_award_nomination[];
  getManage_award_nominations!: Sequelize.HasManyGetAssociationsMixin<manage_award_nomination>;
  setManage_award_nominations!: Sequelize.HasManySetAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  addManage_award_nomination!: Sequelize.HasManyAddAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  addManage_award_nominations!: Sequelize.HasManyAddAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  createManage_award_nomination!: Sequelize.HasManyCreateAssociationMixin<manage_award_nomination>;
  removeManage_award_nomination!: Sequelize.HasManyRemoveAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  removeManage_award_nominations!: Sequelize.HasManyRemoveAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  hasManage_award_nomination!: Sequelize.HasManyHasAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  hasManage_award_nominations!: Sequelize.HasManyHasAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  countManage_award_nominations!: Sequelize.HasManyCountAssociationsMixin;
  // manage_award belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // manage_award belongsTo user via judge_id
  judge!: user;
  getJudge!: Sequelize.BelongsToGetAssociationMixin<user>;
  setJudge!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createJudge!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // manage_award belongsTo user via nominator_id
  nominator!: user;
  getNominator!: Sequelize.BelongsToGetAssociationMixin<user>;
  setNominator!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createNominator!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // manage_award belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof manage_award {
    return sequelize.define('manage_award', {
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
    ends_on: {
      type: DataTypes.DATEONLY,
      allowNull: true
    },
    nominated: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    recognized: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    sub_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
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
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'department',
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
    tableName: 'manage_awards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK2o4pw08tvq2owgc4a5pl7o6v0",
        fields: [
          { name: "award_id" },
        ]
      },
      {
        name: "FK36scj3rqqfe5wgyiepp4tuup4",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FK7v3dcyterv6rm5d56dn7g1fhx",
        fields: [
          { name: "judge_id" },
        ]
      },
      {
        name: "FK9vb3iqmttr3b58r5p26injhpf",
        fields: [
          { name: "department_id" },
        ]
      },
      {
        name: "FKb2i7ohuvprgdc4jvhcswut8uq",
        fields: [
          { name: "nominator_id" },
        ]
      },
      {
        name: "FKmqqan85fepm5wipoi9oa6mhus",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "manage_awards_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof manage_award;
  }
}

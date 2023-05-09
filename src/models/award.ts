import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { library_award, library_awardId } from './library_award';
import type { manage_award, manage_awardId } from './manage_award';
import type { scheduler, schedulerId } from './scheduler';
import type { user, userId } from './user';

export interface awardAttributes {
  id: number;
  active?: boolean;
  award_file_name?: string;
  created_at?: Date;
  name?: string;
  points: number;
  updated_at?: Date;
  created_by?: number;
  library_awards?: number;
  updated_by?: number;
}

export type awardPk = "id";
export type awardId = award[awardPk];
export type awardOptionalAttributes = "id" | "active" | "award_file_name" | "created_at" | "name" | "updated_at" | "created_by" | "library_awards" | "updated_by";
export type awardCreationAttributes = Optional<awardAttributes, awardOptionalAttributes>;

export class award extends Model<awardAttributes, awardCreationAttributes> implements awardAttributes {
  id!: number;
  active?: boolean;
  award_file_name?: string;
  created_at?: Date;
  name?: string;
  points!: number;
  updated_at?: Date;
  created_by?: number;
  library_awards?: number;
  updated_by?: number;

  // award hasMany manage_award via award_id
  manage_awards!: manage_award[];
  getManage_awards!: Sequelize.HasManyGetAssociationsMixin<manage_award>;
  setManage_awards!: Sequelize.HasManySetAssociationsMixin<manage_award, manage_awardId>;
  addManage_award!: Sequelize.HasManyAddAssociationMixin<manage_award, manage_awardId>;
  addManage_awards!: Sequelize.HasManyAddAssociationsMixin<manage_award, manage_awardId>;
  createManage_award!: Sequelize.HasManyCreateAssociationMixin<manage_award>;
  removeManage_award!: Sequelize.HasManyRemoveAssociationMixin<manage_award, manage_awardId>;
  removeManage_awards!: Sequelize.HasManyRemoveAssociationsMixin<manage_award, manage_awardId>;
  hasManage_award!: Sequelize.HasManyHasAssociationMixin<manage_award, manage_awardId>;
  hasManage_awards!: Sequelize.HasManyHasAssociationsMixin<manage_award, manage_awardId>;
  countManage_awards!: Sequelize.HasManyCountAssociationsMixin;
  // award hasMany scheduler via award_id
  schedulers!: scheduler[];
  getSchedulers!: Sequelize.HasManyGetAssociationsMixin<scheduler>;
  setSchedulers!: Sequelize.HasManySetAssociationsMixin<scheduler, schedulerId>;
  addScheduler!: Sequelize.HasManyAddAssociationMixin<scheduler, schedulerId>;
  addSchedulers!: Sequelize.HasManyAddAssociationsMixin<scheduler, schedulerId>;
  createScheduler!: Sequelize.HasManyCreateAssociationMixin<scheduler>;
  removeScheduler!: Sequelize.HasManyRemoveAssociationMixin<scheduler, schedulerId>;
  removeSchedulers!: Sequelize.HasManyRemoveAssociationsMixin<scheduler, schedulerId>;
  hasScheduler!: Sequelize.HasManyHasAssociationMixin<scheduler, schedulerId>;
  hasSchedulers!: Sequelize.HasManyHasAssociationsMixin<scheduler, schedulerId>;
  countSchedulers!: Sequelize.HasManyCountAssociationsMixin;
  // award belongsTo library_award via library_awards
  library_awards_library_award!: library_award;
  getLibrary_awards_library_award!: Sequelize.BelongsToGetAssociationMixin<library_award>;
  setLibrary_awards_library_award!: Sequelize.BelongsToSetAssociationMixin<library_award, library_awardId>;
  createLibrary_awards_library_award!: Sequelize.BelongsToCreateAssociationMixin<library_award>;
  // award belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // award belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof award {
    return sequelize.define('award', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    award_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    points: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    library_awards: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'library_awards',
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
    tableName: 'award',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK5llby1cccy45whybut2svfbp4",
        fields: [
          { name: "library_awards" },
        ]
      },
      {
        name: "FKbo2mudhswusw28yb9ht3p7ffi",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKkxhucy3rb0y14ovosaj7qhfqw",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "award_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof award;
  }
}

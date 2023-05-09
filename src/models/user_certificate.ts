import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { certificate, certificateId } from './certificate';
import type { user, userId } from './user';

export interface user_certificateAttributes {
  id: number;
  created_at?: Date;
  message?: string;
  updated_at?: Date;
  user_certificate_file_name?: string;
  certificate_id?: number;
  created_by?: number;
  given_by?: number;
  updated_by?: number;
  user_id?: number;
}

export type user_certificatePk = "id";
export type user_certificateId = user_certificate[user_certificatePk];
export type user_certificateOptionalAttributes = "id" | "created_at" | "message" | "updated_at" | "user_certificate_file_name" | "certificate_id" | "created_by" | "given_by" | "updated_by" | "user_id";
export type user_certificateCreationAttributes = Optional<user_certificateAttributes, user_certificateOptionalAttributes>;

export class user_certificate extends Model<user_certificateAttributes, user_certificateCreationAttributes> implements user_certificateAttributes {
  id!: number;
  created_at?: Date;
  message?: string;
  updated_at?: Date;
  user_certificate_file_name?: string;
  certificate_id?: number;
  created_by?: number;
  given_by?: number;
  updated_by?: number;
  user_id?: number;

  // user_certificate belongsTo certificate via certificate_id
  certificate!: certificate;
  getCertificate!: Sequelize.BelongsToGetAssociationMixin<certificate>;
  setCertificate!: Sequelize.BelongsToSetAssociationMixin<certificate, certificateId>;
  createCertificate!: Sequelize.BelongsToCreateAssociationMixin<certificate>;
  // user_certificate belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_certificate belongsTo user via given_by
  given_by_user!: user;
  getGiven_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setGiven_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createGiven_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_certificate belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_certificate belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_certificate {
    return sequelize.define('user_certificate', {
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
    message: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_certificate_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    certificate_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'certificate',
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
    given_by: {
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
    tableName: 'user_certificate',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK1c2o2kfhyflgx82xpphlg286p",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FKlmw4h71w4kn4i4yvg7mnr173x",
        fields: [
          { name: "given_by" },
        ]
      },
      {
        name: "FKp30plgq2yr5tclgxr3fjoa566",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKslh00axaasc0kid27uypjiiov",
        fields: [
          { name: "certificate_id" },
        ]
      },
      {
        name: "FKyd196recsw7ecdcssps8xrik",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "user_certificate_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof user_certificate;
  }
}

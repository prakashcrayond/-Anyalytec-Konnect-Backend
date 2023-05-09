import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user_certificate, user_certificateId } from './user_certificate';
import type { user, userId } from './user';

export interface certificateAttributes {
  id: number;
  certificate_file_name?: string;
  certificate_image_file_name?: string;
  created_at?: Date;
  name?: string;
  parameters?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type certificatePk = "id";
export type certificateId = certificate[certificatePk];
export type certificateOptionalAttributes = "id" | "certificate_file_name" | "certificate_image_file_name" | "created_at" | "name" | "parameters" | "updated_at" | "created_by" | "updated_by";
export type certificateCreationAttributes = Optional<certificateAttributes, certificateOptionalAttributes>;

export class certificate extends Model<certificateAttributes, certificateCreationAttributes> implements certificateAttributes {
  id!: number;
  certificate_file_name?: string;
  certificate_image_file_name?: string;
  created_at?: Date;
  name?: string;
  parameters?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // certificate hasMany user_certificate via certificate_id
  user_certificates!: user_certificate[];
  getUser_certificates!: Sequelize.HasManyGetAssociationsMixin<user_certificate>;
  setUser_certificates!: Sequelize.HasManySetAssociationsMixin<user_certificate, user_certificateId>;
  addUser_certificate!: Sequelize.HasManyAddAssociationMixin<user_certificate, user_certificateId>;
  addUser_certificates!: Sequelize.HasManyAddAssociationsMixin<user_certificate, user_certificateId>;
  createUser_certificate!: Sequelize.HasManyCreateAssociationMixin<user_certificate>;
  removeUser_certificate!: Sequelize.HasManyRemoveAssociationMixin<user_certificate, user_certificateId>;
  removeUser_certificates!: Sequelize.HasManyRemoveAssociationsMixin<user_certificate, user_certificateId>;
  hasUser_certificate!: Sequelize.HasManyHasAssociationMixin<user_certificate, user_certificateId>;
  hasUser_certificates!: Sequelize.HasManyHasAssociationsMixin<user_certificate, user_certificateId>;
  countUser_certificates!: Sequelize.HasManyCountAssociationsMixin;
  // certificate belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // certificate belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof certificate {
    return sequelize.define('certificate', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    certificate_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    certificate_image_file_name: {
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
    parameters: {
      type: DataTypes.TEXT,
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
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'certificate',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK7crhxy64ug0yefhx6c84658in",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKf5u12j9mtirs0jsdd4qswa7ma",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "certificate_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof certificate;
  }
}

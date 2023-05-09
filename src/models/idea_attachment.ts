import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { idea, ideaId } from './idea';
import type { user, userId } from './user';

export interface idea_attachmentAttributes {
  id: number;
  created_at?: Date;
  idea_attachments_file_name?: string;
  updated_at?: Date;
  created_by?: number;
  idea_id?: number;
  updated_by?: number;
}

export type idea_attachmentPk = "id";
export type idea_attachmentId = idea_attachment[idea_attachmentPk];
export type idea_attachmentOptionalAttributes = "id" | "created_at" | "idea_attachments_file_name" | "updated_at" | "created_by" | "idea_id" | "updated_by";
export type idea_attachmentCreationAttributes = Optional<idea_attachmentAttributes, idea_attachmentOptionalAttributes>;

export class idea_attachment extends Model<idea_attachmentAttributes, idea_attachmentCreationAttributes> implements idea_attachmentAttributes {
  id!: number;
  created_at?: Date;
  idea_attachments_file_name?: string;
  updated_at?: Date;
  created_by?: number;
  idea_id?: number;
  updated_by?: number;

  // idea_attachment belongsTo idea via idea_id
  idea!: idea;
  getIdea!: Sequelize.BelongsToGetAssociationMixin<idea>;
  setIdea!: Sequelize.BelongsToSetAssociationMixin<idea, ideaId>;
  createIdea!: Sequelize.BelongsToCreateAssociationMixin<idea>;
  // idea_attachment belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // idea_attachment belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof idea_attachment {
    return sequelize.define('idea_attachment', {
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
    idea_attachments_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
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
    idea_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'idea',
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
    tableName: 'idea_attachments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKi8pecftpxiv2ntyxjees1w31e",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKs3vdu5jj39cn8fn340vvi39ea",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKt1tnssrjn9xoijy572nokccrv",
        fields: [
          { name: "idea_id" },
        ]
      },
      {
        name: "idea_attachments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof idea_attachment;
  }
}

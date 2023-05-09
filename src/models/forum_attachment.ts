import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forum, forumId } from './forum';
import type { user, userId } from './user';

export interface forum_attachmentAttributes {
  id: number;
  created_at?: Date;
  forum_attachments_file_name?: string;
  updated_at?: Date;
  created_by?: number;
  forum_id?: number;
  updated_by?: number;
}

export type forum_attachmentPk = "id";
export type forum_attachmentId = forum_attachment[forum_attachmentPk];
export type forum_attachmentOptionalAttributes = "id" | "created_at" | "forum_attachments_file_name" | "updated_at" | "created_by" | "forum_id" | "updated_by";
export type forum_attachmentCreationAttributes = Optional<forum_attachmentAttributes, forum_attachmentOptionalAttributes>;

export class forum_attachment extends Model<forum_attachmentAttributes, forum_attachmentCreationAttributes> implements forum_attachmentAttributes {
  id!: number;
  created_at?: Date;
  forum_attachments_file_name?: string;
  updated_at?: Date;
  created_by?: number;
  forum_id?: number;
  updated_by?: number;

  // forum_attachment belongsTo forum via forum_id
  forum!: forum;
  getForum!: Sequelize.BelongsToGetAssociationMixin<forum>;
  setForum!: Sequelize.BelongsToSetAssociationMixin<forum, forumId>;
  createForum!: Sequelize.BelongsToCreateAssociationMixin<forum>;
  // forum_attachment belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // forum_attachment belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof forum_attachment {
    return sequelize.define('forum_attachment', {
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
    forum_attachments_file_name: {
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
    forum_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'forum',
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
    tableName: 'forum_attachments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKc5v4du6e7a3hbflugjue9r8gm",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKg5p16dfwluamtn53nxe8hmmbu",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKhno72xu0ki5n8ly2jv3bd03gt",
        fields: [
          { name: "forum_id" },
        ]
      },
      {
        name: "forum_attachments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof forum_attachment;
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { idea_comment, idea_commentId } from './idea_comment';
import type { user, userId } from './user';

export interface ideacomments_attachmentAttributes {
  id: number;
  attach_file_name?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  ideacomments_id?: number;
  updated_by?: number;
}

export type ideacomments_attachmentPk = "id";
export type ideacomments_attachmentId = ideacomments_attachment[ideacomments_attachmentPk];
export type ideacomments_attachmentOptionalAttributes = "id" | "attach_file_name" | "created_at" | "updated_at" | "created_by" | "ideacomments_id" | "updated_by";
export type ideacomments_attachmentCreationAttributes = Optional<ideacomments_attachmentAttributes, ideacomments_attachmentOptionalAttributes>;

export class ideacomments_attachment extends Model<ideacomments_attachmentAttributes, ideacomments_attachmentCreationAttributes> implements ideacomments_attachmentAttributes {
  id!: number;
  attach_file_name?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  ideacomments_id?: number;
  updated_by?: number;

  // ideacomments_attachment belongsTo idea_comment via ideacomments_id
  ideacomment!: idea_comment;
  getIdeacomment!: Sequelize.BelongsToGetAssociationMixin<idea_comment>;
  setIdeacomment!: Sequelize.BelongsToSetAssociationMixin<idea_comment, idea_commentId>;
  createIdeacomment!: Sequelize.BelongsToCreateAssociationMixin<idea_comment>;
  // ideacomments_attachment belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ideacomments_attachment belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ideacomments_attachment {
    return sequelize.define('ideacomments_attachment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    attach_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
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
    ideacomments_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'idea_comments',
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
    tableName: 'ideacomments_attachments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKgwmlib8obbns0h45r51htm175",
        fields: [
          { name: "ideacomments_id" },
        ]
      },
      {
        name: "FKkhgdbgosyma5s3rxfgcrvt1e5",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKlx2rb2pad6t51m1x8ki7bojj2",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "ideacomments_attachments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof ideacomments_attachment;
  }
}

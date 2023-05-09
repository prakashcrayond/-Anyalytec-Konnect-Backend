import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { idea, ideaId } from './idea';
import type { ideacomments_attachment, ideacomments_attachmentId } from './ideacomments_attachment';
import type { user, userId } from './user';

export interface idea_commentAttributes {
  id: number;
  comments?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  idea_id?: number;
  updated_by?: number;
}

export type idea_commentPk = "id";
export type idea_commentId = idea_comment[idea_commentPk];
export type idea_commentOptionalAttributes = "id" | "comments" | "created_at" | "updated_at" | "created_by" | "idea_id" | "updated_by";
export type idea_commentCreationAttributes = Optional<idea_commentAttributes, idea_commentOptionalAttributes>;

export class idea_comment extends Model<idea_commentAttributes, idea_commentCreationAttributes> implements idea_commentAttributes {
  id!: number;
  comments?: string;
  created_at?: Date;
  updated_at?: Date;
  created_by?: number;
  idea_id?: number;
  updated_by?: number;

  // idea_comment belongsTo idea via idea_id
  idea!: idea;
  getIdea!: Sequelize.BelongsToGetAssociationMixin<idea>;
  setIdea!: Sequelize.BelongsToSetAssociationMixin<idea, ideaId>;
  createIdea!: Sequelize.BelongsToCreateAssociationMixin<idea>;
  // idea_comment hasMany ideacomments_attachment via ideacomments_id
  ideacomments_attachments!: ideacomments_attachment[];
  getIdeacomments_attachments!: Sequelize.HasManyGetAssociationsMixin<ideacomments_attachment>;
  setIdeacomments_attachments!: Sequelize.HasManySetAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  addIdeacomments_attachment!: Sequelize.HasManyAddAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  addIdeacomments_attachments!: Sequelize.HasManyAddAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  createIdeacomments_attachment!: Sequelize.HasManyCreateAssociationMixin<ideacomments_attachment>;
  removeIdeacomments_attachment!: Sequelize.HasManyRemoveAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  removeIdeacomments_attachments!: Sequelize.HasManyRemoveAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  hasIdeacomments_attachment!: Sequelize.HasManyHasAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  hasIdeacomments_attachments!: Sequelize.HasManyHasAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  countIdeacomments_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // idea_comment belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // idea_comment belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof idea_comment {
    return sequelize.define('idea_comment', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    comments: {
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
    tableName: 'idea_comments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKfbdl6r6i3mmyawt8j6a7a5d0a",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKge7yc7ifqfkof15u0py367sp0",
        fields: [
          { name: "idea_id" },
        ]
      },
      {
        name: "FKrmvb9yqtu82f8t3qsl9rlylfv",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "idea_comments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof idea_comment;
  }
}

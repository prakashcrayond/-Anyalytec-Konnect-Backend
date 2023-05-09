import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forum_attachment, forum_attachmentId } from './forum_attachment';
import type { forum_department, forum_departmentId } from './forum_department';
import type { forum_following, forum_followingId } from './forum_following';
import type { forum_like, forum_likeId } from './forum_like';
import type { forum_read, forum_readId } from './forum_read';
import type { forumcomment, forumcommentId } from './forumcomment';
import type { user, userId } from './user';

export interface forumAttributes {
  id: number;
  active?: boolean;
  created_at?: Date;
  description?: string;
  title?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type forumPk = "id";
export type forumId = forum[forumPk];
export type forumOptionalAttributes = "id" | "active" | "created_at" | "description" | "title" | "updated_at" | "created_by" | "updated_by";
export type forumCreationAttributes = Optional<forumAttributes, forumOptionalAttributes>;

export class forum extends Model<forumAttributes, forumCreationAttributes> implements forumAttributes {
  id!: number;
  active?: boolean;
  created_at?: Date;
  description?: string;
  title?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // forum hasMany forum_attachment via forum_id
  forum_attachments!: forum_attachment[];
  getForum_attachments!: Sequelize.HasManyGetAssociationsMixin<forum_attachment>;
  setForum_attachments!: Sequelize.HasManySetAssociationsMixin<forum_attachment, forum_attachmentId>;
  addForum_attachment!: Sequelize.HasManyAddAssociationMixin<forum_attachment, forum_attachmentId>;
  addForum_attachments!: Sequelize.HasManyAddAssociationsMixin<forum_attachment, forum_attachmentId>;
  createForum_attachment!: Sequelize.HasManyCreateAssociationMixin<forum_attachment>;
  removeForum_attachment!: Sequelize.HasManyRemoveAssociationMixin<forum_attachment, forum_attachmentId>;
  removeForum_attachments!: Sequelize.HasManyRemoveAssociationsMixin<forum_attachment, forum_attachmentId>;
  hasForum_attachment!: Sequelize.HasManyHasAssociationMixin<forum_attachment, forum_attachmentId>;
  hasForum_attachments!: Sequelize.HasManyHasAssociationsMixin<forum_attachment, forum_attachmentId>;
  countForum_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // forum hasMany forum_department via forum_id
  forum_departments!: forum_department[];
  getForum_departments!: Sequelize.HasManyGetAssociationsMixin<forum_department>;
  setForum_departments!: Sequelize.HasManySetAssociationsMixin<forum_department, forum_departmentId>;
  addForum_department!: Sequelize.HasManyAddAssociationMixin<forum_department, forum_departmentId>;
  addForum_departments!: Sequelize.HasManyAddAssociationsMixin<forum_department, forum_departmentId>;
  createForum_department!: Sequelize.HasManyCreateAssociationMixin<forum_department>;
  removeForum_department!: Sequelize.HasManyRemoveAssociationMixin<forum_department, forum_departmentId>;
  removeForum_departments!: Sequelize.HasManyRemoveAssociationsMixin<forum_department, forum_departmentId>;
  hasForum_department!: Sequelize.HasManyHasAssociationMixin<forum_department, forum_departmentId>;
  hasForum_departments!: Sequelize.HasManyHasAssociationsMixin<forum_department, forum_departmentId>;
  countForum_departments!: Sequelize.HasManyCountAssociationsMixin;
  // forum hasMany forum_following via forum_id
  forum_followings!: forum_following[];
  getForum_followings!: Sequelize.HasManyGetAssociationsMixin<forum_following>;
  setForum_followings!: Sequelize.HasManySetAssociationsMixin<forum_following, forum_followingId>;
  addForum_following!: Sequelize.HasManyAddAssociationMixin<forum_following, forum_followingId>;
  addForum_followings!: Sequelize.HasManyAddAssociationsMixin<forum_following, forum_followingId>;
  createForum_following!: Sequelize.HasManyCreateAssociationMixin<forum_following>;
  removeForum_following!: Sequelize.HasManyRemoveAssociationMixin<forum_following, forum_followingId>;
  removeForum_followings!: Sequelize.HasManyRemoveAssociationsMixin<forum_following, forum_followingId>;
  hasForum_following!: Sequelize.HasManyHasAssociationMixin<forum_following, forum_followingId>;
  hasForum_followings!: Sequelize.HasManyHasAssociationsMixin<forum_following, forum_followingId>;
  countForum_followings!: Sequelize.HasManyCountAssociationsMixin;
  // forum hasMany forum_like via forum_id
  forum_likes!: forum_like[];
  getForum_likes!: Sequelize.HasManyGetAssociationsMixin<forum_like>;
  setForum_likes!: Sequelize.HasManySetAssociationsMixin<forum_like, forum_likeId>;
  addForum_like!: Sequelize.HasManyAddAssociationMixin<forum_like, forum_likeId>;
  addForum_likes!: Sequelize.HasManyAddAssociationsMixin<forum_like, forum_likeId>;
  createForum_like!: Sequelize.HasManyCreateAssociationMixin<forum_like>;
  removeForum_like!: Sequelize.HasManyRemoveAssociationMixin<forum_like, forum_likeId>;
  removeForum_likes!: Sequelize.HasManyRemoveAssociationsMixin<forum_like, forum_likeId>;
  hasForum_like!: Sequelize.HasManyHasAssociationMixin<forum_like, forum_likeId>;
  hasForum_likes!: Sequelize.HasManyHasAssociationsMixin<forum_like, forum_likeId>;
  countForum_likes!: Sequelize.HasManyCountAssociationsMixin;
  // forum hasMany forum_read via forum_id
  forum_reads!: forum_read[];
  getForum_reads!: Sequelize.HasManyGetAssociationsMixin<forum_read>;
  setForum_reads!: Sequelize.HasManySetAssociationsMixin<forum_read, forum_readId>;
  addForum_read!: Sequelize.HasManyAddAssociationMixin<forum_read, forum_readId>;
  addForum_reads!: Sequelize.HasManyAddAssociationsMixin<forum_read, forum_readId>;
  createForum_read!: Sequelize.HasManyCreateAssociationMixin<forum_read>;
  removeForum_read!: Sequelize.HasManyRemoveAssociationMixin<forum_read, forum_readId>;
  removeForum_reads!: Sequelize.HasManyRemoveAssociationsMixin<forum_read, forum_readId>;
  hasForum_read!: Sequelize.HasManyHasAssociationMixin<forum_read, forum_readId>;
  hasForum_reads!: Sequelize.HasManyHasAssociationsMixin<forum_read, forum_readId>;
  countForum_reads!: Sequelize.HasManyCountAssociationsMixin;
  // forum hasMany forumcomment via forum_id
  forumcomments!: forumcomment[];
  getForumcomments!: Sequelize.HasManyGetAssociationsMixin<forumcomment>;
  setForumcomments!: Sequelize.HasManySetAssociationsMixin<forumcomment, forumcommentId>;
  addForumcomment!: Sequelize.HasManyAddAssociationMixin<forumcomment, forumcommentId>;
  addForumcomments!: Sequelize.HasManyAddAssociationsMixin<forumcomment, forumcommentId>;
  createForumcomment!: Sequelize.HasManyCreateAssociationMixin<forumcomment>;
  removeForumcomment!: Sequelize.HasManyRemoveAssociationMixin<forumcomment, forumcommentId>;
  removeForumcomments!: Sequelize.HasManyRemoveAssociationsMixin<forumcomment, forumcommentId>;
  hasForumcomment!: Sequelize.HasManyHasAssociationMixin<forumcomment, forumcommentId>;
  hasForumcomments!: Sequelize.HasManyHasAssociationsMixin<forumcomment, forumcommentId>;
  countForumcomments!: Sequelize.HasManyCountAssociationsMixin;
  // forum belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // forum belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof forum {
    return sequelize.define('forum', {
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
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    title: {
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
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    tableName: 'forum',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK1k1kgdw3cywdbtvummv93m45q",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKtf93udbyrl0fncdxb1ynwpm3i",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "forum_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof forum;
  }
}

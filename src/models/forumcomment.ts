import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forum, forumId } from './forum';
import type { forum_comment_like, forum_comment_likeId } from './forum_comment_like';
import type { user, userId } from './user';

export interface forumcommentAttributes {
  id: number;
  created_at?: Date;
  message?: string;
  updated_at?: Date;
  created_by?: number;
  forum_id?: number;
  parent_id?: number;
  updated_by?: number;
}

export type forumcommentPk = "id";
export type forumcommentId = forumcomment[forumcommentPk];
export type forumcommentOptionalAttributes = "id" | "created_at" | "message" | "updated_at" | "created_by" | "forum_id" | "parent_id" | "updated_by";
export type forumcommentCreationAttributes = Optional<forumcommentAttributes, forumcommentOptionalAttributes>;

export class forumcomment extends Model<forumcommentAttributes, forumcommentCreationAttributes> implements forumcommentAttributes {
  id!: number;
  created_at?: Date;
  message?: string;
  updated_at?: Date;
  created_by?: number;
  forum_id?: number;
  parent_id?: number;
  updated_by?: number;

  // forumcomment belongsTo forum via forum_id
  forum!: forum;
  getForum!: Sequelize.BelongsToGetAssociationMixin<forum>;
  setForum!: Sequelize.BelongsToSetAssociationMixin<forum, forumId>;
  createForum!: Sequelize.BelongsToCreateAssociationMixin<forum>;
  // forumcomment hasMany forum_comment_like via forumcomments_id
  forum_comment_likes!: forum_comment_like[];
  getForum_comment_likes!: Sequelize.HasManyGetAssociationsMixin<forum_comment_like>;
  setForum_comment_likes!: Sequelize.HasManySetAssociationsMixin<forum_comment_like, forum_comment_likeId>;
  addForum_comment_like!: Sequelize.HasManyAddAssociationMixin<forum_comment_like, forum_comment_likeId>;
  addForum_comment_likes!: Sequelize.HasManyAddAssociationsMixin<forum_comment_like, forum_comment_likeId>;
  createForum_comment_like!: Sequelize.HasManyCreateAssociationMixin<forum_comment_like>;
  removeForum_comment_like!: Sequelize.HasManyRemoveAssociationMixin<forum_comment_like, forum_comment_likeId>;
  removeForum_comment_likes!: Sequelize.HasManyRemoveAssociationsMixin<forum_comment_like, forum_comment_likeId>;
  hasForum_comment_like!: Sequelize.HasManyHasAssociationMixin<forum_comment_like, forum_comment_likeId>;
  hasForum_comment_likes!: Sequelize.HasManyHasAssociationsMixin<forum_comment_like, forum_comment_likeId>;
  countForum_comment_likes!: Sequelize.HasManyCountAssociationsMixin;
  // forumcomment belongsTo forumcomment via parent_id
  parent!: forumcomment;
  getParent!: Sequelize.BelongsToGetAssociationMixin<forumcomment>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<forumcomment, forumcommentId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<forumcomment>;
  // forumcomment belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // forumcomment belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof forumcomment {
    return forumcomment.init({
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
    forum_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'forum',
        key: 'id'
      }
    },
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'forumcomments',
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
    sequelize,
    tableName: 'forumcomments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK23y6276rughube1nbd5mqicsc",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FK6kr1ph3jwnuqeooqxir42llk4",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "FKdoo2r497th2dgknqm03w2xb16",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKfwwhg0mviid8h830b7yfmmkjr",
        fields: [
          { name: "forum_id" },
        ]
      },
      {
        name: "forumcomments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

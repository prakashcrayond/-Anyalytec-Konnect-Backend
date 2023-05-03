import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forumcomment, forumcommentId } from './forumcomment';
import type { user, userId } from './user';

export interface forum_comment_likeAttributes {
  id: number;
  created_at?: Date;
  forumcomments_id?: number;
  user_id?: number;
}

export type forum_comment_likePk = "id";
export type forum_comment_likeId = forum_comment_like[forum_comment_likePk];
export type forum_comment_likeOptionalAttributes = "id" | "created_at" | "forumcomments_id" | "user_id";
export type forum_comment_likeCreationAttributes = Optional<forum_comment_likeAttributes, forum_comment_likeOptionalAttributes>;

export class forum_comment_like extends Model<forum_comment_likeAttributes, forum_comment_likeCreationAttributes> implements forum_comment_likeAttributes {
  id!: number;
  created_at?: Date;
  forumcomments_id?: number;
  user_id?: number;

  // forum_comment_like belongsTo forumcomment via forumcomments_id
  forumcomment!: forumcomment;
  getForumcomment!: Sequelize.BelongsToGetAssociationMixin<forumcomment>;
  setForumcomment!: Sequelize.BelongsToSetAssociationMixin<forumcomment, forumcommentId>;
  createForumcomment!: Sequelize.BelongsToCreateAssociationMixin<forumcomment>;
  // forum_comment_like belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof forum_comment_like {
    return forum_comment_like.init({
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
    forumcomments_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'forumcomments',
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
    sequelize,
    tableName: 'forum_comment_likes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKglushaaebhgli7fwfmarj6tx1",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FKns59a0gf2nvfo49xji4l2db78",
        fields: [
          { name: "forumcomments_id" },
        ]
      },
      {
        name: "forum_comment_likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

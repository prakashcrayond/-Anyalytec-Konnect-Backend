import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forum, forumId } from './forum';
import type { user, userId } from './user';

export interface forum_followingAttributes {
  id: number;
  created_at?: Date;
  forum_id?: number;
  user_id?: number;
}

export type forum_followingPk = "id";
export type forum_followingId = forum_following[forum_followingPk];
export type forum_followingOptionalAttributes = "id" | "created_at" | "forum_id" | "user_id";
export type forum_followingCreationAttributes = Optional<forum_followingAttributes, forum_followingOptionalAttributes>;

export class forum_following extends Model<forum_followingAttributes, forum_followingCreationAttributes> implements forum_followingAttributes {
  id!: number;
  created_at?: Date;
  forum_id?: number;
  user_id?: number;

  // forum_following belongsTo forum via forum_id
  forum!: forum;
  getForum!: Sequelize.BelongsToGetAssociationMixin<forum>;
  setForum!: Sequelize.BelongsToSetAssociationMixin<forum, forumId>;
  createForum!: Sequelize.BelongsToCreateAssociationMixin<forum>;
  // forum_following belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof forum_following {
    return forum_following.init({
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
    forum_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'forum',
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
    tableName: 'forum_following',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKe28tjhshdr9u6as8dy7riaat8",
        fields: [
          { name: "forum_id" },
        ]
      },
      {
        name: "FKr33jtdvp2svvxgy4hb1utq94x",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "forum_following_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

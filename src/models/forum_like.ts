import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forum, forumId } from './forum';
import type { user, userId } from './user';

export interface forum_likeAttributes {
  id: number;
  created_at?: Date;
  forum_id?: number;
  user_id?: number;
}

export type forum_likePk = "id";
export type forum_likeId = forum_like[forum_likePk];
export type forum_likeOptionalAttributes = "id" | "created_at" | "forum_id" | "user_id";
export type forum_likeCreationAttributes = Optional<forum_likeAttributes, forum_likeOptionalAttributes>;

export class forum_like extends Model<forum_likeAttributes, forum_likeCreationAttributes> implements forum_likeAttributes {
  id!: number;
  created_at?: Date;
  forum_id?: number;
  user_id?: number;

  // forum_like belongsTo forum via forum_id
  forum!: forum;
  getForum!: Sequelize.BelongsToGetAssociationMixin<forum>;
  setForum!: Sequelize.BelongsToSetAssociationMixin<forum, forumId>;
  createForum!: Sequelize.BelongsToCreateAssociationMixin<forum>;
  // forum_like belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof forum_like {
    return forum_like.init({
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
    tableName: 'forum_likes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKr0eyiby3h46pa0x3jh6d7192p",
        fields: [
          { name: "forum_id" },
        ]
      },
      {
        name: "FKsyma0oi8ep23bhtn2g5840uis",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "forum_likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

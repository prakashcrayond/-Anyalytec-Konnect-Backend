import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { forum, forumId } from './forum';
import type { user, userId } from './user';

export interface forum_readAttributes {
  id: number;
  created_at?: Date;
  forum_id?: number;
  user_id?: number;
}

export type forum_readPk = "id";
export type forum_readId = forum_read[forum_readPk];
export type forum_readOptionalAttributes = "id" | "created_at" | "forum_id" | "user_id";
export type forum_readCreationAttributes = Optional<forum_readAttributes, forum_readOptionalAttributes>;

export class forum_read extends Model<forum_readAttributes, forum_readCreationAttributes> implements forum_readAttributes {
  id!: number;
  created_at?: Date;
  forum_id?: number;
  user_id?: number;

  // forum_read belongsTo forum via forum_id
  forum!: forum;
  getForum!: Sequelize.BelongsToGetAssociationMixin<forum>;
  setForum!: Sequelize.BelongsToSetAssociationMixin<forum, forumId>;
  createForum!: Sequelize.BelongsToCreateAssociationMixin<forum>;
  // forum_read belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof forum_read {
    return sequelize.define('forum_read', {
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
    tableName: 'forum_read',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK6hdeacb12ccwbkk257en3vxmh",
        fields: [
          { name: "forum_id" },
        ]
      },
      {
        name: "FKjl31a4m48ds3fceqp93ph7s31",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "forum_read_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof forum_read;
  }
}

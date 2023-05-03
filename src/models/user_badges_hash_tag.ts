import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hashtag, hashtagId } from './hashtag';
import type { user_badge, user_badgeId } from './user_badge';

export interface user_badges_hash_tagAttributes {
  user_badges_id: number;
  hash_tag_id: number;
}

export type user_badges_hash_tagPk = "user_badges_id" | "hash_tag_id";
export type user_badges_hash_tagId = user_badges_hash_tag[user_badges_hash_tagPk];
export type user_badges_hash_tagCreationAttributes = user_badges_hash_tagAttributes;

export class user_badges_hash_tag extends Model<user_badges_hash_tagAttributes, user_badges_hash_tagCreationAttributes> implements user_badges_hash_tagAttributes {
  user_badges_id!: number;
  hash_tag_id!: number;

  // user_badges_hash_tag belongsTo hashtag via hash_tag_id
  hash_tag!: hashtag;
  getHash_tag!: Sequelize.BelongsToGetAssociationMixin<hashtag>;
  setHash_tag!: Sequelize.BelongsToSetAssociationMixin<hashtag, hashtagId>;
  createHash_tag!: Sequelize.BelongsToCreateAssociationMixin<hashtag>;
  // user_badges_hash_tag belongsTo user_badge via user_badges_id
  user_badge!: user_badge;
  getUser_badge!: Sequelize.BelongsToGetAssociationMixin<user_badge>;
  setUser_badge!: Sequelize.BelongsToSetAssociationMixin<user_badge, user_badgeId>;
  createUser_badge!: Sequelize.BelongsToCreateAssociationMixin<user_badge>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_badges_hash_tag {
    return user_badges_hash_tag.init({
    user_badges_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'user_badges',
        key: 'id'
      }
    },
    hash_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'hashtag',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'user_badges_hash_tag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK229qf62bnv1quqlebo4ol4nri",
        fields: [
          { name: "hash_tag_id" },
        ]
      },
      {
        name: "user_badges_hash_tag_pkey",
        unique: true,
        fields: [
          { name: "user_badges_id" },
          { name: "hash_tag_id" },
        ]
      },
    ]
  });
  }
}

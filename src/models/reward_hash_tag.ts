import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { hashtag, hashtagId } from './hashtag';
import type { reward, rewardId } from './reward';

export interface reward_hash_tagAttributes {
  reward_id: number;
  hash_tag_id: number;
}

export type reward_hash_tagPk = "reward_id" | "hash_tag_id";
export type reward_hash_tagId = reward_hash_tag[reward_hash_tagPk];
export type reward_hash_tagCreationAttributes = reward_hash_tagAttributes;

export class reward_hash_tag extends Model<reward_hash_tagAttributes, reward_hash_tagCreationAttributes> implements reward_hash_tagAttributes {
  reward_id!: number;
  hash_tag_id!: number;

  // reward_hash_tag belongsTo hashtag via hash_tag_id
  hash_tag!: hashtag;
  getHash_tag!: Sequelize.BelongsToGetAssociationMixin<hashtag>;
  setHash_tag!: Sequelize.BelongsToSetAssociationMixin<hashtag, hashtagId>;
  createHash_tag!: Sequelize.BelongsToCreateAssociationMixin<hashtag>;
  // reward_hash_tag belongsTo reward via reward_id
  reward!: reward;
  getReward!: Sequelize.BelongsToGetAssociationMixin<reward>;
  setReward!: Sequelize.BelongsToSetAssociationMixin<reward, rewardId>;
  createReward!: Sequelize.BelongsToCreateAssociationMixin<reward>;

  static initModel(sequelize: Sequelize.Sequelize): typeof reward_hash_tag {
    return reward_hash_tag.init({
    reward_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'reward',
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
    tableName: 'reward_hash_tag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKl4gth9idcf8kw15306lrokh4k",
        fields: [
          { name: "hash_tag_id" },
        ]
      },
      {
        name: "reward_hash_tag_pkey",
        unique: true,
        fields: [
          { name: "reward_id" },
          { name: "hash_tag_id" },
        ]
      },
    ]
  });
  }
}

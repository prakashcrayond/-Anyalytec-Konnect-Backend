import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { award_hash_tag, award_hash_tagId } from './award_hash_tag';
import type { badge_hash_tag, badge_hash_tagId } from './badge_hash_tag';
import type { reward, rewardId } from './reward';
import type { reward_hash_tag, reward_hash_tagId } from './reward_hash_tag';
import type { user_badge, user_badgeId } from './user_badge';
import type { user_badges_hash_tag, user_badges_hash_tagId } from './user_badges_hash_tag';
import type { user, userId } from './user';

export interface hashtagAttributes {
  id: number;
  active?: boolean;
  color_code?: string;
  created_at?: Date;
  hashtag_name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type hashtagPk = "id";
export type hashtagId = hashtag[hashtagPk];
export type hashtagOptionalAttributes = "id" | "active" | "color_code" | "created_at" | "hashtag_name" | "updated_at" | "created_by" | "updated_by";
export type hashtagCreationAttributes = Optional<hashtagAttributes, hashtagOptionalAttributes>;

export class hashtag extends Model<hashtagAttributes, hashtagCreationAttributes> implements hashtagAttributes {
  id!: number;
  active?: boolean;
  color_code?: string;
  created_at?: Date;
  hashtag_name?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // hashtag hasMany award_hash_tag via hash_tag_id
  award_hash_tags!: award_hash_tag[];
  getAward_hash_tags!: Sequelize.HasManyGetAssociationsMixin<award_hash_tag>;
  setAward_hash_tags!: Sequelize.HasManySetAssociationsMixin<award_hash_tag, award_hash_tagId>;
  addAward_hash_tag!: Sequelize.HasManyAddAssociationMixin<award_hash_tag, award_hash_tagId>;
  addAward_hash_tags!: Sequelize.HasManyAddAssociationsMixin<award_hash_tag, award_hash_tagId>;
  createAward_hash_tag!: Sequelize.HasManyCreateAssociationMixin<award_hash_tag>;
  removeAward_hash_tag!: Sequelize.HasManyRemoveAssociationMixin<award_hash_tag, award_hash_tagId>;
  removeAward_hash_tags!: Sequelize.HasManyRemoveAssociationsMixin<award_hash_tag, award_hash_tagId>;
  hasAward_hash_tag!: Sequelize.HasManyHasAssociationMixin<award_hash_tag, award_hash_tagId>;
  hasAward_hash_tags!: Sequelize.HasManyHasAssociationsMixin<award_hash_tag, award_hash_tagId>;
  countAward_hash_tags!: Sequelize.HasManyCountAssociationsMixin;
  // hashtag hasMany badge_hash_tag via hash_tag_id
  badge_hash_tags!: badge_hash_tag[];
  getBadge_hash_tags!: Sequelize.HasManyGetAssociationsMixin<badge_hash_tag>;
  setBadge_hash_tags!: Sequelize.HasManySetAssociationsMixin<badge_hash_tag, badge_hash_tagId>;
  addBadge_hash_tag!: Sequelize.HasManyAddAssociationMixin<badge_hash_tag, badge_hash_tagId>;
  addBadge_hash_tags!: Sequelize.HasManyAddAssociationsMixin<badge_hash_tag, badge_hash_tagId>;
  createBadge_hash_tag!: Sequelize.HasManyCreateAssociationMixin<badge_hash_tag>;
  removeBadge_hash_tag!: Sequelize.HasManyRemoveAssociationMixin<badge_hash_tag, badge_hash_tagId>;
  removeBadge_hash_tags!: Sequelize.HasManyRemoveAssociationsMixin<badge_hash_tag, badge_hash_tagId>;
  hasBadge_hash_tag!: Sequelize.HasManyHasAssociationMixin<badge_hash_tag, badge_hash_tagId>;
  hasBadge_hash_tags!: Sequelize.HasManyHasAssociationsMixin<badge_hash_tag, badge_hash_tagId>;
  countBadge_hash_tags!: Sequelize.HasManyCountAssociationsMixin;
  // hashtag belongsToMany reward via hash_tag_id and reward_id
  reward_id_rewards!: reward[];
  getReward_id_rewards!: Sequelize.BelongsToManyGetAssociationsMixin<reward>;
  setReward_id_rewards!: Sequelize.BelongsToManySetAssociationsMixin<reward, rewardId>;
  addReward_id_reward!: Sequelize.BelongsToManyAddAssociationMixin<reward, rewardId>;
  addReward_id_rewards!: Sequelize.BelongsToManyAddAssociationsMixin<reward, rewardId>;
  createReward_id_reward!: Sequelize.BelongsToManyCreateAssociationMixin<reward>;
  removeReward_id_reward!: Sequelize.BelongsToManyRemoveAssociationMixin<reward, rewardId>;
  removeReward_id_rewards!: Sequelize.BelongsToManyRemoveAssociationsMixin<reward, rewardId>;
  hasReward_id_reward!: Sequelize.BelongsToManyHasAssociationMixin<reward, rewardId>;
  hasReward_id_rewards!: Sequelize.BelongsToManyHasAssociationsMixin<reward, rewardId>;
  countReward_id_rewards!: Sequelize.BelongsToManyCountAssociationsMixin;
  // hashtag hasMany reward_hash_tag via hash_tag_id
  reward_hash_tags!: reward_hash_tag[];
  getReward_hash_tags!: Sequelize.HasManyGetAssociationsMixin<reward_hash_tag>;
  setReward_hash_tags!: Sequelize.HasManySetAssociationsMixin<reward_hash_tag, reward_hash_tagId>;
  addReward_hash_tag!: Sequelize.HasManyAddAssociationMixin<reward_hash_tag, reward_hash_tagId>;
  addReward_hash_tags!: Sequelize.HasManyAddAssociationsMixin<reward_hash_tag, reward_hash_tagId>;
  createReward_hash_tag!: Sequelize.HasManyCreateAssociationMixin<reward_hash_tag>;
  removeReward_hash_tag!: Sequelize.HasManyRemoveAssociationMixin<reward_hash_tag, reward_hash_tagId>;
  removeReward_hash_tags!: Sequelize.HasManyRemoveAssociationsMixin<reward_hash_tag, reward_hash_tagId>;
  hasReward_hash_tag!: Sequelize.HasManyHasAssociationMixin<reward_hash_tag, reward_hash_tagId>;
  hasReward_hash_tags!: Sequelize.HasManyHasAssociationsMixin<reward_hash_tag, reward_hash_tagId>;
  countReward_hash_tags!: Sequelize.HasManyCountAssociationsMixin;
  // hashtag belongsToMany user_badge via hash_tag_id and user_badges_id
  user_badges_id_user_badges!: user_badge[];
  getUser_badges_id_user_badges!: Sequelize.BelongsToManyGetAssociationsMixin<user_badge>;
  setUser_badges_id_user_badges!: Sequelize.BelongsToManySetAssociationsMixin<user_badge, user_badgeId>;
  addUser_badges_id_user_badge!: Sequelize.BelongsToManyAddAssociationMixin<user_badge, user_badgeId>;
  addUser_badges_id_user_badges!: Sequelize.BelongsToManyAddAssociationsMixin<user_badge, user_badgeId>;
  createUser_badges_id_user_badge!: Sequelize.BelongsToManyCreateAssociationMixin<user_badge>;
  removeUser_badges_id_user_badge!: Sequelize.BelongsToManyRemoveAssociationMixin<user_badge, user_badgeId>;
  removeUser_badges_id_user_badges!: Sequelize.BelongsToManyRemoveAssociationsMixin<user_badge, user_badgeId>;
  hasUser_badges_id_user_badge!: Sequelize.BelongsToManyHasAssociationMixin<user_badge, user_badgeId>;
  hasUser_badges_id_user_badges!: Sequelize.BelongsToManyHasAssociationsMixin<user_badge, user_badgeId>;
  countUser_badges_id_user_badges!: Sequelize.BelongsToManyCountAssociationsMixin;
  // hashtag hasMany user_badges_hash_tag via hash_tag_id
  user_badges_hash_tags!: user_badges_hash_tag[];
  getUser_badges_hash_tags!: Sequelize.HasManyGetAssociationsMixin<user_badges_hash_tag>;
  setUser_badges_hash_tags!: Sequelize.HasManySetAssociationsMixin<user_badges_hash_tag, user_badges_hash_tagId>;
  addUser_badges_hash_tag!: Sequelize.HasManyAddAssociationMixin<user_badges_hash_tag, user_badges_hash_tagId>;
  addUser_badges_hash_tags!: Sequelize.HasManyAddAssociationsMixin<user_badges_hash_tag, user_badges_hash_tagId>;
  createUser_badges_hash_tag!: Sequelize.HasManyCreateAssociationMixin<user_badges_hash_tag>;
  removeUser_badges_hash_tag!: Sequelize.HasManyRemoveAssociationMixin<user_badges_hash_tag, user_badges_hash_tagId>;
  removeUser_badges_hash_tags!: Sequelize.HasManyRemoveAssociationsMixin<user_badges_hash_tag, user_badges_hash_tagId>;
  hasUser_badges_hash_tag!: Sequelize.HasManyHasAssociationMixin<user_badges_hash_tag, user_badges_hash_tagId>;
  hasUser_badges_hash_tags!: Sequelize.HasManyHasAssociationsMixin<user_badges_hash_tag, user_badges_hash_tagId>;
  countUser_badges_hash_tags!: Sequelize.HasManyCountAssociationsMixin;
  // hashtag belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // hashtag belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof hashtag {
    return hashtag.init({
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
    color_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    hashtag_name: {
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
    sequelize,
    tableName: 'hashtag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKee4oamqfpw9x8a9ulhv25befp",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKej22acdlpmoxoq01gq937iywm",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "hashtag_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

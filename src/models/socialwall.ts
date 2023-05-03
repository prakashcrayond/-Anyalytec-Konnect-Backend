import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { reward, rewardId } from './reward';
import type { social_wall_likepost, social_wall_likepostId } from './social_wall_likepost';
import type { socialwallcomment, socialwallcommentId } from './socialwallcomment';
import type { user, userId } from './user';

export interface socialwallAttributes {
  id: number;
  created_at?: Date;
  type: number;
  updated_at?: Date;
  created_by?: number;
  reward_id?: number;
  updated_by?: number;
}

export type socialwallPk = "id";
export type socialwallId = socialwall[socialwallPk];
export type socialwallOptionalAttributes = "id" | "created_at" | "updated_at" | "created_by" | "reward_id" | "updated_by";
export type socialwallCreationAttributes = Optional<socialwallAttributes, socialwallOptionalAttributes>;

export class socialwall extends Model<socialwallAttributes, socialwallCreationAttributes> implements socialwallAttributes {
  id!: number;
  created_at?: Date;
  type!: number;
  updated_at?: Date;
  created_by?: number;
  reward_id?: number;
  updated_by?: number;

  // socialwall belongsTo reward via reward_id
  reward!: reward;
  getReward!: Sequelize.BelongsToGetAssociationMixin<reward>;
  setReward!: Sequelize.BelongsToSetAssociationMixin<reward, rewardId>;
  createReward!: Sequelize.BelongsToCreateAssociationMixin<reward>;
  // socialwall hasMany social_wall_likepost via socialwall_id
  social_wall_likeposts!: social_wall_likepost[];
  getSocial_wall_likeposts!: Sequelize.HasManyGetAssociationsMixin<social_wall_likepost>;
  setSocial_wall_likeposts!: Sequelize.HasManySetAssociationsMixin<social_wall_likepost, social_wall_likepostId>;
  addSocial_wall_likepost!: Sequelize.HasManyAddAssociationMixin<social_wall_likepost, social_wall_likepostId>;
  addSocial_wall_likeposts!: Sequelize.HasManyAddAssociationsMixin<social_wall_likepost, social_wall_likepostId>;
  createSocial_wall_likepost!: Sequelize.HasManyCreateAssociationMixin<social_wall_likepost>;
  removeSocial_wall_likepost!: Sequelize.HasManyRemoveAssociationMixin<social_wall_likepost, social_wall_likepostId>;
  removeSocial_wall_likeposts!: Sequelize.HasManyRemoveAssociationsMixin<social_wall_likepost, social_wall_likepostId>;
  hasSocial_wall_likepost!: Sequelize.HasManyHasAssociationMixin<social_wall_likepost, social_wall_likepostId>;
  hasSocial_wall_likeposts!: Sequelize.HasManyHasAssociationsMixin<social_wall_likepost, social_wall_likepostId>;
  countSocial_wall_likeposts!: Sequelize.HasManyCountAssociationsMixin;
  // socialwall hasMany socialwallcomment via social_wall
  socialwallcomments!: socialwallcomment[];
  getSocialwallcomments!: Sequelize.HasManyGetAssociationsMixin<socialwallcomment>;
  setSocialwallcomments!: Sequelize.HasManySetAssociationsMixin<socialwallcomment, socialwallcommentId>;
  addSocialwallcomment!: Sequelize.HasManyAddAssociationMixin<socialwallcomment, socialwallcommentId>;
  addSocialwallcomments!: Sequelize.HasManyAddAssociationsMixin<socialwallcomment, socialwallcommentId>;
  createSocialwallcomment!: Sequelize.HasManyCreateAssociationMixin<socialwallcomment>;
  removeSocialwallcomment!: Sequelize.HasManyRemoveAssociationMixin<socialwallcomment, socialwallcommentId>;
  removeSocialwallcomments!: Sequelize.HasManyRemoveAssociationsMixin<socialwallcomment, socialwallcommentId>;
  hasSocialwallcomment!: Sequelize.HasManyHasAssociationMixin<socialwallcomment, socialwallcommentId>;
  hasSocialwallcomments!: Sequelize.HasManyHasAssociationsMixin<socialwallcomment, socialwallcommentId>;
  countSocialwallcomments!: Sequelize.HasManyCountAssociationsMixin;
  // socialwall belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // socialwall belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof socialwall {
    return socialwall.init({
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
    type: {
      type: DataTypes.INTEGER,
      allowNull: false
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
    reward_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'reward',
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
    tableName: 'socialwall',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK1eobbo9v8cl38mks4jp7ikell",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FK9jojoo21jml8v8aivxvwp8d6",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKfdm86gvgd5rfq34nqe55q889r",
        fields: [
          { name: "reward_id" },
        ]
      },
      {
        name: "socialwall_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

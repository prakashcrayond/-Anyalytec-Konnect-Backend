import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { socialwall, socialwallId } from './socialwall';
import type { user, userId } from './user';

export interface rewardAttributes {
  id: number;
  created_at?: Date;
  description?: string;
  reward_reso_id?: number;
  share_wall_post: boolean;
  source?: number;
  source_reso_id?: number;
  sub_type?: string;
  type?: number;
  updated_at?: Date;
  wall_post: boolean;
  created_by?: number;
  updated_by?: number;
  user_id?: number;
}

export type rewardPk = "id";
export type rewardId = reward[rewardPk];
export type rewardOptionalAttributes = "id" | "created_at" | "description" | "reward_reso_id" | "source" | "source_reso_id" | "sub_type" | "type" | "updated_at" | "created_by" | "updated_by" | "user_id";
export type rewardCreationAttributes = Optional<rewardAttributes, rewardOptionalAttributes>;

export class reward extends Model<rewardAttributes, rewardCreationAttributes> implements rewardAttributes {
  id!: number;
  created_at?: Date;
  description?: string;
  reward_reso_id?: number;
  share_wall_post!: boolean;
  source?: number;
  source_reso_id?: number;
  sub_type?: string;
  type?: number;
  updated_at?: Date;
  wall_post!: boolean;
  created_by?: number;
  updated_by?: number;
  user_id?: number;

  // reward hasMany socialwall via reward_id
  socialwalls!: socialwall[];
  getSocialwalls!: Sequelize.HasManyGetAssociationsMixin<socialwall>;
  setSocialwalls!: Sequelize.HasManySetAssociationsMixin<socialwall, socialwallId>;
  addSocialwall!: Sequelize.HasManyAddAssociationMixin<socialwall, socialwallId>;
  addSocialwalls!: Sequelize.HasManyAddAssociationsMixin<socialwall, socialwallId>;
  createSocialwall!: Sequelize.HasManyCreateAssociationMixin<socialwall>;
  removeSocialwall!: Sequelize.HasManyRemoveAssociationMixin<socialwall, socialwallId>;
  removeSocialwalls!: Sequelize.HasManyRemoveAssociationsMixin<socialwall, socialwallId>;
  hasSocialwall!: Sequelize.HasManyHasAssociationMixin<socialwall, socialwallId>;
  hasSocialwalls!: Sequelize.HasManyHasAssociationsMixin<socialwall, socialwallId>;
  countSocialwalls!: Sequelize.HasManyCountAssociationsMixin;
  // reward belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // reward belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // reward belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof reward {
    return sequelize.define('reward', {
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
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    reward_reso_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    share_wall_post: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    source: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    source_reso_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    sub_type: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wall_post: {
      type: DataTypes.BOOLEAN,
      allowNull: false
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
    tableName: 'reward',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK25t68w7625gtp6sqmfb98k860",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKb66njibfqyeq1lj33vycr0y56",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKkvvfd3ojluedwt88erpwwb9en",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "reward_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof reward;
  }
}

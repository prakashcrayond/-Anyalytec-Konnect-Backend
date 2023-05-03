import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { badge_hash_tag, badge_hash_tagId } from './badge_hash_tag';
import type { library_badge, library_badgeId } from './library_badge';
import type { user_badge, user_badgeId } from './user_badge';
import type { user, userId } from './user';

export interface badgeAttributes {
  id: number;
  active?: boolean;
  badge_file_name?: string;
  created_at?: Date;
  name?: string;
  points: number;
  updated_at?: Date;
  created_by?: number;
  library_badges?: number;
  updated_by?: number;
}

export type badgePk = "id";
export type badgeId = badge[badgePk];
export type badgeOptionalAttributes = "id" | "active" | "badge_file_name" | "created_at" | "name" | "updated_at" | "created_by" | "library_badges" | "updated_by";
export type badgeCreationAttributes = Optional<badgeAttributes, badgeOptionalAttributes>;

export class badge extends Model<badgeAttributes, badgeCreationAttributes> implements badgeAttributes {
  id!: number;
  active?: boolean;
  badge_file_name?: string;
  created_at?: Date;
  name?: string;
  points!: number;
  updated_at?: Date;
  created_by?: number;
  library_badges?: number;
  updated_by?: number;

  // badge hasMany badge_hash_tag via badge_id
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
  // badge hasMany user_badge via badge_id
  user_badges!: user_badge[];
  getUser_badges!: Sequelize.HasManyGetAssociationsMixin<user_badge>;
  setUser_badges!: Sequelize.HasManySetAssociationsMixin<user_badge, user_badgeId>;
  addUser_badge!: Sequelize.HasManyAddAssociationMixin<user_badge, user_badgeId>;
  addUser_badges!: Sequelize.HasManyAddAssociationsMixin<user_badge, user_badgeId>;
  createUser_badge!: Sequelize.HasManyCreateAssociationMixin<user_badge>;
  removeUser_badge!: Sequelize.HasManyRemoveAssociationMixin<user_badge, user_badgeId>;
  removeUser_badges!: Sequelize.HasManyRemoveAssociationsMixin<user_badge, user_badgeId>;
  hasUser_badge!: Sequelize.HasManyHasAssociationMixin<user_badge, user_badgeId>;
  hasUser_badges!: Sequelize.HasManyHasAssociationsMixin<user_badge, user_badgeId>;
  countUser_badges!: Sequelize.HasManyCountAssociationsMixin;
  // badge belongsTo library_badge via library_badges
  library_badges_library_badge!: library_badge;
  getLibrary_badges_library_badge!: Sequelize.BelongsToGetAssociationMixin<library_badge>;
  setLibrary_badges_library_badge!: Sequelize.BelongsToSetAssociationMixin<library_badge, library_badgeId>;
  createLibrary_badges_library_badge!: Sequelize.BelongsToCreateAssociationMixin<library_badge>;
  // badge belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // badge belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof badge {
    return badge.init({
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
    badge_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    points: {
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
    library_badges: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'library_badges',
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
    tableName: 'badge',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK4yb6oxos9oss551wbyhrs07rm",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKo70qas0wklgwmei2cfw6nstqa",
        fields: [
          { name: "library_badges" },
        ]
      },
      {
        name: "FKtn5294k0d3b401kke442t7m9l",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "badge_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

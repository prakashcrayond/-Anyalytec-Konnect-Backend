import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { badge, badgeId } from './badge';
import type { user, userId } from './user';

export interface user_badgeAttributes {
  id: number;
  created_at?: Date;
  message?: string;
  share_wall_post: boolean;
  updated_at?: Date;
  wall_post: boolean;
  badge_id?: number;
  created_by?: number;
  given_by?: number;
  updated_by?: number;
  user_id?: number;
}

export type user_badgePk = "id";
export type user_badgeId = user_badge[user_badgePk];
export type user_badgeOptionalAttributes = "id" | "created_at" | "message" | "updated_at" | "badge_id" | "created_by" | "given_by" | "updated_by" | "user_id";
export type user_badgeCreationAttributes = Optional<user_badgeAttributes, user_badgeOptionalAttributes>;

export class user_badge extends Model<user_badgeAttributes, user_badgeCreationAttributes> implements user_badgeAttributes {
  id!: number;
  created_at?: Date;
  message?: string;
  share_wall_post!: boolean;
  updated_at?: Date;
  wall_post!: boolean;
  badge_id?: number;
  created_by?: number;
  given_by?: number;
  updated_by?: number;
  user_id?: number;

  // user_badge belongsTo badge via badge_id
  badge!: badge;
  getBadge!: Sequelize.BelongsToGetAssociationMixin<badge>;
  setBadge!: Sequelize.BelongsToSetAssociationMixin<badge, badgeId>;
  createBadge!: Sequelize.BelongsToCreateAssociationMixin<badge>;
  // user_badge belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_badge belongsTo user via given_by
  given_by_user!: user;
  getGiven_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setGiven_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createGiven_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_badge belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // user_badge belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user_badge {
    return sequelize.define('user_badge', {
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
    message: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    share_wall_post: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    wall_post: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    badge_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'badge',
        key: 'id'
      }
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    given_by: {
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
    tableName: 'user_badges',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK28133xsiuou4s9xjxrbih88ml",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FK9o8agkpfrw50l2srf6af0r9ft",
        fields: [
          { name: "given_by" },
        ]
      },
      {
        name: "FKaib8s38oirddbspec1m93ps4j",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKm6s10gyhh96irpj92csb6yoia",
        fields: [
          { name: "badge_id" },
        ]
      },
      {
        name: "FKr46ah81sjymsn035m4ojstn5s",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "user_badges_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof user_badge;
  }
}

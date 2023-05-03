import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { socialwall, socialwallId } from './socialwall';
import type { user, userId } from './user';

export interface social_wall_likepostAttributes {
  id: number;
  created_at?: Date;
  socialwall_id?: number;
  user_id?: number;
}

export type social_wall_likepostPk = "id";
export type social_wall_likepostId = social_wall_likepost[social_wall_likepostPk];
export type social_wall_likepostOptionalAttributes = "id" | "created_at" | "socialwall_id" | "user_id";
export type social_wall_likepostCreationAttributes = Optional<social_wall_likepostAttributes, social_wall_likepostOptionalAttributes>;

export class social_wall_likepost extends Model<social_wall_likepostAttributes, social_wall_likepostCreationAttributes> implements social_wall_likepostAttributes {
  id!: number;
  created_at?: Date;
  socialwall_id?: number;
  user_id?: number;

  // social_wall_likepost belongsTo socialwall via socialwall_id
  socialwall!: socialwall;
  getSocialwall!: Sequelize.BelongsToGetAssociationMixin<socialwall>;
  setSocialwall!: Sequelize.BelongsToSetAssociationMixin<socialwall, socialwallId>;
  createSocialwall!: Sequelize.BelongsToCreateAssociationMixin<socialwall>;
  // social_wall_likepost belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof social_wall_likepost {
    return social_wall_likepost.init({
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
    socialwall_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'socialwall',
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
    tableName: 'social_wall_likepost',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKcbyqui420wgxap5kcfm3obsrx",
        fields: [
          { name: "socialwall_id" },
        ]
      },
      {
        name: "FKp8xoncet4l6t8465gmtn3fk9l",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "social_wall_likepost_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface password_reset_tokenAttributes {
  id: number;
  created_at?: Date;
  expiry_date?: Date;
  token?: string;
  updated_at?: Date;
  user_id: number;
}

export type password_reset_tokenPk = "id";
export type password_reset_tokenId = password_reset_token[password_reset_tokenPk];
export type password_reset_tokenOptionalAttributes = "created_at" | "expiry_date" | "token" | "updated_at";
export type password_reset_tokenCreationAttributes = Optional<password_reset_tokenAttributes, password_reset_tokenOptionalAttributes>;

export class password_reset_token extends Model<password_reset_tokenAttributes, password_reset_tokenCreationAttributes> implements password_reset_tokenAttributes {
  id!: number;
  created_at?: Date;
  expiry_date?: Date;
  token?: string;
  updated_at?: Date;
  user_id!: number;

  // password_reset_token belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof password_reset_token {
    return password_reset_token.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'password_reset_token',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK83nsrttkwkb6ym0anu051mtxn",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "password_reset_token_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

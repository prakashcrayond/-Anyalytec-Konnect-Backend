import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
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
    return sequelize.define('hashtag', {
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
  }) as typeof hashtag;
  }
}

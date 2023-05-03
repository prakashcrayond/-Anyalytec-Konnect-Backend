import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { idea, ideaId } from './idea';
import type { user, userId } from './user';

export interface idea_readAttributes {
  id: number;
  created_at?: Date;
  idea_id?: number;
  user_id?: number;
}

export type idea_readPk = "id";
export type idea_readId = idea_read[idea_readPk];
export type idea_readOptionalAttributes = "id" | "created_at" | "idea_id" | "user_id";
export type idea_readCreationAttributes = Optional<idea_readAttributes, idea_readOptionalAttributes>;

export class idea_read extends Model<idea_readAttributes, idea_readCreationAttributes> implements idea_readAttributes {
  id!: number;
  created_at?: Date;
  idea_id?: number;
  user_id?: number;

  // idea_read belongsTo idea via idea_id
  idea!: idea;
  getIdea!: Sequelize.BelongsToGetAssociationMixin<idea>;
  setIdea!: Sequelize.BelongsToSetAssociationMixin<idea, ideaId>;
  createIdea!: Sequelize.BelongsToCreateAssociationMixin<idea>;
  // idea_read belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof idea_read {
    return idea_read.init({
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
    idea_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'idea',
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
    tableName: 'idea_read',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKdl38fq5k8wqhr6at1h6i1uxwa",
        fields: [
          { name: "idea_id" },
        ]
      },
      {
        name: "FKq7qrpy9rbxgatx72m4x28b6cn",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "idea_read_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

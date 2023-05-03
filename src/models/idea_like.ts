import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { idea, ideaId } from './idea';
import type { user, userId } from './user';

export interface idea_likeAttributes {
  id: number;
  created_at?: Date;
  idea_id?: number;
  user_id?: number;
}

export type idea_likePk = "id";
export type idea_likeId = idea_like[idea_likePk];
export type idea_likeOptionalAttributes = "id" | "created_at" | "idea_id" | "user_id";
export type idea_likeCreationAttributes = Optional<idea_likeAttributes, idea_likeOptionalAttributes>;

export class idea_like extends Model<idea_likeAttributes, idea_likeCreationAttributes> implements idea_likeAttributes {
  id!: number;
  created_at?: Date;
  idea_id?: number;
  user_id?: number;

  // idea_like belongsTo idea via idea_id
  idea!: idea;
  getIdea!: Sequelize.BelongsToGetAssociationMixin<idea>;
  setIdea!: Sequelize.BelongsToSetAssociationMixin<idea, ideaId>;
  createIdea!: Sequelize.BelongsToCreateAssociationMixin<idea>;
  // idea_like belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof idea_like {
    return idea_like.init({
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
    tableName: 'idea_likes',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK3nooi3gnrtblxgajdytj3ikcw",
        fields: [
          { name: "idea_id" },
        ]
      },
      {
        name: "FKd9d75u9t2es5iovypaajvp4dd",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "idea_likes_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

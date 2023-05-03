import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { idea, ideaId } from './idea';
import type { user, userId } from './user';

export interface idea_favoriteAttributes {
  id: number;
  created_at?: Date;
  idea_id?: number;
  user_id?: number;
}

export type idea_favoritePk = "id";
export type idea_favoriteId = idea_favorite[idea_favoritePk];
export type idea_favoriteOptionalAttributes = "id" | "created_at" | "idea_id" | "user_id";
export type idea_favoriteCreationAttributes = Optional<idea_favoriteAttributes, idea_favoriteOptionalAttributes>;

export class idea_favorite extends Model<idea_favoriteAttributes, idea_favoriteCreationAttributes> implements idea_favoriteAttributes {
  id!: number;
  created_at?: Date;
  idea_id?: number;
  user_id?: number;

  // idea_favorite belongsTo idea via idea_id
  idea!: idea;
  getIdea!: Sequelize.BelongsToGetAssociationMixin<idea>;
  setIdea!: Sequelize.BelongsToSetAssociationMixin<idea, ideaId>;
  createIdea!: Sequelize.BelongsToCreateAssociationMixin<idea>;
  // idea_favorite belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof idea_favorite {
    return idea_favorite.init({
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
    tableName: 'idea_favorites',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK3rsfrh9a4yb67r9sxturrurcs",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK8toc6qvfdx1y3acj9uxh6gnyy",
        fields: [
          { name: "idea_id" },
        ]
      },
      {
        name: "idea_favorites_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

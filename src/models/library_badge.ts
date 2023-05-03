import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { badge, badgeId } from './badge';

export interface library_badgeAttributes {
  id: number;
  file_name?: string;
  name?: string;
}

export type library_badgePk = "id";
export type library_badgeId = library_badge[library_badgePk];
export type library_badgeOptionalAttributes = "id" | "file_name" | "name";
export type library_badgeCreationAttributes = Optional<library_badgeAttributes, library_badgeOptionalAttributes>;

export class library_badge extends Model<library_badgeAttributes, library_badgeCreationAttributes> implements library_badgeAttributes {
  id!: number;
  file_name?: string;
  name?: string;

  // library_badge hasMany badge via library_badges
  badges!: badge[];
  getBadges!: Sequelize.HasManyGetAssociationsMixin<badge>;
  setBadges!: Sequelize.HasManySetAssociationsMixin<badge, badgeId>;
  addBadge!: Sequelize.HasManyAddAssociationMixin<badge, badgeId>;
  addBadges!: Sequelize.HasManyAddAssociationsMixin<badge, badgeId>;
  createBadge!: Sequelize.HasManyCreateAssociationMixin<badge>;
  removeBadge!: Sequelize.HasManyRemoveAssociationMixin<badge, badgeId>;
  removeBadges!: Sequelize.HasManyRemoveAssociationsMixin<badge, badgeId>;
  hasBadge!: Sequelize.HasManyHasAssociationMixin<badge, badgeId>;
  hasBadges!: Sequelize.HasManyHasAssociationsMixin<badge, badgeId>;
  countBadges!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof library_badge {
    return library_badge.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    }
  }, {
    sequelize,
    tableName: 'library_badges',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "library_badges_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { award, awardId } from './award';

export interface library_awardAttributes {
  id: number;
  file_name?: string;
  name?: string;
}

export type library_awardPk = "id";
export type library_awardId = library_award[library_awardPk];
export type library_awardOptionalAttributes = "id" | "file_name" | "name";
export type library_awardCreationAttributes = Optional<library_awardAttributes, library_awardOptionalAttributes>;

export class library_award extends Model<library_awardAttributes, library_awardCreationAttributes> implements library_awardAttributes {
  id!: number;
  file_name?: string;
  name?: string;

  // library_award hasMany award via library_awards
  awards!: award[];
  getAwards!: Sequelize.HasManyGetAssociationsMixin<award>;
  setAwards!: Sequelize.HasManySetAssociationsMixin<award, awardId>;
  addAward!: Sequelize.HasManyAddAssociationMixin<award, awardId>;
  addAwards!: Sequelize.HasManyAddAssociationsMixin<award, awardId>;
  createAward!: Sequelize.HasManyCreateAssociationMixin<award>;
  removeAward!: Sequelize.HasManyRemoveAssociationMixin<award, awardId>;
  removeAwards!: Sequelize.HasManyRemoveAssociationsMixin<award, awardId>;
  hasAward!: Sequelize.HasManyHasAssociationMixin<award, awardId>;
  hasAwards!: Sequelize.HasManyHasAssociationsMixin<award, awardId>;
  countAwards!: Sequelize.HasManyCountAssociationsMixin;

  static initModel(sequelize: Sequelize.Sequelize): typeof library_award {
    return sequelize.define('library_award', {
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
    tableName: 'library_awards',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "library_awards_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof library_award;
  }
}

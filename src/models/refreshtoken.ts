import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface refreshtokenAttributes {
  id: number;
  expiry_date: Date;
  token: string;
  user_id?: number;
}

export type refreshtokenPk = "id";
export type refreshtokenId = refreshtoken[refreshtokenPk];
export type refreshtokenOptionalAttributes = "user_id";
export type refreshtokenCreationAttributes = Optional<refreshtokenAttributes, refreshtokenOptionalAttributes>;

export class refreshtoken extends Model<refreshtokenAttributes, refreshtokenCreationAttributes> implements refreshtokenAttributes {
  id!: number;
  expiry_date!: Date;
  token!: string;
  user_id?: number;

  // refreshtoken belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof refreshtoken {
    return refreshtoken.init({
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    expiry_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false
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
    tableName: 'refreshtoken',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKa652xrdji49m4isx38pp4p80p",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "UK_or156wbneyk8noo4jstv55ii3",
        unique: true,
        fields: [
          { name: "token" },
        ]
      },
      {
        name: "refreshtoken_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

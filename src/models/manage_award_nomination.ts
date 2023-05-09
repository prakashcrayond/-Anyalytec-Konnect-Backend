import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { manage_award, manage_awardId } from './manage_award';
import type { user, userId } from './user';

export interface manage_award_nominationAttributes {
  id: number;
  created_at?: Date;
  message?: string;
  status?: string;
  updated_at?: Date;
  created_by?: number;
  manage_awards_id?: number;
  updated_by?: number;
  user_id?: number;
}

export type manage_award_nominationPk = "id";
export type manage_award_nominationId = manage_award_nomination[manage_award_nominationPk];
export type manage_award_nominationOptionalAttributes = "id" | "created_at" | "message" | "status" | "updated_at" | "created_by" | "manage_awards_id" | "updated_by" | "user_id";
export type manage_award_nominationCreationAttributes = Optional<manage_award_nominationAttributes, manage_award_nominationOptionalAttributes>;

export class manage_award_nomination extends Model<manage_award_nominationAttributes, manage_award_nominationCreationAttributes> implements manage_award_nominationAttributes {
  id!: number;
  created_at?: Date;
  message?: string;
  status?: string;
  updated_at?: Date;
  created_by?: number;
  manage_awards_id?: number;
  updated_by?: number;
  user_id?: number;

  // manage_award_nomination belongsTo manage_award via manage_awards_id
  manage_award!: manage_award;
  getManage_award!: Sequelize.BelongsToGetAssociationMixin<manage_award>;
  setManage_award!: Sequelize.BelongsToSetAssociationMixin<manage_award, manage_awardId>;
  createManage_award!: Sequelize.BelongsToCreateAssociationMixin<manage_award>;
  // manage_award_nomination belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // manage_award_nomination belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // manage_award_nomination belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof manage_award_nomination {
    return sequelize.define('manage_award_nomination', {
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
    status: {
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
    manage_awards_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'manage_awards',
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
    tableName: 'manage_award_nomination',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK2c4gn8po9ncoprlecc51l62st",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "FK324klkj3uyr0sp61t5kpsg39e",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKd8tjaimu0tdbp415p99ac57e",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKt4alnh3to45wocg7w4ymngybu",
        fields: [
          { name: "manage_awards_id" },
        ]
      },
      {
        name: "manage_award_nomination_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof manage_award_nomination;
  }
}

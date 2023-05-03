import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { socialwall, socialwallId } from './socialwall';
import type { user, userId } from './user';

export interface socialwallcommentAttributes {
  id: number;
  created_at?: Date;
  message?: string;
  updated_at?: Date;
  created_by?: number;
  parent_id?: number;
  social_wall?: number;
  updated_by?: number;
}

export type socialwallcommentPk = "id";
export type socialwallcommentId = socialwallcomment[socialwallcommentPk];
export type socialwallcommentOptionalAttributes = "id" | "created_at" | "message" | "updated_at" | "created_by" | "parent_id" | "social_wall" | "updated_by";
export type socialwallcommentCreationAttributes = Optional<socialwallcommentAttributes, socialwallcommentOptionalAttributes>;

export class socialwallcomment extends Model<socialwallcommentAttributes, socialwallcommentCreationAttributes> implements socialwallcommentAttributes {
  id!: number;
  created_at?: Date;
  message?: string;
  updated_at?: Date;
  created_by?: number;
  parent_id?: number;
  social_wall?: number;
  updated_by?: number;

  // socialwallcomment belongsTo socialwall via social_wall
  social_wall_socialwall!: socialwall;
  getSocial_wall_socialwall!: Sequelize.BelongsToGetAssociationMixin<socialwall>;
  setSocial_wall_socialwall!: Sequelize.BelongsToSetAssociationMixin<socialwall, socialwallId>;
  createSocial_wall_socialwall!: Sequelize.BelongsToCreateAssociationMixin<socialwall>;
  // socialwallcomment belongsTo socialwallcomment via parent_id
  parent!: socialwallcomment;
  getParent!: Sequelize.BelongsToGetAssociationMixin<socialwallcomment>;
  setParent!: Sequelize.BelongsToSetAssociationMixin<socialwallcomment, socialwallcommentId>;
  createParent!: Sequelize.BelongsToCreateAssociationMixin<socialwallcomment>;
  // socialwallcomment belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // socialwallcomment belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof socialwallcomment {
    return socialwallcomment.init({
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
    parent_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'socialwallcomments',
        key: 'id'
      }
    },
    social_wall: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'socialwall',
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
    sequelize,
    tableName: 'socialwallcomments',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK3ofsja2h906snjlmt7ccykcp1",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKi09i9qpcdxuefodics7xyfep",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKn66s2yud9apop6ndxagc9tha0",
        fields: [
          { name: "social_wall" },
        ]
      },
      {
        name: "FKtetvi06c9ksofkw5w7n9i5l91",
        fields: [
          { name: "parent_id" },
        ]
      },
      {
        name: "socialwallcomments_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

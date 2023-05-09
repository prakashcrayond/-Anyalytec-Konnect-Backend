import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { user, userId } from './user';

export interface ecardAttributes {
  id: number;
  card_file_name?: string;
  created_at?: Date;
  info?: string;
  liked?: number;
  message?: string;
  seen?: number;
  subject?: string;
  template_id?: number;
  type?: string;
  updated_at?: Date;
  created_by?: number;
  from_user_id?: number;
  to_user_id?: number;
  updated_by?: number;
}

export type ecardPk = "id";
export type ecardId = ecard[ecardPk];
export type ecardOptionalAttributes = "id" | "card_file_name" | "created_at" | "info" | "liked" | "message" | "seen" | "subject" | "template_id" | "type" | "updated_at" | "created_by" | "from_user_id" | "to_user_id" | "updated_by";
export type ecardCreationAttributes = Optional<ecardAttributes, ecardOptionalAttributes>;

export class ecard extends Model<ecardAttributes, ecardCreationAttributes> implements ecardAttributes {
  id!: number;
  card_file_name?: string;
  created_at?: Date;
  info?: string;
  liked?: number;
  message?: string;
  seen?: number;
  subject?: string;
  template_id?: number;
  type?: string;
  updated_at?: Date;
  created_by?: number;
  from_user_id?: number;
  to_user_id?: number;
  updated_by?: number;

  // ecard belongsTo user via from_user_id
  from_user!: user;
  getFrom_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setFrom_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createFrom_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ecard belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ecard belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // ecard belongsTo user via to_user_id
  to_user!: user;
  getTo_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setTo_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createTo_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof ecard {
    return sequelize.define('ecard', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    card_file_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    liked: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    message: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    seen: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    template_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0
    },
    type: {
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
    from_user_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    to_user_id: {
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
    tableName: 'ecard',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK718hyu5797blnnciivokm8b6q",
        fields: [
          { name: "from_user_id" },
        ]
      },
      {
        name: "FKp507fh57u4qeouactppuiix2y",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "FKs2alx43sue3i3xj5bke9wkof7",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKs6xxqbfbi6kkwv9xtk6lrgjle",
        fields: [
          { name: "to_user_id" },
        ]
      },
      {
        name: "ecard_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof ecard;
  }
}

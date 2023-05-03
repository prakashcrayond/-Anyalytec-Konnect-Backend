import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { poll, pollId } from './poll';

export interface poll_mappingAttributes {
  id: number;
  mappingid?: number;
  type?: string;
  poll_id?: number;
}

export type poll_mappingPk = "id";
export type poll_mappingId = poll_mapping[poll_mappingPk];
export type poll_mappingOptionalAttributes = "id" | "mappingid" | "type" | "poll_id";
export type poll_mappingCreationAttributes = Optional<poll_mappingAttributes, poll_mappingOptionalAttributes>;

export class poll_mapping extends Model<poll_mappingAttributes, poll_mappingCreationAttributes> implements poll_mappingAttributes {
  id!: number;
  mappingid?: number;
  type?: string;
  poll_id?: number;

  // poll_mapping belongsTo poll via poll_id
  poll!: poll;
  getPoll!: Sequelize.BelongsToGetAssociationMixin<poll>;
  setPoll!: Sequelize.BelongsToSetAssociationMixin<poll, pollId>;
  createPoll!: Sequelize.BelongsToCreateAssociationMixin<poll>;

  static initModel(sequelize: Sequelize.Sequelize): typeof poll_mapping {
    return poll_mapping.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    mappingid: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    type: {
      type: DataTypes.CHAR(1),
      allowNull: true,
      defaultValue: "NULL"
    },
    poll_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'polls',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'poll_mapping',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FKn4ipghlegi5ckvcwv5sbq1df0",
        fields: [
          { name: "poll_id" },
        ]
      },
      {
        name: "poll_mapping_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

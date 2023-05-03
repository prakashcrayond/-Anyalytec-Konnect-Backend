import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';

export interface hibernate_sequenceAttributes {
  next_val?: number;
}

export type hibernate_sequenceOptionalAttributes = "next_val";
export type hibernate_sequenceCreationAttributes = Optional<hibernate_sequenceAttributes, hibernate_sequenceOptionalAttributes>;

export class hibernate_sequence extends Model<hibernate_sequenceAttributes, hibernate_sequenceCreationAttributes> implements hibernate_sequenceAttributes {
  next_val?: number;


  static initModel(sequelize: Sequelize.Sequelize): typeof hibernate_sequence {
    return hibernate_sequence.init({
    next_val: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'hibernate_sequence',
    schema: 'public',
    timestamps: false
  });
  }
}

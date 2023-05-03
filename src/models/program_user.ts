import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { program, programId } from './program';
import type { user, userId } from './user';

export interface program_userAttributes {
  id: number;
  program_id?: number;
  user_id?: number;
}

export type program_userPk = "id";
export type program_userId = program_user[program_userPk];
export type program_userOptionalAttributes = "id" | "program_id" | "user_id";
export type program_userCreationAttributes = Optional<program_userAttributes, program_userOptionalAttributes>;

export class program_user extends Model<program_userAttributes, program_userCreationAttributes> implements program_userAttributes {
  id!: number;
  program_id?: number;
  user_id?: number;

  // program_user belongsTo program via program_id
  program!: program;
  getProgram!: Sequelize.BelongsToGetAssociationMixin<program>;
  setProgram!: Sequelize.BelongsToSetAssociationMixin<program, programId>;
  createProgram!: Sequelize.BelongsToCreateAssociationMixin<program>;
  // program_user belongsTo user via user_id
  user!: user;
  getUser!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUser!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUser!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof program_user {
    return program_user.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    program_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'program',
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
    tableName: 'program_user',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK3r5a5qbwejioy0h2cpo6vlk5f",
        fields: [
          { name: "program_id" },
        ]
      },
      {
        name: "FK77py95vpm4na8gb82n70vbs5p",
        fields: [
          { name: "user_id" },
        ]
      },
      {
        name: "program_user_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { award, awardId } from './award';
import type { hashtag, hashtagId } from './hashtag';

export interface award_hash_tagAttributes {
  award_id: number;
  hash_tag_id: number;
}

export type award_hash_tagCreationAttributes = award_hash_tagAttributes;

export class award_hash_tag extends Model<award_hash_tagAttributes, award_hash_tagCreationAttributes> implements award_hash_tagAttributes {
  award_id!: number;
  hash_tag_id!: number;

  // award_hash_tag belongsTo award via award_id
  award!: award;
  getAward!: Sequelize.BelongsToGetAssociationMixin<award>;
  setAward!: Sequelize.BelongsToSetAssociationMixin<award, awardId>;
  createAward!: Sequelize.BelongsToCreateAssociationMixin<award>;
  // award_hash_tag belongsTo hashtag via hash_tag_id
  hash_tag!: hashtag;
  getHash_tag!: Sequelize.BelongsToGetAssociationMixin<hashtag>;
  setHash_tag!: Sequelize.BelongsToSetAssociationMixin<hashtag, hashtagId>;
  createHash_tag!: Sequelize.BelongsToCreateAssociationMixin<hashtag>;

  static initModel(sequelize: Sequelize.Sequelize): typeof award_hash_tag {
    return award_hash_tag.init({
    award_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'award',
        key: 'id'
      }
    },
    hash_tag_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'hashtag',
        key: 'id'
      }
    }
  }, {
    sequelize,
    tableName: 'award_hash_tag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK9uktcpcu0pa0907p6gp930s9n",
        fields: [
          { name: "award_id" },
        ]
      },
      {
        name: "FKfrrbrwtc8uwpjgcsfxhxk06gy",
        fields: [
          { name: "hash_tag_id" },
        ]
      },
    ]
  });
  }
}

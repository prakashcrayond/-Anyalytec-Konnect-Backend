import * as Sequelize from 'sequelize';
import { DataTypes, Model } from 'sequelize';
import type { badge, badgeId } from './badge';
import type { hashtag, hashtagId } from './hashtag';

export interface badge_hash_tagAttributes {
  badge_id: number;
  hash_tag_id: number;
}

export type badge_hash_tagCreationAttributes = badge_hash_tagAttributes;
export type badge_hash_tagPk = "badge_id" | "hash_tag_id";
export type badge_hash_tagId = badge_hash_tag[badge_hash_tagPk];
export class badge_hash_tag extends Model<badge_hash_tagAttributes, badge_hash_tagCreationAttributes> implements badge_hash_tagAttributes {
  badge_id!: number;
  hash_tag_id!: number;

  // badge_hash_tag belongsTo badge via badge_id
  badge!: badge;
  getBadge!: Sequelize.BelongsToGetAssociationMixin<badge>;
  setBadge!: Sequelize.BelongsToSetAssociationMixin<badge, badgeId>;
  createBadge!: Sequelize.BelongsToCreateAssociationMixin<badge>;
  // badge_hash_tag belongsTo hashtag via hash_tag_id
  hash_tag!: hashtag;
  getHash_tag!: Sequelize.BelongsToGetAssociationMixin<hashtag>;
  setHash_tag!: Sequelize.BelongsToSetAssociationMixin<hashtag, hashtagId>;
  createHash_tag!: Sequelize.BelongsToCreateAssociationMixin<hashtag>;

  static initModel(sequelize: Sequelize.Sequelize): typeof badge_hash_tag {
    return sequelize.define('badge_hash_tag', {
    badge_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'badge',
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
    tableName: 'badge_hash_tag',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK3pag51iew3uksb64wobg0w4q9",
        fields: [
          { name: "hash_tag_id" },
        ]
      },
      {
        name: "FKad6nmbvk71yunawt71dao8cdp",
        fields: [
          { name: "badge_id" },
        ]
      },
    ]
  }) as typeof badge_hash_tag;
  }
}

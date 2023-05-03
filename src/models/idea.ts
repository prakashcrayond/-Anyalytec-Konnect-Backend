import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { idea_attachment, idea_attachmentId } from './idea_attachment';
import type { idea_comment, idea_commentId } from './idea_comment';
import type { idea_department, idea_departmentId } from './idea_department';
import type { idea_favorite, idea_favoriteId } from './idea_favorite';
import type { idea_like, idea_likeId } from './idea_like';
import type { idea_read, idea_readId } from './idea_read';
import type { user, userId } from './user';

export interface ideaAttributes {
  id: number;
  active?: boolean;
  created_at?: Date;
  description?: string;
  title?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;
}

export type ideaPk = "id";
export type ideaId = idea[ideaPk];
export type ideaOptionalAttributes = "id" | "active" | "created_at" | "description" | "title" | "updated_at" | "created_by" | "updated_by";
export type ideaCreationAttributes = Optional<ideaAttributes, ideaOptionalAttributes>;

export class idea extends Model<ideaAttributes, ideaCreationAttributes> implements ideaAttributes {
  id!: number;
  active?: boolean;
  created_at?: Date;
  description?: string;
  title?: string;
  updated_at?: Date;
  created_by?: number;
  updated_by?: number;

  // idea hasMany idea_attachment via idea_id
  idea_attachments!: idea_attachment[];
  getIdea_attachments!: Sequelize.HasManyGetAssociationsMixin<idea_attachment>;
  setIdea_attachments!: Sequelize.HasManySetAssociationsMixin<idea_attachment, idea_attachmentId>;
  addIdea_attachment!: Sequelize.HasManyAddAssociationMixin<idea_attachment, idea_attachmentId>;
  addIdea_attachments!: Sequelize.HasManyAddAssociationsMixin<idea_attachment, idea_attachmentId>;
  createIdea_attachment!: Sequelize.HasManyCreateAssociationMixin<idea_attachment>;
  removeIdea_attachment!: Sequelize.HasManyRemoveAssociationMixin<idea_attachment, idea_attachmentId>;
  removeIdea_attachments!: Sequelize.HasManyRemoveAssociationsMixin<idea_attachment, idea_attachmentId>;
  hasIdea_attachment!: Sequelize.HasManyHasAssociationMixin<idea_attachment, idea_attachmentId>;
  hasIdea_attachments!: Sequelize.HasManyHasAssociationsMixin<idea_attachment, idea_attachmentId>;
  countIdea_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // idea hasMany idea_comment via idea_id
  idea_comments!: idea_comment[];
  getIdea_comments!: Sequelize.HasManyGetAssociationsMixin<idea_comment>;
  setIdea_comments!: Sequelize.HasManySetAssociationsMixin<idea_comment, idea_commentId>;
  addIdea_comment!: Sequelize.HasManyAddAssociationMixin<idea_comment, idea_commentId>;
  addIdea_comments!: Sequelize.HasManyAddAssociationsMixin<idea_comment, idea_commentId>;
  createIdea_comment!: Sequelize.HasManyCreateAssociationMixin<idea_comment>;
  removeIdea_comment!: Sequelize.HasManyRemoveAssociationMixin<idea_comment, idea_commentId>;
  removeIdea_comments!: Sequelize.HasManyRemoveAssociationsMixin<idea_comment, idea_commentId>;
  hasIdea_comment!: Sequelize.HasManyHasAssociationMixin<idea_comment, idea_commentId>;
  hasIdea_comments!: Sequelize.HasManyHasAssociationsMixin<idea_comment, idea_commentId>;
  countIdea_comments!: Sequelize.HasManyCountAssociationsMixin;
  // idea hasMany idea_department via idea_id
  idea_departments!: idea_department[];
  getIdea_departments!: Sequelize.HasManyGetAssociationsMixin<idea_department>;
  setIdea_departments!: Sequelize.HasManySetAssociationsMixin<idea_department, idea_departmentId>;
  addIdea_department!: Sequelize.HasManyAddAssociationMixin<idea_department, idea_departmentId>;
  addIdea_departments!: Sequelize.HasManyAddAssociationsMixin<idea_department, idea_departmentId>;
  createIdea_department!: Sequelize.HasManyCreateAssociationMixin<idea_department>;
  removeIdea_department!: Sequelize.HasManyRemoveAssociationMixin<idea_department, idea_departmentId>;
  removeIdea_departments!: Sequelize.HasManyRemoveAssociationsMixin<idea_department, idea_departmentId>;
  hasIdea_department!: Sequelize.HasManyHasAssociationMixin<idea_department, idea_departmentId>;
  hasIdea_departments!: Sequelize.HasManyHasAssociationsMixin<idea_department, idea_departmentId>;
  countIdea_departments!: Sequelize.HasManyCountAssociationsMixin;
  // idea hasMany idea_favorite via idea_id
  idea_favorites!: idea_favorite[];
  getIdea_favorites!: Sequelize.HasManyGetAssociationsMixin<idea_favorite>;
  setIdea_favorites!: Sequelize.HasManySetAssociationsMixin<idea_favorite, idea_favoriteId>;
  addIdea_favorite!: Sequelize.HasManyAddAssociationMixin<idea_favorite, idea_favoriteId>;
  addIdea_favorites!: Sequelize.HasManyAddAssociationsMixin<idea_favorite, idea_favoriteId>;
  createIdea_favorite!: Sequelize.HasManyCreateAssociationMixin<idea_favorite>;
  removeIdea_favorite!: Sequelize.HasManyRemoveAssociationMixin<idea_favorite, idea_favoriteId>;
  removeIdea_favorites!: Sequelize.HasManyRemoveAssociationsMixin<idea_favorite, idea_favoriteId>;
  hasIdea_favorite!: Sequelize.HasManyHasAssociationMixin<idea_favorite, idea_favoriteId>;
  hasIdea_favorites!: Sequelize.HasManyHasAssociationsMixin<idea_favorite, idea_favoriteId>;
  countIdea_favorites!: Sequelize.HasManyCountAssociationsMixin;
  // idea hasMany idea_like via idea_id
  idea_likes!: idea_like[];
  getIdea_likes!: Sequelize.HasManyGetAssociationsMixin<idea_like>;
  setIdea_likes!: Sequelize.HasManySetAssociationsMixin<idea_like, idea_likeId>;
  addIdea_like!: Sequelize.HasManyAddAssociationMixin<idea_like, idea_likeId>;
  addIdea_likes!: Sequelize.HasManyAddAssociationsMixin<idea_like, idea_likeId>;
  createIdea_like!: Sequelize.HasManyCreateAssociationMixin<idea_like>;
  removeIdea_like!: Sequelize.HasManyRemoveAssociationMixin<idea_like, idea_likeId>;
  removeIdea_likes!: Sequelize.HasManyRemoveAssociationsMixin<idea_like, idea_likeId>;
  hasIdea_like!: Sequelize.HasManyHasAssociationMixin<idea_like, idea_likeId>;
  hasIdea_likes!: Sequelize.HasManyHasAssociationsMixin<idea_like, idea_likeId>;
  countIdea_likes!: Sequelize.HasManyCountAssociationsMixin;
  // idea hasMany idea_read via idea_id
  idea_reads!: idea_read[];
  getIdea_reads!: Sequelize.HasManyGetAssociationsMixin<idea_read>;
  setIdea_reads!: Sequelize.HasManySetAssociationsMixin<idea_read, idea_readId>;
  addIdea_read!: Sequelize.HasManyAddAssociationMixin<idea_read, idea_readId>;
  addIdea_reads!: Sequelize.HasManyAddAssociationsMixin<idea_read, idea_readId>;
  createIdea_read!: Sequelize.HasManyCreateAssociationMixin<idea_read>;
  removeIdea_read!: Sequelize.HasManyRemoveAssociationMixin<idea_read, idea_readId>;
  removeIdea_reads!: Sequelize.HasManyRemoveAssociationsMixin<idea_read, idea_readId>;
  hasIdea_read!: Sequelize.HasManyHasAssociationMixin<idea_read, idea_readId>;
  hasIdea_reads!: Sequelize.HasManyHasAssociationsMixin<idea_read, idea_readId>;
  countIdea_reads!: Sequelize.HasManyCountAssociationsMixin;
  // idea belongsTo user via updated_by
  updated_by_user!: user;
  getUpdated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setUpdated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createUpdated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;
  // idea belongsTo user via created_by
  created_by_user!: user;
  getCreated_by_user!: Sequelize.BelongsToGetAssociationMixin<user>;
  setCreated_by_user!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createCreated_by_user!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof idea {
    return idea.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    title: {
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
    tableName: 'idea',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "FK6ne0ocaypahcd822w33x7vr5m",
        fields: [
          { name: "updated_by" },
        ]
      },
      {
        name: "FKi8xhiwxaxrxuu9wbt9oy2akqb",
        fields: [
          { name: "created_by" },
        ]
      },
      {
        name: "idea_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}

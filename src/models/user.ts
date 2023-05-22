import * as Sequelize from 'sequelize';
import { DataTypes, Model, Optional } from 'sequelize';
import type { activity_log, activity_logId } from './activity_log';
import type { admin_panel, admin_panelId } from './admin_panel';
import type { award, awardId } from './award';
import type { badge, badgeId } from './badge';
import type { certificate, certificateId } from './certificate';
import type { configuration, configurationId } from './configuration';
import type { department, departmentId } from './department';
import type { ecard, ecardId } from './ecard';
import type { forum, forumId } from './forum';
import type { forum_attachment, forum_attachmentId } from './forum_attachment';
import type { forum_comment_like, forum_comment_likeId } from './forum_comment_like';
import type { forum_department, forum_departmentId } from './forum_department';
import type { forum_following, forum_followingId } from './forum_following';
import type { forum_like, forum_likeId } from './forum_like';
import type { forum_read, forum_readId } from './forum_read';
import type { forumcomment, forumcommentId } from './forumcomment';
import type { hashtag, hashtagId } from './hashtag';
import type { idea, ideaId } from './idea';
import type { idea_attachment, idea_attachmentId } from './idea_attachment';
import type { idea_comment, idea_commentId } from './idea_comment';
import type { idea_department, idea_departmentId } from './idea_department';
import type { idea_favorite, idea_favoriteId } from './idea_favorite';
import type { idea_like, idea_likeId } from './idea_like';
import type { idea_read, idea_readId } from './idea_read';
import type { ideacomments_attachment, ideacomments_attachmentId } from './ideacomments_attachment';
import type { manage_award_nomination, manage_award_nominationId } from './manage_award_nomination';
import type { manage_award, manage_awardId } from './manage_award';
import type { message, messageId } from './message';
import type { notification, notificationId } from './notification';
import type { password_reset_token, password_reset_tokenId } from './password_reset_token';
import type { poll_choice, poll_choiceId } from './poll_choice';
import type { poll_response, poll_responseId } from './poll_response';
import type { poll, pollId } from './poll';
import type { program, programId } from './program';
import type { program_cash_reward, program_cash_rewardId } from './program_cash_reward';
import type { program_task, program_taskId } from './program_task';
import type { program_task_attachment, program_task_attachmentId } from './program_task_attachment';
import type { program_task_comment, program_task_commentId } from './program_task_comment';
import type { program_task_user, program_task_userId } from './program_task_user';
import type { program_user, program_userId } from './program_user';
import type { refreshtoken, refreshtokenId } from './refreshtoken';
import type { reward, rewardId } from './reward';
import type { role, roleId } from './role';
import type { role_screen_mapping, role_screen_mappingId } from './role_screen_mapping';
import type { schedule_setting, schedule_settingId } from './schedule_setting';
import type { scheduler, schedulerId } from './scheduler';
import type { social_wall_likepost, social_wall_likepostId } from './social_wall_likepost';
import type { socialwall, socialwallId } from './socialwall';
import type { socialwallcomment, socialwallcommentId } from './socialwallcomment';
import type { survey, surveyId } from './survey';
import type { survey_important, survey_importantId } from './survey_important';
import type { survey_question, survey_questionId } from './survey_question';
import type { survey_question_bank, survey_question_bankId } from './survey_question_bank';
import type { survey_response, survey_responseId } from './survey_response';
import type { template, templateId } from './template';
import type { user_badge, user_badgeId } from './user_badge';
import type { user_certificate, user_certificateId } from './user_certificate';

export interface userAttributes {
  id: number;
  active: boolean;
  country_code?: string;
  created_at?: Date;
  created_by?: number;
  date_of_birth?: Date;
  date_of_joining?: Date;
  designation?: string;
  email?: string;
  enabled_reason?: string;
  firstname?: string;
  is_default: boolean;
  lastname?: string;
  password?: string;
  project_tour?: string;
  telephone_number?: string;
  updated_at?: Date;
  updated_by?: number;
  username?: string;
  department_id?: number;
  manager_id?: number;
  role_id?: number;
  profile_pic?: string;
  sign_pic?: string;
}

export type userPk = "id";
export type userId = user[userPk];
export type userOptionalAttributes = "id" | "country_code" | "created_at" | "created_by" | "date_of_birth" | "date_of_joining" | "designation" | "email" | "enabled_reason" | "firstname" | "lastname" | "password" | "project_tour" | "telephone_number" | "updated_at" | "updated_by" | "username" | "department_id" | "manager_id" | "role_id" | "profile_pic" | "sign_pic";
export type userCreationAttributes = Optional<userAttributes, userOptionalAttributes>;

export class user extends Model<userAttributes, userCreationAttributes> implements userAttributes {
  id!: number;
  active!: boolean;
  country_code?: string;
  created_at?: Date;
  created_by?: number;
  date_of_birth?: Date;
  date_of_joining?: Date;
  designation?: string;
  email?: string;
  enabled_reason?: string;
  firstname?: string;
  is_default!: boolean;
  lastname?: string;
  password?: string;
  project_tour?: string;
  telephone_number?: string;
  updated_at?: Date;
  updated_by?: number;
  username?: string;
  department_id?: number;
  manager_id?: number;
  role_id?: number;
  profile_pic?: string;
  sign_pic?: string;

  // user belongsTo department via department_id
  department_department!: department;
  getDepartment_department!: Sequelize.BelongsToGetAssociationMixin<department>;
  setDepartment_department!: Sequelize.BelongsToSetAssociationMixin<department, departmentId>;
  createDepartment_department!: Sequelize.BelongsToCreateAssociationMixin<department>;
  // user belongsTo role via role_id
  role_role!: role;
  getRole_role!: Sequelize.BelongsToGetAssociationMixin<role>;
  setRole_role!: Sequelize.BelongsToSetAssociationMixin<role, roleId>;
  createRole_role!: Sequelize.BelongsToCreateAssociationMixin<role>;
  // user hasMany activity_log via user_id
  activity_logs!: activity_log[];
  getActivity_logs!: Sequelize.HasManyGetAssociationsMixin<activity_log>;
  setActivity_logs!: Sequelize.HasManySetAssociationsMixin<activity_log, activity_logId>;
  addActivity_log!: Sequelize.HasManyAddAssociationMixin<activity_log, activity_logId>;
  addActivity_logs!: Sequelize.HasManyAddAssociationsMixin<activity_log, activity_logId>;
  createActivity_log!: Sequelize.HasManyCreateAssociationMixin<activity_log>;
  removeActivity_log!: Sequelize.HasManyRemoveAssociationMixin<activity_log, activity_logId>;
  removeActivity_logs!: Sequelize.HasManyRemoveAssociationsMixin<activity_log, activity_logId>;
  hasActivity_log!: Sequelize.HasManyHasAssociationMixin<activity_log, activity_logId>;
  hasActivity_logs!: Sequelize.HasManyHasAssociationsMixin<activity_log, activity_logId>;
  countActivity_logs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany admin_panel via created_by
  admin_panels!: admin_panel[];
  getAdmin_panels!: Sequelize.HasManyGetAssociationsMixin<admin_panel>;
  setAdmin_panels!: Sequelize.HasManySetAssociationsMixin<admin_panel, admin_panelId>;
  addAdmin_panel!: Sequelize.HasManyAddAssociationMixin<admin_panel, admin_panelId>;
  addAdmin_panels!: Sequelize.HasManyAddAssociationsMixin<admin_panel, admin_panelId>;
  createAdmin_panel!: Sequelize.HasManyCreateAssociationMixin<admin_panel>;
  removeAdmin_panel!: Sequelize.HasManyRemoveAssociationMixin<admin_panel, admin_panelId>;
  removeAdmin_panels!: Sequelize.HasManyRemoveAssociationsMixin<admin_panel, admin_panelId>;
  hasAdmin_panel!: Sequelize.HasManyHasAssociationMixin<admin_panel, admin_panelId>;
  hasAdmin_panels!: Sequelize.HasManyHasAssociationsMixin<admin_panel, admin_panelId>;
  countAdmin_panels!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany admin_panel via updated_by
  updated_by_admin_panels!: admin_panel[];
  getUpdated_by_admin_panels!: Sequelize.HasManyGetAssociationsMixin<admin_panel>;
  setUpdated_by_admin_panels!: Sequelize.HasManySetAssociationsMixin<admin_panel, admin_panelId>;
  addUpdated_by_admin_panel!: Sequelize.HasManyAddAssociationMixin<admin_panel, admin_panelId>;
  addUpdated_by_admin_panels!: Sequelize.HasManyAddAssociationsMixin<admin_panel, admin_panelId>;
  createUpdated_by_admin_panel!: Sequelize.HasManyCreateAssociationMixin<admin_panel>;
  removeUpdated_by_admin_panel!: Sequelize.HasManyRemoveAssociationMixin<admin_panel, admin_panelId>;
  removeUpdated_by_admin_panels!: Sequelize.HasManyRemoveAssociationsMixin<admin_panel, admin_panelId>;
  hasUpdated_by_admin_panel!: Sequelize.HasManyHasAssociationMixin<admin_panel, admin_panelId>;
  hasUpdated_by_admin_panels!: Sequelize.HasManyHasAssociationsMixin<admin_panel, admin_panelId>;
  countUpdated_by_admin_panels!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany award via created_by
  awards!: award[];
  getAwards!: Sequelize.HasManyGetAssociationsMixin<award>;
  setAwards!: Sequelize.HasManySetAssociationsMixin<award, awardId>;
  addAward!: Sequelize.HasManyAddAssociationMixin<award, awardId>;
  addAwards!: Sequelize.HasManyAddAssociationsMixin<award, awardId>;
  createAward!: Sequelize.HasManyCreateAssociationMixin<award>;
  removeAward!: Sequelize.HasManyRemoveAssociationMixin<award, awardId>;
  removeAwards!: Sequelize.HasManyRemoveAssociationsMixin<award, awardId>;
  hasAward!: Sequelize.HasManyHasAssociationMixin<award, awardId>;
  hasAwards!: Sequelize.HasManyHasAssociationsMixin<award, awardId>;
  countAwards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany award via updated_by
  updated_by_awards!: award[];
  getUpdated_by_awards!: Sequelize.HasManyGetAssociationsMixin<award>;
  setUpdated_by_awards!: Sequelize.HasManySetAssociationsMixin<award, awardId>;
  addUpdated_by_award!: Sequelize.HasManyAddAssociationMixin<award, awardId>;
  addUpdated_by_awards!: Sequelize.HasManyAddAssociationsMixin<award, awardId>;
  createUpdated_by_award!: Sequelize.HasManyCreateAssociationMixin<award>;
  removeUpdated_by_award!: Sequelize.HasManyRemoveAssociationMixin<award, awardId>;
  removeUpdated_by_awards!: Sequelize.HasManyRemoveAssociationsMixin<award, awardId>;
  hasUpdated_by_award!: Sequelize.HasManyHasAssociationMixin<award, awardId>;
  hasUpdated_by_awards!: Sequelize.HasManyHasAssociationsMixin<award, awardId>;
  countUpdated_by_awards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany badge via created_by
  badges!: badge[];
  getBadges!: Sequelize.HasManyGetAssociationsMixin<badge>;
  setBadges!: Sequelize.HasManySetAssociationsMixin<badge, badgeId>;
  addBadge!: Sequelize.HasManyAddAssociationMixin<badge, badgeId>;
  addBadges!: Sequelize.HasManyAddAssociationsMixin<badge, badgeId>;
  createBadge!: Sequelize.HasManyCreateAssociationMixin<badge>;
  removeBadge!: Sequelize.HasManyRemoveAssociationMixin<badge, badgeId>;
  removeBadges!: Sequelize.HasManyRemoveAssociationsMixin<badge, badgeId>;
  hasBadge!: Sequelize.HasManyHasAssociationMixin<badge, badgeId>;
  hasBadges!: Sequelize.HasManyHasAssociationsMixin<badge, badgeId>;
  countBadges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany badge via updated_by
  updated_by_badges!: badge[];
  getUpdated_by_badges!: Sequelize.HasManyGetAssociationsMixin<badge>;
  setUpdated_by_badges!: Sequelize.HasManySetAssociationsMixin<badge, badgeId>;
  addUpdated_by_badge!: Sequelize.HasManyAddAssociationMixin<badge, badgeId>;
  addUpdated_by_badges!: Sequelize.HasManyAddAssociationsMixin<badge, badgeId>;
  createUpdated_by_badge!: Sequelize.HasManyCreateAssociationMixin<badge>;
  removeUpdated_by_badge!: Sequelize.HasManyRemoveAssociationMixin<badge, badgeId>;
  removeUpdated_by_badges!: Sequelize.HasManyRemoveAssociationsMixin<badge, badgeId>;
  hasUpdated_by_badge!: Sequelize.HasManyHasAssociationMixin<badge, badgeId>;
  hasUpdated_by_badges!: Sequelize.HasManyHasAssociationsMixin<badge, badgeId>;
  countUpdated_by_badges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany certificate via created_by
  certificates!: certificate[];
  getCertificates!: Sequelize.HasManyGetAssociationsMixin<certificate>;
  setCertificates!: Sequelize.HasManySetAssociationsMixin<certificate, certificateId>;
  addCertificate!: Sequelize.HasManyAddAssociationMixin<certificate, certificateId>;
  addCertificates!: Sequelize.HasManyAddAssociationsMixin<certificate, certificateId>;
  createCertificate!: Sequelize.HasManyCreateAssociationMixin<certificate>;
  removeCertificate!: Sequelize.HasManyRemoveAssociationMixin<certificate, certificateId>;
  removeCertificates!: Sequelize.HasManyRemoveAssociationsMixin<certificate, certificateId>;
  hasCertificate!: Sequelize.HasManyHasAssociationMixin<certificate, certificateId>;
  hasCertificates!: Sequelize.HasManyHasAssociationsMixin<certificate, certificateId>;
  countCertificates!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany certificate via updated_by
  updated_by_certificates!: certificate[];
  getUpdated_by_certificates!: Sequelize.HasManyGetAssociationsMixin<certificate>;
  setUpdated_by_certificates!: Sequelize.HasManySetAssociationsMixin<certificate, certificateId>;
  addUpdated_by_certificate!: Sequelize.HasManyAddAssociationMixin<certificate, certificateId>;
  addUpdated_by_certificates!: Sequelize.HasManyAddAssociationsMixin<certificate, certificateId>;
  createUpdated_by_certificate!: Sequelize.HasManyCreateAssociationMixin<certificate>;
  removeUpdated_by_certificate!: Sequelize.HasManyRemoveAssociationMixin<certificate, certificateId>;
  removeUpdated_by_certificates!: Sequelize.HasManyRemoveAssociationsMixin<certificate, certificateId>;
  hasUpdated_by_certificate!: Sequelize.HasManyHasAssociationMixin<certificate, certificateId>;
  hasUpdated_by_certificates!: Sequelize.HasManyHasAssociationsMixin<certificate, certificateId>;
  countUpdated_by_certificates!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany configuration via created_by
  configurations!: configuration[];
  getConfigurations!: Sequelize.HasManyGetAssociationsMixin<configuration>;
  setConfigurations!: Sequelize.HasManySetAssociationsMixin<configuration, configurationId>;
  addConfiguration!: Sequelize.HasManyAddAssociationMixin<configuration, configurationId>;
  addConfigurations!: Sequelize.HasManyAddAssociationsMixin<configuration, configurationId>;
  createConfiguration!: Sequelize.HasManyCreateAssociationMixin<configuration>;
  removeConfiguration!: Sequelize.HasManyRemoveAssociationMixin<configuration, configurationId>;
  removeConfigurations!: Sequelize.HasManyRemoveAssociationsMixin<configuration, configurationId>;
  hasConfiguration!: Sequelize.HasManyHasAssociationMixin<configuration, configurationId>;
  hasConfigurations!: Sequelize.HasManyHasAssociationsMixin<configuration, configurationId>;
  countConfigurations!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany configuration via updated_by
  updated_by_configurations!: configuration[];
  getUpdated_by_configurations!: Sequelize.HasManyGetAssociationsMixin<configuration>;
  setUpdated_by_configurations!: Sequelize.HasManySetAssociationsMixin<configuration, configurationId>;
  addUpdated_by_configuration!: Sequelize.HasManyAddAssociationMixin<configuration, configurationId>;
  addUpdated_by_configurations!: Sequelize.HasManyAddAssociationsMixin<configuration, configurationId>;
  createUpdated_by_configuration!: Sequelize.HasManyCreateAssociationMixin<configuration>;
  removeUpdated_by_configuration!: Sequelize.HasManyRemoveAssociationMixin<configuration, configurationId>;
  removeUpdated_by_configurations!: Sequelize.HasManyRemoveAssociationsMixin<configuration, configurationId>;
  hasUpdated_by_configuration!: Sequelize.HasManyHasAssociationMixin<configuration, configurationId>;
  hasUpdated_by_configurations!: Sequelize.HasManyHasAssociationsMixin<configuration, configurationId>;
  countUpdated_by_configurations!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany department via created_by
  departments!: department[];
  getDepartments!: Sequelize.HasManyGetAssociationsMixin<department>;
  setDepartments!: Sequelize.HasManySetAssociationsMixin<department, departmentId>;
  addDepartment!: Sequelize.HasManyAddAssociationMixin<department, departmentId>;
  addDepartments!: Sequelize.HasManyAddAssociationsMixin<department, departmentId>;
  createDepartment!: Sequelize.HasManyCreateAssociationMixin<department>;
  removeDepartment!: Sequelize.HasManyRemoveAssociationMixin<department, departmentId>;
  removeDepartments!: Sequelize.HasManyRemoveAssociationsMixin<department, departmentId>;
  hasDepartment!: Sequelize.HasManyHasAssociationMixin<department, departmentId>;
  hasDepartments!: Sequelize.HasManyHasAssociationsMixin<department, departmentId>;
  countDepartments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany department via updated_by
  updated_by_departments!: department[];
  getUpdated_by_departments!: Sequelize.HasManyGetAssociationsMixin<department>;
  setUpdated_by_departments!: Sequelize.HasManySetAssociationsMixin<department, departmentId>;
  addUpdated_by_department!: Sequelize.HasManyAddAssociationMixin<department, departmentId>;
  addUpdated_by_departments!: Sequelize.HasManyAddAssociationsMixin<department, departmentId>;
  createUpdated_by_department!: Sequelize.HasManyCreateAssociationMixin<department>;
  removeUpdated_by_department!: Sequelize.HasManyRemoveAssociationMixin<department, departmentId>;
  removeUpdated_by_departments!: Sequelize.HasManyRemoveAssociationsMixin<department, departmentId>;
  hasUpdated_by_department!: Sequelize.HasManyHasAssociationMixin<department, departmentId>;
  hasUpdated_by_departments!: Sequelize.HasManyHasAssociationsMixin<department, departmentId>;
  countUpdated_by_departments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ecard via created_by
  ecards!: ecard[];
  getEcards!: Sequelize.HasManyGetAssociationsMixin<ecard>;
  setEcards!: Sequelize.HasManySetAssociationsMixin<ecard, ecardId>;
  addEcard!: Sequelize.HasManyAddAssociationMixin<ecard, ecardId>;
  addEcards!: Sequelize.HasManyAddAssociationsMixin<ecard, ecardId>;
  createEcard!: Sequelize.HasManyCreateAssociationMixin<ecard>;
  removeEcard!: Sequelize.HasManyRemoveAssociationMixin<ecard, ecardId>;
  removeEcards!: Sequelize.HasManyRemoveAssociationsMixin<ecard, ecardId>;
  hasEcard!: Sequelize.HasManyHasAssociationMixin<ecard, ecardId>;
  hasEcards!: Sequelize.HasManyHasAssociationsMixin<ecard, ecardId>;
  countEcards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ecard via from_user_id
  from_user_ecards!: ecard[];
  getFrom_user_ecards!: Sequelize.HasManyGetAssociationsMixin<ecard>;
  setFrom_user_ecards!: Sequelize.HasManySetAssociationsMixin<ecard, ecardId>;
  addFrom_user_ecard!: Sequelize.HasManyAddAssociationMixin<ecard, ecardId>;
  addFrom_user_ecards!: Sequelize.HasManyAddAssociationsMixin<ecard, ecardId>;
  createFrom_user_ecard!: Sequelize.HasManyCreateAssociationMixin<ecard>;
  removeFrom_user_ecard!: Sequelize.HasManyRemoveAssociationMixin<ecard, ecardId>;
  removeFrom_user_ecards!: Sequelize.HasManyRemoveAssociationsMixin<ecard, ecardId>;
  hasFrom_user_ecard!: Sequelize.HasManyHasAssociationMixin<ecard, ecardId>;
  hasFrom_user_ecards!: Sequelize.HasManyHasAssociationsMixin<ecard, ecardId>;
  countFrom_user_ecards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ecard via to_user_id
  to_user_ecards!: ecard[];
  getTo_user_ecards!: Sequelize.HasManyGetAssociationsMixin<ecard>;
  setTo_user_ecards!: Sequelize.HasManySetAssociationsMixin<ecard, ecardId>;
  addTo_user_ecard!: Sequelize.HasManyAddAssociationMixin<ecard, ecardId>;
  addTo_user_ecards!: Sequelize.HasManyAddAssociationsMixin<ecard, ecardId>;
  createTo_user_ecard!: Sequelize.HasManyCreateAssociationMixin<ecard>;
  removeTo_user_ecard!: Sequelize.HasManyRemoveAssociationMixin<ecard, ecardId>;
  removeTo_user_ecards!: Sequelize.HasManyRemoveAssociationsMixin<ecard, ecardId>;
  hasTo_user_ecard!: Sequelize.HasManyHasAssociationMixin<ecard, ecardId>;
  hasTo_user_ecards!: Sequelize.HasManyHasAssociationsMixin<ecard, ecardId>;
  countTo_user_ecards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ecard via updated_by
  updated_by_ecards!: ecard[];
  getUpdated_by_ecards!: Sequelize.HasManyGetAssociationsMixin<ecard>;
  setUpdated_by_ecards!: Sequelize.HasManySetAssociationsMixin<ecard, ecardId>;
  addUpdated_by_ecard!: Sequelize.HasManyAddAssociationMixin<ecard, ecardId>;
  addUpdated_by_ecards!: Sequelize.HasManyAddAssociationsMixin<ecard, ecardId>;
  createUpdated_by_ecard!: Sequelize.HasManyCreateAssociationMixin<ecard>;
  removeUpdated_by_ecard!: Sequelize.HasManyRemoveAssociationMixin<ecard, ecardId>;
  removeUpdated_by_ecards!: Sequelize.HasManyRemoveAssociationsMixin<ecard, ecardId>;
  hasUpdated_by_ecard!: Sequelize.HasManyHasAssociationMixin<ecard, ecardId>;
  hasUpdated_by_ecards!: Sequelize.HasManyHasAssociationsMixin<ecard, ecardId>;
  countUpdated_by_ecards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum via created_by
  forums!: forum[];
  getForums!: Sequelize.HasManyGetAssociationsMixin<forum>;
  setForums!: Sequelize.HasManySetAssociationsMixin<forum, forumId>;
  addForum!: Sequelize.HasManyAddAssociationMixin<forum, forumId>;
  addForums!: Sequelize.HasManyAddAssociationsMixin<forum, forumId>;
  createForum!: Sequelize.HasManyCreateAssociationMixin<forum>;
  removeForum!: Sequelize.HasManyRemoveAssociationMixin<forum, forumId>;
  removeForums!: Sequelize.HasManyRemoveAssociationsMixin<forum, forumId>;
  hasForum!: Sequelize.HasManyHasAssociationMixin<forum, forumId>;
  hasForums!: Sequelize.HasManyHasAssociationsMixin<forum, forumId>;
  countForums!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum via updated_by
  updated_by_forums!: forum[];
  getUpdated_by_forums!: Sequelize.HasManyGetAssociationsMixin<forum>;
  setUpdated_by_forums!: Sequelize.HasManySetAssociationsMixin<forum, forumId>;
  addUpdated_by_forum!: Sequelize.HasManyAddAssociationMixin<forum, forumId>;
  addUpdated_by_forums!: Sequelize.HasManyAddAssociationsMixin<forum, forumId>;
  createUpdated_by_forum!: Sequelize.HasManyCreateAssociationMixin<forum>;
  removeUpdated_by_forum!: Sequelize.HasManyRemoveAssociationMixin<forum, forumId>;
  removeUpdated_by_forums!: Sequelize.HasManyRemoveAssociationsMixin<forum, forumId>;
  hasUpdated_by_forum!: Sequelize.HasManyHasAssociationMixin<forum, forumId>;
  hasUpdated_by_forums!: Sequelize.HasManyHasAssociationsMixin<forum, forumId>;
  countUpdated_by_forums!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum_attachment via created_by
  forum_attachments!: forum_attachment[];
  getForum_attachments!: Sequelize.HasManyGetAssociationsMixin<forum_attachment>;
  setForum_attachments!: Sequelize.HasManySetAssociationsMixin<forum_attachment, forum_attachmentId>;
  addForum_attachment!: Sequelize.HasManyAddAssociationMixin<forum_attachment, forum_attachmentId>;
  addForum_attachments!: Sequelize.HasManyAddAssociationsMixin<forum_attachment, forum_attachmentId>;
  createForum_attachment!: Sequelize.HasManyCreateAssociationMixin<forum_attachment>;
  removeForum_attachment!: Sequelize.HasManyRemoveAssociationMixin<forum_attachment, forum_attachmentId>;
  removeForum_attachments!: Sequelize.HasManyRemoveAssociationsMixin<forum_attachment, forum_attachmentId>;
  hasForum_attachment!: Sequelize.HasManyHasAssociationMixin<forum_attachment, forum_attachmentId>;
  hasForum_attachments!: Sequelize.HasManyHasAssociationsMixin<forum_attachment, forum_attachmentId>;
  countForum_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum_attachment via updated_by
  updated_by_forum_attachments!: forum_attachment[];
  getUpdated_by_forum_attachments!: Sequelize.HasManyGetAssociationsMixin<forum_attachment>;
  setUpdated_by_forum_attachments!: Sequelize.HasManySetAssociationsMixin<forum_attachment, forum_attachmentId>;
  addUpdated_by_forum_attachment!: Sequelize.HasManyAddAssociationMixin<forum_attachment, forum_attachmentId>;
  addUpdated_by_forum_attachments!: Sequelize.HasManyAddAssociationsMixin<forum_attachment, forum_attachmentId>;
  createUpdated_by_forum_attachment!: Sequelize.HasManyCreateAssociationMixin<forum_attachment>;
  removeUpdated_by_forum_attachment!: Sequelize.HasManyRemoveAssociationMixin<forum_attachment, forum_attachmentId>;
  removeUpdated_by_forum_attachments!: Sequelize.HasManyRemoveAssociationsMixin<forum_attachment, forum_attachmentId>;
  hasUpdated_by_forum_attachment!: Sequelize.HasManyHasAssociationMixin<forum_attachment, forum_attachmentId>;
  hasUpdated_by_forum_attachments!: Sequelize.HasManyHasAssociationsMixin<forum_attachment, forum_attachmentId>;
  countUpdated_by_forum_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum_comment_like via user_id
  forum_comment_likes!: forum_comment_like[];
  getForum_comment_likes!: Sequelize.HasManyGetAssociationsMixin<forum_comment_like>;
  setForum_comment_likes!: Sequelize.HasManySetAssociationsMixin<forum_comment_like, forum_comment_likeId>;
  addForum_comment_like!: Sequelize.HasManyAddAssociationMixin<forum_comment_like, forum_comment_likeId>;
  addForum_comment_likes!: Sequelize.HasManyAddAssociationsMixin<forum_comment_like, forum_comment_likeId>;
  createForum_comment_like!: Sequelize.HasManyCreateAssociationMixin<forum_comment_like>;
  removeForum_comment_like!: Sequelize.HasManyRemoveAssociationMixin<forum_comment_like, forum_comment_likeId>;
  removeForum_comment_likes!: Sequelize.HasManyRemoveAssociationsMixin<forum_comment_like, forum_comment_likeId>;
  hasForum_comment_like!: Sequelize.HasManyHasAssociationMixin<forum_comment_like, forum_comment_likeId>;
  hasForum_comment_likes!: Sequelize.HasManyHasAssociationsMixin<forum_comment_like, forum_comment_likeId>;
  countForum_comment_likes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum_department via created_by
  forum_departments!: forum_department[];
  getForum_departments!: Sequelize.HasManyGetAssociationsMixin<forum_department>;
  setForum_departments!: Sequelize.HasManySetAssociationsMixin<forum_department, forum_departmentId>;
  addForum_department!: Sequelize.HasManyAddAssociationMixin<forum_department, forum_departmentId>;
  addForum_departments!: Sequelize.HasManyAddAssociationsMixin<forum_department, forum_departmentId>;
  createForum_department!: Sequelize.HasManyCreateAssociationMixin<forum_department>;
  removeForum_department!: Sequelize.HasManyRemoveAssociationMixin<forum_department, forum_departmentId>;
  removeForum_departments!: Sequelize.HasManyRemoveAssociationsMixin<forum_department, forum_departmentId>;
  hasForum_department!: Sequelize.HasManyHasAssociationMixin<forum_department, forum_departmentId>;
  hasForum_departments!: Sequelize.HasManyHasAssociationsMixin<forum_department, forum_departmentId>;
  countForum_departments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum_department via updated_by
  updated_by_forum_departments!: forum_department[];
  getUpdated_by_forum_departments!: Sequelize.HasManyGetAssociationsMixin<forum_department>;
  setUpdated_by_forum_departments!: Sequelize.HasManySetAssociationsMixin<forum_department, forum_departmentId>;
  addUpdated_by_forum_department!: Sequelize.HasManyAddAssociationMixin<forum_department, forum_departmentId>;
  addUpdated_by_forum_departments!: Sequelize.HasManyAddAssociationsMixin<forum_department, forum_departmentId>;
  createUpdated_by_forum_department!: Sequelize.HasManyCreateAssociationMixin<forum_department>;
  removeUpdated_by_forum_department!: Sequelize.HasManyRemoveAssociationMixin<forum_department, forum_departmentId>;
  removeUpdated_by_forum_departments!: Sequelize.HasManyRemoveAssociationsMixin<forum_department, forum_departmentId>;
  hasUpdated_by_forum_department!: Sequelize.HasManyHasAssociationMixin<forum_department, forum_departmentId>;
  hasUpdated_by_forum_departments!: Sequelize.HasManyHasAssociationsMixin<forum_department, forum_departmentId>;
  countUpdated_by_forum_departments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum_following via user_id
  forum_followings!: forum_following[];
  getForum_followings!: Sequelize.HasManyGetAssociationsMixin<forum_following>;
  setForum_followings!: Sequelize.HasManySetAssociationsMixin<forum_following, forum_followingId>;
  addForum_following!: Sequelize.HasManyAddAssociationMixin<forum_following, forum_followingId>;
  addForum_followings!: Sequelize.HasManyAddAssociationsMixin<forum_following, forum_followingId>;
  createForum_following!: Sequelize.HasManyCreateAssociationMixin<forum_following>;
  removeForum_following!: Sequelize.HasManyRemoveAssociationMixin<forum_following, forum_followingId>;
  removeForum_followings!: Sequelize.HasManyRemoveAssociationsMixin<forum_following, forum_followingId>;
  hasForum_following!: Sequelize.HasManyHasAssociationMixin<forum_following, forum_followingId>;
  hasForum_followings!: Sequelize.HasManyHasAssociationsMixin<forum_following, forum_followingId>;
  countForum_followings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum_like via user_id
  forum_likes!: forum_like[];
  getForum_likes!: Sequelize.HasManyGetAssociationsMixin<forum_like>;
  setForum_likes!: Sequelize.HasManySetAssociationsMixin<forum_like, forum_likeId>;
  addForum_like!: Sequelize.HasManyAddAssociationMixin<forum_like, forum_likeId>;
  addForum_likes!: Sequelize.HasManyAddAssociationsMixin<forum_like, forum_likeId>;
  createForum_like!: Sequelize.HasManyCreateAssociationMixin<forum_like>;
  removeForum_like!: Sequelize.HasManyRemoveAssociationMixin<forum_like, forum_likeId>;
  removeForum_likes!: Sequelize.HasManyRemoveAssociationsMixin<forum_like, forum_likeId>;
  hasForum_like!: Sequelize.HasManyHasAssociationMixin<forum_like, forum_likeId>;
  hasForum_likes!: Sequelize.HasManyHasAssociationsMixin<forum_like, forum_likeId>;
  countForum_likes!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forum_read via user_id
  forum_reads!: forum_read[];
  getForum_reads!: Sequelize.HasManyGetAssociationsMixin<forum_read>;
  setForum_reads!: Sequelize.HasManySetAssociationsMixin<forum_read, forum_readId>;
  addForum_read!: Sequelize.HasManyAddAssociationMixin<forum_read, forum_readId>;
  addForum_reads!: Sequelize.HasManyAddAssociationsMixin<forum_read, forum_readId>;
  createForum_read!: Sequelize.HasManyCreateAssociationMixin<forum_read>;
  removeForum_read!: Sequelize.HasManyRemoveAssociationMixin<forum_read, forum_readId>;
  removeForum_reads!: Sequelize.HasManyRemoveAssociationsMixin<forum_read, forum_readId>;
  hasForum_read!: Sequelize.HasManyHasAssociationMixin<forum_read, forum_readId>;
  hasForum_reads!: Sequelize.HasManyHasAssociationsMixin<forum_read, forum_readId>;
  countForum_reads!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forumcomment via created_by
  forumcomments!: forumcomment[];
  getForumcomments!: Sequelize.HasManyGetAssociationsMixin<forumcomment>;
  setForumcomments!: Sequelize.HasManySetAssociationsMixin<forumcomment, forumcommentId>;
  addForumcomment!: Sequelize.HasManyAddAssociationMixin<forumcomment, forumcommentId>;
  addForumcomments!: Sequelize.HasManyAddAssociationsMixin<forumcomment, forumcommentId>;
  createForumcomment!: Sequelize.HasManyCreateAssociationMixin<forumcomment>;
  removeForumcomment!: Sequelize.HasManyRemoveAssociationMixin<forumcomment, forumcommentId>;
  removeForumcomments!: Sequelize.HasManyRemoveAssociationsMixin<forumcomment, forumcommentId>;
  hasForumcomment!: Sequelize.HasManyHasAssociationMixin<forumcomment, forumcommentId>;
  hasForumcomments!: Sequelize.HasManyHasAssociationsMixin<forumcomment, forumcommentId>;
  countForumcomments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany forumcomment via updated_by
  updated_by_forumcomments!: forumcomment[];
  getUpdated_by_forumcomments!: Sequelize.HasManyGetAssociationsMixin<forumcomment>;
  setUpdated_by_forumcomments!: Sequelize.HasManySetAssociationsMixin<forumcomment, forumcommentId>;
  addUpdated_by_forumcomment!: Sequelize.HasManyAddAssociationMixin<forumcomment, forumcommentId>;
  addUpdated_by_forumcomments!: Sequelize.HasManyAddAssociationsMixin<forumcomment, forumcommentId>;
  createUpdated_by_forumcomment!: Sequelize.HasManyCreateAssociationMixin<forumcomment>;
  removeUpdated_by_forumcomment!: Sequelize.HasManyRemoveAssociationMixin<forumcomment, forumcommentId>;
  removeUpdated_by_forumcomments!: Sequelize.HasManyRemoveAssociationsMixin<forumcomment, forumcommentId>;
  hasUpdated_by_forumcomment!: Sequelize.HasManyHasAssociationMixin<forumcomment, forumcommentId>;
  hasUpdated_by_forumcomments!: Sequelize.HasManyHasAssociationsMixin<forumcomment, forumcommentId>;
  countUpdated_by_forumcomments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany hashtag via created_by
  hashtags!: hashtag[];
  getHashtags!: Sequelize.HasManyGetAssociationsMixin<hashtag>;
  setHashtags!: Sequelize.HasManySetAssociationsMixin<hashtag, hashtagId>;
  addHashtag!: Sequelize.HasManyAddAssociationMixin<hashtag, hashtagId>;
  addHashtags!: Sequelize.HasManyAddAssociationsMixin<hashtag, hashtagId>;
  createHashtag!: Sequelize.HasManyCreateAssociationMixin<hashtag>;
  removeHashtag!: Sequelize.HasManyRemoveAssociationMixin<hashtag, hashtagId>;
  removeHashtags!: Sequelize.HasManyRemoveAssociationsMixin<hashtag, hashtagId>;
  hasHashtag!: Sequelize.HasManyHasAssociationMixin<hashtag, hashtagId>;
  hasHashtags!: Sequelize.HasManyHasAssociationsMixin<hashtag, hashtagId>;
  countHashtags!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany hashtag via updated_by
  updated_by_hashtags!: hashtag[];
  getUpdated_by_hashtags!: Sequelize.HasManyGetAssociationsMixin<hashtag>;
  setUpdated_by_hashtags!: Sequelize.HasManySetAssociationsMixin<hashtag, hashtagId>;
  addUpdated_by_hashtag!: Sequelize.HasManyAddAssociationMixin<hashtag, hashtagId>;
  addUpdated_by_hashtags!: Sequelize.HasManyAddAssociationsMixin<hashtag, hashtagId>;
  createUpdated_by_hashtag!: Sequelize.HasManyCreateAssociationMixin<hashtag>;
  removeUpdated_by_hashtag!: Sequelize.HasManyRemoveAssociationMixin<hashtag, hashtagId>;
  removeUpdated_by_hashtags!: Sequelize.HasManyRemoveAssociationsMixin<hashtag, hashtagId>;
  hasUpdated_by_hashtag!: Sequelize.HasManyHasAssociationMixin<hashtag, hashtagId>;
  hasUpdated_by_hashtags!: Sequelize.HasManyHasAssociationsMixin<hashtag, hashtagId>;
  countUpdated_by_hashtags!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany idea via created_by
  ideas!: idea[];
  getIdeas!: Sequelize.HasManyGetAssociationsMixin<idea>;
  setIdeas!: Sequelize.HasManySetAssociationsMixin<idea, ideaId>;
  addIdea!: Sequelize.HasManyAddAssociationMixin<idea, ideaId>;
  addIdeas!: Sequelize.HasManyAddAssociationsMixin<idea, ideaId>;
  createIdea!: Sequelize.HasManyCreateAssociationMixin<idea>;
  removeIdea!: Sequelize.HasManyRemoveAssociationMixin<idea, ideaId>;
  removeIdeas!: Sequelize.HasManyRemoveAssociationsMixin<idea, ideaId>;
  hasIdea!: Sequelize.HasManyHasAssociationMixin<idea, ideaId>;
  hasIdeas!: Sequelize.HasManyHasAssociationsMixin<idea, ideaId>;
  countIdeas!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany idea via updated_by
  updated_by_ideas!: idea[];
  getUpdated_by_ideas!: Sequelize.HasManyGetAssociationsMixin<idea>;
  setUpdated_by_ideas!: Sequelize.HasManySetAssociationsMixin<idea, ideaId>;
  addUpdated_by_idea!: Sequelize.HasManyAddAssociationMixin<idea, ideaId>;
  addUpdated_by_ideas!: Sequelize.HasManyAddAssociationsMixin<idea, ideaId>;
  createUpdated_by_idea!: Sequelize.HasManyCreateAssociationMixin<idea>;
  removeUpdated_by_idea!: Sequelize.HasManyRemoveAssociationMixin<idea, ideaId>;
  removeUpdated_by_ideas!: Sequelize.HasManyRemoveAssociationsMixin<idea, ideaId>;
  hasUpdated_by_idea!: Sequelize.HasManyHasAssociationMixin<idea, ideaId>;
  hasUpdated_by_ideas!: Sequelize.HasManyHasAssociationsMixin<idea, ideaId>;
  countUpdated_by_ideas!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany idea_attachment via created_by
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
  // user hasMany idea_attachment via updated_by
  updated_by_idea_attachments!: idea_attachment[];
  getUpdated_by_idea_attachments!: Sequelize.HasManyGetAssociationsMixin<idea_attachment>;
  setUpdated_by_idea_attachments!: Sequelize.HasManySetAssociationsMixin<idea_attachment, idea_attachmentId>;
  addUpdated_by_idea_attachment!: Sequelize.HasManyAddAssociationMixin<idea_attachment, idea_attachmentId>;
  addUpdated_by_idea_attachments!: Sequelize.HasManyAddAssociationsMixin<idea_attachment, idea_attachmentId>;
  createUpdated_by_idea_attachment!: Sequelize.HasManyCreateAssociationMixin<idea_attachment>;
  removeUpdated_by_idea_attachment!: Sequelize.HasManyRemoveAssociationMixin<idea_attachment, idea_attachmentId>;
  removeUpdated_by_idea_attachments!: Sequelize.HasManyRemoveAssociationsMixin<idea_attachment, idea_attachmentId>;
  hasUpdated_by_idea_attachment!: Sequelize.HasManyHasAssociationMixin<idea_attachment, idea_attachmentId>;
  hasUpdated_by_idea_attachments!: Sequelize.HasManyHasAssociationsMixin<idea_attachment, idea_attachmentId>;
  countUpdated_by_idea_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany idea_comment via created_by
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
  // user hasMany idea_comment via updated_by
  updated_by_idea_comments!: idea_comment[];
  getUpdated_by_idea_comments!: Sequelize.HasManyGetAssociationsMixin<idea_comment>;
  setUpdated_by_idea_comments!: Sequelize.HasManySetAssociationsMixin<idea_comment, idea_commentId>;
  addUpdated_by_idea_comment!: Sequelize.HasManyAddAssociationMixin<idea_comment, idea_commentId>;
  addUpdated_by_idea_comments!: Sequelize.HasManyAddAssociationsMixin<idea_comment, idea_commentId>;
  createUpdated_by_idea_comment!: Sequelize.HasManyCreateAssociationMixin<idea_comment>;
  removeUpdated_by_idea_comment!: Sequelize.HasManyRemoveAssociationMixin<idea_comment, idea_commentId>;
  removeUpdated_by_idea_comments!: Sequelize.HasManyRemoveAssociationsMixin<idea_comment, idea_commentId>;
  hasUpdated_by_idea_comment!: Sequelize.HasManyHasAssociationMixin<idea_comment, idea_commentId>;
  hasUpdated_by_idea_comments!: Sequelize.HasManyHasAssociationsMixin<idea_comment, idea_commentId>;
  countUpdated_by_idea_comments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany idea_department via created_by
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
  // user hasMany idea_department via updated_by
  updated_by_idea_departments!: idea_department[];
  getUpdated_by_idea_departments!: Sequelize.HasManyGetAssociationsMixin<idea_department>;
  setUpdated_by_idea_departments!: Sequelize.HasManySetAssociationsMixin<idea_department, idea_departmentId>;
  addUpdated_by_idea_department!: Sequelize.HasManyAddAssociationMixin<idea_department, idea_departmentId>;
  addUpdated_by_idea_departments!: Sequelize.HasManyAddAssociationsMixin<idea_department, idea_departmentId>;
  createUpdated_by_idea_department!: Sequelize.HasManyCreateAssociationMixin<idea_department>;
  removeUpdated_by_idea_department!: Sequelize.HasManyRemoveAssociationMixin<idea_department, idea_departmentId>;
  removeUpdated_by_idea_departments!: Sequelize.HasManyRemoveAssociationsMixin<idea_department, idea_departmentId>;
  hasUpdated_by_idea_department!: Sequelize.HasManyHasAssociationMixin<idea_department, idea_departmentId>;
  hasUpdated_by_idea_departments!: Sequelize.HasManyHasAssociationsMixin<idea_department, idea_departmentId>;
  countUpdated_by_idea_departments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany idea_favorite via user_id
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
  // user hasMany idea_like via user_id
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
  // user hasMany idea_read via user_id
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
  // user hasMany ideacomments_attachment via created_by
  ideacomments_attachments!: ideacomments_attachment[];
  getIdeacomments_attachments!: Sequelize.HasManyGetAssociationsMixin<ideacomments_attachment>;
  setIdeacomments_attachments!: Sequelize.HasManySetAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  addIdeacomments_attachment!: Sequelize.HasManyAddAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  addIdeacomments_attachments!: Sequelize.HasManyAddAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  createIdeacomments_attachment!: Sequelize.HasManyCreateAssociationMixin<ideacomments_attachment>;
  removeIdeacomments_attachment!: Sequelize.HasManyRemoveAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  removeIdeacomments_attachments!: Sequelize.HasManyRemoveAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  hasIdeacomments_attachment!: Sequelize.HasManyHasAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  hasIdeacomments_attachments!: Sequelize.HasManyHasAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  countIdeacomments_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany ideacomments_attachment via updated_by
  updated_by_ideacomments_attachments!: ideacomments_attachment[];
  getUpdated_by_ideacomments_attachments!: Sequelize.HasManyGetAssociationsMixin<ideacomments_attachment>;
  setUpdated_by_ideacomments_attachments!: Sequelize.HasManySetAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  addUpdated_by_ideacomments_attachment!: Sequelize.HasManyAddAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  addUpdated_by_ideacomments_attachments!: Sequelize.HasManyAddAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  createUpdated_by_ideacomments_attachment!: Sequelize.HasManyCreateAssociationMixin<ideacomments_attachment>;
  removeUpdated_by_ideacomments_attachment!: Sequelize.HasManyRemoveAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  removeUpdated_by_ideacomments_attachments!: Sequelize.HasManyRemoveAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  hasUpdated_by_ideacomments_attachment!: Sequelize.HasManyHasAssociationMixin<ideacomments_attachment, ideacomments_attachmentId>;
  hasUpdated_by_ideacomments_attachments!: Sequelize.HasManyHasAssociationsMixin<ideacomments_attachment, ideacomments_attachmentId>;
  countUpdated_by_ideacomments_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany manage_award_nomination via created_by
  manage_award_nominations!: manage_award_nomination[];
  getManage_award_nominations!: Sequelize.HasManyGetAssociationsMixin<manage_award_nomination>;
  setManage_award_nominations!: Sequelize.HasManySetAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  addManage_award_nomination!: Sequelize.HasManyAddAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  addManage_award_nominations!: Sequelize.HasManyAddAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  createManage_award_nomination!: Sequelize.HasManyCreateAssociationMixin<manage_award_nomination>;
  removeManage_award_nomination!: Sequelize.HasManyRemoveAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  removeManage_award_nominations!: Sequelize.HasManyRemoveAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  hasManage_award_nomination!: Sequelize.HasManyHasAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  hasManage_award_nominations!: Sequelize.HasManyHasAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  countManage_award_nominations!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany manage_award_nomination via updated_by
  updated_by_manage_award_nominations!: manage_award_nomination[];
  getUpdated_by_manage_award_nominations!: Sequelize.HasManyGetAssociationsMixin<manage_award_nomination>;
  setUpdated_by_manage_award_nominations!: Sequelize.HasManySetAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  addUpdated_by_manage_award_nomination!: Sequelize.HasManyAddAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  addUpdated_by_manage_award_nominations!: Sequelize.HasManyAddAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  createUpdated_by_manage_award_nomination!: Sequelize.HasManyCreateAssociationMixin<manage_award_nomination>;
  removeUpdated_by_manage_award_nomination!: Sequelize.HasManyRemoveAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  removeUpdated_by_manage_award_nominations!: Sequelize.HasManyRemoveAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  hasUpdated_by_manage_award_nomination!: Sequelize.HasManyHasAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  hasUpdated_by_manage_award_nominations!: Sequelize.HasManyHasAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  countUpdated_by_manage_award_nominations!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany manage_award_nomination via user_id
  user_manage_award_nominations!: manage_award_nomination[];
  getUser_manage_award_nominations!: Sequelize.HasManyGetAssociationsMixin<manage_award_nomination>;
  setUser_manage_award_nominations!: Sequelize.HasManySetAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  addUser_manage_award_nomination!: Sequelize.HasManyAddAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  addUser_manage_award_nominations!: Sequelize.HasManyAddAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  createUser_manage_award_nomination!: Sequelize.HasManyCreateAssociationMixin<manage_award_nomination>;
  removeUser_manage_award_nomination!: Sequelize.HasManyRemoveAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  removeUser_manage_award_nominations!: Sequelize.HasManyRemoveAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  hasUser_manage_award_nomination!: Sequelize.HasManyHasAssociationMixin<manage_award_nomination, manage_award_nominationId>;
  hasUser_manage_award_nominations!: Sequelize.HasManyHasAssociationsMixin<manage_award_nomination, manage_award_nominationId>;
  countUser_manage_award_nominations!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany manage_award via created_by
  manage_awards!: manage_award[];
  getManage_awards!: Sequelize.HasManyGetAssociationsMixin<manage_award>;
  setManage_awards!: Sequelize.HasManySetAssociationsMixin<manage_award, manage_awardId>;
  addManage_award!: Sequelize.HasManyAddAssociationMixin<manage_award, manage_awardId>;
  addManage_awards!: Sequelize.HasManyAddAssociationsMixin<manage_award, manage_awardId>;
  createManage_award!: Sequelize.HasManyCreateAssociationMixin<manage_award>;
  removeManage_award!: Sequelize.HasManyRemoveAssociationMixin<manage_award, manage_awardId>;
  removeManage_awards!: Sequelize.HasManyRemoveAssociationsMixin<manage_award, manage_awardId>;
  hasManage_award!: Sequelize.HasManyHasAssociationMixin<manage_award, manage_awardId>;
  hasManage_awards!: Sequelize.HasManyHasAssociationsMixin<manage_award, manage_awardId>;
  countManage_awards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany manage_award via judge_id
  judge_manage_awards!: manage_award[];
  getJudge_manage_awards!: Sequelize.HasManyGetAssociationsMixin<manage_award>;
  setJudge_manage_awards!: Sequelize.HasManySetAssociationsMixin<manage_award, manage_awardId>;
  addJudge_manage_award!: Sequelize.HasManyAddAssociationMixin<manage_award, manage_awardId>;
  addJudge_manage_awards!: Sequelize.HasManyAddAssociationsMixin<manage_award, manage_awardId>;
  createJudge_manage_award!: Sequelize.HasManyCreateAssociationMixin<manage_award>;
  removeJudge_manage_award!: Sequelize.HasManyRemoveAssociationMixin<manage_award, manage_awardId>;
  removeJudge_manage_awards!: Sequelize.HasManyRemoveAssociationsMixin<manage_award, manage_awardId>;
  hasJudge_manage_award!: Sequelize.HasManyHasAssociationMixin<manage_award, manage_awardId>;
  hasJudge_manage_awards!: Sequelize.HasManyHasAssociationsMixin<manage_award, manage_awardId>;
  countJudge_manage_awards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany manage_award via nominator_id
  nominator_manage_awards!: manage_award[];
  getNominator_manage_awards!: Sequelize.HasManyGetAssociationsMixin<manage_award>;
  setNominator_manage_awards!: Sequelize.HasManySetAssociationsMixin<manage_award, manage_awardId>;
  addNominator_manage_award!: Sequelize.HasManyAddAssociationMixin<manage_award, manage_awardId>;
  addNominator_manage_awards!: Sequelize.HasManyAddAssociationsMixin<manage_award, manage_awardId>;
  createNominator_manage_award!: Sequelize.HasManyCreateAssociationMixin<manage_award>;
  removeNominator_manage_award!: Sequelize.HasManyRemoveAssociationMixin<manage_award, manage_awardId>;
  removeNominator_manage_awards!: Sequelize.HasManyRemoveAssociationsMixin<manage_award, manage_awardId>;
  hasNominator_manage_award!: Sequelize.HasManyHasAssociationMixin<manage_award, manage_awardId>;
  hasNominator_manage_awards!: Sequelize.HasManyHasAssociationsMixin<manage_award, manage_awardId>;
  countNominator_manage_awards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany manage_award via updated_by
  updated_by_manage_awards!: manage_award[];
  getUpdated_by_manage_awards!: Sequelize.HasManyGetAssociationsMixin<manage_award>;
  setUpdated_by_manage_awards!: Sequelize.HasManySetAssociationsMixin<manage_award, manage_awardId>;
  addUpdated_by_manage_award!: Sequelize.HasManyAddAssociationMixin<manage_award, manage_awardId>;
  addUpdated_by_manage_awards!: Sequelize.HasManyAddAssociationsMixin<manage_award, manage_awardId>;
  createUpdated_by_manage_award!: Sequelize.HasManyCreateAssociationMixin<manage_award>;
  removeUpdated_by_manage_award!: Sequelize.HasManyRemoveAssociationMixin<manage_award, manage_awardId>;
  removeUpdated_by_manage_awards!: Sequelize.HasManyRemoveAssociationsMixin<manage_award, manage_awardId>;
  hasUpdated_by_manage_award!: Sequelize.HasManyHasAssociationMixin<manage_award, manage_awardId>;
  hasUpdated_by_manage_awards!: Sequelize.HasManyHasAssociationsMixin<manage_award, manage_awardId>;
  countUpdated_by_manage_awards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany message via created_by
  messages!: message[];
  getMessages!: Sequelize.HasManyGetAssociationsMixin<message>;
  setMessages!: Sequelize.HasManySetAssociationsMixin<message, messageId>;
  addMessage!: Sequelize.HasManyAddAssociationMixin<message, messageId>;
  addMessages!: Sequelize.HasManyAddAssociationsMixin<message, messageId>;
  createMessage!: Sequelize.HasManyCreateAssociationMixin<message>;
  removeMessage!: Sequelize.HasManyRemoveAssociationMixin<message, messageId>;
  removeMessages!: Sequelize.HasManyRemoveAssociationsMixin<message, messageId>;
  hasMessage!: Sequelize.HasManyHasAssociationMixin<message, messageId>;
  hasMessages!: Sequelize.HasManyHasAssociationsMixin<message, messageId>;
  countMessages!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany message via updated_by
  updated_by_messages!: message[];
  getUpdated_by_messages!: Sequelize.HasManyGetAssociationsMixin<message>;
  setUpdated_by_messages!: Sequelize.HasManySetAssociationsMixin<message, messageId>;
  addUpdated_by_message!: Sequelize.HasManyAddAssociationMixin<message, messageId>;
  addUpdated_by_messages!: Sequelize.HasManyAddAssociationsMixin<message, messageId>;
  createUpdated_by_message!: Sequelize.HasManyCreateAssociationMixin<message>;
  removeUpdated_by_message!: Sequelize.HasManyRemoveAssociationMixin<message, messageId>;
  removeUpdated_by_messages!: Sequelize.HasManyRemoveAssociationsMixin<message, messageId>;
  hasUpdated_by_message!: Sequelize.HasManyHasAssociationMixin<message, messageId>;
  hasUpdated_by_messages!: Sequelize.HasManyHasAssociationsMixin<message, messageId>;
  countUpdated_by_messages!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany notification via user_id
  notifications!: notification[];
  getNotifications!: Sequelize.HasManyGetAssociationsMixin<notification>;
  setNotifications!: Sequelize.HasManySetAssociationsMixin<notification, notificationId>;
  addNotification!: Sequelize.HasManyAddAssociationMixin<notification, notificationId>;
  addNotifications!: Sequelize.HasManyAddAssociationsMixin<notification, notificationId>;
  createNotification!: Sequelize.HasManyCreateAssociationMixin<notification>;
  removeNotification!: Sequelize.HasManyRemoveAssociationMixin<notification, notificationId>;
  removeNotifications!: Sequelize.HasManyRemoveAssociationsMixin<notification, notificationId>;
  hasNotification!: Sequelize.HasManyHasAssociationMixin<notification, notificationId>;
  hasNotifications!: Sequelize.HasManyHasAssociationsMixin<notification, notificationId>;
  countNotifications!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany password_reset_token via user_id
  password_reset_tokens!: password_reset_token[];
  getPassword_reset_tokens!: Sequelize.HasManyGetAssociationsMixin<password_reset_token>;
  setPassword_reset_tokens!: Sequelize.HasManySetAssociationsMixin<password_reset_token, password_reset_tokenId>;
  addPassword_reset_token!: Sequelize.HasManyAddAssociationMixin<password_reset_token, password_reset_tokenId>;
  addPassword_reset_tokens!: Sequelize.HasManyAddAssociationsMixin<password_reset_token, password_reset_tokenId>;
  createPassword_reset_token!: Sequelize.HasManyCreateAssociationMixin<password_reset_token>;
  removePassword_reset_token!: Sequelize.HasManyRemoveAssociationMixin<password_reset_token, password_reset_tokenId>;
  removePassword_reset_tokens!: Sequelize.HasManyRemoveAssociationsMixin<password_reset_token, password_reset_tokenId>;
  hasPassword_reset_token!: Sequelize.HasManyHasAssociationMixin<password_reset_token, password_reset_tokenId>;
  hasPassword_reset_tokens!: Sequelize.HasManyHasAssociationsMixin<password_reset_token, password_reset_tokenId>;
  countPassword_reset_tokens!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany poll_choice via created_by
  poll_choices!: poll_choice[];
  getPoll_choices!: Sequelize.HasManyGetAssociationsMixin<poll_choice>;
  setPoll_choices!: Sequelize.HasManySetAssociationsMixin<poll_choice, poll_choiceId>;
  addPoll_choice!: Sequelize.HasManyAddAssociationMixin<poll_choice, poll_choiceId>;
  addPoll_choices!: Sequelize.HasManyAddAssociationsMixin<poll_choice, poll_choiceId>;
  createPoll_choice!: Sequelize.HasManyCreateAssociationMixin<poll_choice>;
  removePoll_choice!: Sequelize.HasManyRemoveAssociationMixin<poll_choice, poll_choiceId>;
  removePoll_choices!: Sequelize.HasManyRemoveAssociationsMixin<poll_choice, poll_choiceId>;
  hasPoll_choice!: Sequelize.HasManyHasAssociationMixin<poll_choice, poll_choiceId>;
  hasPoll_choices!: Sequelize.HasManyHasAssociationsMixin<poll_choice, poll_choiceId>;
  countPoll_choices!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany poll_choice via updated_by
  updated_by_poll_choices!: poll_choice[];
  getUpdated_by_poll_choices!: Sequelize.HasManyGetAssociationsMixin<poll_choice>;
  setUpdated_by_poll_choices!: Sequelize.HasManySetAssociationsMixin<poll_choice, poll_choiceId>;
  addUpdated_by_poll_choice!: Sequelize.HasManyAddAssociationMixin<poll_choice, poll_choiceId>;
  addUpdated_by_poll_choices!: Sequelize.HasManyAddAssociationsMixin<poll_choice, poll_choiceId>;
  createUpdated_by_poll_choice!: Sequelize.HasManyCreateAssociationMixin<poll_choice>;
  removeUpdated_by_poll_choice!: Sequelize.HasManyRemoveAssociationMixin<poll_choice, poll_choiceId>;
  removeUpdated_by_poll_choices!: Sequelize.HasManyRemoveAssociationsMixin<poll_choice, poll_choiceId>;
  hasUpdated_by_poll_choice!: Sequelize.HasManyHasAssociationMixin<poll_choice, poll_choiceId>;
  hasUpdated_by_poll_choices!: Sequelize.HasManyHasAssociationsMixin<poll_choice, poll_choiceId>;
  countUpdated_by_poll_choices!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany poll_response via created_by
  poll_responses!: poll_response[];
  getPoll_responses!: Sequelize.HasManyGetAssociationsMixin<poll_response>;
  setPoll_responses!: Sequelize.HasManySetAssociationsMixin<poll_response, poll_responseId>;
  addPoll_response!: Sequelize.HasManyAddAssociationMixin<poll_response, poll_responseId>;
  addPoll_responses!: Sequelize.HasManyAddAssociationsMixin<poll_response, poll_responseId>;
  createPoll_response!: Sequelize.HasManyCreateAssociationMixin<poll_response>;
  removePoll_response!: Sequelize.HasManyRemoveAssociationMixin<poll_response, poll_responseId>;
  removePoll_responses!: Sequelize.HasManyRemoveAssociationsMixin<poll_response, poll_responseId>;
  hasPoll_response!: Sequelize.HasManyHasAssociationMixin<poll_response, poll_responseId>;
  hasPoll_responses!: Sequelize.HasManyHasAssociationsMixin<poll_response, poll_responseId>;
  countPoll_responses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany poll_response via updated_by
  updated_by_poll_responses!: poll_response[];
  getUpdated_by_poll_responses!: Sequelize.HasManyGetAssociationsMixin<poll_response>;
  setUpdated_by_poll_responses!: Sequelize.HasManySetAssociationsMixin<poll_response, poll_responseId>;
  addUpdated_by_poll_response!: Sequelize.HasManyAddAssociationMixin<poll_response, poll_responseId>;
  addUpdated_by_poll_responses!: Sequelize.HasManyAddAssociationsMixin<poll_response, poll_responseId>;
  createUpdated_by_poll_response!: Sequelize.HasManyCreateAssociationMixin<poll_response>;
  removeUpdated_by_poll_response!: Sequelize.HasManyRemoveAssociationMixin<poll_response, poll_responseId>;
  removeUpdated_by_poll_responses!: Sequelize.HasManyRemoveAssociationsMixin<poll_response, poll_responseId>;
  hasUpdated_by_poll_response!: Sequelize.HasManyHasAssociationMixin<poll_response, poll_responseId>;
  hasUpdated_by_poll_responses!: Sequelize.HasManyHasAssociationsMixin<poll_response, poll_responseId>;
  countUpdated_by_poll_responses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany poll_response via user_id
  user_poll_responses!: poll_response[];
  getUser_poll_responses!: Sequelize.HasManyGetAssociationsMixin<poll_response>;
  setUser_poll_responses!: Sequelize.HasManySetAssociationsMixin<poll_response, poll_responseId>;
  addUser_poll_response!: Sequelize.HasManyAddAssociationMixin<poll_response, poll_responseId>;
  addUser_poll_responses!: Sequelize.HasManyAddAssociationsMixin<poll_response, poll_responseId>;
  createUser_poll_response!: Sequelize.HasManyCreateAssociationMixin<poll_response>;
  removeUser_poll_response!: Sequelize.HasManyRemoveAssociationMixin<poll_response, poll_responseId>;
  removeUser_poll_responses!: Sequelize.HasManyRemoveAssociationsMixin<poll_response, poll_responseId>;
  hasUser_poll_response!: Sequelize.HasManyHasAssociationMixin<poll_response, poll_responseId>;
  hasUser_poll_responses!: Sequelize.HasManyHasAssociationsMixin<poll_response, poll_responseId>;
  countUser_poll_responses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany poll via created_by
  polls!: poll[];
  getPolls!: Sequelize.HasManyGetAssociationsMixin<poll>;
  setPolls!: Sequelize.HasManySetAssociationsMixin<poll, pollId>;
  addPoll!: Sequelize.HasManyAddAssociationMixin<poll, pollId>;
  addPolls!: Sequelize.HasManyAddAssociationsMixin<poll, pollId>;
  createPoll!: Sequelize.HasManyCreateAssociationMixin<poll>;
  removePoll!: Sequelize.HasManyRemoveAssociationMixin<poll, pollId>;
  removePolls!: Sequelize.HasManyRemoveAssociationsMixin<poll, pollId>;
  hasPoll!: Sequelize.HasManyHasAssociationMixin<poll, pollId>;
  hasPolls!: Sequelize.HasManyHasAssociationsMixin<poll, pollId>;
  countPolls!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany poll via updated_by
  updated_by_polls!: poll[];
  getUpdated_by_polls!: Sequelize.HasManyGetAssociationsMixin<poll>;
  setUpdated_by_polls!: Sequelize.HasManySetAssociationsMixin<poll, pollId>;
  addUpdated_by_poll!: Sequelize.HasManyAddAssociationMixin<poll, pollId>;
  addUpdated_by_polls!: Sequelize.HasManyAddAssociationsMixin<poll, pollId>;
  createUpdated_by_poll!: Sequelize.HasManyCreateAssociationMixin<poll>;
  removeUpdated_by_poll!: Sequelize.HasManyRemoveAssociationMixin<poll, pollId>;
  removeUpdated_by_polls!: Sequelize.HasManyRemoveAssociationsMixin<poll, pollId>;
  hasUpdated_by_poll!: Sequelize.HasManyHasAssociationMixin<poll, pollId>;
  hasUpdated_by_polls!: Sequelize.HasManyHasAssociationsMixin<poll, pollId>;
  countUpdated_by_polls!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program via created_by
  programs!: program[];
  getPrograms!: Sequelize.HasManyGetAssociationsMixin<program>;
  setPrograms!: Sequelize.HasManySetAssociationsMixin<program, programId>;
  addProgram!: Sequelize.HasManyAddAssociationMixin<program, programId>;
  addPrograms!: Sequelize.HasManyAddAssociationsMixin<program, programId>;
  createProgram!: Sequelize.HasManyCreateAssociationMixin<program>;
  removeProgram!: Sequelize.HasManyRemoveAssociationMixin<program, programId>;
  removePrograms!: Sequelize.HasManyRemoveAssociationsMixin<program, programId>;
  hasProgram!: Sequelize.HasManyHasAssociationMixin<program, programId>;
  hasPrograms!: Sequelize.HasManyHasAssociationsMixin<program, programId>;
  countPrograms!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program via manager_id
  manager_programs!: program[];
  getManager_programs!: Sequelize.HasManyGetAssociationsMixin<program>;
  setManager_programs!: Sequelize.HasManySetAssociationsMixin<program, programId>;
  addManager_program!: Sequelize.HasManyAddAssociationMixin<program, programId>;
  addManager_programs!: Sequelize.HasManyAddAssociationsMixin<program, programId>;
  createManager_program!: Sequelize.HasManyCreateAssociationMixin<program>;
  removeManager_program!: Sequelize.HasManyRemoveAssociationMixin<program, programId>;
  removeManager_programs!: Sequelize.HasManyRemoveAssociationsMixin<program, programId>;
  hasManager_program!: Sequelize.HasManyHasAssociationMixin<program, programId>;
  hasManager_programs!: Sequelize.HasManyHasAssociationsMixin<program, programId>;
  countManager_programs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program via updated_by
  updated_by_programs!: program[];
  getUpdated_by_programs!: Sequelize.HasManyGetAssociationsMixin<program>;
  setUpdated_by_programs!: Sequelize.HasManySetAssociationsMixin<program, programId>;
  addUpdated_by_program!: Sequelize.HasManyAddAssociationMixin<program, programId>;
  addUpdated_by_programs!: Sequelize.HasManyAddAssociationsMixin<program, programId>;
  createUpdated_by_program!: Sequelize.HasManyCreateAssociationMixin<program>;
  removeUpdated_by_program!: Sequelize.HasManyRemoveAssociationMixin<program, programId>;
  removeUpdated_by_programs!: Sequelize.HasManyRemoveAssociationsMixin<program, programId>;
  hasUpdated_by_program!: Sequelize.HasManyHasAssociationMixin<program, programId>;
  hasUpdated_by_programs!: Sequelize.HasManyHasAssociationsMixin<program, programId>;
  countUpdated_by_programs!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_cash_reward via created_by
  program_cash_rewards!: program_cash_reward[];
  getProgram_cash_rewards!: Sequelize.HasManyGetAssociationsMixin<program_cash_reward>;
  setProgram_cash_rewards!: Sequelize.HasManySetAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  addProgram_cash_reward!: Sequelize.HasManyAddAssociationMixin<program_cash_reward, program_cash_rewardId>;
  addProgram_cash_rewards!: Sequelize.HasManyAddAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  createProgram_cash_reward!: Sequelize.HasManyCreateAssociationMixin<program_cash_reward>;
  removeProgram_cash_reward!: Sequelize.HasManyRemoveAssociationMixin<program_cash_reward, program_cash_rewardId>;
  removeProgram_cash_rewards!: Sequelize.HasManyRemoveAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  hasProgram_cash_reward!: Sequelize.HasManyHasAssociationMixin<program_cash_reward, program_cash_rewardId>;
  hasProgram_cash_rewards!: Sequelize.HasManyHasAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  countProgram_cash_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_cash_reward via updated_by
  updated_by_program_cash_rewards!: program_cash_reward[];
  getUpdated_by_program_cash_rewards!: Sequelize.HasManyGetAssociationsMixin<program_cash_reward>;
  setUpdated_by_program_cash_rewards!: Sequelize.HasManySetAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  addUpdated_by_program_cash_reward!: Sequelize.HasManyAddAssociationMixin<program_cash_reward, program_cash_rewardId>;
  addUpdated_by_program_cash_rewards!: Sequelize.HasManyAddAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  createUpdated_by_program_cash_reward!: Sequelize.HasManyCreateAssociationMixin<program_cash_reward>;
  removeUpdated_by_program_cash_reward!: Sequelize.HasManyRemoveAssociationMixin<program_cash_reward, program_cash_rewardId>;
  removeUpdated_by_program_cash_rewards!: Sequelize.HasManyRemoveAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  hasUpdated_by_program_cash_reward!: Sequelize.HasManyHasAssociationMixin<program_cash_reward, program_cash_rewardId>;
  hasUpdated_by_program_cash_rewards!: Sequelize.HasManyHasAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  countUpdated_by_program_cash_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_cash_reward via user_id
  user_program_cash_rewards!: program_cash_reward[];
  getUser_program_cash_rewards!: Sequelize.HasManyGetAssociationsMixin<program_cash_reward>;
  setUser_program_cash_rewards!: Sequelize.HasManySetAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  addUser_program_cash_reward!: Sequelize.HasManyAddAssociationMixin<program_cash_reward, program_cash_rewardId>;
  addUser_program_cash_rewards!: Sequelize.HasManyAddAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  createUser_program_cash_reward!: Sequelize.HasManyCreateAssociationMixin<program_cash_reward>;
  removeUser_program_cash_reward!: Sequelize.HasManyRemoveAssociationMixin<program_cash_reward, program_cash_rewardId>;
  removeUser_program_cash_rewards!: Sequelize.HasManyRemoveAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  hasUser_program_cash_reward!: Sequelize.HasManyHasAssociationMixin<program_cash_reward, program_cash_rewardId>;
  hasUser_program_cash_rewards!: Sequelize.HasManyHasAssociationsMixin<program_cash_reward, program_cash_rewardId>;
  countUser_program_cash_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_task via created_by
  program_tasks!: program_task[];
  getProgram_tasks!: Sequelize.HasManyGetAssociationsMixin<program_task>;
  setProgram_tasks!: Sequelize.HasManySetAssociationsMixin<program_task, program_taskId>;
  addProgram_task!: Sequelize.HasManyAddAssociationMixin<program_task, program_taskId>;
  addProgram_tasks!: Sequelize.HasManyAddAssociationsMixin<program_task, program_taskId>;
  createProgram_task!: Sequelize.HasManyCreateAssociationMixin<program_task>;
  removeProgram_task!: Sequelize.HasManyRemoveAssociationMixin<program_task, program_taskId>;
  removeProgram_tasks!: Sequelize.HasManyRemoveAssociationsMixin<program_task, program_taskId>;
  hasProgram_task!: Sequelize.HasManyHasAssociationMixin<program_task, program_taskId>;
  hasProgram_tasks!: Sequelize.HasManyHasAssociationsMixin<program_task, program_taskId>;
  countProgram_tasks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_task via submitted_by
  submitted_by_program_tasks!: program_task[];
  getSubmitted_by_program_tasks!: Sequelize.HasManyGetAssociationsMixin<program_task>;
  setSubmitted_by_program_tasks!: Sequelize.HasManySetAssociationsMixin<program_task, program_taskId>;
  addSubmitted_by_program_task!: Sequelize.HasManyAddAssociationMixin<program_task, program_taskId>;
  addSubmitted_by_program_tasks!: Sequelize.HasManyAddAssociationsMixin<program_task, program_taskId>;
  createSubmitted_by_program_task!: Sequelize.HasManyCreateAssociationMixin<program_task>;
  removeSubmitted_by_program_task!: Sequelize.HasManyRemoveAssociationMixin<program_task, program_taskId>;
  removeSubmitted_by_program_tasks!: Sequelize.HasManyRemoveAssociationsMixin<program_task, program_taskId>;
  hasSubmitted_by_program_task!: Sequelize.HasManyHasAssociationMixin<program_task, program_taskId>;
  hasSubmitted_by_program_tasks!: Sequelize.HasManyHasAssociationsMixin<program_task, program_taskId>;
  countSubmitted_by_program_tasks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_task via updated_by
  updated_by_program_tasks!: program_task[];
  getUpdated_by_program_tasks!: Sequelize.HasManyGetAssociationsMixin<program_task>;
  setUpdated_by_program_tasks!: Sequelize.HasManySetAssociationsMixin<program_task, program_taskId>;
  addUpdated_by_program_task!: Sequelize.HasManyAddAssociationMixin<program_task, program_taskId>;
  addUpdated_by_program_tasks!: Sequelize.HasManyAddAssociationsMixin<program_task, program_taskId>;
  createUpdated_by_program_task!: Sequelize.HasManyCreateAssociationMixin<program_task>;
  removeUpdated_by_program_task!: Sequelize.HasManyRemoveAssociationMixin<program_task, program_taskId>;
  removeUpdated_by_program_tasks!: Sequelize.HasManyRemoveAssociationsMixin<program_task, program_taskId>;
  hasUpdated_by_program_task!: Sequelize.HasManyHasAssociationMixin<program_task, program_taskId>;
  hasUpdated_by_program_tasks!: Sequelize.HasManyHasAssociationsMixin<program_task, program_taskId>;
  countUpdated_by_program_tasks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_task_attachment via created_by
  program_task_attachments!: program_task_attachment[];
  getProgram_task_attachments!: Sequelize.HasManyGetAssociationsMixin<program_task_attachment>;
  setProgram_task_attachments!: Sequelize.HasManySetAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  addProgram_task_attachment!: Sequelize.HasManyAddAssociationMixin<program_task_attachment, program_task_attachmentId>;
  addProgram_task_attachments!: Sequelize.HasManyAddAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  createProgram_task_attachment!: Sequelize.HasManyCreateAssociationMixin<program_task_attachment>;
  removeProgram_task_attachment!: Sequelize.HasManyRemoveAssociationMixin<program_task_attachment, program_task_attachmentId>;
  removeProgram_task_attachments!: Sequelize.HasManyRemoveAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  hasProgram_task_attachment!: Sequelize.HasManyHasAssociationMixin<program_task_attachment, program_task_attachmentId>;
  hasProgram_task_attachments!: Sequelize.HasManyHasAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  countProgram_task_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_task_attachment via updated_by
  updated_by_program_task_attachments!: program_task_attachment[];
  getUpdated_by_program_task_attachments!: Sequelize.HasManyGetAssociationsMixin<program_task_attachment>;
  setUpdated_by_program_task_attachments!: Sequelize.HasManySetAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  addUpdated_by_program_task_attachment!: Sequelize.HasManyAddAssociationMixin<program_task_attachment, program_task_attachmentId>;
  addUpdated_by_program_task_attachments!: Sequelize.HasManyAddAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  createUpdated_by_program_task_attachment!: Sequelize.HasManyCreateAssociationMixin<program_task_attachment>;
  removeUpdated_by_program_task_attachment!: Sequelize.HasManyRemoveAssociationMixin<program_task_attachment, program_task_attachmentId>;
  removeUpdated_by_program_task_attachments!: Sequelize.HasManyRemoveAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  hasUpdated_by_program_task_attachment!: Sequelize.HasManyHasAssociationMixin<program_task_attachment, program_task_attachmentId>;
  hasUpdated_by_program_task_attachments!: Sequelize.HasManyHasAssociationsMixin<program_task_attachment, program_task_attachmentId>;
  countUpdated_by_program_task_attachments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_task_comment via created_by
  program_task_comments!: program_task_comment[];
  getProgram_task_comments!: Sequelize.HasManyGetAssociationsMixin<program_task_comment>;
  setProgram_task_comments!: Sequelize.HasManySetAssociationsMixin<program_task_comment, program_task_commentId>;
  addProgram_task_comment!: Sequelize.HasManyAddAssociationMixin<program_task_comment, program_task_commentId>;
  addProgram_task_comments!: Sequelize.HasManyAddAssociationsMixin<program_task_comment, program_task_commentId>;
  createProgram_task_comment!: Sequelize.HasManyCreateAssociationMixin<program_task_comment>;
  removeProgram_task_comment!: Sequelize.HasManyRemoveAssociationMixin<program_task_comment, program_task_commentId>;
  removeProgram_task_comments!: Sequelize.HasManyRemoveAssociationsMixin<program_task_comment, program_task_commentId>;
  hasProgram_task_comment!: Sequelize.HasManyHasAssociationMixin<program_task_comment, program_task_commentId>;
  hasProgram_task_comments!: Sequelize.HasManyHasAssociationsMixin<program_task_comment, program_task_commentId>;
  countProgram_task_comments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_task_comment via updated_by
  updated_by_program_task_comments!: program_task_comment[];
  getUpdated_by_program_task_comments!: Sequelize.HasManyGetAssociationsMixin<program_task_comment>;
  setUpdated_by_program_task_comments!: Sequelize.HasManySetAssociationsMixin<program_task_comment, program_task_commentId>;
  addUpdated_by_program_task_comment!: Sequelize.HasManyAddAssociationMixin<program_task_comment, program_task_commentId>;
  addUpdated_by_program_task_comments!: Sequelize.HasManyAddAssociationsMixin<program_task_comment, program_task_commentId>;
  createUpdated_by_program_task_comment!: Sequelize.HasManyCreateAssociationMixin<program_task_comment>;
  removeUpdated_by_program_task_comment!: Sequelize.HasManyRemoveAssociationMixin<program_task_comment, program_task_commentId>;
  removeUpdated_by_program_task_comments!: Sequelize.HasManyRemoveAssociationsMixin<program_task_comment, program_task_commentId>;
  hasUpdated_by_program_task_comment!: Sequelize.HasManyHasAssociationMixin<program_task_comment, program_task_commentId>;
  hasUpdated_by_program_task_comments!: Sequelize.HasManyHasAssociationsMixin<program_task_comment, program_task_commentId>;
  countUpdated_by_program_task_comments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_task_user via user_id
  program_task_users!: program_task_user[];
  getProgram_task_users!: Sequelize.HasManyGetAssociationsMixin<program_task_user>;
  setProgram_task_users!: Sequelize.HasManySetAssociationsMixin<program_task_user, program_task_userId>;
  addProgram_task_user!: Sequelize.HasManyAddAssociationMixin<program_task_user, program_task_userId>;
  addProgram_task_users!: Sequelize.HasManyAddAssociationsMixin<program_task_user, program_task_userId>;
  createProgram_task_user!: Sequelize.HasManyCreateAssociationMixin<program_task_user>;
  removeProgram_task_user!: Sequelize.HasManyRemoveAssociationMixin<program_task_user, program_task_userId>;
  removeProgram_task_users!: Sequelize.HasManyRemoveAssociationsMixin<program_task_user, program_task_userId>;
  hasProgram_task_user!: Sequelize.HasManyHasAssociationMixin<program_task_user, program_task_userId>;
  hasProgram_task_users!: Sequelize.HasManyHasAssociationsMixin<program_task_user, program_task_userId>;
  countProgram_task_users!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany program_user via user_id
  program_users!: program_user[];
  getProgram_users!: Sequelize.HasManyGetAssociationsMixin<program_user>;
  setProgram_users!: Sequelize.HasManySetAssociationsMixin<program_user, program_userId>;
  addProgram_user!: Sequelize.HasManyAddAssociationMixin<program_user, program_userId>;
  addProgram_users!: Sequelize.HasManyAddAssociationsMixin<program_user, program_userId>;
  createProgram_user!: Sequelize.HasManyCreateAssociationMixin<program_user>;
  removeProgram_user!: Sequelize.HasManyRemoveAssociationMixin<program_user, program_userId>;
  removeProgram_users!: Sequelize.HasManyRemoveAssociationsMixin<program_user, program_userId>;
  hasProgram_user!: Sequelize.HasManyHasAssociationMixin<program_user, program_userId>;
  hasProgram_users!: Sequelize.HasManyHasAssociationsMixin<program_user, program_userId>;
  countProgram_users!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany refreshtoken via user_id
  refreshtokens!: refreshtoken[];
  getRefreshtokens!: Sequelize.HasManyGetAssociationsMixin<refreshtoken>;
  setRefreshtokens!: Sequelize.HasManySetAssociationsMixin<refreshtoken, refreshtokenId>;
  addRefreshtoken!: Sequelize.HasManyAddAssociationMixin<refreshtoken, refreshtokenId>;
  addRefreshtokens!: Sequelize.HasManyAddAssociationsMixin<refreshtoken, refreshtokenId>;
  createRefreshtoken!: Sequelize.HasManyCreateAssociationMixin<refreshtoken>;
  removeRefreshtoken!: Sequelize.HasManyRemoveAssociationMixin<refreshtoken, refreshtokenId>;
  removeRefreshtokens!: Sequelize.HasManyRemoveAssociationsMixin<refreshtoken, refreshtokenId>;
  hasRefreshtoken!: Sequelize.HasManyHasAssociationMixin<refreshtoken, refreshtokenId>;
  hasRefreshtokens!: Sequelize.HasManyHasAssociationsMixin<refreshtoken, refreshtokenId>;
  countRefreshtokens!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany reward via created_by
  rewards!: reward[];
  getRewards!: Sequelize.HasManyGetAssociationsMixin<reward>;
  setRewards!: Sequelize.HasManySetAssociationsMixin<reward, rewardId>;
  addReward!: Sequelize.HasManyAddAssociationMixin<reward, rewardId>;
  addRewards!: Sequelize.HasManyAddAssociationsMixin<reward, rewardId>;
  createReward!: Sequelize.HasManyCreateAssociationMixin<reward>;
  removeReward!: Sequelize.HasManyRemoveAssociationMixin<reward, rewardId>;
  removeRewards!: Sequelize.HasManyRemoveAssociationsMixin<reward, rewardId>;
  hasReward!: Sequelize.HasManyHasAssociationMixin<reward, rewardId>;
  hasRewards!: Sequelize.HasManyHasAssociationsMixin<reward, rewardId>;
  countRewards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany reward via updated_by
  updated_by_rewards!: reward[];
  getUpdated_by_rewards!: Sequelize.HasManyGetAssociationsMixin<reward>;
  setUpdated_by_rewards!: Sequelize.HasManySetAssociationsMixin<reward, rewardId>;
  addUpdated_by_reward!: Sequelize.HasManyAddAssociationMixin<reward, rewardId>;
  addUpdated_by_rewards!: Sequelize.HasManyAddAssociationsMixin<reward, rewardId>;
  createUpdated_by_reward!: Sequelize.HasManyCreateAssociationMixin<reward>;
  removeUpdated_by_reward!: Sequelize.HasManyRemoveAssociationMixin<reward, rewardId>;
  removeUpdated_by_rewards!: Sequelize.HasManyRemoveAssociationsMixin<reward, rewardId>;
  hasUpdated_by_reward!: Sequelize.HasManyHasAssociationMixin<reward, rewardId>;
  hasUpdated_by_rewards!: Sequelize.HasManyHasAssociationsMixin<reward, rewardId>;
  countUpdated_by_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany reward via user_id
  user_rewards!: reward[];
  getUser_rewards!: Sequelize.HasManyGetAssociationsMixin<reward>;
  setUser_rewards!: Sequelize.HasManySetAssociationsMixin<reward, rewardId>;
  addUser_reward!: Sequelize.HasManyAddAssociationMixin<reward, rewardId>;
  addUser_rewards!: Sequelize.HasManyAddAssociationsMixin<reward, rewardId>;
  createUser_reward!: Sequelize.HasManyCreateAssociationMixin<reward>;
  removeUser_reward!: Sequelize.HasManyRemoveAssociationMixin<reward, rewardId>;
  removeUser_rewards!: Sequelize.HasManyRemoveAssociationsMixin<reward, rewardId>;
  hasUser_reward!: Sequelize.HasManyHasAssociationMixin<reward, rewardId>;
  hasUser_rewards!: Sequelize.HasManyHasAssociationsMixin<reward, rewardId>;
  countUser_rewards!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany role via created_by
  roles!: role[];
  getRoles!: Sequelize.HasManyGetAssociationsMixin<role>;
  setRoles!: Sequelize.HasManySetAssociationsMixin<role, roleId>;
  addRole!: Sequelize.HasManyAddAssociationMixin<role, roleId>;
  addRoles!: Sequelize.HasManyAddAssociationsMixin<role, roleId>;
  createRole!: Sequelize.HasManyCreateAssociationMixin<role>;
  removeRole!: Sequelize.HasManyRemoveAssociationMixin<role, roleId>;
  removeRoles!: Sequelize.HasManyRemoveAssociationsMixin<role, roleId>;
  hasRole!: Sequelize.HasManyHasAssociationMixin<role, roleId>;
  hasRoles!: Sequelize.HasManyHasAssociationsMixin<role, roleId>;
  countRoles!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany role via updated_by
  updated_by_roles!: role[];
  getUpdated_by_roles!: Sequelize.HasManyGetAssociationsMixin<role>;
  setUpdated_by_roles!: Sequelize.HasManySetAssociationsMixin<role, roleId>;
  addUpdated_by_role!: Sequelize.HasManyAddAssociationMixin<role, roleId>;
  addUpdated_by_roles!: Sequelize.HasManyAddAssociationsMixin<role, roleId>;
  createUpdated_by_role!: Sequelize.HasManyCreateAssociationMixin<role>;
  removeUpdated_by_role!: Sequelize.HasManyRemoveAssociationMixin<role, roleId>;
  removeUpdated_by_roles!: Sequelize.HasManyRemoveAssociationsMixin<role, roleId>;
  hasUpdated_by_role!: Sequelize.HasManyHasAssociationMixin<role, roleId>;
  hasUpdated_by_roles!: Sequelize.HasManyHasAssociationsMixin<role, roleId>;
  countUpdated_by_roles!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany role_screen_mapping via created_by
  role_screen_mappings!: role_screen_mapping[];
  getRole_screen_mappings!: Sequelize.HasManyGetAssociationsMixin<role_screen_mapping>;
  setRole_screen_mappings!: Sequelize.HasManySetAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  addRole_screen_mapping!: Sequelize.HasManyAddAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  addRole_screen_mappings!: Sequelize.HasManyAddAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  createRole_screen_mapping!: Sequelize.HasManyCreateAssociationMixin<role_screen_mapping>;
  removeRole_screen_mapping!: Sequelize.HasManyRemoveAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  removeRole_screen_mappings!: Sequelize.HasManyRemoveAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  hasRole_screen_mapping!: Sequelize.HasManyHasAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  hasRole_screen_mappings!: Sequelize.HasManyHasAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  countRole_screen_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany role_screen_mapping via updated_by
  updated_by_role_screen_mappings!: role_screen_mapping[];
  getUpdated_by_role_screen_mappings!: Sequelize.HasManyGetAssociationsMixin<role_screen_mapping>;
  setUpdated_by_role_screen_mappings!: Sequelize.HasManySetAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  addUpdated_by_role_screen_mapping!: Sequelize.HasManyAddAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  addUpdated_by_role_screen_mappings!: Sequelize.HasManyAddAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  createUpdated_by_role_screen_mapping!: Sequelize.HasManyCreateAssociationMixin<role_screen_mapping>;
  removeUpdated_by_role_screen_mapping!: Sequelize.HasManyRemoveAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  removeUpdated_by_role_screen_mappings!: Sequelize.HasManyRemoveAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  hasUpdated_by_role_screen_mapping!: Sequelize.HasManyHasAssociationMixin<role_screen_mapping, role_screen_mappingId>;
  hasUpdated_by_role_screen_mappings!: Sequelize.HasManyHasAssociationsMixin<role_screen_mapping, role_screen_mappingId>;
  countUpdated_by_role_screen_mappings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany schedule_setting via created_by
  schedule_settings!: schedule_setting[];
  getSchedule_settings!: Sequelize.HasManyGetAssociationsMixin<schedule_setting>;
  setSchedule_settings!: Sequelize.HasManySetAssociationsMixin<schedule_setting, schedule_settingId>;
  addSchedule_setting!: Sequelize.HasManyAddAssociationMixin<schedule_setting, schedule_settingId>;
  addSchedule_settings!: Sequelize.HasManyAddAssociationsMixin<schedule_setting, schedule_settingId>;
  createSchedule_setting!: Sequelize.HasManyCreateAssociationMixin<schedule_setting>;
  removeSchedule_setting!: Sequelize.HasManyRemoveAssociationMixin<schedule_setting, schedule_settingId>;
  removeSchedule_settings!: Sequelize.HasManyRemoveAssociationsMixin<schedule_setting, schedule_settingId>;
  hasSchedule_setting!: Sequelize.HasManyHasAssociationMixin<schedule_setting, schedule_settingId>;
  hasSchedule_settings!: Sequelize.HasManyHasAssociationsMixin<schedule_setting, schedule_settingId>;
  countSchedule_settings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany schedule_setting via updated_by
  updated_by_schedule_settings!: schedule_setting[];
  getUpdated_by_schedule_settings!: Sequelize.HasManyGetAssociationsMixin<schedule_setting>;
  setUpdated_by_schedule_settings!: Sequelize.HasManySetAssociationsMixin<schedule_setting, schedule_settingId>;
  addUpdated_by_schedule_setting!: Sequelize.HasManyAddAssociationMixin<schedule_setting, schedule_settingId>;
  addUpdated_by_schedule_settings!: Sequelize.HasManyAddAssociationsMixin<schedule_setting, schedule_settingId>;
  createUpdated_by_schedule_setting!: Sequelize.HasManyCreateAssociationMixin<schedule_setting>;
  removeUpdated_by_schedule_setting!: Sequelize.HasManyRemoveAssociationMixin<schedule_setting, schedule_settingId>;
  removeUpdated_by_schedule_settings!: Sequelize.HasManyRemoveAssociationsMixin<schedule_setting, schedule_settingId>;
  hasUpdated_by_schedule_setting!: Sequelize.HasManyHasAssociationMixin<schedule_setting, schedule_settingId>;
  hasUpdated_by_schedule_settings!: Sequelize.HasManyHasAssociationsMixin<schedule_setting, schedule_settingId>;
  countUpdated_by_schedule_settings!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany scheduler via created_by
  schedulers!: scheduler[];
  getSchedulers!: Sequelize.HasManyGetAssociationsMixin<scheduler>;
  setSchedulers!: Sequelize.HasManySetAssociationsMixin<scheduler, schedulerId>;
  addScheduler!: Sequelize.HasManyAddAssociationMixin<scheduler, schedulerId>;
  addSchedulers!: Sequelize.HasManyAddAssociationsMixin<scheduler, schedulerId>;
  createScheduler!: Sequelize.HasManyCreateAssociationMixin<scheduler>;
  removeScheduler!: Sequelize.HasManyRemoveAssociationMixin<scheduler, schedulerId>;
  removeSchedulers!: Sequelize.HasManyRemoveAssociationsMixin<scheduler, schedulerId>;
  hasScheduler!: Sequelize.HasManyHasAssociationMixin<scheduler, schedulerId>;
  hasSchedulers!: Sequelize.HasManyHasAssociationsMixin<scheduler, schedulerId>;
  countSchedulers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany scheduler via judge_id
  judge_schedulers!: scheduler[];
  getJudge_schedulers!: Sequelize.HasManyGetAssociationsMixin<scheduler>;
  setJudge_schedulers!: Sequelize.HasManySetAssociationsMixin<scheduler, schedulerId>;
  addJudge_scheduler!: Sequelize.HasManyAddAssociationMixin<scheduler, schedulerId>;
  addJudge_schedulers!: Sequelize.HasManyAddAssociationsMixin<scheduler, schedulerId>;
  createJudge_scheduler!: Sequelize.HasManyCreateAssociationMixin<scheduler>;
  removeJudge_scheduler!: Sequelize.HasManyRemoveAssociationMixin<scheduler, schedulerId>;
  removeJudge_schedulers!: Sequelize.HasManyRemoveAssociationsMixin<scheduler, schedulerId>;
  hasJudge_scheduler!: Sequelize.HasManyHasAssociationMixin<scheduler, schedulerId>;
  hasJudge_schedulers!: Sequelize.HasManyHasAssociationsMixin<scheduler, schedulerId>;
  countJudge_schedulers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany scheduler via nominator_id
  nominator_schedulers!: scheduler[];
  getNominator_schedulers!: Sequelize.HasManyGetAssociationsMixin<scheduler>;
  setNominator_schedulers!: Sequelize.HasManySetAssociationsMixin<scheduler, schedulerId>;
  addNominator_scheduler!: Sequelize.HasManyAddAssociationMixin<scheduler, schedulerId>;
  addNominator_schedulers!: Sequelize.HasManyAddAssociationsMixin<scheduler, schedulerId>;
  createNominator_scheduler!: Sequelize.HasManyCreateAssociationMixin<scheduler>;
  removeNominator_scheduler!: Sequelize.HasManyRemoveAssociationMixin<scheduler, schedulerId>;
  removeNominator_schedulers!: Sequelize.HasManyRemoveAssociationsMixin<scheduler, schedulerId>;
  hasNominator_scheduler!: Sequelize.HasManyHasAssociationMixin<scheduler, schedulerId>;
  hasNominator_schedulers!: Sequelize.HasManyHasAssociationsMixin<scheduler, schedulerId>;
  countNominator_schedulers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany scheduler via updated_by
  updated_by_schedulers!: scheduler[];
  getUpdated_by_schedulers!: Sequelize.HasManyGetAssociationsMixin<scheduler>;
  setUpdated_by_schedulers!: Sequelize.HasManySetAssociationsMixin<scheduler, schedulerId>;
  addUpdated_by_scheduler!: Sequelize.HasManyAddAssociationMixin<scheduler, schedulerId>;
  addUpdated_by_schedulers!: Sequelize.HasManyAddAssociationsMixin<scheduler, schedulerId>;
  createUpdated_by_scheduler!: Sequelize.HasManyCreateAssociationMixin<scheduler>;
  removeUpdated_by_scheduler!: Sequelize.HasManyRemoveAssociationMixin<scheduler, schedulerId>;
  removeUpdated_by_schedulers!: Sequelize.HasManyRemoveAssociationsMixin<scheduler, schedulerId>;
  hasUpdated_by_scheduler!: Sequelize.HasManyHasAssociationMixin<scheduler, schedulerId>;
  hasUpdated_by_schedulers!: Sequelize.HasManyHasAssociationsMixin<scheduler, schedulerId>;
  countUpdated_by_schedulers!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany social_wall_likepost via user_id
  social_wall_likeposts!: social_wall_likepost[];
  getSocial_wall_likeposts!: Sequelize.HasManyGetAssociationsMixin<social_wall_likepost>;
  setSocial_wall_likeposts!: Sequelize.HasManySetAssociationsMixin<social_wall_likepost, social_wall_likepostId>;
  addSocial_wall_likepost!: Sequelize.HasManyAddAssociationMixin<social_wall_likepost, social_wall_likepostId>;
  addSocial_wall_likeposts!: Sequelize.HasManyAddAssociationsMixin<social_wall_likepost, social_wall_likepostId>;
  createSocial_wall_likepost!: Sequelize.HasManyCreateAssociationMixin<social_wall_likepost>;
  removeSocial_wall_likepost!: Sequelize.HasManyRemoveAssociationMixin<social_wall_likepost, social_wall_likepostId>;
  removeSocial_wall_likeposts!: Sequelize.HasManyRemoveAssociationsMixin<social_wall_likepost, social_wall_likepostId>;
  hasSocial_wall_likepost!: Sequelize.HasManyHasAssociationMixin<social_wall_likepost, social_wall_likepostId>;
  hasSocial_wall_likeposts!: Sequelize.HasManyHasAssociationsMixin<social_wall_likepost, social_wall_likepostId>;
  countSocial_wall_likeposts!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany socialwall via created_by
  socialwalls!: socialwall[];
  getSocialwalls!: Sequelize.HasManyGetAssociationsMixin<socialwall>;
  setSocialwalls!: Sequelize.HasManySetAssociationsMixin<socialwall, socialwallId>;
  addSocialwall!: Sequelize.HasManyAddAssociationMixin<socialwall, socialwallId>;
  addSocialwalls!: Sequelize.HasManyAddAssociationsMixin<socialwall, socialwallId>;
  createSocialwall!: Sequelize.HasManyCreateAssociationMixin<socialwall>;
  removeSocialwall!: Sequelize.HasManyRemoveAssociationMixin<socialwall, socialwallId>;
  removeSocialwalls!: Sequelize.HasManyRemoveAssociationsMixin<socialwall, socialwallId>;
  hasSocialwall!: Sequelize.HasManyHasAssociationMixin<socialwall, socialwallId>;
  hasSocialwalls!: Sequelize.HasManyHasAssociationsMixin<socialwall, socialwallId>;
  countSocialwalls!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany socialwall via updated_by
  updated_by_socialwalls!: socialwall[];
  getUpdated_by_socialwalls!: Sequelize.HasManyGetAssociationsMixin<socialwall>;
  setUpdated_by_socialwalls!: Sequelize.HasManySetAssociationsMixin<socialwall, socialwallId>;
  addUpdated_by_socialwall!: Sequelize.HasManyAddAssociationMixin<socialwall, socialwallId>;
  addUpdated_by_socialwalls!: Sequelize.HasManyAddAssociationsMixin<socialwall, socialwallId>;
  createUpdated_by_socialwall!: Sequelize.HasManyCreateAssociationMixin<socialwall>;
  removeUpdated_by_socialwall!: Sequelize.HasManyRemoveAssociationMixin<socialwall, socialwallId>;
  removeUpdated_by_socialwalls!: Sequelize.HasManyRemoveAssociationsMixin<socialwall, socialwallId>;
  hasUpdated_by_socialwall!: Sequelize.HasManyHasAssociationMixin<socialwall, socialwallId>;
  hasUpdated_by_socialwalls!: Sequelize.HasManyHasAssociationsMixin<socialwall, socialwallId>;
  countUpdated_by_socialwalls!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany socialwallcomment via created_by
  socialwallcomments!: socialwallcomment[];
  getSocialwallcomments!: Sequelize.HasManyGetAssociationsMixin<socialwallcomment>;
  setSocialwallcomments!: Sequelize.HasManySetAssociationsMixin<socialwallcomment, socialwallcommentId>;
  addSocialwallcomment!: Sequelize.HasManyAddAssociationMixin<socialwallcomment, socialwallcommentId>;
  addSocialwallcomments!: Sequelize.HasManyAddAssociationsMixin<socialwallcomment, socialwallcommentId>;
  createSocialwallcomment!: Sequelize.HasManyCreateAssociationMixin<socialwallcomment>;
  removeSocialwallcomment!: Sequelize.HasManyRemoveAssociationMixin<socialwallcomment, socialwallcommentId>;
  removeSocialwallcomments!: Sequelize.HasManyRemoveAssociationsMixin<socialwallcomment, socialwallcommentId>;
  hasSocialwallcomment!: Sequelize.HasManyHasAssociationMixin<socialwallcomment, socialwallcommentId>;
  hasSocialwallcomments!: Sequelize.HasManyHasAssociationsMixin<socialwallcomment, socialwallcommentId>;
  countSocialwallcomments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany socialwallcomment via updated_by
  updated_by_socialwallcomments!: socialwallcomment[];
  getUpdated_by_socialwallcomments!: Sequelize.HasManyGetAssociationsMixin<socialwallcomment>;
  setUpdated_by_socialwallcomments!: Sequelize.HasManySetAssociationsMixin<socialwallcomment, socialwallcommentId>;
  addUpdated_by_socialwallcomment!: Sequelize.HasManyAddAssociationMixin<socialwallcomment, socialwallcommentId>;
  addUpdated_by_socialwallcomments!: Sequelize.HasManyAddAssociationsMixin<socialwallcomment, socialwallcommentId>;
  createUpdated_by_socialwallcomment!: Sequelize.HasManyCreateAssociationMixin<socialwallcomment>;
  removeUpdated_by_socialwallcomment!: Sequelize.HasManyRemoveAssociationMixin<socialwallcomment, socialwallcommentId>;
  removeUpdated_by_socialwallcomments!: Sequelize.HasManyRemoveAssociationsMixin<socialwallcomment, socialwallcommentId>;
  hasUpdated_by_socialwallcomment!: Sequelize.HasManyHasAssociationMixin<socialwallcomment, socialwallcommentId>;
  hasUpdated_by_socialwallcomments!: Sequelize.HasManyHasAssociationsMixin<socialwallcomment, socialwallcommentId>;
  countUpdated_by_socialwallcomments!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey via created_by
  surveys!: survey[];
  getSurveys!: Sequelize.HasManyGetAssociationsMixin<survey>;
  setSurveys!: Sequelize.HasManySetAssociationsMixin<survey, surveyId>;
  addSurvey!: Sequelize.HasManyAddAssociationMixin<survey, surveyId>;
  addSurveys!: Sequelize.HasManyAddAssociationsMixin<survey, surveyId>;
  createSurvey!: Sequelize.HasManyCreateAssociationMixin<survey>;
  removeSurvey!: Sequelize.HasManyRemoveAssociationMixin<survey, surveyId>;
  removeSurveys!: Sequelize.HasManyRemoveAssociationsMixin<survey, surveyId>;
  hasSurvey!: Sequelize.HasManyHasAssociationMixin<survey, surveyId>;
  hasSurveys!: Sequelize.HasManyHasAssociationsMixin<survey, surveyId>;
  countSurveys!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey via updated_by
  updated_by_surveys!: survey[];
  getUpdated_by_surveys!: Sequelize.HasManyGetAssociationsMixin<survey>;
  setUpdated_by_surveys!: Sequelize.HasManySetAssociationsMixin<survey, surveyId>;
  addUpdated_by_survey!: Sequelize.HasManyAddAssociationMixin<survey, surveyId>;
  addUpdated_by_surveys!: Sequelize.HasManyAddAssociationsMixin<survey, surveyId>;
  createUpdated_by_survey!: Sequelize.HasManyCreateAssociationMixin<survey>;
  removeUpdated_by_survey!: Sequelize.HasManyRemoveAssociationMixin<survey, surveyId>;
  removeUpdated_by_surveys!: Sequelize.HasManyRemoveAssociationsMixin<survey, surveyId>;
  hasUpdated_by_survey!: Sequelize.HasManyHasAssociationMixin<survey, surveyId>;
  hasUpdated_by_surveys!: Sequelize.HasManyHasAssociationsMixin<survey, surveyId>;
  countUpdated_by_surveys!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey_important via user_id
  survey_importants!: survey_important[];
  getSurvey_importants!: Sequelize.HasManyGetAssociationsMixin<survey_important>;
  setSurvey_importants!: Sequelize.HasManySetAssociationsMixin<survey_important, survey_importantId>;
  addSurvey_important!: Sequelize.HasManyAddAssociationMixin<survey_important, survey_importantId>;
  addSurvey_importants!: Sequelize.HasManyAddAssociationsMixin<survey_important, survey_importantId>;
  createSurvey_important!: Sequelize.HasManyCreateAssociationMixin<survey_important>;
  removeSurvey_important!: Sequelize.HasManyRemoveAssociationMixin<survey_important, survey_importantId>;
  removeSurvey_importants!: Sequelize.HasManyRemoveAssociationsMixin<survey_important, survey_importantId>;
  hasSurvey_important!: Sequelize.HasManyHasAssociationMixin<survey_important, survey_importantId>;
  hasSurvey_importants!: Sequelize.HasManyHasAssociationsMixin<survey_important, survey_importantId>;
  countSurvey_importants!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey_question via created_by
  survey_questions!: survey_question[];
  getSurvey_questions!: Sequelize.HasManyGetAssociationsMixin<survey_question>;
  setSurvey_questions!: Sequelize.HasManySetAssociationsMixin<survey_question, survey_questionId>;
  addSurvey_question!: Sequelize.HasManyAddAssociationMixin<survey_question, survey_questionId>;
  addSurvey_questions!: Sequelize.HasManyAddAssociationsMixin<survey_question, survey_questionId>;
  createSurvey_question!: Sequelize.HasManyCreateAssociationMixin<survey_question>;
  removeSurvey_question!: Sequelize.HasManyRemoveAssociationMixin<survey_question, survey_questionId>;
  removeSurvey_questions!: Sequelize.HasManyRemoveAssociationsMixin<survey_question, survey_questionId>;
  hasSurvey_question!: Sequelize.HasManyHasAssociationMixin<survey_question, survey_questionId>;
  hasSurvey_questions!: Sequelize.HasManyHasAssociationsMixin<survey_question, survey_questionId>;
  countSurvey_questions!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey_question via updated_by
  updated_by_survey_questions!: survey_question[];
  getUpdated_by_survey_questions!: Sequelize.HasManyGetAssociationsMixin<survey_question>;
  setUpdated_by_survey_questions!: Sequelize.HasManySetAssociationsMixin<survey_question, survey_questionId>;
  addUpdated_by_survey_question!: Sequelize.HasManyAddAssociationMixin<survey_question, survey_questionId>;
  addUpdated_by_survey_questions!: Sequelize.HasManyAddAssociationsMixin<survey_question, survey_questionId>;
  createUpdated_by_survey_question!: Sequelize.HasManyCreateAssociationMixin<survey_question>;
  removeUpdated_by_survey_question!: Sequelize.HasManyRemoveAssociationMixin<survey_question, survey_questionId>;
  removeUpdated_by_survey_questions!: Sequelize.HasManyRemoveAssociationsMixin<survey_question, survey_questionId>;
  hasUpdated_by_survey_question!: Sequelize.HasManyHasAssociationMixin<survey_question, survey_questionId>;
  hasUpdated_by_survey_questions!: Sequelize.HasManyHasAssociationsMixin<survey_question, survey_questionId>;
  countUpdated_by_survey_questions!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey_question_bank via created_by
  survey_question_banks!: survey_question_bank[];
  getSurvey_question_banks!: Sequelize.HasManyGetAssociationsMixin<survey_question_bank>;
  setSurvey_question_banks!: Sequelize.HasManySetAssociationsMixin<survey_question_bank, survey_question_bankId>;
  addSurvey_question_bank!: Sequelize.HasManyAddAssociationMixin<survey_question_bank, survey_question_bankId>;
  addSurvey_question_banks!: Sequelize.HasManyAddAssociationsMixin<survey_question_bank, survey_question_bankId>;
  createSurvey_question_bank!: Sequelize.HasManyCreateAssociationMixin<survey_question_bank>;
  removeSurvey_question_bank!: Sequelize.HasManyRemoveAssociationMixin<survey_question_bank, survey_question_bankId>;
  removeSurvey_question_banks!: Sequelize.HasManyRemoveAssociationsMixin<survey_question_bank, survey_question_bankId>;
  hasSurvey_question_bank!: Sequelize.HasManyHasAssociationMixin<survey_question_bank, survey_question_bankId>;
  hasSurvey_question_banks!: Sequelize.HasManyHasAssociationsMixin<survey_question_bank, survey_question_bankId>;
  countSurvey_question_banks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey_question_bank via updated_by
  updated_by_survey_question_banks!: survey_question_bank[];
  getUpdated_by_survey_question_banks!: Sequelize.HasManyGetAssociationsMixin<survey_question_bank>;
  setUpdated_by_survey_question_banks!: Sequelize.HasManySetAssociationsMixin<survey_question_bank, survey_question_bankId>;
  addUpdated_by_survey_question_bank!: Sequelize.HasManyAddAssociationMixin<survey_question_bank, survey_question_bankId>;
  addUpdated_by_survey_question_banks!: Sequelize.HasManyAddAssociationsMixin<survey_question_bank, survey_question_bankId>;
  createUpdated_by_survey_question_bank!: Sequelize.HasManyCreateAssociationMixin<survey_question_bank>;
  removeUpdated_by_survey_question_bank!: Sequelize.HasManyRemoveAssociationMixin<survey_question_bank, survey_question_bankId>;
  removeUpdated_by_survey_question_banks!: Sequelize.HasManyRemoveAssociationsMixin<survey_question_bank, survey_question_bankId>;
  hasUpdated_by_survey_question_bank!: Sequelize.HasManyHasAssociationMixin<survey_question_bank, survey_question_bankId>;
  hasUpdated_by_survey_question_banks!: Sequelize.HasManyHasAssociationsMixin<survey_question_bank, survey_question_bankId>;
  countUpdated_by_survey_question_banks!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey_response via created_by
  survey_responses!: survey_response[];
  getSurvey_responses!: Sequelize.HasManyGetAssociationsMixin<survey_response>;
  setSurvey_responses!: Sequelize.HasManySetAssociationsMixin<survey_response, survey_responseId>;
  addSurvey_response!: Sequelize.HasManyAddAssociationMixin<survey_response, survey_responseId>;
  addSurvey_responses!: Sequelize.HasManyAddAssociationsMixin<survey_response, survey_responseId>;
  createSurvey_response!: Sequelize.HasManyCreateAssociationMixin<survey_response>;
  removeSurvey_response!: Sequelize.HasManyRemoveAssociationMixin<survey_response, survey_responseId>;
  removeSurvey_responses!: Sequelize.HasManyRemoveAssociationsMixin<survey_response, survey_responseId>;
  hasSurvey_response!: Sequelize.HasManyHasAssociationMixin<survey_response, survey_responseId>;
  hasSurvey_responses!: Sequelize.HasManyHasAssociationsMixin<survey_response, survey_responseId>;
  countSurvey_responses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey_response via updated_by
  updated_by_survey_responses!: survey_response[];
  getUpdated_by_survey_responses!: Sequelize.HasManyGetAssociationsMixin<survey_response>;
  setUpdated_by_survey_responses!: Sequelize.HasManySetAssociationsMixin<survey_response, survey_responseId>;
  addUpdated_by_survey_response!: Sequelize.HasManyAddAssociationMixin<survey_response, survey_responseId>;
  addUpdated_by_survey_responses!: Sequelize.HasManyAddAssociationsMixin<survey_response, survey_responseId>;
  createUpdated_by_survey_response!: Sequelize.HasManyCreateAssociationMixin<survey_response>;
  removeUpdated_by_survey_response!: Sequelize.HasManyRemoveAssociationMixin<survey_response, survey_responseId>;
  removeUpdated_by_survey_responses!: Sequelize.HasManyRemoveAssociationsMixin<survey_response, survey_responseId>;
  hasUpdated_by_survey_response!: Sequelize.HasManyHasAssociationMixin<survey_response, survey_responseId>;
  hasUpdated_by_survey_responses!: Sequelize.HasManyHasAssociationsMixin<survey_response, survey_responseId>;
  countUpdated_by_survey_responses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany survey_response via user_id
  user_survey_responses!: survey_response[];
  getUser_survey_responses!: Sequelize.HasManyGetAssociationsMixin<survey_response>;
  setUser_survey_responses!: Sequelize.HasManySetAssociationsMixin<survey_response, survey_responseId>;
  addUser_survey_response!: Sequelize.HasManyAddAssociationMixin<survey_response, survey_responseId>;
  addUser_survey_responses!: Sequelize.HasManyAddAssociationsMixin<survey_response, survey_responseId>;
  createUser_survey_response!: Sequelize.HasManyCreateAssociationMixin<survey_response>;
  removeUser_survey_response!: Sequelize.HasManyRemoveAssociationMixin<survey_response, survey_responseId>;
  removeUser_survey_responses!: Sequelize.HasManyRemoveAssociationsMixin<survey_response, survey_responseId>;
  hasUser_survey_response!: Sequelize.HasManyHasAssociationMixin<survey_response, survey_responseId>;
  hasUser_survey_responses!: Sequelize.HasManyHasAssociationsMixin<survey_response, survey_responseId>;
  countUser_survey_responses!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany template via created_by
  templates!: template[];
  getTemplates!: Sequelize.HasManyGetAssociationsMixin<template>;
  setTemplates!: Sequelize.HasManySetAssociationsMixin<template, templateId>;
  addTemplate!: Sequelize.HasManyAddAssociationMixin<template, templateId>;
  addTemplates!: Sequelize.HasManyAddAssociationsMixin<template, templateId>;
  createTemplate!: Sequelize.HasManyCreateAssociationMixin<template>;
  removeTemplate!: Sequelize.HasManyRemoveAssociationMixin<template, templateId>;
  removeTemplates!: Sequelize.HasManyRemoveAssociationsMixin<template, templateId>;
  hasTemplate!: Sequelize.HasManyHasAssociationMixin<template, templateId>;
  hasTemplates!: Sequelize.HasManyHasAssociationsMixin<template, templateId>;
  countTemplates!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany template via updated_by
  updated_by_templates!: template[];
  getUpdated_by_templates!: Sequelize.HasManyGetAssociationsMixin<template>;
  setUpdated_by_templates!: Sequelize.HasManySetAssociationsMixin<template, templateId>;
  addUpdated_by_template!: Sequelize.HasManyAddAssociationMixin<template, templateId>;
  addUpdated_by_templates!: Sequelize.HasManyAddAssociationsMixin<template, templateId>;
  createUpdated_by_template!: Sequelize.HasManyCreateAssociationMixin<template>;
  removeUpdated_by_template!: Sequelize.HasManyRemoveAssociationMixin<template, templateId>;
  removeUpdated_by_templates!: Sequelize.HasManyRemoveAssociationsMixin<template, templateId>;
  hasUpdated_by_template!: Sequelize.HasManyHasAssociationMixin<template, templateId>;
  hasUpdated_by_templates!: Sequelize.HasManyHasAssociationsMixin<template, templateId>;
  countUpdated_by_templates!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_badge via created_by
  user_badges!: user_badge[];
  getUser_badges!: Sequelize.HasManyGetAssociationsMixin<user_badge>;
  setUser_badges!: Sequelize.HasManySetAssociationsMixin<user_badge, user_badgeId>;
  addUser_badge!: Sequelize.HasManyAddAssociationMixin<user_badge, user_badgeId>;
  addUser_badges!: Sequelize.HasManyAddAssociationsMixin<user_badge, user_badgeId>;
  createUser_badge!: Sequelize.HasManyCreateAssociationMixin<user_badge>;
  removeUser_badge!: Sequelize.HasManyRemoveAssociationMixin<user_badge, user_badgeId>;
  removeUser_badges!: Sequelize.HasManyRemoveAssociationsMixin<user_badge, user_badgeId>;
  hasUser_badge!: Sequelize.HasManyHasAssociationMixin<user_badge, user_badgeId>;
  hasUser_badges!: Sequelize.HasManyHasAssociationsMixin<user_badge, user_badgeId>;
  countUser_badges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_badge via given_by
  given_by_user_badges!: user_badge[];
  getGiven_by_user_badges!: Sequelize.HasManyGetAssociationsMixin<user_badge>;
  setGiven_by_user_badges!: Sequelize.HasManySetAssociationsMixin<user_badge, user_badgeId>;
  addGiven_by_user_badge!: Sequelize.HasManyAddAssociationMixin<user_badge, user_badgeId>;
  addGiven_by_user_badges!: Sequelize.HasManyAddAssociationsMixin<user_badge, user_badgeId>;
  createGiven_by_user_badge!: Sequelize.HasManyCreateAssociationMixin<user_badge>;
  removeGiven_by_user_badge!: Sequelize.HasManyRemoveAssociationMixin<user_badge, user_badgeId>;
  removeGiven_by_user_badges!: Sequelize.HasManyRemoveAssociationsMixin<user_badge, user_badgeId>;
  hasGiven_by_user_badge!: Sequelize.HasManyHasAssociationMixin<user_badge, user_badgeId>;
  hasGiven_by_user_badges!: Sequelize.HasManyHasAssociationsMixin<user_badge, user_badgeId>;
  countGiven_by_user_badges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_badge via updated_by
  updated_by_user_badges!: user_badge[];
  getUpdated_by_user_badges!: Sequelize.HasManyGetAssociationsMixin<user_badge>;
  setUpdated_by_user_badges!: Sequelize.HasManySetAssociationsMixin<user_badge, user_badgeId>;
  addUpdated_by_user_badge!: Sequelize.HasManyAddAssociationMixin<user_badge, user_badgeId>;
  addUpdated_by_user_badges!: Sequelize.HasManyAddAssociationsMixin<user_badge, user_badgeId>;
  createUpdated_by_user_badge!: Sequelize.HasManyCreateAssociationMixin<user_badge>;
  removeUpdated_by_user_badge!: Sequelize.HasManyRemoveAssociationMixin<user_badge, user_badgeId>;
  removeUpdated_by_user_badges!: Sequelize.HasManyRemoveAssociationsMixin<user_badge, user_badgeId>;
  hasUpdated_by_user_badge!: Sequelize.HasManyHasAssociationMixin<user_badge, user_badgeId>;
  hasUpdated_by_user_badges!: Sequelize.HasManyHasAssociationsMixin<user_badge, user_badgeId>;
  countUpdated_by_user_badges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_badge via user_id
  user_user_badges!: user_badge[];
  getUser_user_badges!: Sequelize.HasManyGetAssociationsMixin<user_badge>;
  setUser_user_badges!: Sequelize.HasManySetAssociationsMixin<user_badge, user_badgeId>;
  addUser_user_badge!: Sequelize.HasManyAddAssociationMixin<user_badge, user_badgeId>;
  addUser_user_badges!: Sequelize.HasManyAddAssociationsMixin<user_badge, user_badgeId>;
  createUser_user_badge!: Sequelize.HasManyCreateAssociationMixin<user_badge>;
  removeUser_user_badge!: Sequelize.HasManyRemoveAssociationMixin<user_badge, user_badgeId>;
  removeUser_user_badges!: Sequelize.HasManyRemoveAssociationsMixin<user_badge, user_badgeId>;
  hasUser_user_badge!: Sequelize.HasManyHasAssociationMixin<user_badge, user_badgeId>;
  hasUser_user_badges!: Sequelize.HasManyHasAssociationsMixin<user_badge, user_badgeId>;
  countUser_user_badges!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_certificate via created_by
  user_certificates!: user_certificate[];
  getUser_certificates!: Sequelize.HasManyGetAssociationsMixin<user_certificate>;
  setUser_certificates!: Sequelize.HasManySetAssociationsMixin<user_certificate, user_certificateId>;
  addUser_certificate!: Sequelize.HasManyAddAssociationMixin<user_certificate, user_certificateId>;
  addUser_certificates!: Sequelize.HasManyAddAssociationsMixin<user_certificate, user_certificateId>;
  createUser_certificate!: Sequelize.HasManyCreateAssociationMixin<user_certificate>;
  removeUser_certificate!: Sequelize.HasManyRemoveAssociationMixin<user_certificate, user_certificateId>;
  removeUser_certificates!: Sequelize.HasManyRemoveAssociationsMixin<user_certificate, user_certificateId>;
  hasUser_certificate!: Sequelize.HasManyHasAssociationMixin<user_certificate, user_certificateId>;
  hasUser_certificates!: Sequelize.HasManyHasAssociationsMixin<user_certificate, user_certificateId>;
  countUser_certificates!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_certificate via given_by
  given_by_user_certificates!: user_certificate[];
  getGiven_by_user_certificates!: Sequelize.HasManyGetAssociationsMixin<user_certificate>;
  setGiven_by_user_certificates!: Sequelize.HasManySetAssociationsMixin<user_certificate, user_certificateId>;
  addGiven_by_user_certificate!: Sequelize.HasManyAddAssociationMixin<user_certificate, user_certificateId>;
  addGiven_by_user_certificates!: Sequelize.HasManyAddAssociationsMixin<user_certificate, user_certificateId>;
  createGiven_by_user_certificate!: Sequelize.HasManyCreateAssociationMixin<user_certificate>;
  removeGiven_by_user_certificate!: Sequelize.HasManyRemoveAssociationMixin<user_certificate, user_certificateId>;
  removeGiven_by_user_certificates!: Sequelize.HasManyRemoveAssociationsMixin<user_certificate, user_certificateId>;
  hasGiven_by_user_certificate!: Sequelize.HasManyHasAssociationMixin<user_certificate, user_certificateId>;
  hasGiven_by_user_certificates!: Sequelize.HasManyHasAssociationsMixin<user_certificate, user_certificateId>;
  countGiven_by_user_certificates!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_certificate via updated_by
  updated_by_user_certificates!: user_certificate[];
  getUpdated_by_user_certificates!: Sequelize.HasManyGetAssociationsMixin<user_certificate>;
  setUpdated_by_user_certificates!: Sequelize.HasManySetAssociationsMixin<user_certificate, user_certificateId>;
  addUpdated_by_user_certificate!: Sequelize.HasManyAddAssociationMixin<user_certificate, user_certificateId>;
  addUpdated_by_user_certificates!: Sequelize.HasManyAddAssociationsMixin<user_certificate, user_certificateId>;
  createUpdated_by_user_certificate!: Sequelize.HasManyCreateAssociationMixin<user_certificate>;
  removeUpdated_by_user_certificate!: Sequelize.HasManyRemoveAssociationMixin<user_certificate, user_certificateId>;
  removeUpdated_by_user_certificates!: Sequelize.HasManyRemoveAssociationsMixin<user_certificate, user_certificateId>;
  hasUpdated_by_user_certificate!: Sequelize.HasManyHasAssociationMixin<user_certificate, user_certificateId>;
  hasUpdated_by_user_certificates!: Sequelize.HasManyHasAssociationsMixin<user_certificate, user_certificateId>;
  countUpdated_by_user_certificates!: Sequelize.HasManyCountAssociationsMixin;
  // user hasMany user_certificate via user_id
  user_user_certificates!: user_certificate[];
  getUser_user_certificates!: Sequelize.HasManyGetAssociationsMixin<user_certificate>;
  setUser_user_certificates!: Sequelize.HasManySetAssociationsMixin<user_certificate, user_certificateId>;
  addUser_user_certificate!: Sequelize.HasManyAddAssociationMixin<user_certificate, user_certificateId>;
  addUser_user_certificates!: Sequelize.HasManyAddAssociationsMixin<user_certificate, user_certificateId>;
  createUser_user_certificate!: Sequelize.HasManyCreateAssociationMixin<user_certificate>;
  removeUser_user_certificate!: Sequelize.HasManyRemoveAssociationMixin<user_certificate, user_certificateId>;
  removeUser_user_certificates!: Sequelize.HasManyRemoveAssociationsMixin<user_certificate, user_certificateId>;
  hasUser_user_certificate!: Sequelize.HasManyHasAssociationMixin<user_certificate, user_certificateId>;
  hasUser_user_certificates!: Sequelize.HasManyHasAssociationsMixin<user_certificate, user_certificateId>;
  countUser_user_certificates!: Sequelize.HasManyCountAssociationsMixin;
  // user belongsTo user via manager_id
  manager!: user;
  getManager!: Sequelize.BelongsToGetAssociationMixin<user>;
  setManager!: Sequelize.BelongsToSetAssociationMixin<user, userId>;
  createManager!: Sequelize.BelongsToCreateAssociationMixin<user>;

  static initModel(sequelize: Sequelize.Sequelize): typeof user {
    return sequelize.define('user', {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    active: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    created_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    date_of_birth: {
      type: DataTypes.DATE,
      allowNull: true
    },
    date_of_joining: {
      type: DataTypes.DATE,
      allowNull: true
    },
    designation: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "NULL"
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "NULL"
    },
    enabled_reason: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    firstname: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "NULL"
    },
    is_default: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "NULL"
    },
    password: {
      type: DataTypes.STRING(120),
      allowNull: true,
      defaultValue: "NULL"
    },
    project_tour: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    telephone_number: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: "NULL"
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: true
    },
    updated_by: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    username: {
      type: DataTypes.STRING(20),
      allowNull: true,
      defaultValue: "NULL"
    },
    department_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'department',
        key: 'id'
      }
    },
    manager_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'role',
        key: 'id'
      }
    },
    profile_pic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    sign_pic: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "UK6dotkott2kjsp8vw4d0m25fb7",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "UKr43af9ap4edm43mmtq01oddj6",
        unique: true,
        fields: [
          { name: "username" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  }) as typeof user;
  }
}

import type { Sequelize } from "sequelize";
import { activity_log as _activity_log } from "./activity_log";
import type { activity_logAttributes, activity_logCreationAttributes } from "./activity_log";
import { admin_panel as _admin_panel } from "./admin_panel";
import type { admin_panelAttributes, admin_panelCreationAttributes } from "./admin_panel";
import { award as _award } from "./award";
import type { awardAttributes, awardCreationAttributes } from "./award";
import { award_hash_tag as _award_hash_tag } from "./award_hash_tag";
import type { award_hash_tagAttributes, award_hash_tagCreationAttributes } from "./award_hash_tag";
import { badge as _badge } from "./badge";
import type { badgeAttributes, badgeCreationAttributes } from "./badge";
import { badge_hash_tag as _badge_hash_tag } from "./badge_hash_tag";
import type { badge_hash_tagAttributes, badge_hash_tagCreationAttributes } from "./badge_hash_tag";
import { certificate as _certificate } from "./certificate";
import type { certificateAttributes, certificateCreationAttributes } from "./certificate";
import { configuration as _configuration } from "./configuration";
import type { configurationAttributes, configurationCreationAttributes } from "./configuration";
import { department as _department } from "./department";
import type { departmentAttributes, departmentCreationAttributes } from "./department";
import { ecard as _ecard } from "./ecard";
import type { ecardAttributes, ecardCreationAttributes } from "./ecard";
import { forum as _forum } from "./forum";
import type { forumAttributes, forumCreationAttributes } from "./forum";
import { forum_attachment as _forum_attachment } from "./forum_attachment";
import type { forum_attachmentAttributes, forum_attachmentCreationAttributes } from "./forum_attachment";
import { forum_comment_like as _forum_comment_like } from "./forum_comment_like";
import type { forum_comment_likeAttributes, forum_comment_likeCreationAttributes } from "./forum_comment_like";
import { forum_department as _forum_department } from "./forum_department";
import type { forum_departmentAttributes, forum_departmentCreationAttributes } from "./forum_department";
import { forum_following as _forum_following } from "./forum_following";
import type { forum_followingAttributes, forum_followingCreationAttributes } from "./forum_following";
import { forum_like as _forum_like } from "./forum_like";
import type { forum_likeAttributes, forum_likeCreationAttributes } from "./forum_like";
import { forum_read as _forum_read } from "./forum_read";
import type { forum_readAttributes, forum_readCreationAttributes } from "./forum_read";
import { forumcomment as _forumcomment } from "./forumcomment";
import type { forumcommentAttributes, forumcommentCreationAttributes } from "./forumcomment";
import { hashtag as _hashtag } from "./hashtag";
import type { hashtagAttributes, hashtagCreationAttributes } from "./hashtag";
import { hibernate_sequence as _hibernate_sequence } from "./hibernate_sequence";
import type { hibernate_sequenceAttributes, hibernate_sequenceCreationAttributes } from "./hibernate_sequence";
import { idea as _idea } from "./idea";
import type { ideaAttributes, ideaCreationAttributes } from "./idea";
import { idea_attachment as _idea_attachment } from "./idea_attachment";
import type { idea_attachmentAttributes, idea_attachmentCreationAttributes } from "./idea_attachment";
import { idea_comment as _idea_comment } from "./idea_comment";
import type { idea_commentAttributes, idea_commentCreationAttributes } from "./idea_comment";
import { idea_department as _idea_department } from "./idea_department";
import type { idea_departmentAttributes, idea_departmentCreationAttributes } from "./idea_department";
import { idea_favorite as _idea_favorite } from "./idea_favorite";
import type { idea_favoriteAttributes, idea_favoriteCreationAttributes } from "./idea_favorite";
import { idea_like as _idea_like } from "./idea_like";
import type { idea_likeAttributes, idea_likeCreationAttributes } from "./idea_like";
import { idea_read as _idea_read } from "./idea_read";
import type { idea_readAttributes, idea_readCreationAttributes } from "./idea_read";
import { ideacomments_attachment as _ideacomments_attachment } from "./ideacomments_attachment";
import type { ideacomments_attachmentAttributes, ideacomments_attachmentCreationAttributes } from "./ideacomments_attachment";
import { library_award as _library_award } from "./library_award";
import type { library_awardAttributes, library_awardCreationAttributes } from "./library_award";
import { library_badge as _library_badge } from "./library_badge";
import type { library_badgeAttributes, library_badgeCreationAttributes } from "./library_badge";
import { manage_award_nomination as _manage_award_nomination } from "./manage_award_nomination";
import type { manage_award_nominationAttributes, manage_award_nominationCreationAttributes } from "./manage_award_nomination";
import { manage_award as _manage_award } from "./manage_award";
import type { manage_awardAttributes, manage_awardCreationAttributes } from "./manage_award";
import { message as _message } from "./message";
import type { messageAttributes, messageCreationAttributes } from "./message";
import { notification as _notification } from "./notification";
import type { notificationAttributes, notificationCreationAttributes } from "./notification";
import { password_reset_token as _password_reset_token } from "./password_reset_token";
import type { password_reset_tokenAttributes, password_reset_tokenCreationAttributes } from "./password_reset_token";
import { poll_choice as _poll_choice } from "./poll_choice";
import type { poll_choiceAttributes, poll_choiceCreationAttributes } from "./poll_choice";
import { poll_mapping as _poll_mapping } from "./poll_mapping";
import type { poll_mappingAttributes, poll_mappingCreationAttributes } from "./poll_mapping";
import { poll_response as _poll_response } from "./poll_response";
import type { poll_responseAttributes, poll_responseCreationAttributes } from "./poll_response";
import { poll as _poll } from "./poll";
import type { pollAttributes, pollCreationAttributes } from "./poll";
import { program as _program } from "./program";
import type { programAttributes, programCreationAttributes } from "./program";
import { program_cash_reward as _program_cash_reward } from "./program_cash_reward";
import type { program_cash_rewardAttributes, program_cash_rewardCreationAttributes } from "./program_cash_reward";
import { program_reward as _program_reward } from "./program_reward";
import type { program_rewardAttributes, program_rewardCreationAttributes } from "./program_reward";
import { program_task as _program_task } from "./program_task";
import type { program_taskAttributes, program_taskCreationAttributes } from "./program_task";
import { program_task_attachment as _program_task_attachment } from "./program_task_attachment";
import type { program_task_attachmentAttributes, program_task_attachmentCreationAttributes } from "./program_task_attachment";
import { program_task_comment as _program_task_comment } from "./program_task_comment";
import type { program_task_commentAttributes, program_task_commentCreationAttributes } from "./program_task_comment";
import { program_task_reward as _program_task_reward } from "./program_task_reward";
import type { program_task_rewardAttributes, program_task_rewardCreationAttributes } from "./program_task_reward";
import { program_task_user as _program_task_user } from "./program_task_user";
import type { program_task_userAttributes, program_task_userCreationAttributes } from "./program_task_user";
import { program_user as _program_user } from "./program_user";
import type { program_userAttributes, program_userCreationAttributes } from "./program_user";
import { refreshtoken as _refreshtoken } from "./refreshtoken";
import type { refreshtokenAttributes, refreshtokenCreationAttributes } from "./refreshtoken";
import { reward as _reward } from "./reward";
import type { rewardAttributes, rewardCreationAttributes } from "./reward";
import { reward_hash_tag as _reward_hash_tag } from "./reward_hash_tag";
import type { reward_hash_tagAttributes, reward_hash_tagCreationAttributes } from "./reward_hash_tag";
import { role as _role } from "./role";
import type { roleAttributes, roleCreationAttributes } from "./role";
import { role_screen_mapping as _role_screen_mapping } from "./role_screen_mapping";
import type { role_screen_mappingAttributes, role_screen_mappingCreationAttributes } from "./role_screen_mapping";
import { schedule_job as _schedule_job } from "./schedule_job";
import type { schedule_jobAttributes, schedule_jobCreationAttributes } from "./schedule_job";
import { schedule_setting as _schedule_setting } from "./schedule_setting";
import type { schedule_settingAttributes, schedule_settingCreationAttributes } from "./schedule_setting";
import { schedule_setting_schedule_message as _schedule_setting_schedule_message } from "./schedule_setting_schedule_message";
import type { schedule_setting_schedule_messageAttributes, schedule_setting_schedule_messageCreationAttributes } from "./schedule_setting_schedule_message";
import { schedule_setting_schedule_template as _schedule_setting_schedule_template } from "./schedule_setting_schedule_template";
import type { schedule_setting_schedule_templateAttributes, schedule_setting_schedule_templateCreationAttributes } from "./schedule_setting_schedule_template";
import { scheduler as _scheduler } from "./scheduler";
import type { schedulerAttributes, schedulerCreationAttributes } from "./scheduler";
import { social_wall_likepost as _social_wall_likepost } from "./social_wall_likepost";
import type { social_wall_likepostAttributes, social_wall_likepostCreationAttributes } from "./social_wall_likepost";
import { socialwall as _socialwall } from "./socialwall";
import type { socialwallAttributes, socialwallCreationAttributes } from "./socialwall";
import { socialwallcomment as _socialwallcomment } from "./socialwallcomment";
import type { socialwallcommentAttributes, socialwallcommentCreationAttributes } from "./socialwallcomment";
import { survey as _survey } from "./survey";
import type { surveyAttributes, surveyCreationAttributes } from "./survey";
import { survey_important as _survey_important } from "./survey_important";
import type { survey_importantAttributes, survey_importantCreationAttributes } from "./survey_important";
import { survey_mapping as _survey_mapping } from "./survey_mapping";
import type { survey_mappingAttributes, survey_mappingCreationAttributes } from "./survey_mapping";
import { survey_question as _survey_question } from "./survey_question";
import type { survey_questionAttributes, survey_questionCreationAttributes } from "./survey_question";
import { survey_question_bank as _survey_question_bank } from "./survey_question_bank";
import type { survey_question_bankAttributes, survey_question_bankCreationAttributes } from "./survey_question_bank";
import { survey_response as _survey_response } from "./survey_response";
import type { survey_responseAttributes, survey_responseCreationAttributes } from "./survey_response";
import { survey_response_item as _survey_response_item } from "./survey_response_item";
import type { survey_response_itemAttributes, survey_response_itemCreationAttributes } from "./survey_response_item";
import { template as _template } from "./template";
import type { templateAttributes, templateCreationAttributes } from "./template";
import { user_badge as _user_badge } from "./user_badge";
import type { user_badgeAttributes, user_badgeCreationAttributes } from "./user_badge";
import { user_badges_hash_tag as _user_badges_hash_tag } from "./user_badges_hash_tag";
import type { user_badges_hash_tagAttributes, user_badges_hash_tagCreationAttributes } from "./user_badges_hash_tag";
import { user_certificate as _user_certificate } from "./user_certificate";
import type { user_certificateAttributes, user_certificateCreationAttributes } from "./user_certificate";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";

export {
  _activity_log as activity_log,
  _admin_panel as admin_panel,
  _award as award,
  _award_hash_tag as award_hash_tag,
  _badge as badge,
  _badge_hash_tag as badge_hash_tag,
  _certificate as certificate,
  _configuration as configuration,
  _department as department,
  _ecard as ecard,
  _forum as forum,
  _forum_attachment as forum_attachment,
  _forum_comment_like as forum_comment_like,
  _forum_department as forum_department,
  _forum_following as forum_following,
  _forum_like as forum_like,
  _forum_read as forum_read,
  _forumcomment as forumcomment,
  _hashtag as hashtag,
  _hibernate_sequence as hibernate_sequence,
  _idea as idea,
  _idea_attachment as idea_attachment,
  _idea_comment as idea_comment,
  _idea_department as idea_department,
  _idea_favorite as idea_favorite,
  _idea_like as idea_like,
  _idea_read as idea_read,
  _ideacomments_attachment as ideacomments_attachment,
  _library_award as library_award,
  _library_badge as library_badge,
  _manage_award_nomination as manage_award_nomination,
  _manage_award as manage_award,
  _message as message,
  _notification as notification,
  _password_reset_token as password_reset_token,
  _poll_choice as poll_choice,
  _poll_mapping as poll_mapping,
  _poll_response as poll_response,
  _poll as poll,
  _program as program,
  _program_cash_reward as program_cash_reward,
  _program_reward as program_reward,
  _program_task as program_task,
  _program_task_attachment as program_task_attachment,
  _program_task_comment as program_task_comment,
  _program_task_reward as program_task_reward,
  _program_task_user as program_task_user,
  _program_user as program_user,
  _refreshtoken as refreshtoken,
  _reward as reward,
  _reward_hash_tag as reward_hash_tag,
  _role as role,
  _role_screen_mapping as role_screen_mapping,
  _schedule_job as schedule_job,
  _schedule_setting as schedule_setting,
  _schedule_setting_schedule_message as schedule_setting_schedule_message,
  _schedule_setting_schedule_template as schedule_setting_schedule_template,
  _scheduler as scheduler,
  _social_wall_likepost as social_wall_likepost,
  _socialwall as socialwall,
  _socialwallcomment as socialwallcomment,
  _survey as survey,
  _survey_important as survey_important,
  _survey_mapping as survey_mapping,
  _survey_question as survey_question,
  _survey_question_bank as survey_question_bank,
  _survey_response as survey_response,
  _survey_response_item as survey_response_item,
  _template as template,
  _user_badge as user_badge,
  _user_badges_hash_tag as user_badges_hash_tag,
  _user_certificate as user_certificate,
  _user as user,
};

export type {
  activity_logAttributes,
  activity_logCreationAttributes,
  admin_panelAttributes,
  admin_panelCreationAttributes,
  awardAttributes,
  awardCreationAttributes,
  award_hash_tagAttributes,
  award_hash_tagCreationAttributes,
  badgeAttributes,
  badgeCreationAttributes,
  badge_hash_tagAttributes,
  badge_hash_tagCreationAttributes,
  certificateAttributes,
  certificateCreationAttributes,
  configurationAttributes,
  configurationCreationAttributes,
  departmentAttributes,
  departmentCreationAttributes,
  ecardAttributes,
  ecardCreationAttributes,
  forumAttributes,
  forumCreationAttributes,
  forum_attachmentAttributes,
  forum_attachmentCreationAttributes,
  forum_comment_likeAttributes,
  forum_comment_likeCreationAttributes,
  forum_departmentAttributes,
  forum_departmentCreationAttributes,
  forum_followingAttributes,
  forum_followingCreationAttributes,
  forum_likeAttributes,
  forum_likeCreationAttributes,
  forum_readAttributes,
  forum_readCreationAttributes,
  forumcommentAttributes,
  forumcommentCreationAttributes,
  hashtagAttributes,
  hashtagCreationAttributes,
  hibernate_sequenceAttributes,
  hibernate_sequenceCreationAttributes,
  ideaAttributes,
  ideaCreationAttributes,
  idea_attachmentAttributes,
  idea_attachmentCreationAttributes,
  idea_commentAttributes,
  idea_commentCreationAttributes,
  idea_departmentAttributes,
  idea_departmentCreationAttributes,
  idea_favoriteAttributes,
  idea_favoriteCreationAttributes,
  idea_likeAttributes,
  idea_likeCreationAttributes,
  idea_readAttributes,
  idea_readCreationAttributes,
  ideacomments_attachmentAttributes,
  ideacomments_attachmentCreationAttributes,
  library_awardAttributes,
  library_awardCreationAttributes,
  library_badgeAttributes,
  library_badgeCreationAttributes,
  manage_award_nominationAttributes,
  manage_award_nominationCreationAttributes,
  manage_awardAttributes,
  manage_awardCreationAttributes,
  messageAttributes,
  messageCreationAttributes,
  notificationAttributes,
  notificationCreationAttributes,
  password_reset_tokenAttributes,
  password_reset_tokenCreationAttributes,
  poll_choiceAttributes,
  poll_choiceCreationAttributes,
  poll_mappingAttributes,
  poll_mappingCreationAttributes,
  poll_responseAttributes,
  poll_responseCreationAttributes,
  pollAttributes,
  pollCreationAttributes,
  programAttributes,
  programCreationAttributes,
  program_cash_rewardAttributes,
  program_cash_rewardCreationAttributes,
  program_rewardAttributes,
  program_rewardCreationAttributes,
  program_taskAttributes,
  program_taskCreationAttributes,
  program_task_attachmentAttributes,
  program_task_attachmentCreationAttributes,
  program_task_commentAttributes,
  program_task_commentCreationAttributes,
  program_task_rewardAttributes,
  program_task_rewardCreationAttributes,
  program_task_userAttributes,
  program_task_userCreationAttributes,
  program_userAttributes,
  program_userCreationAttributes,
  refreshtokenAttributes,
  refreshtokenCreationAttributes,
  rewardAttributes,
  rewardCreationAttributes,
  reward_hash_tagAttributes,
  reward_hash_tagCreationAttributes,
  roleAttributes,
  roleCreationAttributes,
  role_screen_mappingAttributes,
  role_screen_mappingCreationAttributes,
  schedule_jobAttributes,
  schedule_jobCreationAttributes,
  schedule_settingAttributes,
  schedule_settingCreationAttributes,
  schedule_setting_schedule_messageAttributes,
  schedule_setting_schedule_messageCreationAttributes,
  schedule_setting_schedule_templateAttributes,
  schedule_setting_schedule_templateCreationAttributes,
  schedulerAttributes,
  schedulerCreationAttributes,
  social_wall_likepostAttributes,
  social_wall_likepostCreationAttributes,
  socialwallAttributes,
  socialwallCreationAttributes,
  socialwallcommentAttributes,
  socialwallcommentCreationAttributes,
  surveyAttributes,
  surveyCreationAttributes,
  survey_importantAttributes,
  survey_importantCreationAttributes,
  survey_mappingAttributes,
  survey_mappingCreationAttributes,
  survey_questionAttributes,
  survey_questionCreationAttributes,
  survey_question_bankAttributes,
  survey_question_bankCreationAttributes,
  survey_responseAttributes,
  survey_responseCreationAttributes,
  survey_response_itemAttributes,
  survey_response_itemCreationAttributes,
  templateAttributes,
  templateCreationAttributes,
  user_badgeAttributes,
  user_badgeCreationAttributes,
  user_badges_hash_tagAttributes,
  user_badges_hash_tagCreationAttributes,
  user_certificateAttributes,
  user_certificateCreationAttributes,
  userAttributes,
  userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const activity_log = _activity_log.initModel(sequelize);
  const admin_panel = _admin_panel.initModel(sequelize);
  const award = _award.initModel(sequelize);
  const award_hash_tag = _award_hash_tag.initModel(sequelize);
  const badge = _badge.initModel(sequelize);
  const badge_hash_tag = _badge_hash_tag.initModel(sequelize);
  const certificate = _certificate.initModel(sequelize);
  const configuration = _configuration.initModel(sequelize);
  const department = _department.initModel(sequelize);
  const ecard = _ecard.initModel(sequelize);
  const forum = _forum.initModel(sequelize);
  const forum_attachment = _forum_attachment.initModel(sequelize);
  const forum_comment_like = _forum_comment_like.initModel(sequelize);
  const forum_department = _forum_department.initModel(sequelize);
  const forum_following = _forum_following.initModel(sequelize);
  const forum_like = _forum_like.initModel(sequelize);
  const forum_read = _forum_read.initModel(sequelize);
  const forumcomment = _forumcomment.initModel(sequelize);
  const hashtag = _hashtag.initModel(sequelize);
  const hibernate_sequence = _hibernate_sequence.initModel(sequelize);
  const idea = _idea.initModel(sequelize);
  const idea_attachment = _idea_attachment.initModel(sequelize);
  const idea_comment = _idea_comment.initModel(sequelize);
  const idea_department = _idea_department.initModel(sequelize);
  const idea_favorite = _idea_favorite.initModel(sequelize);
  const idea_like = _idea_like.initModel(sequelize);
  const idea_read = _idea_read.initModel(sequelize);
  const ideacomments_attachment = _ideacomments_attachment.initModel(sequelize);
  const library_award = _library_award.initModel(sequelize);
  const library_badge = _library_badge.initModel(sequelize);
  const manage_award_nomination = _manage_award_nomination.initModel(sequelize);
  const manage_award = _manage_award.initModel(sequelize);
  const message = _message.initModel(sequelize);
  const notification = _notification.initModel(sequelize);
  const password_reset_token = _password_reset_token.initModel(sequelize);
  const poll_choice = _poll_choice.initModel(sequelize);
  const poll_mapping = _poll_mapping.initModel(sequelize);
  const poll_response = _poll_response.initModel(sequelize);
  const poll = _poll.initModel(sequelize);
  const program = _program.initModel(sequelize);
  const program_cash_reward = _program_cash_reward.initModel(sequelize);
  const program_reward = _program_reward.initModel(sequelize);
  const program_task = _program_task.initModel(sequelize);
  const program_task_attachment = _program_task_attachment.initModel(sequelize);
  const program_task_comment = _program_task_comment.initModel(sequelize);
  const program_task_reward = _program_task_reward.initModel(sequelize);
  const program_task_user = _program_task_user.initModel(sequelize);
  const program_user = _program_user.initModel(sequelize);
  const refreshtoken = _refreshtoken.initModel(sequelize);
  const reward = _reward.initModel(sequelize);
  const reward_hash_tag = _reward_hash_tag.initModel(sequelize);
  const role = _role.initModel(sequelize);
  const role_screen_mapping = _role_screen_mapping.initModel(sequelize);
  const schedule_job = _schedule_job.initModel(sequelize);
  const schedule_setting = _schedule_setting.initModel(sequelize);
  const schedule_setting_schedule_message = _schedule_setting_schedule_message.initModel(sequelize);
  const schedule_setting_schedule_template = _schedule_setting_schedule_template.initModel(sequelize);
  const scheduler = _scheduler.initModel(sequelize);
  const social_wall_likepost = _social_wall_likepost.initModel(sequelize);
  const socialwall = _socialwall.initModel(sequelize);
  const socialwallcomment = _socialwallcomment.initModel(sequelize);
  const survey = _survey.initModel(sequelize);
  const survey_important = _survey_important.initModel(sequelize);
  const survey_mapping = _survey_mapping.initModel(sequelize);
  const survey_question = _survey_question.initModel(sequelize);
  const survey_question_bank = _survey_question_bank.initModel(sequelize);
  const survey_response = _survey_response.initModel(sequelize);
  const survey_response_item = _survey_response_item.initModel(sequelize);
  const template = _template.initModel(sequelize);
  const user_badge = _user_badge.initModel(sequelize);
  const user_badges_hash_tag = _user_badges_hash_tag.initModel(sequelize);
  const user_certificate = _user_certificate.initModel(sequelize);
  const user = _user.initModel(sequelize);

  hashtag.belongsToMany(reward, { as: 'reward_id_rewards', through: reward_hash_tag, foreignKey: "hash_tag_id", otherKey: "reward_id" });
  hashtag.belongsToMany(user_badge, { as: 'user_badges_id_user_badges', through: user_badges_hash_tag, foreignKey: "hash_tag_id", otherKey: "user_badges_id" });
  message.belongsToMany(schedule_setting, { as: 'schedule_setting_id_schedule_settings', through: schedule_setting_schedule_message, foreignKey: "schedule_messages_id", otherKey: "schedule_setting_id" });
  reward.belongsToMany(hashtag, { as: 'hash_tag_id_hashtags', through: reward_hash_tag, foreignKey: "reward_id", otherKey: "hash_tag_id" });
  schedule_setting.belongsToMany(message, { as: 'schedule_messages_id_messages', through: schedule_setting_schedule_message, foreignKey: "schedule_setting_id", otherKey: "schedule_messages_id" });
  schedule_setting.belongsToMany(template, { as: 'schedule_templates_id_templates', through: schedule_setting_schedule_template, foreignKey: "schedule_setting_id", otherKey: "schedule_templates_id" });
  template.belongsToMany(schedule_setting, { as: 'schedule_setting_id_schedule_setting_schedule_setting_schedule_templates', through: schedule_setting_schedule_template, foreignKey: "schedule_templates_id", otherKey: "schedule_setting_id" });
  user_badge.belongsToMany(hashtag, { as: 'hash_tag_id_hashtag_user_badges_hash_tags', through: user_badges_hash_tag, foreignKey: "user_badges_id", otherKey: "hash_tag_id" });
  award_hash_tag.belongsTo(award, { foreignKey: "award_id"});
  award.hasMany(award_hash_tag, { foreignKey: "award_id"});
  manage_award.belongsTo(award, { foreignKey: "award_id"});
  award.hasMany(manage_award, { foreignKey: "award_id"});
  scheduler.belongsTo(award, { foreignKey: "award_id"});
  award.hasMany(scheduler, { foreignKey: "award_id"});
  badge_hash_tag.belongsTo(badge, { foreignKey: "badge_id"});
  badge.hasMany(badge_hash_tag, { foreignKey: "badge_id"});
  user_badge.belongsTo(badge, { foreignKey: "badge_id"});
  badge.hasMany(user_badge, { foreignKey: "badge_id"});
  user_certificate.belongsTo(certificate, { foreignKey: "certificate_id"});
  certificate.hasMany(user_certificate, { foreignKey: "certificate_id"});
  forum_department.belongsTo(department, { foreignKey: "dep_id"});
  department.hasMany(forum_department, { foreignKey: "dep_id"});
  idea_department.belongsTo(department, { foreignKey: "dep_id"});
  department.hasMany(idea_department, { foreignKey: "dep_id"});
  manage_award.belongsTo(department, { foreignKey: "department_id"});
  department.hasMany(manage_award, { foreignKey: "department_id"});
  user.belongsTo(department, { foreignKey: "department_id"});
  department.hasMany(user, { foreignKey: "department_id"});
  forum_attachment.belongsTo(forum, { foreignKey: "forum_id"});
  forum.hasMany(forum_attachment, { foreignKey: "forum_id"});
  forum_department.belongsTo(forum, { foreignKey: "forum_id"});
  forum.hasMany(forum_department, { foreignKey: "forum_id"});
  forum_following.belongsTo(forum, { foreignKey: "forum_id"});
  forum.hasMany(forum_following, { foreignKey: "forum_id"});
  forum_like.belongsTo(forum, { foreignKey: "forum_id"});
  forum.hasMany(forum_like, { foreignKey: "forum_id"});
  forum_read.belongsTo(forum, { foreignKey: "forum_id"});
  forum.hasMany(forum_read, { foreignKey: "forum_id"});
  forumcomment.belongsTo(forum, { foreignKey: "forum_id"});
  forum.hasMany(forumcomment, { foreignKey: "forum_id"});
  forum_comment_like.belongsTo(forumcomment, { foreignKey: "forumcomments_id"});
  forumcomment.hasMany(forum_comment_like, { foreignKey: "forumcomments_id"});
  forumcomment.belongsTo(forumcomment, { foreignKey: "parent_id"});
  forumcomment.hasMany(forumcomment, { foreignKey: "parent_id"});
  award_hash_tag.belongsTo(hashtag, { foreignKey: "hash_tag_id"});
  hashtag.hasMany(award_hash_tag, { foreignKey: "hash_tag_id"});
  badge_hash_tag.belongsTo(hashtag, { foreignKey: "hash_tag_id"});
  hashtag.hasMany(badge_hash_tag, { foreignKey: "hash_tag_id"});
  reward_hash_tag.belongsTo(hashtag, { foreignKey: "hash_tag_id"});
  hashtag.hasMany(reward_hash_tag, { foreignKey: "hash_tag_id"});
  user_badges_hash_tag.belongsTo(hashtag, { foreignKey: "hash_tag_id"});
  hashtag.hasMany(user_badges_hash_tag, { foreignKey: "hash_tag_id"});
  idea_attachment.belongsTo(idea, { foreignKey: "idea_id"});
  idea.hasMany(idea_attachment, { foreignKey: "idea_id"});
  idea_comment.belongsTo(idea, { foreignKey: "idea_id"});
  idea.hasMany(idea_comment, { foreignKey: "idea_id"});
  idea_department.belongsTo(idea, { foreignKey: "idea_id"});
  idea.hasMany(idea_department, { foreignKey: "idea_id"});
  idea_favorite.belongsTo(idea, { foreignKey: "idea_id"});
  idea.hasMany(idea_favorite, { foreignKey: "idea_id"});
  idea_like.belongsTo(idea, { foreignKey: "idea_id"});
  idea.hasMany(idea_like, { foreignKey: "idea_id"});
  idea_read.belongsTo(idea, { foreignKey: "idea_id"});
  idea.hasMany(idea_read, { foreignKey: "idea_id"});
  ideacomments_attachment.belongsTo(idea_comment, { foreignKey: "ideacomments_id"});
  idea_comment.hasMany(ideacomments_attachment, { foreignKey: "ideacomments_id"});
  award.belongsTo(library_award, { foreignKey: "library_awards"});
  library_award.hasMany(award, { foreignKey: "library_awards"});
  badge.belongsTo(library_badge, { foreignKey: "library_badges"});
  library_badge.hasMany(badge, { foreignKey: "library_badges"});
  manage_award_nomination.belongsTo(manage_award, { foreignKey: "manage_awards_id"});
  manage_award.hasMany(manage_award_nomination, { foreignKey: "manage_awards_id"});
  schedule_setting_schedule_message.belongsTo(message, { foreignKey: "schedule_messages_id"});
  message.hasMany(schedule_setting_schedule_message, { foreignKey: "schedule_messages_id"});
  poll_choice.belongsTo(poll_response, { foreignKey: "poll_response_id"});
  poll_response.hasMany(poll_choice, { foreignKey: "poll_response_id"});
  poll_mapping.belongsTo(poll, { foreignKey: "poll_id"});
  poll.hasMany(poll_mapping, { foreignKey: "poll_id"});
  poll_response.belongsTo(poll, { foreignKey: "poll_id"});
  poll.hasMany(poll_response, { foreignKey: "poll_id"});
  program_reward.belongsTo(program, { foreignKey: "program_id"});
  program.hasMany(program_reward, { foreignKey: "program_id"});
  program_task.belongsTo(program, { foreignKey: "program_id"});
  program.hasMany(program_task, { foreignKey: "program_id"});
  program_user.belongsTo(program, { foreignKey: "program_id"});
  program.hasMany(program_user, { foreignKey: "program_id"});
  program_task_attachment.belongsTo(program_task, { foreignKey: "programtask_id"});
  program_task.hasMany(program_task_attachment, { foreignKey: "programtask_id"});
  program_task_comment.belongsTo(program_task, { foreignKey: "programtask_id"});
  program_task.hasMany(program_task_comment, { foreignKey: "programtask_id"});
  program_task_reward.belongsTo(program_task, { foreignKey: "programtask_id"});
  program_task.hasMany(program_task_reward, { foreignKey: "programtask_id"});
  program_task_user.belongsTo(program_task, { foreignKey: "programtask_id"});
  program_task.hasMany(program_task_user, { foreignKey: "programtask_id"});
  reward_hash_tag.belongsTo(reward, { foreignKey: "reward_id"});
  reward.hasMany(reward_hash_tag, { foreignKey: "reward_id"});
  socialwall.belongsTo(reward, { foreignKey: "reward_id"});
  reward.hasMany(socialwall, { foreignKey: "reward_id"});
  role_screen_mapping.belongsTo(role, { foreignKey: "role_id"});
  role.hasMany(role_screen_mapping, { foreignKey: "role_id"});
  user.belongsTo(role, { foreignKey: "role_id"});
  role.hasMany(user, { foreignKey: "role_id"});
  schedule_setting_schedule_message.belongsTo(schedule_setting, { foreignKey: "schedule_setting_id"});
  schedule_setting.hasMany(schedule_setting_schedule_message, { foreignKey: "schedule_setting_id"});
  schedule_setting_schedule_template.belongsTo(schedule_setting, { foreignKey: "schedule_setting_id"});
  schedule_setting.hasMany(schedule_setting_schedule_template, { foreignKey: "schedule_setting_id"});
  social_wall_likepost.belongsTo(socialwall, { foreignKey: "socialwall_id"});
  socialwall.hasMany(social_wall_likepost, { foreignKey: "socialwall_id"});
  socialwallcomment.belongsTo(socialwall, { foreignKey: "social_wall"});
  socialwall.hasMany(socialwallcomment, { foreignKey: "social_wall"});
  socialwallcomment.belongsTo(socialwallcomment, { foreignKey: "parent_id"});
  socialwallcomment.hasMany(socialwallcomment, { foreignKey: "parent_id"});
  survey_important.belongsTo(survey, { foreignKey: "survey_id"});
  survey.hasMany(survey_important, { foreignKey: "survey_id"});
  survey_mapping.belongsTo(survey, { foreignKey: "survey_id"});
  survey.hasMany(survey_mapping, { foreignKey: "survey_id"});
  survey_question.belongsTo(survey, { foreignKey: "survey_id"});
  survey.hasMany(survey_question, { foreignKey: "survey_id"});
  survey_response.belongsTo(survey, { foreignKey: "survey_id"});
  survey.hasMany(survey_response, { foreignKey: "survey_id"});
  survey_response_item.belongsTo(survey_question, { foreignKey: "question_id"});
  survey_question.hasMany(survey_response_item, { foreignKey: "question_id"});
  survey_response_item.belongsTo(survey_response, { foreignKey: "survey_response"});
  survey_response.hasMany(survey_response_item, { foreignKey: "survey_response"});
  schedule_setting_schedule_template.belongsTo(template, { foreignKey: "schedule_templates_id"});
  template.hasMany(schedule_setting_schedule_template, { foreignKey: "schedule_templates_id"});
  user_badges_hash_tag.belongsTo(user_badge, { foreignKey: "user_badges_id"});
  user_badge.hasMany(user_badges_hash_tag, { foreignKey: "user_badges_id"});
  activity_log.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(activity_log, { foreignKey: "user_id"});
  award.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(award, { foreignKey: "created_by"});
  award.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(award, { foreignKey: "updated_by"});
  badge.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(badge, { foreignKey: "updated_by"});
  badge.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(badge, { foreignKey: "created_by"});
  certificate.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(certificate, { foreignKey: "updated_by"});
  certificate.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(certificate, { foreignKey: "created_by"});
  configuration.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(configuration, { foreignKey: "updated_by"});
  configuration.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(configuration, { foreignKey: "created_by"});
  department.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(department, { foreignKey: "created_by"});
  department.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(department, { foreignKey: "updated_by"});
  ecard.belongsTo(user, { foreignKey: "from_user_id"});
  user.hasMany(ecard, { foreignKey: "from_user_id"});
  ecard.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(ecard, { foreignKey: "created_by"});
  ecard.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(ecard, { foreignKey: "updated_by"});
  ecard.belongsTo(user, { foreignKey: "to_user_id"});
  user.hasMany(ecard, { foreignKey: "to_user_id"});
  forum.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(forum, { foreignKey: "created_by"});
  forum.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(forum, { foreignKey: "updated_by"});
  forum_attachment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(forum_attachment, { foreignKey: "created_by"});
  forum_attachment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(forum_attachment, { foreignKey: "updated_by"});
  forum_comment_like.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(forum_comment_like, { foreignKey: "user_id"});
  forum_department.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(forum_department, { foreignKey: "created_by"});
  forum_department.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(forum_department, { foreignKey: "updated_by"});
  forum_following.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(forum_following, { foreignKey: "user_id"});
  forum_like.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(forum_like, { foreignKey: "user_id"});
  forum_read.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(forum_read, { foreignKey: "user_id"});
  forumcomment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(forumcomment, { foreignKey: "updated_by"});
  forumcomment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(forumcomment, { foreignKey: "created_by"});
  hashtag.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(hashtag, { foreignKey: "created_by"});
  hashtag.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(hashtag, { foreignKey: "updated_by"});
  idea.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(idea, { foreignKey: "updated_by"});
  idea.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(idea, { foreignKey: "created_by"});
  idea_attachment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(idea_attachment, { foreignKey: "created_by"});
  idea_attachment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(idea_attachment, { foreignKey: "updated_by"});
  idea_comment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(idea_comment, { foreignKey: "created_by"});
  idea_comment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(idea_comment, { foreignKey: "updated_by"});
  idea_department.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(idea_department, { foreignKey: "created_by"});
  idea_department.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(idea_department, { foreignKey: "updated_by"});
  idea_favorite.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(idea_favorite, { foreignKey: "user_id"});
  idea_like.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(idea_like, { foreignKey: "user_id"});
  idea_read.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(idea_read, { foreignKey: "user_id"});
  ideacomments_attachment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(ideacomments_attachment, { foreignKey: "updated_by"});
  ideacomments_attachment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(ideacomments_attachment, { foreignKey: "created_by"});
  manage_award_nomination.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(manage_award_nomination, { foreignKey: "user_id"});
  manage_award_nomination.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(manage_award_nomination, { foreignKey: "created_by"});
  manage_award_nomination.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(manage_award_nomination, { foreignKey: "updated_by"});
  manage_award.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(manage_award, { foreignKey: "updated_by"});
  manage_award.belongsTo(user, { foreignKey: "judge_id"});
  user.hasMany(manage_award, { foreignKey: "judge_id"});
  manage_award.belongsTo(user, { foreignKey: "nominator_id"});
  user.hasMany(manage_award, { foreignKey: "nominator_id"});
  manage_award.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(manage_award, { foreignKey: "created_by"});
  message.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(message, { foreignKey: "created_by"});
  message.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(message, { foreignKey: "updated_by"});
  notification.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(notification, { foreignKey: "user_id"});
  password_reset_token.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(password_reset_token, { foreignKey: "user_id"});
  poll_choice.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(poll_choice, { foreignKey: "updated_by"});
  poll_choice.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(poll_choice, { foreignKey: "created_by"});
  poll_response.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(poll_response, { foreignKey: "user_id"});
  poll_response.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(poll_response, { foreignKey: "created_by"});
  poll_response.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(poll_response, { foreignKey: "updated_by"});
  poll.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(poll, { foreignKey: "updated_by"});
  poll.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(poll, { foreignKey: "created_by"});
  program.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(program, { foreignKey: "updated_by"});
  program.belongsTo(user, { foreignKey: "manager_id"});
  user.hasMany(program, { foreignKey: "manager_id"});
  program.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(program, { foreignKey: "created_by"});
  program_cash_reward.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(program_cash_reward, { foreignKey: "created_by"});
  program_cash_reward.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(program_cash_reward, { foreignKey: "updated_by"});
  program_cash_reward.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(program_cash_reward, { foreignKey: "user_id"});
  program_task.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(program_task, { foreignKey: "created_by"});
  program_task.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(program_task, { foreignKey: "updated_by"});
  program_task.belongsTo(user, { foreignKey: "submitted_by"});
  user.hasMany(program_task, { foreignKey: "submitted_by"});
  program_task_attachment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(program_task_attachment, { foreignKey: "created_by"});
  program_task_attachment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(program_task_attachment, { foreignKey: "updated_by"});
  program_task_comment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(program_task_comment, { foreignKey: "updated_by"});
  program_task_comment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(program_task_comment, { foreignKey: "created_by"});
  program_task_user.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(program_task_user, { foreignKey: "user_id"});
  program_user.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(program_user, { foreignKey: "user_id"});
  refreshtoken.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(refreshtoken, { foreignKey: "user_id"});
  reward.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(reward, { foreignKey: "created_by"});
  reward.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(reward, { foreignKey: "updated_by"});
  reward.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(reward, { foreignKey: "user_id"});
  role.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(role, { foreignKey: "created_by"});
  role.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(role, { foreignKey: "updated_by"});
  role_screen_mapping.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(role_screen_mapping, { foreignKey: "updated_by"});
  role_screen_mapping.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(role_screen_mapping, { foreignKey: "created_by"});
  schedule_setting.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(schedule_setting, { foreignKey: "created_by"});
  schedule_setting.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(schedule_setting, { foreignKey: "updated_by"});
  scheduler.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(scheduler, { foreignKey: "updated_by"});
  scheduler.belongsTo(user, { foreignKey: "nominator_id"});
  user.hasMany(scheduler, { foreignKey: "nominator_id"});
  scheduler.belongsTo(user, { foreignKey: "judge_id"});
  user.hasMany(scheduler, { foreignKey: "judge_id"});
  scheduler.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(scheduler, { foreignKey: "created_by"});
  social_wall_likepost.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(social_wall_likepost, { foreignKey: "user_id"});
  socialwall.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(socialwall, { foreignKey: "updated_by"});
  socialwall.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(socialwall, { foreignKey: "created_by"});
  socialwallcomment.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(socialwallcomment, { foreignKey: "updated_by"});
  socialwallcomment.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(socialwallcomment, { foreignKey: "created_by"});
  survey.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(survey, { foreignKey: "updated_by"});
  survey.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(survey, { foreignKey: "created_by"});
  survey_important.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(survey_important, { foreignKey: "user_id"});
  survey_question.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(survey_question, { foreignKey: "updated_by"});
  survey_question.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(survey_question, { foreignKey: "created_by"});
  survey_question_bank.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(survey_question_bank, { foreignKey: "created_by"});
  survey_question_bank.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(survey_question_bank, { foreignKey: "updated_by"});
  survey_response.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(survey_response, { foreignKey: "created_by"});
  survey_response.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(survey_response, { foreignKey: "user_id"});
  survey_response.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(survey_response, { foreignKey: "updated_by"});
  survey_response_item.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(survey_response_item, { foreignKey: "created_by"});
  survey_response_item.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(survey_response_item, { foreignKey: "updated_by"});
  template.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(template, { foreignKey: "created_by"});
  template.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(template, { foreignKey: "updated_by"});
  user_badge.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(user_badge, { foreignKey: "updated_by"});
  user_badge.belongsTo(user, { foreignKey: "given_by"});
  user.hasMany(user_badge, { foreignKey: "given_by"});
  user_badge.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(user_badge, { foreignKey: "created_by"});
  user_badge.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(user_badge, { foreignKey: "user_id"});
  user_certificate.belongsTo(user, { foreignKey: "user_id"});
  user.hasMany(user_certificate, { foreignKey: "user_id"});
  user_certificate.belongsTo(user, { foreignKey: "given_by"});
  user.hasMany(user_certificate, { foreignKey: "given_by"});
  user_certificate.belongsTo(user, { foreignKey: "created_by"});
  user.hasMany(user_certificate, { foreignKey: "created_by"});
  user_certificate.belongsTo(user, { foreignKey: "updated_by"});
  user.hasMany(user_certificate, { foreignKey: "updated_by"});
  user.belongsTo(user, { foreignKey: "manager_id"});
  user.hasMany(user, { foreignKey: "manager_id"});

  return {
    activity_log: activity_log,
    admin_panel: admin_panel,
    award: award,
    award_hash_tag: award_hash_tag,
    badge: badge,
    badge_hash_tag: badge_hash_tag,
    certificate: certificate,
    configuration: configuration,
    department: department,
    ecard: ecard,
    forum: forum,
    forum_attachment: forum_attachment,
    forum_comment_like: forum_comment_like,
    forum_department: forum_department,
    forum_following: forum_following,
    forum_like: forum_like,
    forum_read: forum_read,
    forumcomment: forumcomment,
    hashtag: hashtag,
    hibernate_sequence: hibernate_sequence,
    idea: idea,
    idea_attachment: idea_attachment,
    idea_comment: idea_comment,
    idea_department: idea_department,
    idea_favorite: idea_favorite,
    idea_like: idea_like,
    idea_read: idea_read,
    ideacomments_attachment: ideacomments_attachment,
    library_award: library_award,
    library_badge: library_badge,
    manage_award_nomination: manage_award_nomination,
    manage_award: manage_award,
    message: message,
    notification: notification,
    password_reset_token: password_reset_token,
    poll_choice: poll_choice,
    poll_mapping: poll_mapping,
    poll_response: poll_response,
    poll: poll,
    program: program,
    program_cash_reward: program_cash_reward,
    program_reward: program_reward,
    program_task: program_task,
    program_task_attachment: program_task_attachment,
    program_task_comment: program_task_comment,
    program_task_reward: program_task_reward,
    program_task_user: program_task_user,
    program_user: program_user,
    refreshtoken: refreshtoken,
    reward: reward,
    reward_hash_tag: reward_hash_tag,
    role: role,
    role_screen_mapping: role_screen_mapping,
    schedule_job: schedule_job,
    schedule_setting: schedule_setting,
    schedule_setting_schedule_message: schedule_setting_schedule_message,
    schedule_setting_schedule_template: schedule_setting_schedule_template,
    scheduler: scheduler,
    social_wall_likepost: social_wall_likepost,
    socialwall: socialwall,
    socialwallcomment: socialwallcomment,
    survey: survey,
    survey_important: survey_important,
    survey_mapping: survey_mapping,
    survey_question: survey_question,
    survey_question_bank: survey_question_bank,
    survey_response: survey_response,
    survey_response_item: survey_response_item,
    template: template,
    user_badge: user_badge,
    user_badges_hash_tag: user_badges_hash_tag,
    user_certificate: user_certificate,
    user: user,
  };
}

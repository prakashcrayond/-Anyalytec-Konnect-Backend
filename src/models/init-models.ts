import type { Sequelize } from "sequelize";
import { activity_log as _activity_log } from "./activity_log";
import type { activity_logAttributes, activity_logCreationAttributes } from "./activity_log";
import { admin_panel as _admin_panel } from "./admin_panel";
import type { admin_panelAttributes, admin_panelCreationAttributes } from "./admin_panel";
import { award as _award } from "./award";
import type { awardAttributes, awardCreationAttributes } from "./award";
import { badge as _badge } from "./badge";
import type { badgeAttributes, badgeCreationAttributes } from "./badge";
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
import { template as _template } from "./template";
import type { templateAttributes, templateCreationAttributes } from "./template";
import { user_badge as _user_badge } from "./user_badge";
import type { user_badgeAttributes, user_badgeCreationAttributes } from "./user_badge";
import { user_certificate as _user_certificate } from "./user_certificate";
import type { user_certificateAttributes, user_certificateCreationAttributes } from "./user_certificate";
import { user as _user } from "./user";
import type { userAttributes, userCreationAttributes } from "./user";

export {
  _activity_log as activity_log,
  _admin_panel as admin_panel,
  _award as award,
  _badge as badge,
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
  _template as template,
  _user_badge as user_badge,
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
  badgeAttributes,
  badgeCreationAttributes,
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
  templateAttributes,
  templateCreationAttributes,
  user_badgeAttributes,
  user_badgeCreationAttributes,
  user_certificateAttributes,
  user_certificateCreationAttributes,
  userAttributes,
  userCreationAttributes,
};

export function initModels(sequelize: Sequelize) {
  const activity_log = _activity_log.initModel(sequelize);
  const admin_panel = _admin_panel.initModel(sequelize);
  const award = _award.initModel(sequelize);
  const badge = _badge.initModel(sequelize);
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
  const template = _template.initModel(sequelize);
  const user_badge = _user_badge.initModel(sequelize);
  const user_certificate = _user_certificate.initModel(sequelize);
  const user = _user.initModel(sequelize);

  message.belongsToMany(schedule_setting, { as: 'schedule_setting_id_schedule_settings', through: schedule_setting_schedule_message, foreignKey: "schedule_messages_id", otherKey: "schedule_setting_id" });
  schedule_setting.belongsToMany(message, { as: 'schedule_messages_id_messages', through: schedule_setting_schedule_message, foreignKey: "schedule_setting_id", otherKey: "schedule_messages_id" });
  schedule_setting.belongsToMany(template, { as: 'schedule_templates_id_templates', through: schedule_setting_schedule_template, foreignKey: "schedule_setting_id", otherKey: "schedule_templates_id" });
  template.belongsToMany(schedule_setting, { as: 'schedule_setting_id_schedule_setting_schedule_setting_schedule_templates', through: schedule_setting_schedule_template, foreignKey: "schedule_templates_id", otherKey: "schedule_setting_id" });
  manage_award.belongsTo(award, { as: "award", foreignKey: "award_id"});
  award.hasMany(manage_award, { as: "manage_awards", foreignKey: "award_id"});
  scheduler.belongsTo(award, { as: "award", foreignKey: "award_id"});
  award.hasMany(scheduler, { as: "schedulers", foreignKey: "award_id"});
  user_badge.belongsTo(badge, { as: "badge", foreignKey: "badge_id"});
  badge.hasMany(user_badge, { as: "user_badges", foreignKey: "badge_id"});
  user_certificate.belongsTo(certificate, { as: "certificate", foreignKey: "certificate_id"});
  certificate.hasMany(user_certificate, { as: "user_certificates", foreignKey: "certificate_id"});
  forum_department.belongsTo(department, { as: "dep", foreignKey: "dep_id"});
  department.hasMany(forum_department, { as: "forum_departments", foreignKey: "dep_id"});
  idea_department.belongsTo(department, { as: "dep", foreignKey: "dep_id"});
  department.hasMany(idea_department, { as: "idea_departments", foreignKey: "dep_id"});
  manage_award.belongsTo(department, { as: "department", foreignKey: "department_id"});
  department.hasMany(manage_award, { as: "manage_awards", foreignKey: "department_id"});
  user.belongsTo(department, { as: "department_department", foreignKey: "department_id"});
  department.hasMany(user, { as: "users", foreignKey: "department_id"});
  forum_attachment.belongsTo(forum, { as: "forum", foreignKey: "forum_id"});
  forum.hasMany(forum_attachment, { as: "forum_attachments", foreignKey: "forum_id"});
  forum_department.belongsTo(forum, { as: "forum", foreignKey: "forum_id"});
  forum.hasMany(forum_department, { as: "forum_departments", foreignKey: "forum_id"});
  forum_following.belongsTo(forum, { as: "forum", foreignKey: "forum_id"});
  forum.hasMany(forum_following, { as: "forum_followings", foreignKey: "forum_id"});
  forum_like.belongsTo(forum, { as: "forum", foreignKey: "forum_id"});
  forum.hasMany(forum_like, { as: "forum_likes", foreignKey: "forum_id"});
  forum_read.belongsTo(forum, { as: "forum", foreignKey: "forum_id"});
  forum.hasMany(forum_read, { as: "forum_reads", foreignKey: "forum_id"});
  forumcomment.belongsTo(forum, { as: "forum", foreignKey: "forum_id"});
  forum.hasMany(forumcomment, { as: "forumcomments", foreignKey: "forum_id"});
  forum_comment_like.belongsTo(forumcomment, { as: "forumcomment", foreignKey: "forumcomments_id"});
  forumcomment.hasMany(forum_comment_like, { as: "forum_comment_likes", foreignKey: "forumcomments_id"});
  forumcomment.belongsTo(forumcomment, { as: "parent", foreignKey: "parent_id"});
  forumcomment.hasMany(forumcomment, { as: "forumcomments", foreignKey: "parent_id"});
  idea_attachment.belongsTo(idea, { as: "idea", foreignKey: "idea_id"});
  idea.hasMany(idea_attachment, { as: "idea_attachments", foreignKey: "idea_id"});
  idea_comment.belongsTo(idea, { as: "idea", foreignKey: "idea_id"});
  idea.hasMany(idea_comment, { as: "idea_comments", foreignKey: "idea_id"});
  idea_department.belongsTo(idea, { as: "idea", foreignKey: "idea_id"});
  idea.hasMany(idea_department, { as: "idea_departments", foreignKey: "idea_id"});
  idea_favorite.belongsTo(idea, { as: "idea", foreignKey: "idea_id"});
  idea.hasMany(idea_favorite, { as: "idea_favorites", foreignKey: "idea_id"});
  idea_like.belongsTo(idea, { as: "idea", foreignKey: "idea_id"});
  idea.hasMany(idea_like, { as: "idea_likes", foreignKey: "idea_id"});
  idea_read.belongsTo(idea, { as: "idea", foreignKey: "idea_id"});
  idea.hasMany(idea_read, { as: "idea_reads", foreignKey: "idea_id"});
  ideacomments_attachment.belongsTo(idea_comment, { as: "ideacomment", foreignKey: "ideacomments_id"});
  idea_comment.hasMany(ideacomments_attachment, { as: "ideacomments_attachments", foreignKey: "ideacomments_id"});
  award.belongsTo(library_award, { as: "library_awards_library_award", foreignKey: "library_awards"});
  library_award.hasMany(award, { as: "awards", foreignKey: "library_awards"});
  badge.belongsTo(library_badge, { as: "library_badges_library_badge", foreignKey: "library_badges"});
  library_badge.hasMany(badge, { as: "badges", foreignKey: "library_badges"});
  manage_award_nomination.belongsTo(manage_award, { as: "manage_award", foreignKey: "manage_awards_id"});
  manage_award.hasMany(manage_award_nomination, { as: "manage_award_nominations", foreignKey: "manage_awards_id"});
  schedule_setting_schedule_message.belongsTo(message, { as: "schedule_message", foreignKey: "schedule_messages_id"});
  message.hasMany(schedule_setting_schedule_message, { as: "schedule_setting_schedule_messages", foreignKey: "schedule_messages_id"});
  poll_choice.belongsTo(poll_response, { as: "poll_response", foreignKey: "poll_response_id"});
  poll_response.hasMany(poll_choice, { as: "poll_choices", foreignKey: "poll_response_id"});
  poll_mapping.belongsTo(poll, { as: "poll", foreignKey: "poll_id"});
  poll.hasMany(poll_mapping, { as: "poll_mappings", foreignKey: "poll_id"});
  poll_response.belongsTo(poll, { as: "poll", foreignKey: "poll_id"});
  poll.hasMany(poll_response, { as: "poll_responses", foreignKey: "poll_id"});
  program_reward.belongsTo(program, { as: "program", foreignKey: "program_id"});
  program.hasMany(program_reward, { as: "program_rewards", foreignKey: "program_id"});
  program_task.belongsTo(program, { as: "program", foreignKey: "program_id"});
  program.hasMany(program_task, { as: "program_tasks", foreignKey: "program_id"});
  program_user.belongsTo(program, { as: "program", foreignKey: "program_id"});
  program.hasMany(program_user, { as: "program_users", foreignKey: "program_id"});
  program_task_attachment.belongsTo(program_task, { as: "programtask", foreignKey: "programtask_id"});
  program_task.hasMany(program_task_attachment, { as: "program_task_attachments", foreignKey: "programtask_id"});
  program_task_comment.belongsTo(program_task, { as: "programtask", foreignKey: "programtask_id"});
  program_task.hasMany(program_task_comment, { as: "program_task_comments", foreignKey: "programtask_id"});
  program_task_reward.belongsTo(program_task, { as: "programtask", foreignKey: "programtask_id"});
  program_task.hasMany(program_task_reward, { as: "program_task_rewards", foreignKey: "programtask_id"});
  program_task_user.belongsTo(program_task, { as: "programtask", foreignKey: "programtask_id"});
  program_task.hasMany(program_task_user, { as: "program_task_users", foreignKey: "programtask_id"});
  socialwall.belongsTo(reward, { as: "reward", foreignKey: "reward_id"});
  reward.hasMany(socialwall, { as: "socialwalls", foreignKey: "reward_id"});
  role_screen_mapping.belongsTo(role, { as: "role", foreignKey: "role_id"});
  role.hasMany(role_screen_mapping, { as: "role_screen_mappings", foreignKey: "role_id"});
  user.belongsTo(role, { as: "role_role", foreignKey: "role_id"});
  role.hasMany(user, { as: "users", foreignKey: "role_id"});
  schedule_setting_schedule_message.belongsTo(schedule_setting, { as: "schedule_setting", foreignKey: "schedule_setting_id"});
  schedule_setting.hasMany(schedule_setting_schedule_message, { as: "schedule_setting_schedule_messages", foreignKey: "schedule_setting_id"});
  schedule_setting_schedule_template.belongsTo(schedule_setting, { as: "schedule_setting", foreignKey: "schedule_setting_id"});
  schedule_setting.hasMany(schedule_setting_schedule_template, { as: "schedule_setting_schedule_templates", foreignKey: "schedule_setting_id"});
  social_wall_likepost.belongsTo(socialwall, { as: "socialwall", foreignKey: "socialwall_id"});
  socialwall.hasMany(social_wall_likepost, { as: "social_wall_likeposts", foreignKey: "socialwall_id"});
  socialwallcomment.belongsTo(socialwall, { as: "social_wall_socialwall", foreignKey: "social_wall"});
  socialwall.hasMany(socialwallcomment, { as: "socialwallcomments", foreignKey: "social_wall"});
  socialwallcomment.belongsTo(socialwallcomment, { as: "parent", foreignKey: "parent_id"});
  socialwallcomment.hasMany(socialwallcomment, { as: "socialwallcomments", foreignKey: "parent_id"});
  survey_important.belongsTo(survey, { as: "survey", foreignKey: "survey_id"});
  survey.hasMany(survey_important, { as: "survey_importants", foreignKey: "survey_id"});
  survey_mapping.belongsTo(survey, { as: "survey", foreignKey: "survey_id"});
  survey.hasMany(survey_mapping, { as: "survey_mappings", foreignKey: "survey_id"});
  survey_question.belongsTo(survey, { as: "survey", foreignKey: "survey_id"});
  survey.hasMany(survey_question, { as: "survey_questions", foreignKey: "survey_id"});
  survey_response.belongsTo(survey, { as: "survey", foreignKey: "survey_id"});
  survey.hasMany(survey_response, { as: "survey_responses", foreignKey: "survey_id"});
  schedule_setting_schedule_template.belongsTo(template, { as: "schedule_template", foreignKey: "schedule_templates_id"});
  template.hasMany(schedule_setting_schedule_template, { as: "schedule_setting_schedule_templates", foreignKey: "schedule_templates_id"});
  activity_log.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(activity_log, { as: "activity_logs", foreignKey: "user_id"});
  award.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(award, { as: "awards", foreignKey: "created_by"});
  award.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(award, { as: "updated_by_awards", foreignKey: "updated_by"});
  badge.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(badge, { as: "badges", foreignKey: "updated_by"});
  badge.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(badge, { as: "created_by_badges", foreignKey: "created_by"});
  certificate.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(certificate, { as: "certificates", foreignKey: "updated_by"});
  certificate.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(certificate, { as: "created_by_certificates", foreignKey: "created_by"});
  configuration.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(configuration, { as: "configurations", foreignKey: "updated_by"});
  configuration.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(configuration, { as: "created_by_configurations", foreignKey: "created_by"});
  department.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(department, { as: "departments", foreignKey: "created_by"});
  department.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(department, { as: "updated_by_departments", foreignKey: "updated_by"});
  ecard.belongsTo(user, { as: "from_user", foreignKey: "from_user_id"});
  user.hasMany(ecard, { as: "ecards", foreignKey: "from_user_id"});
  ecard.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(ecard, { as: "created_by_ecards", foreignKey: "created_by"});
  ecard.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(ecard, { as: "updated_by_ecards", foreignKey: "updated_by"});
  ecard.belongsTo(user, { as: "to_user", foreignKey: "to_user_id"});
  user.hasMany(ecard, { as: "to_user_ecards", foreignKey: "to_user_id"});
  forum.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(forum, { as: "forums", foreignKey: "created_by"});
  forum.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(forum, { as: "updated_by_forums", foreignKey: "updated_by"});
  forum_attachment.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(forum_attachment, { as: "forum_attachments", foreignKey: "created_by"});
  forum_attachment.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(forum_attachment, { as: "updated_by_forum_attachments", foreignKey: "updated_by"});
  forum_comment_like.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(forum_comment_like, { as: "forum_comment_likes", foreignKey: "user_id"});
  forum_department.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(forum_department, { as: "forum_departments", foreignKey: "created_by"});
  forum_department.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(forum_department, { as: "updated_by_forum_departments", foreignKey: "updated_by"});
  forum_following.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(forum_following, { as: "forum_followings", foreignKey: "user_id"});
  forum_like.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(forum_like, { as: "forum_likes", foreignKey: "user_id"});
  forum_read.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(forum_read, { as: "forum_reads", foreignKey: "user_id"});
  forumcomment.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(forumcomment, { as: "forumcomments", foreignKey: "updated_by"});
  forumcomment.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(forumcomment, { as: "created_by_forumcomments", foreignKey: "created_by"});
  hashtag.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(hashtag, { as: "hashtags", foreignKey: "created_by"});
  hashtag.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(hashtag, { as: "updated_by_hashtags", foreignKey: "updated_by"});
  idea.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(idea, { as: "ideas", foreignKey: "updated_by"});
  idea.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(idea, { as: "created_by_ideas", foreignKey: "created_by"});
  idea_attachment.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(idea_attachment, { as: "idea_attachments", foreignKey: "created_by"});
  idea_attachment.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(idea_attachment, { as: "updated_by_idea_attachments", foreignKey: "updated_by"});
  idea_comment.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(idea_comment, { as: "idea_comments", foreignKey: "created_by"});
  idea_comment.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(idea_comment, { as: "updated_by_idea_comments", foreignKey: "updated_by"});
  idea_department.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(idea_department, { as: "idea_departments", foreignKey: "created_by"});
  idea_department.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(idea_department, { as: "updated_by_idea_departments", foreignKey: "updated_by"});
  idea_favorite.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(idea_favorite, { as: "idea_favorites", foreignKey: "user_id"});
  idea_like.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(idea_like, { as: "idea_likes", foreignKey: "user_id"});
  idea_read.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(idea_read, { as: "idea_reads", foreignKey: "user_id"});
  ideacomments_attachment.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(ideacomments_attachment, { as: "ideacomments_attachments", foreignKey: "updated_by"});
  ideacomments_attachment.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(ideacomments_attachment, { as: "created_by_ideacomments_attachments", foreignKey: "created_by"});
  manage_award_nomination.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(manage_award_nomination, { as: "manage_award_nominations", foreignKey: "user_id"});
  manage_award_nomination.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(manage_award_nomination, { as: "created_by_manage_award_nominations", foreignKey: "created_by"});
  manage_award_nomination.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(manage_award_nomination, { as: "updated_by_manage_award_nominations", foreignKey: "updated_by"});
  manage_award.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(manage_award, { as: "manage_awards", foreignKey: "updated_by"});
  manage_award.belongsTo(user, { as: "judge", foreignKey: "judge_id"});
  user.hasMany(manage_award, { as: "judge_manage_awards", foreignKey: "judge_id"});
  manage_award.belongsTo(user, { as: "nominator", foreignKey: "nominator_id"});
  user.hasMany(manage_award, { as: "nominator_manage_awards", foreignKey: "nominator_id"});
  manage_award.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(manage_award, { as: "created_by_manage_awards", foreignKey: "created_by"});
  message.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(message, { as: "messages", foreignKey: "created_by"});
  message.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(message, { as: "updated_by_messages", foreignKey: "updated_by"});
  notification.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(notification, { as: "notifications", foreignKey: "user_id"});
  password_reset_token.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(password_reset_token, { as: "password_reset_tokens", foreignKey: "user_id"});
  poll_choice.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(poll_choice, { as: "poll_choices", foreignKey: "updated_by"});
  poll_choice.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(poll_choice, { as: "created_by_poll_choices", foreignKey: "created_by"});
  poll_response.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(poll_response, { as: "poll_responses", foreignKey: "user_id"});
  poll_response.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(poll_response, { as: "created_by_poll_responses", foreignKey: "created_by"});
  poll_response.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(poll_response, { as: "updated_by_poll_responses", foreignKey: "updated_by"});
  poll.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(poll, { as: "polls", foreignKey: "updated_by"});
  poll.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(poll, { as: "created_by_polls", foreignKey: "created_by"});
  program.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(program, { as: "programs", foreignKey: "updated_by"});
  program.belongsTo(user, { as: "manager", foreignKey: "manager_id"});
  user.hasMany(program, { as: "manager_programs", foreignKey: "manager_id"});
  program.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(program, { as: "created_by_programs", foreignKey: "created_by"});
  program_cash_reward.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(program_cash_reward, { as: "program_cash_rewards", foreignKey: "created_by"});
  program_cash_reward.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(program_cash_reward, { as: "updated_by_program_cash_rewards", foreignKey: "updated_by"});
  program_cash_reward.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(program_cash_reward, { as: "user_program_cash_rewards", foreignKey: "user_id"});
  program_task.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(program_task, { as: "program_tasks", foreignKey: "created_by"});
  program_task.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(program_task, { as: "updated_by_program_tasks", foreignKey: "updated_by"});
  program_task.belongsTo(user, { as: "submitted_by_user", foreignKey: "submitted_by"});
  user.hasMany(program_task, { as: "submitted_by_program_tasks", foreignKey: "submitted_by"});
  program_task_attachment.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(program_task_attachment, { as: "program_task_attachments", foreignKey: "created_by"});
  program_task_attachment.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(program_task_attachment, { as: "updated_by_program_task_attachments", foreignKey: "updated_by"});
  program_task_comment.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(program_task_comment, { as: "program_task_comments", foreignKey: "updated_by"});
  program_task_comment.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(program_task_comment, { as: "created_by_program_task_comments", foreignKey: "created_by"});
  program_task_user.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(program_task_user, { as: "program_task_users", foreignKey: "user_id"});
  program_user.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(program_user, { as: "program_users", foreignKey: "user_id"});
  refreshtoken.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(refreshtoken, { as: "refreshtokens", foreignKey: "user_id"});
  reward.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(reward, { as: "rewards", foreignKey: "created_by"});
  reward.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(reward, { as: "updated_by_rewards", foreignKey: "updated_by"});
  reward.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(reward, { as: "user_rewards", foreignKey: "user_id"});
  role.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(role, { as: "roles", foreignKey: "created_by"});
  role.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(role, { as: "updated_by_roles", foreignKey: "updated_by"});
  role_screen_mapping.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(role_screen_mapping, { as: "role_screen_mappings", foreignKey: "updated_by"});
  role_screen_mapping.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(role_screen_mapping, { as: "created_by_role_screen_mappings", foreignKey: "created_by"});
  schedule_setting.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(schedule_setting, { as: "schedule_settings", foreignKey: "created_by"});
  schedule_setting.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(schedule_setting, { as: "updated_by_schedule_settings", foreignKey: "updated_by"});
  scheduler.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(scheduler, { as: "schedulers", foreignKey: "updated_by"});
  scheduler.belongsTo(user, { as: "nominator", foreignKey: "nominator_id"});
  user.hasMany(scheduler, { as: "nominator_schedulers", foreignKey: "nominator_id"});
  scheduler.belongsTo(user, { as: "judge", foreignKey: "judge_id"});
  user.hasMany(scheduler, { as: "judge_schedulers", foreignKey: "judge_id"});
  scheduler.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(scheduler, { as: "created_by_schedulers", foreignKey: "created_by"});
  social_wall_likepost.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(social_wall_likepost, { as: "social_wall_likeposts", foreignKey: "user_id"});
  socialwall.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(socialwall, { as: "socialwalls", foreignKey: "updated_by"});
  socialwall.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(socialwall, { as: "created_by_socialwalls", foreignKey: "created_by"});
  socialwallcomment.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(socialwallcomment, { as: "socialwallcomments", foreignKey: "updated_by"});
  socialwallcomment.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(socialwallcomment, { as: "created_by_socialwallcomments", foreignKey: "created_by"});
  survey.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(survey, { as: "surveys", foreignKey: "updated_by"});
  survey.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(survey, { as: "created_by_surveys", foreignKey: "created_by"});
  survey_important.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(survey_important, { as: "survey_importants", foreignKey: "user_id"});
  survey_question.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(survey_question, { as: "survey_questions", foreignKey: "updated_by"});
  survey_question.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(survey_question, { as: "created_by_survey_questions", foreignKey: "created_by"});
  survey_question_bank.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(survey_question_bank, { as: "survey_question_banks", foreignKey: "created_by"});
  survey_question_bank.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(survey_question_bank, { as: "updated_by_survey_question_banks", foreignKey: "updated_by"});
  survey_response.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(survey_response, { as: "survey_responses", foreignKey: "created_by"});
  survey_response.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(survey_response, { as: "user_survey_responses", foreignKey: "user_id"});
  survey_response.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(survey_response, { as: "updated_by_survey_responses", foreignKey: "updated_by"});
  template.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(template, { as: "templates", foreignKey: "created_by"});
  template.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(template, { as: "updated_by_templates", foreignKey: "updated_by"});
  user_badge.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(user_badge, { as: "user_badges", foreignKey: "updated_by"});
  user_badge.belongsTo(user, { as: "given_by_user", foreignKey: "given_by"});
  user.hasMany(user_badge, { as: "given_by_user_badges", foreignKey: "given_by"});
  user_badge.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(user_badge, { as: "created_by_user_badges", foreignKey: "created_by"});
  user_badge.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_badge, { as: "user_user_badges", foreignKey: "user_id"});
  user_certificate.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(user_certificate, { as: "user_certificates", foreignKey: "user_id"});
  user_certificate.belongsTo(user, { as: "given_by_user", foreignKey: "given_by"});
  user.hasMany(user_certificate, { as: "given_by_user_certificates", foreignKey: "given_by"});
  user_certificate.belongsTo(user, { as: "created_by_user", foreignKey: "created_by"});
  user.hasMany(user_certificate, { as: "created_by_user_certificates", foreignKey: "created_by"});
  user_certificate.belongsTo(user, { as: "updated_by_user", foreignKey: "updated_by"});
  user.hasMany(user_certificate, { as: "updated_by_user_certificates", foreignKey: "updated_by"});
  user.belongsTo(user, { as: "manager", foreignKey: "manager_id"});
  user.hasMany(user, { as: "users", foreignKey: "manager_id"});

  return {
    activity_log: activity_log,
    admin_panel: admin_panel,
    award: award,
    badge: badge,
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
    template: template,
    user_badge: user_badge,
    user_certificate: user_certificate,
    user: user,
  };
}

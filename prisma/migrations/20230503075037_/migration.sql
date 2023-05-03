-- This is an empty migration.
CREATE TABLE "activity_log" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "description" varchar(255) DEFAULT NULL,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "admin_panel" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "color" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "date_format" varchar(255) DEFAULT NULL,
  "financial_year" integer DEFAULT NULL,
  "header_logo" varchar(255) DEFAULT NULL,
  "language" varchar(255) DEFAULT NULL,
  "login_logo" varchar(255) DEFAULT NULL,
  "time_format" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL
);

CREATE TABLE "award" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "active" boolean DEFAULT true,
  "award_file_name" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "points" integer NOT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "library_awards" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "award_hash_tag" (
  "award_id" integer NOT NULL,
  "hash_tag_id" integer NOT NULL
);

CREATE TABLE "badge" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "active" boolean DEFAULT true,
  "badge_file_name" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "points" integer NOT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "library_badges" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "badge_hash_tag" (
  "badge_id" integer NOT NULL,
  "hash_tag_id" integer NOT NULL
);

CREATE TABLE "certificate" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "certificate_file_name" varchar(255) DEFAULT NULL,
  "certificate_image_file_name" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "parameters" text DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "configuration" (
  "name" varchar(255) PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "value" varchar(255) DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "department" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "active" boolean DEFAULT true,
  "created_at" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "ecard" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "card_file_name" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "info" text DEFAULT NULL,
  "liked" integer DEFAULT 0,
  "message" varchar(255) DEFAULT NULL,
  "seen" integer DEFAULT 0,
  "subject" varchar(255) DEFAULT NULL,
  "template_id" integer DEFAULT 0,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "from_user_id" integer DEFAULT NULL,
  "to_user_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "forum" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "active" boolean DEFAULT true,
  "created_at" timestamp DEFAULT NULL,
  "description" varchar(255) DEFAULT NULL,
  "title" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "forumcomments" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "message" text DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "forum_id" integer DEFAULT NULL,
  "parent_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "forum_attachments" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "forum_attachments_file_name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "forum_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "forum_comment_likes" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "forumcomments_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "forum_department" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "dep_id" integer DEFAULT NULL,
  "forum_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "forum_following" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "forum_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "forum_likes" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "forum_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "forum_read" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "forum_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "hashtag" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "active" boolean DEFAULT true,
  "color_code" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "hashtag_name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "hibernate_sequence" (
  "next_val" integer DEFAULT NULL
);

CREATE TABLE "idea" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "active" boolean DEFAULT true,
  "created_at" timestamp DEFAULT NULL,
  "description" varchar(255) DEFAULT NULL,
  "title" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "ideacomments_attachments" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "attach_file_name" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "ideacomments_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "idea_attachments" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "idea_attachments_file_name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "idea_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "idea_comments" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "comments" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "idea_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "idea_department" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "dep_id" integer DEFAULT NULL,
  "idea_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "idea_favorites" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "idea_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "idea_likes" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "idea_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "idea_read" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "idea_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "library_awards" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "file_name" varchar(255) DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL
);

CREATE TABLE "library_badges" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "file_name" varchar(255) DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL
);

CREATE TABLE "manage_awards" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "ends_on" date DEFAULT NULL,
  "nominated" boolean NOT NULL,
  "recognized" boolean NOT NULL,
  "sub_type" varchar(255) DEFAULT NULL,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "award_id" integer DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "department_id" integer DEFAULT NULL,
  "judge_id" integer DEFAULT NULL,
  "nominator_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "manage_award_nomination" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "message" varchar(255) DEFAULT NULL,
  "status" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "manage_awards_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "message" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "category" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "message" varchar(255) DEFAULT NULL,
  "scheduled" boolean NOT NULL,
  "settings_id" integer DEFAULT 0,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "notification" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "date" timestamp DEFAULT NULL,
  "message" varchar(255) DEFAULT NULL,
  "resource_id" integer NOT NULL,
  "seen" boolean DEFAULT true,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "password_reset_token" (
  "id" integer PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "expiry_date" timestamp DEFAULT NULL,
  "token" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "user_id" integer NOT NULL
);

CREATE TABLE "polls" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "active" boolean DEFAULT true,
  "created_at" timestamp DEFAULT NULL,
  "end_date" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "options" varchar(255) DEFAULT NULL,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "poll_choice" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "value" varchar(255) DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "poll_response_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "poll_mapping" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "mappingid" integer DEFAULT NULL,
  "type" char(1) DEFAULT NULL,
  "poll_id" integer DEFAULT NULL
);

CREATE TABLE "poll_response" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "state" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "poll_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "program" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "department_id" integer DEFAULT 0,
  "description" varchar(255) DEFAULT NULL,
  "end_date" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "progress" integer DEFAULT 0,
  "start_date" timestamp DEFAULT NULL,
  "state" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "manager_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "program_cash_reward" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "amount" integer DEFAULT 0,
  "created_at" timestamp DEFAULT NULL,
  "source_reso_id" integer DEFAULT 0,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "program_reward" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "reward" integer NOT NULL,
  "type" integer NOT NULL,
  "program_id" integer DEFAULT NULL
);

CREATE TABLE "program_task" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "deny_reason" varchar(255) DEFAULT NULL,
  "end_date" timestamp DEFAULT NULL,
  "progress" integer DEFAULT 0,
  "start_date" timestamp DEFAULT NULL,
  "state" varchar(255) DEFAULT NULL,
  "task_description" varchar(255) DEFAULT NULL,
  "task_name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "program_id" integer DEFAULT NULL,
  "submitted_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "program_task_attachment" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "file_name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "programtask_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "program_task_comment" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "comment" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "programtask_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "program_task_reward" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "reward" integer NOT NULL,
  "type" integer NOT NULL,
  "programtask_id" integer DEFAULT NULL
);

CREATE TABLE "program_task_user" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "programtask_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "program_user" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "program_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "refreshtoken" (
  "id" integer PRIMARY KEY NOT NULL,
  "expiry_date" timestamp NOT NULL,
  "token" varchar(255) NOT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "reward" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "description" varchar(255) DEFAULT NULL,
  "reward_reso_id" integer DEFAULT NULL,
  "share_wall_post" boolean NOT NULL,
  "source" integer DEFAULT NULL,
  "source_reso_id" integer DEFAULT 0,
  "sub_type" varchar(255) DEFAULT NULL,
  "type" integer DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "wall_post" boolean NOT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "reward_hash_tag" (
  "reward_id" integer NOT NULL,
  "hash_tag_id" integer NOT NULL,
  PRIMARY KEY ("reward_id", "hash_tag_id")
);

CREATE TABLE "role" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "admin_role" boolean DEFAULT true,
  "color_code" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "is_default" boolean DEFAULT true,
  "role_name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "role_screen_mapping" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "screen_access" text DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "role_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "scheduler" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "date1" date DEFAULT NULL,
  "date2" date DEFAULT NULL,
  "day" integer NOT NULL,
  "details" text DEFAULT NULL,
  "entity_type" varchar(255) DEFAULT NULL,
  "last_run" timestamp DEFAULT NULL,
  "month" integer NOT NULL,
  "next_run" timestamp DEFAULT NULL,
  "time" time DEFAULT NULL,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "award_id" integer DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "judge_id" integer DEFAULT NULL,
  "nominator_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "schedule_job" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "job_id" integer NOT NULL,
  "job_type" varchar(255) DEFAULT NULL,
  "message" varchar(255) DEFAULT NULL,
  "status" varchar(255) DEFAULT NULL,
  "time" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL
);

CREATE TABLE "schedule_setting" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "category" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "years_interval" integer NOT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "schedule_setting_schedule_messages" (
  "schedule_setting_id" integer NOT NULL,
  "schedule_messages_id" integer NOT NULL,
  PRIMARY KEY ("schedule_setting_id", "schedule_messages_id")
);

CREATE TABLE "schedule_setting_schedule_templates" (
  "schedule_setting_id" integer NOT NULL,
  "schedule_templates_id" integer NOT NULL,
  PRIMARY KEY ("schedule_setting_id", "schedule_templates_id")
);

CREATE TABLE "socialwall" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "type" integer NOT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "reward_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "socialwallcomments" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "message" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "parent_id" integer DEFAULT NULL,
  "social_wall" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "social_wall_likepost" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "socialwall_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "survey" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "accept_response" boolean NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "survey_important" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "survey_id" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "survey_mapping" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "mappingid" integer DEFAULT NULL,
  "type" char(1) DEFAULT NULL,
  "survey_id" integer DEFAULT NULL
);

CREATE TABLE "survey_question" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "extras" varchar(255) DEFAULT NULL,
  "label" varchar(255) DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "parameters" text DEFAULT NULL,
  "question" varchar(255) DEFAULT NULL,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "survey_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "survey_question_bank" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "parameters" text DEFAULT NULL,
  "question" varchar(255) DEFAULT NULL,
  "question_hash" integer DEFAULT NULL,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "survey_response" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "state" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "survey_id" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "survey_response_item" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "multiple" boolean NOT NULL,
  "name" varchar(255) DEFAULT NULL,
  "parameters" text DEFAULT NULL,
  "question" varchar(255) DEFAULT NULL,
  "type" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "value" varchar(255) DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "question_id" integer DEFAULT NULL,
  "survey_response" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "template" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "category" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "name" varchar(255) DEFAULT NULL,
  "scheduled" boolean NOT NULL,
  "settings_id" integer DEFAULT 0,
  "template_file_name" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL
);

CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "active" boolean NOT NULL,
  "country_code" varchar(255) DEFAULT NULL,
  "created_at" timestamp DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "date_of_birth" timestamp DEFAULT NULL,
  "date_of_joining" timestamp DEFAULT NULL,
  "designation" varchar(50) DEFAULT NULL,
  "email" varchar(50) DEFAULT NULL,
  "enabled_reason" varchar(255) DEFAULT NULL,
  "firstname" varchar(20) DEFAULT NULL,
  "is_default" boolean NOT NULL,
  "lastname" varchar(20) DEFAULT NULL,
  "password" varchar(120) DEFAULT NULL,
  "pic_name" varchar(255) DEFAULT NULL,
  "project_tour" text DEFAULT NULL,
  "sig_name" varchar(255) DEFAULT NULL,
  "telephone_number" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "username" varchar(20) DEFAULT NULL,
  "department_id" integer DEFAULT NULL,
  "manager_id" integer DEFAULT NULL,
  "role_id" integer DEFAULT NULL
);

CREATE TABLE "user_badges" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "message" varchar(255) DEFAULT NULL,
  "share_wall_post" boolean NOT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "wall_post" boolean NOT NULL,
  "badge_id" integer DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "given_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE TABLE "user_badges_hash_tag" (
  "user_badges_id" integer NOT NULL,
  "hash_tag_id" integer NOT NULL,
  PRIMARY KEY ("user_badges_id", "hash_tag_id")
);

CREATE TABLE "user_certificate" (
  "id" SERIAL PRIMARY KEY NOT NULL,
  "created_at" timestamp DEFAULT NULL,
  "message" varchar(255) DEFAULT NULL,
  "updated_at" timestamp DEFAULT NULL,
  "user_certificate_file_name" varchar(255) DEFAULT NULL,
  "certificate_id" integer DEFAULT NULL,
  "created_by" integer DEFAULT NULL,
  "given_by" integer DEFAULT NULL,
  "updated_by" integer DEFAULT NULL,
  "user_id" integer DEFAULT NULL
);

CREATE INDEX "FK634sb3dvk7nyxjcjcem7m282a" ON "activity_log" ("user_id");

CREATE INDEX "FKbo2mudhswusw28yb9ht3p7ffi" ON "award" ("created_by");

CREATE INDEX "FK5llby1cccy45whybut2svfbp4" ON "award" ("library_awards");

CREATE INDEX "FKkxhucy3rb0y14ovosaj7qhfqw" ON "award" ("updated_by");

CREATE INDEX "FKfrrbrwtc8uwpjgcsfxhxk06gy" ON "award_hash_tag" ("hash_tag_id");

CREATE INDEX "FK9uktcpcu0pa0907p6gp930s9n" ON "award_hash_tag" ("award_id");

CREATE INDEX "FKtn5294k0d3b401kke442t7m9l" ON "badge" ("created_by");

CREATE INDEX "FKo70qas0wklgwmei2cfw6nstqa" ON "badge" ("library_badges");

CREATE INDEX "FK4yb6oxos9oss551wbyhrs07rm" ON "badge" ("updated_by");

CREATE INDEX "FK3pag51iew3uksb64wobg0w4q9" ON "badge_hash_tag" ("hash_tag_id");

CREATE INDEX "FKad6nmbvk71yunawt71dao8cdp" ON "badge_hash_tag" ("badge_id");

CREATE INDEX "FKf5u12j9mtirs0jsdd4qswa7ma" ON "certificate" ("created_by");

CREATE INDEX "FK7crhxy64ug0yefhx6c84658in" ON "certificate" ("updated_by");

CREATE INDEX "FKk6l4a1cqnkam028v34rvopqon" ON "configuration" ("created_by");

CREATE INDEX "FKapl4thrv5ur3n3426ncyi9pkl" ON "configuration" ("updated_by");

CREATE UNIQUE INDEX "UK1t68827l97cwyxo9r1u6t4p7d" ON "department" ("name");

CREATE INDEX "FK31u2id76kj4mjgagsm70lcv7i" ON "department" ("created_by");

CREATE INDEX "FKg6n6ouam844nhpilf5mgis9df" ON "department" ("updated_by");

CREATE INDEX "FKp507fh57u4qeouactppuiix2y" ON "ecard" ("created_by");

CREATE INDEX "FK718hyu5797blnnciivokm8b6q" ON "ecard" ("from_user_id");

CREATE INDEX "FKs6xxqbfbi6kkwv9xtk6lrgjle" ON "ecard" ("to_user_id");

CREATE INDEX "FKs2alx43sue3i3xj5bke9wkof7" ON "ecard" ("updated_by");

CREATE INDEX "FK1k1kgdw3cywdbtvummv93m45q" ON "forum" ("created_by");

CREATE INDEX "FKtf93udbyrl0fncdxb1ynwpm3i" ON "forum" ("updated_by");

CREATE INDEX "FKdoo2r497th2dgknqm03w2xb16" ON "forumcomments" ("created_by");

CREATE INDEX "FKfwwhg0mviid8h830b7yfmmkjr" ON "forumcomments" ("forum_id");

CREATE INDEX "FK6kr1ph3jwnuqeooqxir42llk4" ON "forumcomments" ("parent_id");

CREATE INDEX "FK23y6276rughube1nbd5mqicsc" ON "forumcomments" ("updated_by");

CREATE INDEX "FKc5v4du6e7a3hbflugjue9r8gm" ON "forum_attachments" ("created_by");

CREATE INDEX "FKhno72xu0ki5n8ly2jv3bd03gt" ON "forum_attachments" ("forum_id");

CREATE INDEX "FKg5p16dfwluamtn53nxe8hmmbu" ON "forum_attachments" ("updated_by");

CREATE INDEX "FKns59a0gf2nvfo49xji4l2db78" ON "forum_comment_likes" ("forumcomments_id");

CREATE INDEX "FKglushaaebhgli7fwfmarj6tx1" ON "forum_comment_likes" ("user_id");

CREATE INDEX "FK8afaftgqvqfaf6bhxjocve4ar" ON "forum_department" ("created_by");

CREATE INDEX "FKbx9bai0w4f2lqiubsm42ac1bn" ON "forum_department" ("dep_id");

CREATE INDEX "FK23odyt41kct39c4hq58t75bl3" ON "forum_department" ("forum_id");

CREATE INDEX "FKsxuy4bjfpoqrieeucajps5exa" ON "forum_department" ("updated_by");

CREATE INDEX "FKe28tjhshdr9u6as8dy7riaat8" ON "forum_following" ("forum_id");

CREATE INDEX "FKr33jtdvp2svvxgy4hb1utq94x" ON "forum_following" ("user_id");

CREATE INDEX "FKr0eyiby3h46pa0x3jh6d7192p" ON "forum_likes" ("forum_id");

CREATE INDEX "FKsyma0oi8ep23bhtn2g5840uis" ON "forum_likes" ("user_id");

CREATE INDEX "FK6hdeacb12ccwbkk257en3vxmh" ON "forum_read" ("forum_id");

CREATE INDEX "FKjl31a4m48ds3fceqp93ph7s31" ON "forum_read" ("user_id");

CREATE INDEX "FKee4oamqfpw9x8a9ulhv25befp" ON "hashtag" ("created_by");

CREATE INDEX "FKej22acdlpmoxoq01gq937iywm" ON "hashtag" ("updated_by");

CREATE INDEX "FKi8xhiwxaxrxuu9wbt9oy2akqb" ON "idea" ("created_by");

CREATE INDEX "FK6ne0ocaypahcd822w33x7vr5m" ON "idea" ("updated_by");

CREATE INDEX "FKlx2rb2pad6t51m1x8ki7bojj2" ON "ideacomments_attachments" ("created_by");

CREATE INDEX "FKgwmlib8obbns0h45r51htm175" ON "ideacomments_attachments" ("ideacomments_id");

CREATE INDEX "FKkhgdbgosyma5s3rxfgcrvt1e5" ON "ideacomments_attachments" ("updated_by");

CREATE INDEX "FKi8pecftpxiv2ntyxjees1w31e" ON "idea_attachments" ("created_by");

CREATE INDEX "FKt1tnssrjn9xoijy572nokccrv" ON "idea_attachments" ("idea_id");

CREATE INDEX "FKs3vdu5jj39cn8fn340vvi39ea" ON "idea_attachments" ("updated_by");

CREATE INDEX "FKfbdl6r6i3mmyawt8j6a7a5d0a" ON "idea_comments" ("created_by");

CREATE INDEX "FKge7yc7ifqfkof15u0py367sp0" ON "idea_comments" ("idea_id");

CREATE INDEX "FKrmvb9yqtu82f8t3qsl9rlylfv" ON "idea_comments" ("updated_by");

CREATE INDEX "FKa2ka3pgclmqhjnbm5y40ysn2k" ON "idea_department" ("created_by");

CREATE INDEX "FK6ybugub0kmm95uoiml7b3rk8w" ON "idea_department" ("dep_id");

CREATE INDEX "FKal70idmgxxrfviw9ofnxx1h1r" ON "idea_department" ("idea_id");

CREATE INDEX "FKn03vcd9yjfqihv9nu2mvn8s7x" ON "idea_department" ("updated_by");

CREATE INDEX "FK8toc6qvfdx1y3acj9uxh6gnyy" ON "idea_favorites" ("idea_id");

CREATE INDEX "FK3rsfrh9a4yb67r9sxturrurcs" ON "idea_favorites" ("user_id");

CREATE INDEX "FK3nooi3gnrtblxgajdytj3ikcw" ON "idea_likes" ("idea_id");

CREATE INDEX "FKd9d75u9t2es5iovypaajvp4dd" ON "idea_likes" ("user_id");

CREATE INDEX "FKdl38fq5k8wqhr6at1h6i1uxwa" ON "idea_read" ("idea_id");

CREATE INDEX "FKq7qrpy9rbxgatx72m4x28b6cn" ON "idea_read" ("user_id");

CREATE INDEX "FK2o4pw08tvq2owgc4a5pl7o6v0" ON "manage_awards" ("award_id");

CREATE INDEX "FKmqqan85fepm5wipoi9oa6mhus" ON "manage_awards" ("created_by");

CREATE INDEX "FK9vb3iqmttr3b58r5p26injhpf" ON "manage_awards" ("department_id");

CREATE INDEX "FK7v3dcyterv6rm5d56dn7g1fhx" ON "manage_awards" ("judge_id");

CREATE INDEX "FKb2i7ohuvprgdc4jvhcswut8uq" ON "manage_awards" ("nominator_id");

CREATE INDEX "FK36scj3rqqfe5wgyiepp4tuup4" ON "manage_awards" ("updated_by");

CREATE INDEX "FK324klkj3uyr0sp61t5kpsg39e" ON "manage_award_nomination" ("created_by");

CREATE INDEX "FKt4alnh3to45wocg7w4ymngybu" ON "manage_award_nomination" ("manage_awards_id");

CREATE INDEX "FKd8tjaimu0tdbp415p99ac57e" ON "manage_award_nomination" ("updated_by");

CREATE INDEX "FK2c4gn8po9ncoprlecc51l62st" ON "manage_award_nomination" ("user_id");

CREATE INDEX "FKbftknoj99why07plhbgqqmk6g" ON "message" ("created_by");

CREATE INDEX "FKc1hkpmhysxpms2cdct76h8kmk" ON "message" ("updated_by");

CREATE INDEX "FKnk4ftb5am9ubmkv1661h15ds9" ON "notification" ("user_id");

CREATE INDEX "FK83nsrttkwkb6ym0anu051mtxn" ON "password_reset_token" ("user_id");

CREATE INDEX "FKs2iay0nvudl3tl0a33ji0pxyn" ON "polls" ("created_by");

CREATE INDEX "FK2hnu88tdwx35jhutli532ellg" ON "polls" ("updated_by");

CREATE INDEX "FKn6jdbx874pprf4937vlffry5p" ON "poll_choice" ("created_by");

CREATE INDEX "FK5snw0athooq1abl82ynlo0opk" ON "poll_choice" ("poll_response_id");

CREATE INDEX "FKe4bah0tcpo1drb2htj5xbd4ot" ON "poll_choice" ("updated_by");

CREATE INDEX "FKn4ipghlegi5ckvcwv5sbq1df0" ON "poll_mapping" ("poll_id");

CREATE INDEX "FKdgitr07rile9ma1gi6pug2kqh" ON "poll_response" ("created_by");

CREATE INDEX "FK71v708ysi932j1vqlkye7oet5" ON "poll_response" ("poll_id");

CREATE INDEX "FKf204k70uknyjk8ag0t1jr95b1" ON "poll_response" ("updated_by");

CREATE INDEX "FK7rl86cenysajjngjxkqb2jbic" ON "poll_response" ("user_id");

CREATE INDEX "FKn8vu9lf9okaov14gg274lv6h6" ON "program" ("created_by");

CREATE INDEX "FKi1732kjrifbwt2h3lsgbwwr1u" ON "program" ("manager_id");

CREATE INDEX "FKhuivd8ihrqc6ic7sfsx0kycyi" ON "program" ("updated_by");

CREATE INDEX "FKgc857ax7pp06tsdwrx53wid2j" ON "program_cash_reward" ("created_by");

CREATE INDEX "FKjfa5qfa44ud7b6tsnocnb7mbg" ON "program_cash_reward" ("updated_by");

CREATE INDEX "FKpwtfq0vk08b3cth2r1y3c4u5y" ON "program_cash_reward" ("user_id");

CREATE INDEX "FKlov1r65wv65vq3jdtewln0pbu" ON "program_reward" ("program_id");

CREATE INDEX "FK2078xks8iam4stjlhpfp9dwjq" ON "program_task" ("created_by");

CREATE INDEX "FKclk0pstokbo16ghrfymltgs24" ON "program_task" ("program_id");

CREATE INDEX "FKsxx0bunrs25v5shnjqnimjgod" ON "program_task" ("submitted_by");

CREATE INDEX "FKk7gtn2vglrmd8raqu714y2de5" ON "program_task" ("updated_by");

CREATE INDEX "FK37qqtc3xdfmrxvyp8s6y3aobg" ON "program_task_attachment" ("created_by");

CREATE INDEX "FKopsqth5iy9d8hcoue25bigo2x" ON "program_task_attachment" ("programtask_id");

CREATE INDEX "FKmo7bwwh1oushtlcl3yrdrcr1v" ON "program_task_attachment" ("updated_by");

CREATE INDEX "FKqym5v5r39lv46gp76y70b2y66" ON "program_task_comment" ("created_by");

CREATE INDEX "FK3u0tf0tm4v4bn1givsuotjnbt" ON "program_task_comment" ("programtask_id");

CREATE INDEX "FKq7urepa2c8yho9qvsf2kr7vw9" ON "program_task_comment" ("updated_by");

CREATE INDEX "FK3htue8yita7ufc2c92dh0qef8" ON "program_task_reward" ("programtask_id");

CREATE INDEX "FKnufbsp7fgpy4ms25lci4f32i2" ON "program_task_user" ("programtask_id");

CREATE INDEX "FKlh4ld1cbqdco3keu8hh0sfy4x" ON "program_task_user" ("user_id");

CREATE INDEX "FK3r5a5qbwejioy0h2cpo6vlk5f" ON "program_user" ("program_id");

CREATE INDEX "FK77py95vpm4na8gb82n70vbs5p" ON "program_user" ("user_id");

CREATE UNIQUE INDEX "UK_or156wbneyk8noo4jstv55ii3" ON "refreshtoken" ("token");

CREATE INDEX "FKa652xrdji49m4isx38pp4p80p" ON "refreshtoken" ("user_id");

CREATE INDEX "FK25t68w7625gtp6sqmfb98k860" ON "reward" ("created_by");

CREATE INDEX "FKb66njibfqyeq1lj33vycr0y56" ON "reward" ("updated_by");

CREATE INDEX "FKkvvfd3ojluedwt88erpwwb9en" ON "reward" ("user_id");

CREATE INDEX "FKl4gth9idcf8kw15306lrokh4k" ON "reward_hash_tag" ("hash_tag_id");

CREATE UNIQUE INDEX "UKbgeqjb5opmijvwc14fbtaj4xx" ON "role" ("role_name");

CREATE INDEX "FKqktgp5xuf8n0mwea8i6ddu4vw" ON "role" ("created_by");

CREATE INDEX "FKrj6deb5a83r2ms9aes1mxu0ge" ON "role" ("updated_by");

CREATE UNIQUE INDEX "UK_qtp8i4eegbs0n2f548knr4b8u" ON "role_screen_mapping" ("role_id");

CREATE INDEX "FKd1xsogrq4k539kprrt6vah6u1" ON "role_screen_mapping" ("created_by");

CREATE INDEX "FK1fnmvbsltmqmpxdg1vvqny4gf" ON "role_screen_mapping" ("updated_by");

CREATE INDEX "FKtpd8onwjypecwxpmvlo5au1ji" ON "scheduler" ("award_id");

CREATE INDEX "FKryisv43l524n6wp2fr64me3ea" ON "scheduler" ("created_by");

CREATE INDEX "FKp9dnst8ls28xwuwcalc3u3e2b" ON "scheduler" ("judge_id");

CREATE INDEX "FKlk92qhsf95uw1vdopqjjj4krs" ON "scheduler" ("nominator_id");

CREATE INDEX "FKa7gilww5sfaiiyd5q7phof7g5" ON "scheduler" ("updated_by");

CREATE INDEX "FK9yhwjv916eesbm3nap9hdfjbu" ON "schedule_setting" ("created_by");

CREATE INDEX "FKd2qkiajrw08yfh9w4nofj3jo0" ON "schedule_setting" ("updated_by");

CREATE UNIQUE INDEX "UK_rxgloiflf6pei4h89s26n214c" ON "schedule_setting_schedule_messages" ("schedule_messages_id");

CREATE UNIQUE INDEX "UK_48ob3y4h6pmbi1lelyom6fya" ON "schedule_setting_schedule_templates" ("schedule_templates_id");

CREATE INDEX "FK9jojoo21jml8v8aivxvwp8d6" ON "socialwall" ("created_by");

CREATE INDEX "FKfdm86gvgd5rfq34nqe55q889r" ON "socialwall" ("reward_id");

CREATE INDEX "FK1eobbo9v8cl38mks4jp7ikell" ON "socialwall" ("updated_by");

CREATE INDEX "FKi09i9qpcdxuefodics7xyfep" ON "socialwallcomments" ("created_by");

CREATE INDEX "FKtetvi06c9ksofkw5w7n9i5l91" ON "socialwallcomments" ("parent_id");

CREATE INDEX "FKn66s2yud9apop6ndxagc9tha0" ON "socialwallcomments" ("social_wall");

CREATE INDEX "FK3ofsja2h906snjlmt7ccykcp1" ON "socialwallcomments" ("updated_by");

CREATE INDEX "FKcbyqui420wgxap5kcfm3obsrx" ON "social_wall_likepost" ("socialwall_id");

CREATE INDEX "FKp8xoncet4l6t8465gmtn3fk9l" ON "social_wall_likepost" ("user_id");

CREATE INDEX "FKmr1kae2l3yvfr5fnaa9fu63ij" ON "survey" ("created_by");

CREATE INDEX "FKd5rux4n7k4jgjlt3nn0olcu6k" ON "survey" ("updated_by");

CREATE INDEX "FK9ju1hxm3gxkcdfcxrue2g8867" ON "survey_important" ("survey_id");

CREATE INDEX "FK1vqgvvw48xkpopv5ll75oq6hi" ON "survey_important" ("user_id");

CREATE INDEX "FKlyft4fw7s79gtaj2kalrbtewn" ON "survey_mapping" ("survey_id");

CREATE INDEX "FKndaf9lgogmgl1oc2qxkl9d2rw" ON "survey_question" ("created_by");

CREATE INDEX "FK573vicrl6b0e4d2jdg3wpvuhy" ON "survey_question" ("survey_id");

CREATE INDEX "FK4on0qx9r7ovwpnkvxqa15rtob" ON "survey_question" ("updated_by");

CREATE UNIQUE INDEX "UK_1i7jjdd1ya3kh65umgw0dhdiu" ON "survey_question_bank" ("question_hash");

CREATE INDEX "FKa2t7aa62tm9dh95uao9n10cq3" ON "survey_question_bank" ("created_by");

CREATE INDEX "FKmhg3qhy8bwxh1ijrsfnn4kcvs" ON "survey_question_bank" ("updated_by");

CREATE INDEX "FK3fdv8xj6rp9yjr17snmhrsph5" ON "survey_response" ("created_by");

CREATE INDEX "FK84qtox6878n0fh337ent4mwgo" ON "survey_response" ("survey_id");

CREATE INDEX "FKhxqwhoq7rb4jqbi0oxkf1o6b0" ON "survey_response" ("updated_by");

CREATE INDEX "FKf1irm9doka77hxalur6ox86wt" ON "survey_response" ("user_id");

CREATE INDEX "FKda9yxwqxre7g9u08fo4y910ud" ON "survey_response_item" ("created_by");

CREATE INDEX "FKc4q3d48mao4e3fclhon8g1x39" ON "survey_response_item" ("question_id");

CREATE INDEX "FKr7rf7wi5eble1jrr63jqntk0p" ON "survey_response_item" ("survey_response");

CREATE INDEX "FKi8lftwy016hw3risyaxkt7g1p" ON "survey_response_item" ("updated_by");

CREATE INDEX "FKb9l5iu7uf0pk5y0arvy771q1m" ON "template" ("created_by");

CREATE INDEX "FKi8ikdyh2g3oe5f1on8oh4y7s5" ON "template" ("updated_by");

CREATE UNIQUE INDEX "UKr43af9ap4edm43mmtq01oddj6" ON "users" ("username");

CREATE UNIQUE INDEX "UK6dotkott2kjsp8vw4d0m25fb7" ON "users" ("email");

CREATE INDEX "FKfi832e3qv89fq376fuh8920y4" ON "users" ("department_id");

CREATE INDEX "FK5p1ci5btqfwvtaqx5n2wxi182" ON "users" ("manager_id");

CREATE INDEX "FK4qu1gr772nnf6ve5af002rwya" ON "users" ("role_id");

CREATE INDEX "FKm6s10gyhh96irpj92csb6yoia" ON "user_badges" ("badge_id");

CREATE INDEX "FKaib8s38oirddbspec1m93ps4j" ON "user_badges" ("created_by");

CREATE INDEX "FK9o8agkpfrw50l2srf6af0r9ft" ON "user_badges" ("given_by");

CREATE INDEX "FK28133xsiuou4s9xjxrbih88ml" ON "user_badges" ("updated_by");

CREATE INDEX "FKr46ah81sjymsn035m4ojstn5s" ON "user_badges" ("user_id");

CREATE INDEX "FK229qf62bnv1quqlebo4ol4nri" ON "user_badges_hash_tag" ("hash_tag_id");

CREATE INDEX "FKslh00axaasc0kid27uypjiiov" ON "user_certificate" ("certificate_id");

CREATE INDEX "FKp30plgq2yr5tclgxr3fjoa566" ON "user_certificate" ("created_by");

CREATE INDEX "FKlmw4h71w4kn4i4yvg7mnr173x" ON "user_certificate" ("given_by");

CREATE INDEX "FKyd196recsw7ecdcssps8xrik" ON "user_certificate" ("updated_by");

CREATE INDEX "FK1c2o2kfhyflgx82xpphlg286p" ON "user_certificate" ("user_id");

ALTER TABLE "activity_log" ADD CONSTRAINT "FK634sb3dvk7nyxjcjcem7m282a" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "award" ADD CONSTRAINT "FK5llby1cccy45whybut2svfbp4" FOREIGN KEY ("library_awards") REFERENCES "library_awards" ("id");

ALTER TABLE "award" ADD CONSTRAINT "FKbo2mudhswusw28yb9ht3p7ffi" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "award" ADD CONSTRAINT "FKkxhucy3rb0y14ovosaj7qhfqw" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "award_hash_tag" ADD CONSTRAINT "FK9uktcpcu0pa0907p6gp930s9n" FOREIGN KEY ("award_id") REFERENCES "award" ("id");

ALTER TABLE "award_hash_tag" ADD CONSTRAINT "FKfrrbrwtc8uwpjgcsfxhxk06gy" FOREIGN KEY ("hash_tag_id") REFERENCES "hashtag" ("id");

ALTER TABLE "badge" ADD CONSTRAINT "FK4yb6oxos9oss551wbyhrs07rm" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "badge" ADD CONSTRAINT "FKo70qas0wklgwmei2cfw6nstqa" FOREIGN KEY ("library_badges") REFERENCES "library_badges" ("id");

ALTER TABLE "badge" ADD CONSTRAINT "FKtn5294k0d3b401kke442t7m9l" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "badge_hash_tag" ADD CONSTRAINT "FK3pag51iew3uksb64wobg0w4q9" FOREIGN KEY ("hash_tag_id") REFERENCES "hashtag" ("id");

ALTER TABLE "badge_hash_tag" ADD CONSTRAINT "FKad6nmbvk71yunawt71dao8cdp" FOREIGN KEY ("badge_id") REFERENCES "badge" ("id");

ALTER TABLE "certificate" ADD CONSTRAINT "FK7crhxy64ug0yefhx6c84658in" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "certificate" ADD CONSTRAINT "FKf5u12j9mtirs0jsdd4qswa7ma" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "configuration" ADD CONSTRAINT "FKapl4thrv5ur3n3426ncyi9pkl" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "configuration" ADD CONSTRAINT "FKk6l4a1cqnkam028v34rvopqon" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "department" ADD CONSTRAINT "FK31u2id76kj4mjgagsm70lcv7i" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "department" ADD CONSTRAINT "FKg6n6ouam844nhpilf5mgis9df" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "ecard" ADD CONSTRAINT "FK718hyu5797blnnciivokm8b6q" FOREIGN KEY ("from_user_id") REFERENCES "users" ("id");

ALTER TABLE "ecard" ADD CONSTRAINT "FKp507fh57u4qeouactppuiix2y" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "ecard" ADD CONSTRAINT "FKs2alx43sue3i3xj5bke9wkof7" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "ecard" ADD CONSTRAINT "FKs6xxqbfbi6kkwv9xtk6lrgjle" FOREIGN KEY ("to_user_id") REFERENCES "users" ("id");

ALTER TABLE "forum" ADD CONSTRAINT "FK1k1kgdw3cywdbtvummv93m45q" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "forum" ADD CONSTRAINT "FKtf93udbyrl0fncdxb1ynwpm3i" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "forumcomments" ADD CONSTRAINT "FK23y6276rughube1nbd5mqicsc" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "forumcomments" ADD CONSTRAINT "FK6kr1ph3jwnuqeooqxir42llk4" FOREIGN KEY ("parent_id") REFERENCES "forumcomments" ("id");

ALTER TABLE "forumcomments" ADD CONSTRAINT "FKdoo2r497th2dgknqm03w2xb16" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "forumcomments" ADD CONSTRAINT "FKfwwhg0mviid8h830b7yfmmkjr" FOREIGN KEY ("forum_id") REFERENCES "forum" ("id");

ALTER TABLE "forum_attachments" ADD CONSTRAINT "FKc5v4du6e7a3hbflugjue9r8gm" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "forum_attachments" ADD CONSTRAINT "FKg5p16dfwluamtn53nxe8hmmbu" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "forum_attachments" ADD CONSTRAINT "FKhno72xu0ki5n8ly2jv3bd03gt" FOREIGN KEY ("forum_id") REFERENCES "forum" ("id");

ALTER TABLE "forum_comment_likes" ADD CONSTRAINT "FKglushaaebhgli7fwfmarj6tx1" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "forum_comment_likes" ADD CONSTRAINT "FKns59a0gf2nvfo49xji4l2db78" FOREIGN KEY ("forumcomments_id") REFERENCES "forumcomments" ("id");

ALTER TABLE "forum_department" ADD CONSTRAINT "FK23odyt41kct39c4hq58t75bl3" FOREIGN KEY ("forum_id") REFERENCES "forum" ("id");

ALTER TABLE "forum_department" ADD CONSTRAINT "FK8afaftgqvqfaf6bhxjocve4ar" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "forum_department" ADD CONSTRAINT "FKbx9bai0w4f2lqiubsm42ac1bn" FOREIGN KEY ("dep_id") REFERENCES "department" ("id");

ALTER TABLE "forum_department" ADD CONSTRAINT "FKsxuy4bjfpoqrieeucajps5exa" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "forum_following" ADD CONSTRAINT "FKe28tjhshdr9u6as8dy7riaat8" FOREIGN KEY ("forum_id") REFERENCES "forum" ("id");

ALTER TABLE "forum_following" ADD CONSTRAINT "FKr33jtdvp2svvxgy4hb1utq94x" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "forum_likes" ADD CONSTRAINT "FKr0eyiby3h46pa0x3jh6d7192p" FOREIGN KEY ("forum_id") REFERENCES "forum" ("id");

ALTER TABLE "forum_likes" ADD CONSTRAINT "FKsyma0oi8ep23bhtn2g5840uis" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "forum_read" ADD CONSTRAINT "FK6hdeacb12ccwbkk257en3vxmh" FOREIGN KEY ("forum_id") REFERENCES "forum" ("id");

ALTER TABLE "forum_read" ADD CONSTRAINT "FKjl31a4m48ds3fceqp93ph7s31" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "hashtag" ADD CONSTRAINT "FKee4oamqfpw9x8a9ulhv25befp" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "hashtag" ADD CONSTRAINT "FKej22acdlpmoxoq01gq937iywm" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "idea" ADD CONSTRAINT "FK6ne0ocaypahcd822w33x7vr5m" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "idea" ADD CONSTRAINT "FKi8xhiwxaxrxuu9wbt9oy2akqb" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "ideacomments_attachments" ADD CONSTRAINT "FKgwmlib8obbns0h45r51htm175" FOREIGN KEY ("ideacomments_id") REFERENCES "idea_comments" ("id");

ALTER TABLE "ideacomments_attachments" ADD CONSTRAINT "FKkhgdbgosyma5s3rxfgcrvt1e5" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "ideacomments_attachments" ADD CONSTRAINT "FKlx2rb2pad6t51m1x8ki7bojj2" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "idea_attachments" ADD CONSTRAINT "FKi8pecftpxiv2ntyxjees1w31e" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "idea_attachments" ADD CONSTRAINT "FKs3vdu5jj39cn8fn340vvi39ea" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "idea_attachments" ADD CONSTRAINT "FKt1tnssrjn9xoijy572nokccrv" FOREIGN KEY ("idea_id") REFERENCES "idea" ("id");

ALTER TABLE "idea_comments" ADD CONSTRAINT "FKfbdl6r6i3mmyawt8j6a7a5d0a" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "idea_comments" ADD CONSTRAINT "FKge7yc7ifqfkof15u0py367sp0" FOREIGN KEY ("idea_id") REFERENCES "idea" ("id");

ALTER TABLE "idea_comments" ADD CONSTRAINT "FKrmvb9yqtu82f8t3qsl9rlylfv" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "idea_department" ADD CONSTRAINT "FK6ybugub0kmm95uoiml7b3rk8w" FOREIGN KEY ("dep_id") REFERENCES "department" ("id");

ALTER TABLE "idea_department" ADD CONSTRAINT "FKa2ka3pgclmqhjnbm5y40ysn2k" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "idea_department" ADD CONSTRAINT "FKal70idmgxxrfviw9ofnxx1h1r" FOREIGN KEY ("idea_id") REFERENCES "idea" ("id");

ALTER TABLE "idea_department" ADD CONSTRAINT "FKn03vcd9yjfqihv9nu2mvn8s7x" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "idea_favorites" ADD CONSTRAINT "FK3rsfrh9a4yb67r9sxturrurcs" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "idea_favorites" ADD CONSTRAINT "FK8toc6qvfdx1y3acj9uxh6gnyy" FOREIGN KEY ("idea_id") REFERENCES "idea" ("id");

ALTER TABLE "idea_likes" ADD CONSTRAINT "FK3nooi3gnrtblxgajdytj3ikcw" FOREIGN KEY ("idea_id") REFERENCES "idea" ("id");

ALTER TABLE "idea_likes" ADD CONSTRAINT "FKd9d75u9t2es5iovypaajvp4dd" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "idea_read" ADD CONSTRAINT "FKdl38fq5k8wqhr6at1h6i1uxwa" FOREIGN KEY ("idea_id") REFERENCES "idea" ("id");

ALTER TABLE "idea_read" ADD CONSTRAINT "FKq7qrpy9rbxgatx72m4x28b6cn" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "manage_awards" ADD CONSTRAINT "FK2o4pw08tvq2owgc4a5pl7o6v0" FOREIGN KEY ("award_id") REFERENCES "award" ("id");

ALTER TABLE "manage_awards" ADD CONSTRAINT "FK36scj3rqqfe5wgyiepp4tuup4" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "manage_awards" ADD CONSTRAINT "FK7v3dcyterv6rm5d56dn7g1fhx" FOREIGN KEY ("judge_id") REFERENCES "users" ("id");

ALTER TABLE "manage_awards" ADD CONSTRAINT "FK9vb3iqmttr3b58r5p26injhpf" FOREIGN KEY ("department_id") REFERENCES "department" ("id");

ALTER TABLE "manage_awards" ADD CONSTRAINT "FKb2i7ohuvprgdc4jvhcswut8uq" FOREIGN KEY ("nominator_id") REFERENCES "users" ("id");

ALTER TABLE "manage_awards" ADD CONSTRAINT "FKmqqan85fepm5wipoi9oa6mhus" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "manage_award_nomination" ADD CONSTRAINT "FK2c4gn8po9ncoprlecc51l62st" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "manage_award_nomination" ADD CONSTRAINT "FK324klkj3uyr0sp61t5kpsg39e" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "manage_award_nomination" ADD CONSTRAINT "FKd8tjaimu0tdbp415p99ac57e" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "manage_award_nomination" ADD CONSTRAINT "FKt4alnh3to45wocg7w4ymngybu" FOREIGN KEY ("manage_awards_id") REFERENCES "manage_awards" ("id");

ALTER TABLE "message" ADD CONSTRAINT "FKbftknoj99why07plhbgqqmk6g" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "message" ADD CONSTRAINT "FKc1hkpmhysxpms2cdct76h8kmk" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "notification" ADD CONSTRAINT "FKnk4ftb5am9ubmkv1661h15ds9" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "password_reset_token" ADD CONSTRAINT "FK83nsrttkwkb6ym0anu051mtxn" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "polls" ADD CONSTRAINT "FK2hnu88tdwx35jhutli532ellg" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "polls" ADD CONSTRAINT "FKs2iay0nvudl3tl0a33ji0pxyn" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "poll_choice" ADD CONSTRAINT "FK5snw0athooq1abl82ynlo0opk" FOREIGN KEY ("poll_response_id") REFERENCES "poll_response" ("id");

ALTER TABLE "poll_choice" ADD CONSTRAINT "FKe4bah0tcpo1drb2htj5xbd4ot" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "poll_choice" ADD CONSTRAINT "FKn6jdbx874pprf4937vlffry5p" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "poll_mapping" ADD CONSTRAINT "FKn4ipghlegi5ckvcwv5sbq1df0" FOREIGN KEY ("poll_id") REFERENCES "polls" ("id");

ALTER TABLE "poll_response" ADD CONSTRAINT "FK71v708ysi932j1vqlkye7oet5" FOREIGN KEY ("poll_id") REFERENCES "polls" ("id");

ALTER TABLE "poll_response" ADD CONSTRAINT "FK7rl86cenysajjngjxkqb2jbic" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "poll_response" ADD CONSTRAINT "FKdgitr07rile9ma1gi6pug2kqh" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "poll_response" ADD CONSTRAINT "FKf204k70uknyjk8ag0t1jr95b1" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "program" ADD CONSTRAINT "FKhuivd8ihrqc6ic7sfsx0kycyi" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "program" ADD CONSTRAINT "FKi1732kjrifbwt2h3lsgbwwr1u" FOREIGN KEY ("manager_id") REFERENCES "users" ("id");

ALTER TABLE "program" ADD CONSTRAINT "FKn8vu9lf9okaov14gg274lv6h6" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "program_cash_reward" ADD CONSTRAINT "FKgc857ax7pp06tsdwrx53wid2j" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "program_cash_reward" ADD CONSTRAINT "FKjfa5qfa44ud7b6tsnocnb7mbg" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "program_cash_reward" ADD CONSTRAINT "FKpwtfq0vk08b3cth2r1y3c4u5y" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "program_reward" ADD CONSTRAINT "FKlov1r65wv65vq3jdtewln0pbu" FOREIGN KEY ("program_id") REFERENCES "program" ("id");

ALTER TABLE "program_task" ADD CONSTRAINT "FK2078xks8iam4stjlhpfp9dwjq" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "program_task" ADD CONSTRAINT "FKclk0pstokbo16ghrfymltgs24" FOREIGN KEY ("program_id") REFERENCES "program" ("id");

ALTER TABLE "program_task" ADD CONSTRAINT "FKk7gtn2vglrmd8raqu714y2de5" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "program_task" ADD CONSTRAINT "FKsxx0bunrs25v5shnjqnimjgod" FOREIGN KEY ("submitted_by") REFERENCES "users" ("id");

ALTER TABLE "program_task_attachment" ADD CONSTRAINT "FK37qqtc3xdfmrxvyp8s6y3aobg" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "program_task_attachment" ADD CONSTRAINT "FKmo7bwwh1oushtlcl3yrdrcr1v" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "program_task_attachment" ADD CONSTRAINT "FKopsqth5iy9d8hcoue25bigo2x" FOREIGN KEY ("programtask_id") REFERENCES "program_task" ("id");

ALTER TABLE "program_task_comment" ADD CONSTRAINT "FK3u0tf0tm4v4bn1givsuotjnbt" FOREIGN KEY ("programtask_id") REFERENCES "program_task" ("id");

ALTER TABLE "program_task_comment" ADD CONSTRAINT "FKq7urepa2c8yho9qvsf2kr7vw9" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "program_task_comment" ADD CONSTRAINT "FKqym5v5r39lv46gp76y70b2y66" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "program_task_reward" ADD CONSTRAINT "FK3htue8yita7ufc2c92dh0qef8" FOREIGN KEY ("programtask_id") REFERENCES "program_task" ("id");

ALTER TABLE "program_task_user" ADD CONSTRAINT "FKlh4ld1cbqdco3keu8hh0sfy4x" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "program_task_user" ADD CONSTRAINT "FKnufbsp7fgpy4ms25lci4f32i2" FOREIGN KEY ("programtask_id") REFERENCES "program_task" ("id");

ALTER TABLE "program_user" ADD CONSTRAINT "FK3r5a5qbwejioy0h2cpo6vlk5f" FOREIGN KEY ("program_id") REFERENCES "program" ("id");

ALTER TABLE "program_user" ADD CONSTRAINT "FK77py95vpm4na8gb82n70vbs5p" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "refreshtoken" ADD CONSTRAINT "FKa652xrdji49m4isx38pp4p80p" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "reward" ADD CONSTRAINT "FK25t68w7625gtp6sqmfb98k860" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "reward" ADD CONSTRAINT "FKb66njibfqyeq1lj33vycr0y56" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "reward" ADD CONSTRAINT "FKkvvfd3ojluedwt88erpwwb9en" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "reward_hash_tag" ADD CONSTRAINT "FK2r5orcbqr7ofq4hkrlndhxudb" FOREIGN KEY ("reward_id") REFERENCES "reward" ("id");

ALTER TABLE "reward_hash_tag" ADD CONSTRAINT "FKl4gth9idcf8kw15306lrokh4k" FOREIGN KEY ("hash_tag_id") REFERENCES "hashtag" ("id");

ALTER TABLE "role" ADD CONSTRAINT "FKqktgp5xuf8n0mwea8i6ddu4vw" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "role" ADD CONSTRAINT "FKrj6deb5a83r2ms9aes1mxu0ge" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "role_screen_mapping" ADD CONSTRAINT "FK1fnmvbsltmqmpxdg1vvqny4gf" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "role_screen_mapping" ADD CONSTRAINT "FKd1xsogrq4k539kprrt6vah6u1" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "role_screen_mapping" ADD CONSTRAINT "FKnxjkb2hed16d9o0ou661vk35h" FOREIGN KEY ("role_id") REFERENCES "role" ("id");

ALTER TABLE "scheduler" ADD CONSTRAINT "FKa7gilww5sfaiiyd5q7phof7g5" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "scheduler" ADD CONSTRAINT "FKlk92qhsf95uw1vdopqjjj4krs" FOREIGN KEY ("nominator_id") REFERENCES "users" ("id");

ALTER TABLE "scheduler" ADD CONSTRAINT "FKp9dnst8ls28xwuwcalc3u3e2b" FOREIGN KEY ("judge_id") REFERENCES "users" ("id");

ALTER TABLE "scheduler" ADD CONSTRAINT "FKryisv43l524n6wp2fr64me3ea" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "scheduler" ADD CONSTRAINT "FKtpd8onwjypecwxpmvlo5au1ji" FOREIGN KEY ("award_id") REFERENCES "award" ("id");

ALTER TABLE "schedule_setting" ADD CONSTRAINT "FK9yhwjv916eesbm3nap9hdfjbu" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "schedule_setting" ADD CONSTRAINT "FKd2qkiajrw08yfh9w4nofj3jo0" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "schedule_setting_schedule_messages" ADD CONSTRAINT "FK4g1l1w2b2c20exbodeu2enyf4" FOREIGN KEY ("schedule_setting_id") REFERENCES "schedule_setting" ("id");

ALTER TABLE "schedule_setting_schedule_messages" ADD CONSTRAINT "FKf6axtr6kpvor3uv0o09woaayk" FOREIGN KEY ("schedule_messages_id") REFERENCES "message" ("id");

ALTER TABLE "schedule_setting_schedule_templates" ADD CONSTRAINT "FK5r1dh4bbiyoonhjl2s11jma28" FOREIGN KEY ("schedule_templates_id") REFERENCES "template" ("id");

ALTER TABLE "schedule_setting_schedule_templates" ADD CONSTRAINT "FKj434towfia0p3sd4e335ne77" FOREIGN KEY ("schedule_setting_id") REFERENCES "schedule_setting" ("id");

ALTER TABLE "socialwall" ADD CONSTRAINT "FK1eobbo9v8cl38mks4jp7ikell" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "socialwall" ADD CONSTRAINT "FK9jojoo21jml8v8aivxvwp8d6" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "socialwall" ADD CONSTRAINT "FKfdm86gvgd5rfq34nqe55q889r" FOREIGN KEY ("reward_id") REFERENCES "reward" ("id");

ALTER TABLE "socialwallcomments" ADD CONSTRAINT "FK3ofsja2h906snjlmt7ccykcp1" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "socialwallcomments" ADD CONSTRAINT "FKi09i9qpcdxuefodics7xyfep" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "socialwallcomments" ADD CONSTRAINT "FKn66s2yud9apop6ndxagc9tha0" FOREIGN KEY ("social_wall") REFERENCES "socialwall" ("id");

ALTER TABLE "socialwallcomments" ADD CONSTRAINT "FKtetvi06c9ksofkw5w7n9i5l91" FOREIGN KEY ("parent_id") REFERENCES "socialwallcomments" ("id");

ALTER TABLE "social_wall_likepost" ADD CONSTRAINT "FKcbyqui420wgxap5kcfm3obsrx" FOREIGN KEY ("socialwall_id") REFERENCES "socialwall" ("id");

ALTER TABLE "social_wall_likepost" ADD CONSTRAINT "FKp8xoncet4l6t8465gmtn3fk9l" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "survey" ADD CONSTRAINT "FKd5rux4n7k4jgjlt3nn0olcu6k" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "survey" ADD CONSTRAINT "FKmr1kae2l3yvfr5fnaa9fu63ij" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "survey_important" ADD CONSTRAINT "FK1vqgvvw48xkpopv5ll75oq6hi" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "survey_important" ADD CONSTRAINT "FK9ju1hxm3gxkcdfcxrue2g8867" FOREIGN KEY ("survey_id") REFERENCES "survey" ("id");

ALTER TABLE "survey_mapping" ADD CONSTRAINT "FKlyft4fw7s79gtaj2kalrbtewn" FOREIGN KEY ("survey_id") REFERENCES "survey" ("id");

ALTER TABLE "survey_question" ADD CONSTRAINT "FK4on0qx9r7ovwpnkvxqa15rtob" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "survey_question" ADD CONSTRAINT "FK573vicrl6b0e4d2jdg3wpvuhy" FOREIGN KEY ("survey_id") REFERENCES "survey" ("id");

ALTER TABLE "survey_question" ADD CONSTRAINT "FKndaf9lgogmgl1oc2qxkl9d2rw" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "survey_question_bank" ADD CONSTRAINT "FKa2t7aa62tm9dh95uao9n10cq3" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "survey_question_bank" ADD CONSTRAINT "FKmhg3qhy8bwxh1ijrsfnn4kcvs" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "survey_response" ADD CONSTRAINT "FK3fdv8xj6rp9yjr17snmhrsph5" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "survey_response" ADD CONSTRAINT "FK84qtox6878n0fh337ent4mwgo" FOREIGN KEY ("survey_id") REFERENCES "survey" ("id");

ALTER TABLE "survey_response" ADD CONSTRAINT "FKf1irm9doka77hxalur6ox86wt" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "survey_response" ADD CONSTRAINT "FKhxqwhoq7rb4jqbi0oxkf1o6b0" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "survey_response_item" ADD CONSTRAINT "FKc4q3d48mao4e3fclhon8g1x39" FOREIGN KEY ("question_id") REFERENCES "survey_question" ("id");

ALTER TABLE "survey_response_item" ADD CONSTRAINT "FKda9yxwqxre7g9u08fo4y910ud" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "survey_response_item" ADD CONSTRAINT "FKi8lftwy016hw3risyaxkt7g1p" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "survey_response_item" ADD CONSTRAINT "FKr7rf7wi5eble1jrr63jqntk0p" FOREIGN KEY ("survey_response") REFERENCES "survey_response" ("id");

ALTER TABLE "template" ADD CONSTRAINT "FKb9l5iu7uf0pk5y0arvy771q1m" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "template" ADD CONSTRAINT "FKi8ikdyh2g3oe5f1on8oh4y7s5" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "users" ADD CONSTRAINT "FK4qu1gr772nnf6ve5af002rwya" FOREIGN KEY ("role_id") REFERENCES "role" ("id");

ALTER TABLE "users" ADD CONSTRAINT "FK5p1ci5btqfwvtaqx5n2wxi182" FOREIGN KEY ("manager_id") REFERENCES "users" ("id");

ALTER TABLE "users" ADD CONSTRAINT "FKfi832e3qv89fq376fuh8920y4" FOREIGN KEY ("department_id") REFERENCES "department" ("id");

ALTER TABLE "user_badges" ADD CONSTRAINT "FK28133xsiuou4s9xjxrbih88ml" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

ALTER TABLE "user_badges" ADD CONSTRAINT "FK9o8agkpfrw50l2srf6af0r9ft" FOREIGN KEY ("given_by") REFERENCES "users" ("id");

ALTER TABLE "user_badges" ADD CONSTRAINT "FKaib8s38oirddbspec1m93ps4j" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "user_badges" ADD CONSTRAINT "FKm6s10gyhh96irpj92csb6yoia" FOREIGN KEY ("badge_id") REFERENCES "badge" ("id");

ALTER TABLE "user_badges" ADD CONSTRAINT "FKr46ah81sjymsn035m4ojstn5s" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_badges_hash_tag" ADD CONSTRAINT "FK229qf62bnv1quqlebo4ol4nri" FOREIGN KEY ("hash_tag_id") REFERENCES "hashtag" ("id");

ALTER TABLE "user_badges_hash_tag" ADD CONSTRAINT "FK677utk0pgew2tq8dcefpw3b7u" FOREIGN KEY ("user_badges_id") REFERENCES "user_badges" ("id");

ALTER TABLE "user_certificate" ADD CONSTRAINT "FK1c2o2kfhyflgx82xpphlg286p" FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "user_certificate" ADD CONSTRAINT "FKlmw4h71w4kn4i4yvg7mnr173x" FOREIGN KEY ("given_by") REFERENCES "users" ("id");

ALTER TABLE "user_certificate" ADD CONSTRAINT "FKp30plgq2yr5tclgxr3fjoa566" FOREIGN KEY ("created_by") REFERENCES "users" ("id");

ALTER TABLE "user_certificate" ADD CONSTRAINT "FKslh00axaasc0kid27uypjiiov" FOREIGN KEY ("certificate_id") REFERENCES "certificate" ("id");

ALTER TABLE "user_certificate" ADD CONSTRAINT "FKyd196recsw7ecdcssps8xrik" FOREIGN KEY ("updated_by") REFERENCES "users" ("id");

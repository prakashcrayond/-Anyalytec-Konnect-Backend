/*
  Warnings:

  - You are about to drop the column `pic_name` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `sig_name` on the `users` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "pic_name",
DROP COLUMN "sig_name",
ADD COLUMN     "profile_pic" VARCHAR,
ADD COLUMN     "sign_pic" VARCHAR;

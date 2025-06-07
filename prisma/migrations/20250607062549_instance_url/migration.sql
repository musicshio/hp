/*
  Warnings:

  - Added the required column `url` to the `Instance` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Instance"
    ADD COLUMN "url" TEXT NOT NULL DEFAULT '';
ALTER TABLE "Instance"
    ALTER COLUMN "url" DROP DEFAULT;

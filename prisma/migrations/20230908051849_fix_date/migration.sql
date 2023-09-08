/*
  Warnings:

  - You are about to drop the column `updated_at` on the `Occupation` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Occupation" DROP COLUMN "updated_at",
ALTER COLUMN "created_at" DROP DEFAULT,
ALTER COLUMN "created_at" SET DATA TYPE TEXT;

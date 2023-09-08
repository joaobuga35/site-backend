/*
  Warnings:

  - Added the required column `image` to the `Occupation` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Occupation" ADD COLUMN     "image" TEXT NOT NULL;

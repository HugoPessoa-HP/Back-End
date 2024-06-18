/*
  Warnings:

  - Added the required column `categoria` to the `plantas` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `plantas` ADD COLUMN `categoria` VARCHAR(191) NOT NULL;

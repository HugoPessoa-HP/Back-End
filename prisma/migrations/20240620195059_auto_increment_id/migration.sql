/*
  Warnings:

  - Added the required column `description` to the `trails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `group_of_occurrences` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT;

-- AlterTable
ALTER TABLE `trails` ADD COLUMN `description` VARCHAR(191) NOT NULL;

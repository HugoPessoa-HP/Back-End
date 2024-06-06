/*
  Warnings:

  - You are about to drop the column `trilha_id` on the `plantas` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX `plantas_trilha_id_fkey` ON `plantas`;

-- AlterTable
ALTER TABLE `plantas` DROP COLUMN `trilha_id`;

/*
  Warnings:

  - You are about to drop the `group_of_ocurrences` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `group_of_ocurrences` DROP FOREIGN KEY `group_of_ocurrences_id_Plant_fkey`;

-- DropForeignKey
ALTER TABLE `group_of_ocurrences` DROP FOREIGN KEY `group_of_ocurrences_id_Trail_fkey`;

-- DropForeignKey
ALTER TABLE `occurrences` DROP FOREIGN KEY `occurrences_id_gp_occurrence_fkey`;

-- DropTable
DROP TABLE `group_of_ocurrences`;

-- CreateTable
CREATE TABLE `group_of_occurrences` (
    `id` INTEGER NOT NULL,
    `id_Plant` INTEGER NOT NULL,
    `id_Trail` INTEGER NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `family` VARCHAR(191) NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `habit` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `group_of_occurrences` ADD CONSTRAINT `group_of_occurrences_id_Plant_fkey` FOREIGN KEY (`id_Plant`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_of_occurrences` ADD CONSTRAINT `group_of_occurrences_id_Trail_fkey` FOREIGN KEY (`id_Trail`) REFERENCES `trails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `occurrences` ADD CONSTRAINT `occurrences_id_gp_occurrence_fkey` FOREIGN KEY (`id_gp_occurrence`) REFERENCES `group_of_occurrences`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

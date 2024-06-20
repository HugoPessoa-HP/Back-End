/*
  Warnings:

  - You are about to drop the `Class01` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Class02` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Class03` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Class04` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `cidades` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `estados` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `parques` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `pesquisadores` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `plantas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `trilhas` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `cidades` DROP FOREIGN KEY `cidades_estado_id_fkey`;

-- DropForeignKey
ALTER TABLE `parques` DROP FOREIGN KEY `parques_cidade_id_fkey`;

-- DropForeignKey
ALTER TABLE `trilhas` DROP FOREIGN KEY `trilhas_parque_id_fkey`;

-- DropTable
DROP TABLE `Class01`;

-- DropTable
DROP TABLE `Class02`;

-- DropTable
DROP TABLE `Class03`;

-- DropTable
DROP TABLE `Class04`;

-- DropTable
DROP TABLE `cidades`;

-- DropTable
DROP TABLE `estados`;

-- DropTable
DROP TABLE `parques`;

-- DropTable
DROP TABLE `pesquisadores`;

-- DropTable
DROP TABLE `plantas`;

-- DropTable
DROP TABLE `trilhas`;

-- CreateTable
CREATE TABLE `researchers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `password` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `locations` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Local` VARCHAR(191) NOT NULL,
    `state` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trails` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name_Trail` VARCHAR(191) NOT NULL,
    `reference1` VARCHAR(191) NOT NULL,
    `reference2` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `local_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plants` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `vernacular1` VARCHAR(191) NOT NULL,
    `vernacular2` VARCHAR(191) NOT NULL,
    `vernacular3` VARCHAR(191) NOT NULL,
    `name_Scientific` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_of_ocurrences` (
    `id` INTEGER NOT NULL,
    `id_Plant` INTEGER NOT NULL,
    `id_Trail` INTEGER NOT NULL,
    `category` VARCHAR(191) NOT NULL,
    `family` VARCHAR(191) NOT NULL,
    `origin` VARCHAR(191) NOT NULL,
    `habit` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `occurrences` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_gp_occurrence` INTEGER NOT NULL,
    `banner` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `class01` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `class` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `class02` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_class01` INTEGER NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `class03` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_class02` INTEGER NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `class04` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `id_class03` INTEGER NOT NULL,
    `class` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `trails` ADD CONSTRAINT `trails_local_id_fkey` FOREIGN KEY (`local_id`) REFERENCES `locations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_of_ocurrences` ADD CONSTRAINT `group_of_ocurrences_id_Plant_fkey` FOREIGN KEY (`id_Plant`) REFERENCES `plants`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `group_of_ocurrences` ADD CONSTRAINT `group_of_ocurrences_id_Trail_fkey` FOREIGN KEY (`id_Trail`) REFERENCES `trails`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `occurrences` ADD CONSTRAINT `occurrences_id_gp_occurrence_fkey` FOREIGN KEY (`id_gp_occurrence`) REFERENCES `group_of_ocurrences`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `class02` ADD CONSTRAINT `class02_id_class01_fkey` FOREIGN KEY (`id_class01`) REFERENCES `class01`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `class03` ADD CONSTRAINT `class03_id_class02_fkey` FOREIGN KEY (`id_class02`) REFERENCES `class02`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `class04` ADD CONSTRAINT `class04_id_class03_fkey` FOREIGN KEY (`id_class03`) REFERENCES `class03`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

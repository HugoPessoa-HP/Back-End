/*
  Warnings:

  - The primary key for the `Class01` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `Class02` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `cidades` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `estados` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `parques` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `plantas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `trilhas` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `cidades` DROP FOREIGN KEY `cidades_estado_id_fkey`;

-- DropForeignKey
ALTER TABLE `parques` DROP FOREIGN KEY `parques_cidade_id_fkey`;

-- DropForeignKey
ALTER TABLE `plantas` DROP FOREIGN KEY `plantas_trilha_id_fkey`;

-- DropForeignKey
ALTER TABLE `trilhas` DROP FOREIGN KEY `trilhas_parque_id_fkey`;

-- AlterTable
ALTER TABLE `Class01` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `Class02` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `cidades` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `estado_id` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `estados` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `parques` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `cidade_id` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `plantas` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `trilha_id` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `trilhas` DROP PRIMARY KEY,
    MODIFY `id` BIGINT NOT NULL AUTO_INCREMENT,
    MODIFY `parque_id` BIGINT NOT NULL,
    ADD PRIMARY KEY (`id`);

-- CreateTable
CREATE TABLE `Class03` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `class` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Class04` (
    `id` BIGINT NOT NULL AUTO_INCREMENT,
    `class` VARCHAR(191) NOT NULL,
    `info` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cidades` ADD CONSTRAINT `cidades_estado_id_fkey` FOREIGN KEY (`estado_id`) REFERENCES `estados`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `parques` ADD CONSTRAINT `parques_cidade_id_fkey` FOREIGN KEY (`cidade_id`) REFERENCES `cidades`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `trilhas` ADD CONSTRAINT `trilhas_parque_id_fkey` FOREIGN KEY (`parque_id`) REFERENCES `parques`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `plantas` ADD CONSTRAINT `plantas_trilha_id_fkey` FOREIGN KEY (`trilha_id`) REFERENCES `trilhas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

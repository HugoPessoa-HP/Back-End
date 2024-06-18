/*
  Warnings:

  - The primary key for the `pesquisadores` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `pesquisadores` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - The primary key for the `plantas` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to alter the column `id` on the `plantas` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to drop the `locais` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `ocorrencias` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `trilha_id` to the `plantas` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ocorrencias` DROP FOREIGN KEY `ocorrencias_local_id_fkey`;

-- DropForeignKey
ALTER TABLE `ocorrencias` DROP FOREIGN KEY `ocorrencias_pesquisador_id_fkey`;

-- DropForeignKey
ALTER TABLE `ocorrencias` DROP FOREIGN KEY `ocorrencias_planta_id_fkey`;

-- AlterTable
ALTER TABLE `pesquisadores` DROP PRIMARY KEY,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `plantas` DROP PRIMARY KEY,
    ADD COLUMN `trilha_id` INTEGER NOT NULL,
    MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- DropTable
DROP TABLE `locais`;

-- DropTable
DROP TABLE `ocorrencias`;

-- CreateTable
CREATE TABLE `estados` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_Estado` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `cidades` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_Cidade` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `estado_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `parques` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_Parque` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `cidade_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `trilhas` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome_Trilha` VARCHAR(191) NOT NULL,
    `referencia1` VARCHAR(191) NOT NULL,
    `referencia2` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `parque_id` INTEGER NOT NULL,

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

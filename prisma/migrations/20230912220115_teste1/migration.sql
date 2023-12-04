-- CreateTable
CREATE TABLE `pesquisadores` (
    `id` VARCHAR(191) NOT NULL,
    `cpf` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `locais` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `estado` VARCHAR(191) NOT NULL,
    `cidade` VARCHAR(191) NOT NULL,
    `referencia1` VARCHAR(191) NOT NULL,
    `referencia2` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `plantas` (
    `id` VARCHAR(191) NOT NULL,
    `vernaculo1` VARCHAR(191) NOT NULL,
    `vernaculo2` VARCHAR(191) NOT NULL,
    `vernaculo3` VARCHAR(191) NOT NULL,
    `nome_Cientifico` VARCHAR(191) NOT NULL,
    `familia` VARCHAR(191) NOT NULL,
    `origem` VARCHAR(191) NOT NULL,
    `habito` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ocorrencias` (
    `id` VARCHAR(191) NOT NULL,
    `long` DOUBLE NOT NULL,
    `lat` DOUBLE NOT NULL,
    `gps` INTEGER NOT NULL,
    `status` BOOLEAN NOT NULL,
    `pesquisador_id` VARCHAR(191) NOT NULL,
    `planta_id` VARCHAR(191) NOT NULL,
    `local_id` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ocorrencias` ADD CONSTRAINT `ocorrencias_pesquisador_id_fkey` FOREIGN KEY (`pesquisador_id`) REFERENCES `pesquisadores`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ocorrencias` ADD CONSTRAINT `ocorrencias_planta_id_fkey` FOREIGN KEY (`planta_id`) REFERENCES `plantas`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ocorrencias` ADD CONSTRAINT `ocorrencias_local_id_fkey` FOREIGN KEY (`local_id`) REFERENCES `locais`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

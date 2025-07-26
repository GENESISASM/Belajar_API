/*
  Warnings:

  - You are about to drop the `Biodata` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `Biodata`;

-- CreateTable
CREATE TABLE `biodata` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nama` VARCHAR(191) NOT NULL,
    `jurusan` VARCHAR(191) NOT NULL,
    `hobi` VARCHAR(191) NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

/*
  Warnings:

  - You are about to drop the column `email` on the `Paciente` table. All the data in the column will be lost.
  - Added the required column `dataNascimento` to the `Paciente` table without a default value. This is not possible if the table is not empty.
  - Added the required column `endereco` to the `Paciente` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Paciente_email_key";

-- AlterTable
ALTER TABLE "Paciente" DROP COLUMN "email",
ADD COLUMN     "dataNascimento" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "endereco" TEXT NOT NULL;

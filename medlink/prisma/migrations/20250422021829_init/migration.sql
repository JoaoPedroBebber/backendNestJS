/*
  Warnings:

  - You are about to drop the column `data` on the `Consulta` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `Medico` table. All the data in the column will be lost.
  - Added the required column `dataHora` to the `Consulta` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX "Medico_email_key";

-- AlterTable
ALTER TABLE "Consulta" DROP COLUMN "data",
ADD COLUMN     "dataHora" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "Medico" DROP COLUMN "email";

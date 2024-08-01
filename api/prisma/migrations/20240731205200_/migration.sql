/*
  Warnings:

  - You are about to drop the column `dateTime` on the `Query` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `Employee` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Employee" ADD COLUMN     "companyId" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Query" DROP COLUMN "dateTime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;

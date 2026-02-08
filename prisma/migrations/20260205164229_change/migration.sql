-- DropIndex
DROP INDEX "specialties_title_key";

-- AlterTable
ALTER TABLE "specialties" ALTER COLUMN "title" SET DATA TYPE TEXT;

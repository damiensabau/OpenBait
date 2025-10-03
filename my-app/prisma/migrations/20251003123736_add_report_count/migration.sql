-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_cases" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "companyName" TEXT NOT NULL,
    "productName" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "licenseInitial" TEXT NOT NULL,
    "licenseFinal" TEXT NOT NULL,
    "changeDate" TEXT NOT NULL,
    "website" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "legalAnalysis" TEXT NOT NULL,
    "communityReaction" TEXT NOT NULL,
    "sources" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'PENDING',
    "reportCount" INTEGER NOT NULL DEFAULT 1,
    "reporterId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "cases_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_cases" ("category", "changeDate", "communityReaction", "companyName", "createdAt", "description", "id", "legalAnalysis", "licenseFinal", "licenseInitial", "productName", "reporterId", "sources", "status", "updatedAt", "website") SELECT "category", "changeDate", "communityReaction", "companyName", "createdAt", "description", "id", "legalAnalysis", "licenseFinal", "licenseInitial", "productName", "reporterId", "sources", "status", "updatedAt", "website" FROM "cases";
DROP TABLE "cases";
ALTER TABLE "new_cases" RENAME TO "cases";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;

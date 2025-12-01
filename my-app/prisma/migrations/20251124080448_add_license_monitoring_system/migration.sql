-- CreateTable
CREATE TABLE "notifications" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "message" TEXT NOT NULL,
    "link" TEXT,
    "isRead" BOOLEAN NOT NULL DEFAULT false,
    "metadata" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "notifications_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "watched_repositories" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "owner" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "platform" TEXT NOT NULL DEFAULT 'github',
    "url" TEXT NOT NULL,
    "isActive" BOOLEAN NOT NULL DEFAULT true,
    "priority" TEXT NOT NULL DEFAULT 'medium',
    "lastChecked" DATETIME,
    "currentLicense" TEXT,
    "stars" INTEGER,
    "description" TEXT,
    "addedBy" TEXT,
    "notes" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "license_changes" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "repoId" TEXT NOT NULL,
    "oldLicense" TEXT,
    "newLicense" TEXT,
    "changeType" TEXT NOT NULL,
    "severity" TEXT NOT NULL DEFAULT 'WARNING',
    "detectedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "detectionMethod" TEXT NOT NULL,
    "commitSha" TEXT,
    "commitUrl" TEXT,
    "commitDate" DATETIME,
    "commitAuthor" TEXT,
    "status" TEXT NOT NULL DEFAULT 'detected',
    "reviewedAt" DATETIME,
    "reviewedBy" TEXT,
    "caseId" TEXT,
    "confidence" REAL NOT NULL DEFAULT 1.0,
    "sources" TEXT,
    "notes" TEXT,
    "metadata" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "license_changes_repoId_fkey" FOREIGN KEY ("repoId") REFERENCES "watched_repositories" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "monitoring_logs" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "targetType" TEXT NOT NULL,
    "targetId" TEXT,
    "targetName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "changesFound" INTEGER NOT NULL DEFAULT 0,
    "errorMessage" TEXT,
    "duration" INTEGER,
    "executedAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "metadata" TEXT
);

-- CreateIndex
CREATE INDEX "notifications_userId_isRead_idx" ON "notifications"("userId", "isRead");

-- CreateIndex
CREATE INDEX "notifications_userId_createdAt_idx" ON "notifications"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "watched_repositories_isActive_lastChecked_idx" ON "watched_repositories"("isActive", "lastChecked");

-- CreateIndex
CREATE UNIQUE INDEX "watched_repositories_platform_owner_name_key" ON "watched_repositories"("platform", "owner", "name");

-- CreateIndex
CREATE INDEX "license_changes_status_severity_idx" ON "license_changes"("status", "severity");

-- CreateIndex
CREATE INDEX "license_changes_detectedAt_idx" ON "license_changes"("detectedAt");

-- CreateIndex
CREATE INDEX "license_changes_repoId_detectedAt_idx" ON "license_changes"("repoId", "detectedAt");

-- CreateIndex
CREATE INDEX "monitoring_logs_executedAt_idx" ON "monitoring_logs"("executedAt");

-- CreateIndex
CREATE INDEX "monitoring_logs_targetType_status_idx" ON "monitoring_logs"("targetType", "status");

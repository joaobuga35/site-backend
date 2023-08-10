-- CreateTable
CREATE TABLE "Occupation" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL,
    "office" TEXT NOT NULL,
    "linkedin" TEXT,
    "discord" TEXT,
    "created_at" TIMESTAMP(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(6) NOT NULL,

    CONSTRAINT "Occupation_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Users" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "bio" TEXT
);

-- CreateTable
CREATE TABLE "Posts" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "featuredImage" TEXT NOT NULL,
    "author_id" TEXT NOT NULL,
    CONSTRAINT "Posts_author_id_fkey" FOREIGN KEY ("author_id") REFERENCES "Users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

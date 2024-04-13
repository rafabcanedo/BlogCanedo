model Post {
  id         String    @id @default(auto()) @map("_id") @db.ObjectId
  title      String
  content    String
  created_at DateTime? @default(now())
  update_at  DateTime? @default(now())
  User       User[]

  @@map("posts")
}

model User {
  id               String    @id @default(auto()) @map("_id") @db.ObjectId
  name             String
  email            String
  phone            Int
  password         String
  confirm_password String
  created_at       DateTime? @default(now()) @map("created_at")
  updated_at       DateTime? @default(now()) @map("updated_at")
  postId           String    @map("post_id") @db.ObjectId

  post Post @relation(fields: [postId], references: [id])

  @@unique([postId, email])
  @@map("users")
}
const mongoose = require("mongoose");
const User = require("../backend/models/User");
const Document = require("../backend/models/Document");

async function seedDatabase() {
  await mongoose.connect(process.env.MONGODB_URI);
  
  // Create test user
  const user = await User.create({
    username: "testuser",
    password: "testpassword123"
  });

  // Create sample document
  await Document.create({
    type: "nda",
    content: "Sample NDA content...",
    user: user._id
  });

  console.log("Database seeded successfully");
  process.exit(0);
}

seedDatabase().catch(console.error);
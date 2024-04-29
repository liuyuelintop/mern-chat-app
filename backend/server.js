import app from "./app.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server running on port ${PORT}`);
});

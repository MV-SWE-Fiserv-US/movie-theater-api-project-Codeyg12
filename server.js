const express = require("express");
const PORT = 3000;
const app = express();
const { showRoutes, userRoutes } = require("./routes");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/users", userRoutes);
app.use("/shows", showRoutes);

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Internal Server Error";
  res.status(status).json({ error: message });
});

app.listen(PORT, () => {
  console.log(`Listening at http://localhost:${PORT}`);
});
